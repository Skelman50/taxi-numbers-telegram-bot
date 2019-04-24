const { transliterate } = require('transliteration');

module.exports = function exceptions(city) {
  let cityInLatin = transliterate(city).toLocaleLowerCase();
  switch (city.toLocaleLowerCase()) {
    case 'черновцы':
      cityInLatin = 'chernovtsyi';
      return cityInLatin;
    case 'сумы':
      cityInLatin = 'sumyi';
      return cityInLatin;
    case 'хмельницкий':
      cityInLatin = 'hmelnitskiy';
      return cityInLatin;
    case 'луцк':
      cityInLatin = 'lutsk';
      return cityInLatin;
    case 'черкассы':
      cityInLatin = 'cherkassyi';
      return cityInLatin;
    case 'кропивницкий':
      cityInLatin = 'kropivnitskiy';
      return cityInLatin;
    default:
      return cityInLatin;
  }
};
