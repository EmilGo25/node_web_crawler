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
    console.log('urlDom',urlDom.data)

}


(async ()=>{
    await crawler({url:rootUrl,depth:0,resultsArr:results})
})()

