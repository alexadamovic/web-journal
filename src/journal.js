export function Journal() {
  this.entries = {};
}

Journal.prototype.addEntry = function (entry) {
  this.entries[entry.title] = entry;
};

export function JournalEntry(title, body) {
  this.title = title;
  this.body = body;
}

JournalEntry.prototype.wordCounter = function () {
  const words = this.body.split(' ');
  return words.length;
};

JournalEntry.prototype.vowelCounter = function () {
  const letters = this.body.replace(/[%#$@,.!? ]/g,"").split('');
  console.log(letters);
  let vowelCount = 0;
  let consCount = 0;
  letters.forEach(function(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      vowelCount += 1;
    } else {
      consCount += 1;
    }
  });
  let countArray = [vowelCount, consCount];
  return countArray;
};

JournalEntry.prototype.teaser = function() {
  let words = this.body.split(" ");
  let teaser = [];
  for (let i = 0; i <= 8; i++) {
    if (words[i].includes(".")) {
      teaser.push(words[i]);
      return teaser.join(" ");
    } else {
      teaser.push(words[i]);
    }
  }
  return teaser.join(" ");
}
