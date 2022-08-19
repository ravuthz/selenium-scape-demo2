for (i = 0; i < 10000; i++) { window.scrollTo(0, document.body.scrollHeight); }

setTimeout(function () {
    var items = document.querySelectorAll('.video-feed-item');
    var videos = [];

    items.forEach((item, key) => {
        var count = item.querySelector('.jsx-1543915374').textContent;
        var video = item.querySelector('.video-feed-item-wrapper').href;
        if (count.indexOf('M') !== -1) {
            console.log(key, { count: count, video: video });
            videos.push({ count: count, video: video });
        }
    });

    console.log('videos length: ', videos.length);
    localStorage.setItem('videos', JSON.stringify(videos));

}, 60000);

// ## Play Count
// document.querySelectorAll('.video-feed-item')[0].querySelector('.jsx-1543915374').textContent;

// document.querySelectorAll('.video-feed-item')[0].querySelector('.video-feed-item-wrapper').href;
// jsx-1792501825 

// https://www.tiktok.com/tag/khmer?
// https://www.tiktok.com/tag/cambdia?