// const { Builder, By, Key, until } = require('selenium-webdriver');

// (async function example() {
//     let driver = await new Builder().forBrowser('firefox').build();
//     try {
//         await driver.get('http://www.google.com/ncr');
//         await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//         await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//     } finally {
//         await driver.quit();
//     }
// })();

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const Builder = webdriver.Builder;
const until = webdriver.until;

const log = (label, data) => {
    console.log('================================================');
    console.log(`${label} `, data);
}

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
const driver = new Builder().forBrowser('chrome').build();

const checkVideos = async () => {
    try {
        log('find .video-feed-item');
        const videos = await driver.findElements({ className: 'video-feed-item' });
        log('find .video-feed-item: ', videos);
        if (videos.length > 0) {
            videos.pop().click();
        }
    } catch (error) {
        console.log('checkVideos.error: ', error);
    }
}

const startInterval = () => {
    setInterval(async () => {
        try {
            await checkVideos();
        } catch (error) {
            console.log('startInterval.error: ', error);
        }
    }, 1000);
};

const init = () => {
    try {
        driver.get('https://www.tiktok.com/trending?lang=en');

        driver.sleep(10000);

        // log('wait until 10 seconds or found .video-feed-item');
        // driver.wait(until.elementLocated({ className: 'video-feed-item' }), 10000);
        // log('wait until found .video-feed-item');
        // driver.wait(until.elementLocated({ className: 'video-feed-item' }));

        startInterval();
    } catch (error) {
        log('init.error: ', error);
    }
};

init();



// for (i = 0; i < 1000; i++) { window.scrollTo(0, document.body.scrollHeight); }
// var items = document.querySelectorAll('.video-feed-item');
// var videos = [];

// items.forEach((item, key) => {
//     var count = item.querySelector('.jsx-1543915374').textContent;
//     var video = item.querySelector('.video-feed-item-wrapper').href;
//     if (count.indexOf('M') !== -1) {
//         console.log(key, { count: count, video: video });
//         videos.push({ count: count, video: video });
//     }
// });
// console.log('videos length: ', videos.length);
// localStorage.setItem('videos', JSON.stringify(videos));

// ## Play Count
// document.querySelectorAll('.video-feed-item')[0].querySelector('.jsx-1543915374').textContent;

// document.querySelectorAll('.video-feed-item')[0].querySelector('.video-feed-item-wrapper').href;
// jsx-1792501825 

// fetch('http://localhost:8080/videos/', { mode: 'no-cors', cache: 'no-cache', credentials: 'omit' }).then(res => console.log('res:', res.body));

// fetch('http://localhost:8080/videos/', {
//     mode: 'no-cors',
//     cache: 'no-cache',
//     credentials: 'omit',
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Referrer-Policy': 'no-referrer'
//         // 'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ count: 1, video: 'tiktok' })
// }).then(res => console.log('res:', res.body));
