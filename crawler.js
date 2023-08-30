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

}
