var request = require('request');

url = 'https://neodb.social/movie/24Xml2Ruk8cTCYViyCQvSz'

// add(url)

module.exports = add

async function add(url) {
    collect = '5xvXArIHR8OeL2vnUKCaCN'
    var options = {
    'method': 'POST',
    'url': `https://neodb.social/collection/${collect}/append_item`,
    'headers': {
        'authority': 'neodb.social',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': 'mastodon_domain=mastodon.social; csrftoken=FgNGt0A7EaLtvFMSopJndoRzim6mA0Ra; sessionid=gnqht49y2jzbslngla2rxsf5lddfl0d0; csrftoken=FgNGt0A7EaLtvFMSopJndoRzim6mA0Ra',
        // 'hx-current-url': https://neodb.social/collection/edit/7PvwpxbPDfGlkbCItgVufz',
        'hx-request': 'true',
        'hx-target': 'collection_items',
        'origin': 'https://neodb.social',
        // 'referer': 'https://neodb.social/collection/edit/7PvwpxbPDfGlkbCItgVufz',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'x-csrftoken': 'W6zMulD4yHMTGuPU6WZ3SRgJ1uO6FOkGrcciNb312Hnc1ZrCkbygV5X89GKi5E1G'
    },
    form: {
        'csrfmiddlewaretoken': 'Ee3qp2wgTVmnAXWjvwgjGYOP9bP9GHfv9kGWISWdnVXGVsy1JLPwJcvehnLl6xWv',
        'url': url,
        'comment': ''
    }
    };

    return new Promise(function (resolve, reject){
        request(options, function (error, response) {
            if (error) {
                reject(error);
            } else {
                if (response.statusCode === 200) {
                    console.log(url + ' 200');
                }
                resolve(response.statusCode);
            }
        });
    })  
}
