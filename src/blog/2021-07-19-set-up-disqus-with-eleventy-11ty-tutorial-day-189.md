---
title: Set up Disqus with Eleventy (11ty) Tutorial - Day 189
description: Set up Diqus comment box (Lightbox) with eleventy (11ty) static sight generator
read: 1 Min
author: Ayo Adesanya
date: 2021-07-19T15:53:02.124Z
tags:
  - post
  - disqus
  - static-site-generator
image: https://i.imgur.com/0BnDMPD.jpg
imageAlt: Set up Disqus with Eleventy (11ty) tutorial
---

(setq markdown-css-paths '("./src.styles.scss"))

<h1 class="article-title">The Problem 1</h1>

I had one major issue getting the Disqus comment lightbox to work on my 11ty static generated blog website. So if you're using 11ty and you find yourself stuck, hopefully, you ran into the same issue, and this short blog helps.

<h1>The Solution</h1>

<h4>First click the link below, I followed this great tutorial to get me going.</h4>

[Full Tutorial ](https://blog.jodionne.com/how-to-use-disqus-with-eleventy-9081d9a246d8)

<ol>
<li>1. Click the link above and follow the instructions.</li>
<br>
<li>2. if you got your Disqus lightbox to work. Well done!</li>
<br>
<li>3. If you didn't, don't worry. You're not stupid.</li>
<br>
<li>4. Have you created a "\_data" folder in your "src" directory? If not, create it.</li>
<br>
<li>5. Put this script in the "\_data" folder; name the script whatever you like. I named mine "site.js"</li>

<br>
<li><h3> Copy the code</h3></li>
<br>

> module.exports = {

> title: "name of your website",
> description: "description of your website",
> rootUrl: "https://link to your website",
> disqusShortname: "your Disqus shortname",

> };

<br>

<li>6. if you followed the steps in the original blog, your lightbox should work!</li>
</ol>

<P>This was the one blocking issue I had setting up Disqus. Please make sure you read the 11ty documentation. If I had read the documentation more thoroughly, I wouldn't have run into this issue in the first place, but you live, and you learn right.</P>

<strong>Until next time, have a good one!</strong>
