// import the Media class:
const Media = require("./Media");

// create your Music class:
class Music extends Media {
  static shortestAlbum(Music) {
    let shortest = Music[0].length;
    for (let i = 0; i < Music.length; i++) {
      if (Music[i].length <= shortest) {
        shortest = Music[i].length;
      }
    }

    for (let i = 0; i < Music.length; i++) {
      if (Music[i].length === shortest) {
        return Music[i];
      }
    }
  }

  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }

  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length}`;
  }
}
// don't change below
module.exports = Music;
