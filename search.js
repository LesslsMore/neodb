var request = require('request');

// test()

async function test(){
    url_d = `https://movie.douban.com/subject/1858711/`
    url_d = `https://www.imdb.com/title/tt0111161`

    url = await search(url_d)

    console.log(url)
}

module.exports = search

async function search(url_d) {
    // console.log(url_d)
    // https://movie.douban.com/subject/1292233/
    url_d += '&c=movietv'
    url = encodeURIComponent(url_d)
    var options = {
    'followRedirect': false,
    'method': 'GET',
    //   https://movie.douban.com/subject/1858711/&c=movietv
    //   https%3A%2F%2Fmovie.douban.com%2Fsubject%2F1858711%2F&c=movietv
    'url': `https://neodb.social/search/?q=${url}`,
    'headers': {
        'authority': 'neodb.social',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
        'cookie': 'mastodon_domain=mastodon.social; csrftoken=FgNGt0A7EaLtvFMSopJndoRzim6mA0Ra; sessionid=gnqht49y2jzbslngla2rxsf5lddfl0d0; csrftoken=FgNGt0A7EaLtvFMSopJndoRzim6mA0Ra',
        'referer': 'https://neodb.social/users/lesslsmore@mastodon.social/complete/movie/',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
    }
    };
    
    return new Promise(function (resolve, reject){
        request(options, function (error, response) {
            if (error) {
                reject(error);
            } else {
                let redirectUrl = ''
                if (response.statusCode === 302) {
                    redirectUrl = response.headers.location;
                }
                resolve('https://neodb.social' + redirectUrl);
            }
        });
    })  
}