// ==UserScript==
// @name         Weibo2MD
// @namespace    jwang0614.top
// @version      0.1
// @description  convert weibo to markdown to insert into Obsidian daily note
// @author       Olivia
// @match        https://m.weibo.cn/*
// @grant        none
// ==/UserScript==


(function () {
    'use strict';

    // Your code here...

    setTimeout(() => {
        var div = document.querySelector(".weibo-text")
        var links = document.querySelectorAll(".weibo-text a")
        var brs = document.querySelectorAll("br")

        brs.forEach(br => {
            div.removeChild(br);
        })

        links.forEach(link => {
            var href = link.href
            link.innerHTML = " " + href + " "
        })

        var page_url = window.location.href

        var md_str = `- [x] #Weibo ${div.innerText} ${page_url}`

        var main = document.querySelector(".nav-main")

        var copy_btn = document.createElement("button")
        copy_btn.innerHTML = "复制内容"
        copy_btn.style.background = "orange"
        copy_btn.addEventListener("click", ()=>{
            window.focus();
            window.navigator.clipboard.writeText(md_str);
            alert(md_str);
        })

        main.appendChild(copy_btn)

    }, 2000);



})();






