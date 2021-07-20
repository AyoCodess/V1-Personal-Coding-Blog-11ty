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
  - featured
image: https://i.imgur.com/8zB56E4.jpg
imageAlt: Set up Disqus with Eleventy (11ty) tutorial
---

<h1 class="snippet__title text-gradient article-special-case">The Problem</h1>

<p class="blog-p">I had one major issue getting the Disqus comment lightbox to work on my 11ty static generated blog website. So if you're using 11ty and you find yourself stuck, hopefully, you ran into the same issue, and this short blog helps.</p>

<h1 class="snippet__title text-gradient article-special-case">The Solution</h1>

<h4>First click the link below, I followed this great tutorial to get me going.</h4>

<a href="https://blog.jodionne.com/how-to-use-disqus-with-eleventy-9081d9a246d8" class="btn btn--primary">Full Tutorial <span><i class="fas fa-arrow-right"></i></span></a>

<p class="blog-p"><strong>1.</strong> Click the link above and follow the instructions.</p>

<p class="blog-p"><strong>2.</strong> if you got your Disqus lightbox to work. Well done!</p>

<p class="blog-p"><strong>3.</strong> If you didn't, don't worry. You're not stupid.</p>

<p class="blog-p"><strong>4.</strong> Put this script in the "\_data" folder; name the script whatever you like. I named mine "site.js"</p>

<h3 class="snippet__title text-gradient article-special-case"> Copy the code</h3>

<div class="code-block">
  module.exports = {
  
  title: "name of your website",
  description: "description of your website",
  rootUrl: "https://link to your website",
  disqusShortname: "your Disqus shortname",
  
  };
</div>

<p class="blog-p"><strong>5.</strong> If you followed the steps in the original blog, your lightbox should work!</p>

</ol>

<P class="blog-p">This was the one blocking issue I had setting up Disqus. Please make sure you read the 11ty documentation. If I had read the documentation more thoroughly, I wouldn't have run into this issue in the first place, but you live, and you learn right.</P>

<strong>Until next time, have a good one!</strong>
