// Import classes here to console.log and debug
const Media = require("./classes/Media");
const Movie = require("./classes/Movie");
const Book = require("./classes/Book");
const Music = require("./classes/Music");

//
// Media
//
// const book = new Media("The Catcher in the Rye", 1951, "Fiction");
// console.log(Media.totalMediaCount); // 1
// const music = new Media("Abbey Road", 1969, "Rock");
// console.log(Media.totalMediaCount); // 2
// console.log(music.summary());

//
// Movie
//
// const movie1 = new Movie(
//   "Inception",
//   2010,
//   "Sci-Fi",
//   "Christopher Nolan",
//   148,
//   4.5
// );
// const movie2 = new Movie(
//   "The Godfather",
//   1972,
//   "Crime",
//   "Francis Ford Coppola",
//   175,
//   4.7
// );
// console.log(Media.totalMediaCount); // 2
// console.log(movie1.summary()); // "Title: Inception, Director: Christopher Nolan, Year: 2010, Genre: Sci-Fi, Rating: 4.5"
// console.log(Movie.longestMovie([movie1, movie2])); // Returns movie2

//
// Book
//
// const book1 = new Book(
//   "To Kill a Mockingbird",
//   1960,
//   "Fiction",
//   "Harper Lee",
//   281,
//   4.4
// );
// console.log(Media.totalMediaCount); // 1
// const book2 = new Book(
//   "The Bluest Eye",
//   1970,
//   "Fiction",
//   "Toni Morrison",
//   206,
//   4.6
// );
// console.log(Media.totalMediaCount); // 2
// console.log(book1.summary()); // "Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960, Page Count: 281, Genre: Fiction, Rating: 4.4"
// console.log(Book.highestRating([book1, book2])); // Returns book2

//
// Movie
//

const music1 = new Music("Lemonade", 2016, "R&B", "Beyonce", "Lemonade", 3949);
const music2 = new Music(
  "Renaissance",
  2022,
  "R&B",
  "Beyonce",
  "Beyonce",
  3734
);
console.log(Media.totalMediaCount); // 2
console.log(music2.summary()); // "Title: Renaissance, Artist: Beyonce, Year: 2022, Genre: R&B, Length: 3734 seconds"
console.log(Music.shortestAlbum([music1, music2])); // Returns music2
