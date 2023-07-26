// import the Media class:
const Media = require("./Media");

// create your Book class:
class Book extends Media {
  static highestRating(Book) {
    let highest = 0;
    for (let i = 0; i < Book.length; i++) {
      if (Book[i].rating > highest) {
        highest = Book[i].rating;
      }
    }

    for (let i = 0; i < Book.length; i++) {
      if (Book[i].rating === highest) {
        return Book[i];
      }
    }
  }

  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.rating = rating;
    this.numPages = numPages;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Genre: ${this.genre}, Page Count: ${this.numPages}, Rating: ${this.rating}`;
  }
}
// don't change below
module.exports = Book;
