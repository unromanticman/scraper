var request = require("request");
var cheerio = require("cheerio");

// 
// 的氣溫
var url = "https://www.wunderground.com/q/zmw:00000.1.46740";

// 取得網頁資料
request(url, function (error, response, body) {
  if (!error) {

    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var temperature = $("[data-variable='temperature'] .wx-value").html();
    var humidity = $("[data-variable='humidity'] .wx-value").html();

    // 輸出
    console.log("氣溫：攝氏 " + temperature + " 度");
    console.log("濕度：" + humidity + "%");

  } else {
    console.log("擷取錯誤：" + error);
  }
});