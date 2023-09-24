const fs = require('fs');
file = 'imdb-top250'
json2csv(file)
function json2csv(file) {
    json_path = `D:\\T\\Documents\\VSCode\\js\\media\\top250\\json\\${file}-neodb.json`

    const data_douban = fs.readFileSync(json_path, 'utf8');
    let douban = JSON.parse(data_douban);
    

    const imdb = [];
    fs.readFileSync('D:\\T\\Documents\\VSCode\\js\\media\\neodb\\imdb-top250.csv')
    .toString()
    .split('\n')
    .forEach((line) => {
        if (line) {
            // id,file,url
            imdb.push({
            'num': line.split(',')[0],
            'url': line.split(',')[1],
            'neodb': line.split(',')[2],
        });
        }
    });
    // console.log(imdb);

    for (let item of imdb) {
        if (item.neodb !== 'neodb' && item.neodb !== 'https://neodb.social') {
            // console.log(douban[parseInt(item.num) - 1]['neodb'])
            // console.log(item.neodb )
            douban[parseInt(item.num) - 1].neodb = item.neodb 
        }
    }


  fs.writeFile(`D:\\T\\Documents\\VSCode\\js\\media\\top250\\json\\${file}-neodb.json`, JSON.stringify(douban), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

}