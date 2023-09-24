const fs = require('fs');
const search = require('./search');
const csvWriter = require('csv-write-stream');

// test()

// async function test(){
//     url_d = `https://movie.douban.com/subject/1858711/`

//     url = await search(url_d)

//     console.log(url)
// }
function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
};
file = 'douban-top250'
file = 'imdb-top250'
json2csv(file)
async function json2csv(file) {
  json_path = `D:\\T\\Documents\\VSCode\\js\\media\\top250\\json\\${file}-neodb.json`

  csv_path = `D:\\T\\Documents\\VSCode\\js\\media\\neodb\\${file}.csv`
  
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(csv_path));

  const data_douban = fs.readFileSync(json_path, 'utf8');
  const douban = JSON.parse(data_douban);
  for (let item of douban) {
    if (item.neodb === 'https://neodb.social'){
        console.log(item.url)
        url_n = await search(item.url)
        console.log(item.num, item.url, url_n)
        item.neodb = url_n

        writer.write({
            'num': item.num,
            'url': item.url,
            'neodb': item.neodb,
        });
        let second = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        // 调用方法；等待5000毫秒（即5秒）。
        console.log('\t ' + second)
        await wait(second);
    }


    
  }
  writer.end();
  fs.writeFile(`D:\\T\\Documents\\VSCode\\js\\media\\top250\\json\\${file}-neodb.json`, JSON.stringify(douban), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

}

