const cheerio = require('cheerio')
const fs = require('fs')
const axios = require('axios')

const input = process.argv.slice(2)
if(input.length !==2){
    console.log('please supply url and depth as an input')
}

const rootUrl = input[0]
const finalDepth = input[1]
const results = []

const crawler = async ({url,depth,resultsArr}) => {
    // stop condition for recursion = we reached final depth
    if(finalDepth<depth){
        return ;
    }

    // get the url DOM content
    const urlDom= await axios.get(url)
    const $ = cheerio.load(urlDom.data)

    // scrap the img dom elements

    $('img').each((domElI,domEl)=>{
        const imgUrl = $(domEl).attr('src');
        resultsArr.push({
            imageUrl:imgUrl,
            sourceUrl:url,
            depth
        })
    })

    $('a').each(async (domElI,domEl)=>{
        const linkUrl = new URL($(domEl).attr('href'),url).href;
        await crawler({url:linkUrl,depth:depth+1,resultsArr:results})
    })



    console.log('results',results)

}


(async ()=>{
    await crawler({url:rootUrl,depth:0,resultsArr:results})
})()

