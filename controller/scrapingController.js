const express =  require('express')
var router = express.Router();
var shuffle = require('shuffle-array')
const puppeteer = require('puppeteer');


var data=[];
var k = 0;


// get the khaadi clothes detail
;(async () => {
    console.log("khaadi")
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto("https://www.khaadi.com/pk/new-in/woman.html",{waitUntil:'networkidle2', timeout:0});
   	var results= {li:[],image:[],name:[],price:[]};
   	var lastPageNumber = 3;
   	
   	for (let index = 0;index<lastPageNumber;index++){
   		await page.waitFor(10000);
   		var result = await extractKhaadiItems(page);
   		results.li = results.li.concat(result.li);
   		results.image = results.image.concat(result.image);
   		results.name = results.name.concat(result.name);
   		results.price= results.price.concat(result.price);
   		if (index!=lastPageNumber-1){
   			await page.click('div.toolbar-bottom div.pager-html div.arrow-pagination a.action.next');
   		}
   	}
    await browser.close();
    for (var i=0; i< results.li.length;i++)
    {
    	var pr = parseInt(results.price[i].replace(/[^0-9]/g,""));
    	var item = {id:k, link:results.li[i], img:results.image[i], name:results.name[i], price:pr, brand:"khaadi"};
    	data.push(item);
    	k++;
    }
})(); 

async function extractKhaadiItems(page)
{

 await page.waitForSelector("div.product-item-info");
 await page.waitForSelector("div.product.details.product-item-details");
 var temp = await page.evaluate(()=>{
    var link = Array.from(document.querySelectorAll("div.product-item-info a.product.photo.product-item-photo")).map(val=>val.href);
    var img = Array.from(document.querySelectorAll("div.products.catlog-products.wrapper.grid.products-grid div.product-item-info span.product-image-wrapper-front img.product-image-photo")).map(val=>val.getAttribute("src"));
    var name= Array.from(document.querySelectorAll("div.product.details.product-item-details strong.product.name.product-item-name a.product-item-link")).map(val=>val.innerText); 
    var price= Array.from(document.querySelectorAll("div.product.details.product-item-details div.price-box.price-final_price span.price")).map(val=>val.innerText); 
    return {li: link, image:img, name:name, price:price}
 })
 return temp;
}
;(async()=>{
	console.log("outfitters")
 	const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto("https://outfitters.com.pk/collections/womenwinter19",{waitUntil:'networkidle2', timeout:0});
    await page.waitForSelector("div.inner.product-item div.inner-top");
    var temp = await page.evaluate(()=>{
   			var link = Array.from(document.querySelectorAll("div.inner.product-item div.inner-top div.product-top div.product-image a.product-grid-image")).map(val=>val.href);
    		var img = Array.from(document.querySelectorAll("div.inner.product-item div.inner-top div.product-top div.product-image a.product-grid-image>img")).map(val=>val.src);
    		var name = Array.from(document.querySelectorAll("div.inner.product-item div.inner-top div.product-bottom a.product-title.pull-left")).map(val=>val.innerText);
    		var price = Array.from(document.querySelectorAll("div.inner.product-item div.inner-top div.product-bottom div.price-box span.money")).map(val=>val.innerText);
    		return {li:link, image:img, name:name, price:price, brand:"outfitters"}
    	})
    await browser.close();
     for (var i=0; i< temp.li.length;i++)
    {
    	var pr = parseInt(temp.price[i].replace(/[^0-9]/g,""));
    	var item = {id:k, link:temp.li[i], img:temp.image[i], name:temp.name[i], price:pr, brand:temp.brand};
    	data.push(item);
    	k++;
    }

})();

;(async()=>{
	console.log("breakout")
 	const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto("https://www.breakout.com.pk/new-in-2",{waitUntil:'networkidle2', timeout:0});
    await page.waitForSelector("div.item-grid div.item-box div.product-item");
    for (var m =0; m<8;m++)
    {
    var temp = await page.evaluate(()=>{
   			var link = Array.from(document.querySelectorAll("div.item-grid div.item-box div.product-item div.picture a")).map(val=>val.href);
    		var img = Array.from(document.querySelectorAll("div.item-grid div.item-box div.product-item div.picture a>img")).map(val=>val.src);
    		var name = Array.from(document.querySelectorAll("div.item-grid div.item-box div.product-item div.details h2.product-title a")).map(val=>val.innerText);
    		var price = Array.from(document.querySelectorAll("div.item-grid div.item-box div.product-item div.details div.add-info div.prices span.price.actual-price")).map(val=>val.innerText);
    		return {li:link, image:img, name:name, price:price, brand:"breakout"}
    	})
    await scrollToBottom(page);
    await page.waitFor(10000);
	}
    await browser.close();
    for (var i=0; i< temp.li.length;i++)
    {
    	var pr = parseInt(temp.price[i].replace(/[^0-9]/g,""));
    	var item = {id:k, link:temp.li[i], img:temp.image[i], name:temp.name[i], price:pr, brand:temp.brand};
    	data.push(item);
    	k++;
    }

})();

async function scrollToBottom(page) {

  const distance = 100; // should be less than or equal to window.innerHeight
  const delay = 100;
  while (await page.evaluate(() => document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight)) {
    await page.evaluate((y) => { document.scrollingElement.scrollBy(0, y); }, distance);
    await page.waitFor(delay);
  }
}



router.get("/", function(req, res)
{
	var data1 = data;
	var random_array = shuffle(data1,{copy:true});
  console.log(random_array)
  console.log(random_array.length);
	return res.send(random_array); 
})
router.get("/ordered", function(req,res)
{
	return res.send(data)
	console.log(data)
})

module.exports = router;