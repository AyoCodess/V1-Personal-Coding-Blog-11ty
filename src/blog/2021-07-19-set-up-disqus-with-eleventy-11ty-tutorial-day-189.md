---
title: CCS Padding-inline and Flexbox Gap Problem - Day 190
description: Padding-inline and Flexbox gap not working as expected.
read: 2 Min
author: Ayo Adesanya
date: 2021-07-19
tags:
  - post
  - css/sass
  - featured
image: https://i.imgur.com/FTwROJa.jpg
imageAlt: CSS Padding
---

The problem:

Today I was having issues with the padding-inline and the gap property for flexbox… both properties were hitting and missing on different devices. I would say I spent 2 hours trying to debug this querk messing around with SASS. Unfortunately for me, I couldn't find a way to make these properties work across all browsers and devices, even though ' can I use.com' clearly stated both properties had been implemented into the browsers I care about for some time. Strange.

What absolutely didn't make sense to me was on my iPhone 12, the site was rendering just fine, but on my friends iPhone 11 padding-inline, and the flex gap property was not taking effect; the site just looked a mess. The images below will show you what I'm talking about

(images)

To make things worse, I had run out of minutes on 'BrowserStack.com' (virtual mobile testing), which allowed me to debug the devices my site was not rendering on as expected, e.g. an iPhone 11. Also, chrome, Firefox and Safari dev tools on my own machine, a Macbook Pro, wasn't helpful as it rendered my site as expected across various screen sizes.

So I was kinda stuck; I couldn't debug the issue anymore, which resulted in me asking all my web dev friends what my website looked like on their mobile devices. Which didn't help.

The solution:

I got rid of both properties.

I'm sure there is just a gap in my knowledge, and more debugging could have solved why those properties were not working as expected. So, in the end, I turned my navigation into a grid and used a column gap. And for the container for the individual articles page (I haven't got a before image to show you how bad it looked), I just used regular padding.

I placed individual padding properties on the elements that needed it to get the same effect as padding-inline, which put padding on several elements within the container simultaneously, depending on how the code is written.

And that was it. Job done.

I plan to go back to this bug and find a real solution to why these properties we're not working on my site as expected.

If you have any feedback or suggestions, please comment below. untill next time...stay enthusiastic about coding!

<div class="snippet__title text-gradient article-special-case bold">The Problem</div>

<p class="blog-p">I had one major issue getting the Disqus comment lightbox to work on my 11ty static generated blog website. So if you're using 11ty and you find yourself stuck, hopefully, you ran into the same issue, and this short blog helps.</p>

<div class="snippet__title text-gradient article-special-case bold">The Solution</div>

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
