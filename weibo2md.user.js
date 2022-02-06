// ==UserScript==
// @name         Weibo2MD
// @namespace    jwang0614.top
// @version      0.1
// @description  convert weibo to markdown to insert into Obsidian daily note
// @author       Olivia
// @match        https://m.weibo.cn/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    // Your code here...
    var div = document.querySelector(".weibo-text")
    var links = document.querySelectorAll(".weibo-text a")
    var brs = document.querySelectorAll("br")

    brs.forEach(br=>{
    div.removeChild(br);
    })

    links.forEach(link=>{
    href = link.href
    link.innerHTML = " " + href + " "
    })

    var page_url = window.location.href

    console.log(div.innerText)

    var md_str = `- [x] #Weibo ${div.innerText} ${page_url}`

    window.navigator.clipboard.writeText(md_str)


})();






