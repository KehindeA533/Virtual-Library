// Import classes here to console.log and debug
const Media = require("./classes/Media");

const book = new Media("The Catcher in the Rye", 1951, "Fiction");
console.log(Media.totalMediaCount); // 1
const music = new Media("Abbey Road", 1969, "Rock");
console.log(Media.totalMediaCount); // 2
console.log(music.summary());
