'use strict';

import fs from 'fs';
import ejs from 'ejs';
import spec from '../src/style-spec/reference/v8.json';
import Color from '../src/style-spec/util/color.js';

global.camelize = function (str) {
    return str.replace(/(?:^|-)(.)/g, function (_, x) {
        return x.toUpperCase();
    });
};

global.camelizeWithLeadingLowercase = function (str) {
    return str.replace(/-(.)/g, function (_, x) {
      return x.toUpperCase();
    });
};

global.flowType = function (property) {
    switch (property.type) {
        case 'boolean':
            return 'boolean';
        case 'number':
            return 'number';
        case 'string':
            return 'string';
        case 'enum':
            return Object.keys(property.values).map(JSON.stringify).join(' | ');
        case 'color':
            return `Color`;
        case 'formatted':
            return `Formatted`;
        case 'resolvedImage':
            return `${property.name.endsWith('pattern') ? '?' : ''}ResolvedImage`;
        case 'array':
            if (property.length) {
                return `[${new Array(property.length).fill(flowType({type: property.value})).join(', ')}]`;
            } else {
                return `${property.name === 'line-dasharray' ? '?' : ''}Array<${flowType({type: property.value, values: property.values})}>`;
            }
        default: throw new Error(`unknown type for ${property.name}`)
    }
};

global.propertyType = function (property) {
    switch (property['property-type']) {
        case 'data-driven':
            return `DataDrivenProperty<${flowType(property)}>`;
        case 'color-ramp':
            return `ColorRampProperty`;
        case 'data-constant':
        case 'constant':
            return `DataConstantProperty<${flowType(property)}>`;
        default:
            throw new Error(`unknown property-type "${property['property-type']}" for ${property.name}`);
    }
};

global.runtimeType = function (property) {
    switch (property.type) {
        case 'boolean':
            return 'BooleanType';
        case 'number':
            return 'NumberType';
        case 'string':
        case 'enum':
            return 'StringType';
        case 'color':
            return `ColorType`;
        case 'formatted':
            return `FormattedType`;
        case 'Image':
            return `ImageType`;
        case 'array':
            if (property.length) {
                return `array(${runtimeType({type: property.value})}, ${property.length})`;
            } else {
                return `array(${runtimeType({type: property.value})})`;
            }
        default: throw new Error(`unknown type for ${property.name}`)
    }
};

global.defaultValue = function (property) {
    switch (property.type) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'array':
        case 'enum':
            return JSON.stringify(property.default);
        case 'color':
            if (typeof property.default !== 'string') {
                return JSON.stringify(property.default);
            } else {
                const {r, g, b, a} = Color.parse(property.default);
                return `new Color(${r}, ${g}, ${b}, ${a})`;
            }
        default: throw new Error(`unknown type for ${property.name}`)
    }
};

global.overrides = function (property) {
    return `{ runtimeType: ${runtimeType(property)}, getOverride: (o) => o.${camelizeWithLeadingLowercase(property.name)}, hasOverride: (o) => !!o.${camelizeWithLeadingLowercase(property.name)} }`;
}

global.propertyValue = function (property, type) {
    switch (property['property-type']) {
        case 'data-driven':
            if (property.overridable) {
                return `new DataDrivenProperty(styleSpec["${type}_${property.layerType}"]["${property.name}"], ${overrides(property)})`;
            } else {
                return `new DataDrivenProperty(styleSpec["${type}_${property.layerType}"]["${property.name}"])`;
            }
        case 'color-ramp':
            return `new ColorRampProperty(styleSpec["${type}_${property.layerType}"]["${property.name}"])`;
        case 'data-constant':
        case 'constant':
            return `new DataConstantProperty(styleSpec["${type}_${property.layerType}"]["${property.name}"])`;
        default:
            throw new Error(`unknown property-type "${property['property-type']}" for ${property.name}`);
    }
};

const propertiesJs = ejs.compile(fs.readFileSync('src/style/style_layer/layer_properties.js.ejs', 'utf8'), {strict: true});

const layers = Object.keys(spec.layer.type.values).map((type) => {
    const layoutProperties = Object.keys(spec[`layout_${type}`]).reduce((memo, name) => {
        if (name !== 'visibility') {
            spec[`layout_${type}`][name].name = name;
            spec[`layout_${type}`][name].layerType = type;
            memo.push(spec[`layout_${type}`][name]);
        }
        return memo;
    }, []);

    const paintProperties = Object.keys(spec[`paint_${type}`]).reduce((memo, name) => {
        spec[`paint_${type}`][name].name = name;
        spec[`paint_${type}`][name].layerType = type;
        memo.push(spec[`paint_${type}`][name]);
        return memo;
    }, []);

    return { type, layoutProperties, paintProperties };
});

for (const layer of layers) {
    fs.writeFileSync(`src/style/style_layer/${layer.type.replace('-', '_')}_style_layer_properties.js`, propertiesJs(layer))
}
