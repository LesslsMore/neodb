const fs = require('fs');
const search = require('./search');
const add = require('./add_sync');

// test()

// async function test(){
//     url_d = `https://movie.douban.com/subject/1858711/`

//     url = await search(url_d)

//     console.log(url)
// }

file = 'douban-top250'
file = 'imdb-top250'

function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
};



json2csv(file)
async function json2csv(file) {
  json_path = `D:\\T\\Documents\\VSCode\\js\\media\\top250\\json\\${file}-neodb.json`

  const data_douban = fs.readFileSync(json_path, 'utf8');
  const douban = JSON.parse(data_douban);
  let i = 0;
  for (let item of douban) {
    // console.log('https://neodb.social' + item.neodb)
    // url_n = await search(item.url)
    // console.log(url_n)
    // item.neodb = url_n
    i++
    console.log(i)
    if (i>50){

        await add('https://neodb.social' + item.neodb)
        let second = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        // 调用方法；等待5000毫秒（即5秒）。
        console.log('\t ' + second)
        await wait(second);
    }
  }

//   fs.writeFile(`D:\\T\\Documents\\VSCode\\js\\media\\top250\\json\\${file}-neodb.json`, JSON.stringify(douban), (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });

}

