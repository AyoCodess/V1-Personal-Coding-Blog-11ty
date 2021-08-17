---
title: Set up Disqus with Eleventy (11ty) Tutorial
description: Set up Disqus comment box (Lightbox) with eleventy (11ty) static sight generator
read: 1 min
author: Ayo Adesanya
date: 2021-07-17T15:53:02.124Z
tags:
  - post
  - disqus
  - static site generator
image: https://i.imgur.com/8zB56E4.jpg
imageAlt: Set up Disqus with Eleventy (11ty) tutorial
---

<h2 class="snippet__title text-gradient article-special-case bold day">Day 189</h2><br>
<h2 class="snippet__title text-gradient article-special-case bold">The Problem</h2>

<p class="blog-p">I had one major issue getting the Disqus comment lightbox to work on my 11ty static generated blog website. So if you're using 11ty and you find yourself stuck, hopefully, you ran into the same issue, and this short blog helps.</p>

<h2 class="snippet__title text-gradient article-special-case bold">The Solution</h2>

<b>First click the link below, I followed this great tutorial to get me going.</b>

<a href="https://blog.jodionne.com/how-to-use-disqus-with-eleventy-9081d9a246d8" class="btn btn--primary">Full Tutorial <span><i class="fas fa-arrow-right"></i></span></a>

  <p><b>1.</b> Click the link above and follow the instructions.</p>
  
  <p><b>2.</b> if you got your Disqus lightbox to work. Well done!</p>
  
  <p><b>3.</b> If you didn't, don't worry. You're not stupid.</p>
  
  <p><b>4.</b> Put this script in the "\_data" folder; name the script whatever you like. I named mine "site.js"</p>

  <div class="snippet__title text-gradient article-special-case bold"> Copy the code</div><br>
  
  <div class="code-block">
    module.exports = {
  
  title: "name of your website",
  <br>
  description: "description of your website",
  <br>
  rootUrl: "https://link to your website",
  <br>
  disqusShortname: "your Disqus shortname",
  
    };
  </div>
  
  <p><b>5.</b> If you followed the steps in the original blog, your lightbox should work!</p>

<P>This was the one blocking issue I had setting up Disqus. Please make sure you read the 11ty documentation. If I had read the documentation more thoroughly, I wouldn't have run into this issue in the first place, but you live, and you learn right.</P>

<div class="bold">Until next time, have a good one!</div>
