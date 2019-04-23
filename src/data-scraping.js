const regexNames = /т?акси/;
const regexNamesLatin = /t?axi/;
const regexRatings = /[0-9]/;
const regexPhones = /Минимальный/;
const regexPhneCode = /\([0-9]{3,5}\)$/;

let code = null;

class DataScraping {
  nameSraping(data, selector) {
    const outputNames = data.find(selector).text();
    const arrayNames = outputNames.split('\n');
    return arrayNames.filter(item => regexNames.test(item) || regexNamesLatin.test(item))
      .map(item => item.trim());
  }

  ratingScraping(data, selector) {
    const outputRatings = data.find(selector).text();
    const arrayRatings = outputRatings.split('\n');
    return arrayRatings.filter(item => regexRatings.test(item))
      .map(item => item.trim());
  }

  phonesScraping(data, selector) {
    const outputPhones = data.find(selector).text();
    const arrayPhones = outputPhones.split('\n');
    const filterPhones = arrayPhones
      .filter(item => regexRatings.test(item) && !regexPhones.test(item))
      .map(item => item.trim()
        .replace(/[+]38/g, '')
        .replace(/callback/g, '')
        .split(' ')
        .filter(number => number !== ''));

    filterPhones.forEach((item, itemIdx) => {
      item.forEach((number, numIdx) => {
        if (regexPhneCode.test(number) && !code) {
          code = number;
        }
        if (!regexPhneCode.test(number) && code) {
          filterPhones[itemIdx][numIdx] = `${code}${number}`;
          code = null;
        }
      });
    });
    return filterPhones.map(item => item.filter(number => !regexPhneCode.test(number)));
  }
}

module.exports = DataScraping;
