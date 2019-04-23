const { transliterate } = require('transliteration');

module.exports = function exceptions(city) {
  let cityInLatin = transliterate(city).toLocaleLowerCase();
  switch (city) {
    case 'черновцы':
      cityInLatin = 'chernovtsyi'.toLocaleLowerCase();
      return cityInLatin;
    case 'сумы':
      cityInLatin = 'sumyi'.toLocaleLowerCase();
      return cityInLatin;
    case 'хмельницкий':
      cityInLatin = 'hmelnitskiy'.toLocaleLowerCase();
      return cityInLatin;
    case 'луцк':
      cityInLatin = 'lutsk'.toLocaleLowerCase();
      return cityInLatin;
    case 'черкассы':
      cityInLatin = 'cherkassyi'.toLocaleLowerCase();
      return cityInLatin;
    case 'кропивницкий':
      cityInLatin = 'kropivnitskiy'.toLocaleLowerCase();
      return cityInLatin;
    default:
      return cityInLatin;
  }
};
