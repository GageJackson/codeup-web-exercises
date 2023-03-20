const people = [
  {
    id: 1,
    name: "ryan",
    email: "ryan@codeup.com",
    languages: ["clojure", "javascript"],
    yearsOfExperience: 5,
  },
  {
    id: 2,
    name: "luis",
    email: "luis@codeup.com",
    languages: ["java", "scala", "php"],
    yearsOfExperience: 6,
  },
  {
    id: 3,
    name: "zach",
    email: "zach@codeup.com",
    languages: ["javascript", "bash"],
    yearsOfExperience: 7,
  },
  {
    id: 4,
    name: "fernando",
    email: "fernando@codeup.com",
    languages: ["java", "php", "sql"],
    yearsOfExperience: 8,
  },
  {
    id: 5,
    name: "justin",
    email: "justin@codeup.com",
    languages: ["html", "css", "javascript", "php"],
    yearsOfExperience: 9,
  },
];

let threeLanguageClub = people.filter((user) => user.languages.length >= 3);
console.log(threeLanguageClub);

let userEmails = people.map((user) => user.email);
console.log(userEmails);

let yearsOfExperience = people.reduce((totalYears, person) => {
  return totalYears + person.yearsOfExperience;
}, 0);
console.log(`The users have a total experience of ${yearsOfExperience} years`);

let longestEmail = people.reduce((longEmail, person) => {
  if (longEmail.length <= person.email.length) {
    longEmail = person.email;
  }
  return longEmail;
}, "Text");
console.log(`The longest email is: ${longestEmail}.`);

let instructorList = people.reduce((list, person) => {
  return list + person.name + ", ";
}, "Your instructors are: ");
console.log(instructorList);

let uniqueLanguages = people.reduce((languageList, person) => {
  languageList = [...languageList, ...person.languages];
  console.log("-------------------------");
  console.log(languageList);

  return languageList.filter((language, index) => {
    console.log(`${language.toUpperCase()} is at index: ${index}`);

    //this is checking the first instance of a language
    //if the first instance of the language is at the current index
    //it will add the language to the list of languages
    //otherwise it will not return that language at that index
    return languageList.indexOf(language) === index;
  });
}, []);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  `List of known unique languages of all of the instructors are: ${uniqueLanguages.sort()}`
);

//huh?
let codeLine = [...new Set(people.flatMap((person) => person.languages))];
console.log(codeLine);
console.log(people.flatMap((person) => person.languages));
