// import the Media class:
const Media = require("./Media");

// create your Movie class:
class Movie extends Media {
  static longestMovie(Movie) {
    let longest = 0;
    for (let i = 0; i < Movie.length; i++) {
      if (Movie[i].duration > longest) {
        longest = Movie[i].duration;
      }
    }

    for (let i = 0; i < Movie.length; i++) {
      if (Movie[i].duration === longest) {
        return Movie[i];
      }
    }
  }
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.rating = rating;
    this.duration = duration;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`;
  }
}
// don't change below
module.exports = Movie;
