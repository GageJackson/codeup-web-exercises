(function () {
  "use strict";

  /**
   * TODO:
   * Create an object with firstName and lastName properties that are strings
   * with your first and last name. Store this object in a variable named
   * `person`.
   *
   * Example:
   *  > console.log(person.firstName) // "Rick"
   *  > console.log(person.lastName) // "Sanchez"
   */
  let person = {
    firstName: "Gage",
    lastName: "Jackson",
  };
  /**
   * TODO:
   * Add a sayHello method to the person object that returns a greeting using
   * the firstName and lastName properties.
   * console.log the returned message to check your work
   *
   * Example
   * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
   */
  function sayHello(person) {
    console.log("Hello from " + person.firstName + " " + person.lastName + "!");
  }
  sayHello(person);
  /** TODO:
   * HEB has an offer for the shoppers that buy products amounting to
   * more than $200. If a shopper spends more than $200, they get a 12%
   * discount. Write a JS program, using conditionals, that logs to the
   * browser, how much Ryan, Cameron and George need to pay. We know that
   * Cameron bought $180, Ryan $250 and George $320. Your program will have to
   * display a line with the name of the person, the amount before the
   * discount, the discount, if any, and the amount after the discount.
   *
   * Uncomment the lines below to create an array of objects where each object
   * represents one shopper. Use a foreach loop to iterate through the array,
   * and console.log the relevant messages for each person
   */

  var shoppers = [
    { name: "Cameron", amount: 180 },
    { name: "Ryan", amount: 250 },
    { name: "George", amount: 320 },
  ];
  shoppers.forEach(function (shopper) {
    hebOfferChecker(shopper);
  });
  function hebOfferChecker(person) {
    console.log(person.name + " has spent $" + person.amount);

    let offerThreshold = 200;

    if (person.amount >= offerThreshold) {
      applyOffer(person);
    } else {
      denyOffer(person, offerThreshold);
    }
  }
  function applyOffer(person) {
    let offerDiscount = 0.12;
    let discountAmount = person.amount * offerDiscount;
    let totalCost = person.amount - discountAmount;
    console.log(
      person.name +
        " qualifies for the discount and will save $" +
        discountAmount
    );
    console.log(
      person.name + "'s total bill after the discount is $" + totalCost
    );
  }
  function denyOffer(person, offerThreshold) {
    let amountLeftUntilDiscount = offerThreshold - person.amount;
    let totalCost = person.amount;
    console.log(person.name + " doesn't qualify for the discount");
    console.log(
      person.name +
        " still needs to spend $" +
        amountLeftUntilDiscount +
        " in order to be eligible for the discount"
    );
    console.log(
      person.name + "'s total bill without the discount is $" + totalCost
    );
  }

  /** TODO:
   * Create an array of objects that represent books and store it in a
   * variable named `books`. Each object should have a title and an author
   * property. The author property should be an object with properties
   * `firstName` and `lastName`. Be creative and add at least 5 books to the
   * array
   *
   * Example:
   * > console.log(books[0].title) // "The Salmon of Doubt"
   * > console.log(books[0].author.firstName) // "Douglas"
   * > console.log(books[0].author.lastName) // "Adams"
   */
  let books = [
    {
      title: "Name of the Wind",
      author: {
        firstName: "Patrick",
        lastName: "Rothfuss",
      },
    },
    {
      title: "Eye of the World",
      author: {
        firstName: "Robert",
        lastName: "Jordan",
      },
    },
    {
      title: "Mistborn",
      author: {
        firstName: "Brandon",
        lastName: "Sanderson",
      },
    },
    {
      title: "Ready Player One",
      author: {
        firstName: "Ernest",
        lastName: "Cline",
      },
    },
    {
      title: "The Magicians",
      author: {
        firstName: "Lev",
        lastName: "Grossman",
      },
    },
  ];
  /**
   * TODO:
   * Loop through the books array and output the following information about
   * each book:
   * - the book number (use the index of the book in the array)
   * - the book title
   * - author's full name (first name + last name)
   *
   * Example Console Output:
   *
   *      Book # 1
   *      Title: The Salmon of Doubt
   *      Author: Douglas Adams
   *      ---
   *      Book # 2
   *      Title: Walkaway
   *      Author: Cory Doctorow
   *      ---
   *      Book # 3
   *      Title: A Brief History of Time
   *      Author: Stephen Hawking
   *      ---
   *      ...
   */
  function bookReader(books) {
    let bookNumber = 0;
    books.forEach(function (book) {
      bookNumber++;
      console.log("Book #" + bookNumber);
      console.log("Title: " + book.title);
      console.log(
        "Author: " + book.author.firstName + " " + book.author.lastName
      );
      console.log("---");
    });
  }
  bookReader(books);
  /**
   * Bonus:
   * - Create a function named `createBook` that accepts a title and author
   *   name and returns a book object with the properties described
   *   previously. Refactor your code that creates the books array to instead
   *   use your function.
   * - Create a function named `showBookInfo` that accepts a book object and
   *   outputs the information described above. Refactor your loop to use your
   *   `showBookInfo` function.
   */
  function createBook() {
    let newBook = {
      title: "",
      author: {
        firstName: "",
        lastName: "",
      },
    };
    let newBookTitle = prompt(
      "Give me the title for your favorite book!",
      "Pet Semetary"
    );
    let newBookAuthor = prompt(
      "Who is the author for this book?",
      "Steven King"
    );
    let authorArray = newBookAuthor.split(" ");
    newBook.title = newBookTitle;
    newBook.author.firstName = authorArray[0];
    newBook.author.lastName = authorArray[1];
    console.log(newBook);
    return newBook;
  }
  function addBookToLibrary() {
    //let myLibrary = [];
    let wouldLikeToAddBook = true;
    do {
      wouldLikeToAddBook = confirm(
        "Would you like to add a book to my library?"
      );
      if (wouldLikeToAddBook) {
        books.push(createBook());
      }
    } while (wouldLikeToAddBook);

    bookReader(books);
  }
  addBookToLibrary();
})();
