const axios = require('axios');

module.exports.fetch = async function(token) {
    let types = ['wishlist', 'progress', 'complete']
    let categorys = ['book','movie','tv','music','game']
    // for (let type in types) {
    //     for (let category in categorys) {
    //         this.fetchAction(type, category, token)
    //     }
    // }
    let type = 'complete'
    let category = 'book'
    let data = []
    let pages = 0
    pages = await this.fetchAction(type, category, token, 1, data)
    for (let i = 2; i <= pages; i++) {
      await this.fetchAction(type, category, token, i, data)
    }
    console.log(data)
    console.log(pages)
}

// let types = ['wishlist', 'progress', 'complete']
// let categorys = ['book','movie','tv','music','game']
// // for (let type in types) {
// //     for (let category in categorys) {
// //         this.fetchAction(type, category, token)
// //     }
// // }
// let type = 'complete'
// let category = 'book'



module.exports.fetchA = async function(token, type, timeout, category) {
  let data = []
  let pages = 0
  pages = await this.fetchAction(type, category, token, 1, data, timeout)
  for (let i = 2; i <= pages; i++) {
    await this.fetchAction(type, category, token, i, data, timeout)
  }
  console.log(data)
  console.log(pages)
  return data
}


module.exports.fetchAction = async function(type, category, token, page, datas, timeout = 10000){
    let config = {
        timeout: timeout,
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://neodb.social/api/me/shelf/${type}?category=${category}&page=${page}`,
        headers: { 
          'Authorization': `Bearer ${token}`
        },
        proxy: {
          protocol: 'http',
          host: '127.0.0.1',
          port: 7890,
        },
      };
    let pages = 0;
    await axios.request(config)
      .then((response) => {
          pages = response.data['pages']
          let data = response.data['data']
          // console.log(pages);
          data.forEach(el => {
              let item = el['item']
              let url = item['url']
              let title = item['title']
              let brief = item['brief']
              let cover_image_url = item['cover_image_url']
              let created_time = el['created_time']
              let comment_text = el['comment_text']
              let rating_grade = el['rating_grade']
            //   console.log(url)
            //   console.log(title)
            //   console.log(brief)
            //   console.log(cover_image_url)
            //   console.log(created_time)
            //   console.log(comment_text)
            //   console.log(rating_grade)

              datas.push({
                title: title,
                alt: "https://neodb.social" + url,
                image: cover_image_url,
                meta: brief,
                rating: created_time + " / " + rating_grade,
                comment: comment_text
            })
          });
        //   console.log(datas)
      })
      .catch((error) => {
        console.log(error);
      });
  return pages
}

let token = 'kzZo6uKKZfisigtv9jS29cgNPrlwAC'
this.fetch(token)
