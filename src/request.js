const request = require('request');
const cheerio = require('cheerio');
const sortTaxi = require('./sort-taxi');
const exeptions = require('./exceptions');
const DataScraping = require('./data-scraping');

const dataScraping = new DataScraping();

const fetchTaxi = (bot, city, ct) => {
    const cityInLatin = exeptions(city)
    request(`https://catalog.taxiservice.com.ua/taxi-${cityInLatin}`, (err, response, html) => {
        if(!err && response.statusCode === 200) {
            const $ = cheerio.load(html)
    
            const blogCardWrap = $('.blog-card-wrap');
            const nameSelector = '.blog-card_title';
            const ratingSelector = '.djrv_avg.small';
            const phonesSelector = '.blog-card_content-box'
            const { nameSraping, ratingScraping, phonesScraping } = dataScraping;
        
            const filterNames = nameSraping(blogCardWrap, nameSelector)
    
            const filterRatings = ratingScraping(blogCardWrap, ratingSelector)
    
            const taxiPhoneNumbers = phonesScraping(blogCardWrap, phonesSelector)
          
            const taxi = sortTaxi(filterNames, filterRatings, taxiPhoneNumbers)
    
            const md = `
            *Name:* _${taxi[0].name}_\n*Phones:* \n_${taxi[0].phones.join('\n')}_\n
    *Name:* _${taxi[1].name}_\n*Phones:* \n_${taxi[1].phones.join('\n')}_
        `;
    
            bot.sendMessage(ct.chat.id, md, {parse_mode: 'Markdown'})
        }
    })
}

module.exports = fetchTaxi

