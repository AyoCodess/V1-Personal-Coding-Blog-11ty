---
title: CCS Padding-inline and Flexbox Gap Problem - Day 190
description: Padding-inline and Flexbox gap not working as expected.
read: 2 min
author: Ayo Adesanya
date: 2021-07-19
tags:
  - post
  - css/sass
  - featured
image: https://i.imgur.com/ERyDnhy.jpg
imageAlt: CSS Padding
---

<div class="snippet__title text-gradient article-special-case bold">The Problem</div>

<p>Today I was having issues with the padding-inline and the gap property for flexbox… both properties were hitting and missing on different devices. </p>

<p>I'd say I spent 2 hours trying to debug this quirk messing around with SASS. Unfortunately for me, I couldn't find a way to make these properties work across all browsers and devices - even though 'can I use.com' clearly stated both properties had been implemented into the browsers I was interested in. Strange.</p>

<p>What absolutely didn't make sense to me was on my iPhone 12. The site was rendering just fine, but on my friends iPhone 11 - padding-inline and the flex gap properties were not taking effect; the site just looked a mess. The images below will show you what I mean.</p>

<div class="image-block">

<img class="blog-img--2 picture" style="" src="https://i.imgur.com/jhIEs4p.jpg" alt="blog main image good vs bad padding" title="blog main image good vs bad padding" />

</div>

<p>To make things worse, I had run out of minutes on 'BrowserStack.com' (virtual mobile testing), which allowed me to debug the devices my site was not rendering on as expected, such as an iPhone 11. </p>

<p>Also, Chrome, Firefox and Safari dev tools on my own machine, a Macbook Pro, weren't helpful as it rendered my site as expected across various screen sizes..</p>

<p>So there I was. Completely stuck. Since I couldn't debug the issue, I asked all my web dev friends what my website looked like on their mobile devices. Which didn't help.</p>

<div class="snippet__title text-gradient article-special-case bold">The Solution</div>

<p>I got rid of both properties.</p>

<p>I'm sure there is just a gap in my knowledge, and more debugging would have solved why those properties were not working as expected. </p>

<p>So, in the end, I turned my navigation into a grid and used a column gap. And for the container of the individual articles page (I haven't got a before image to show you how bad it looked), I just used regular padding.</p>

<p>I placed individual padding properties on the elements that needed it to get the same effect as padding-inline. Which puts padding on several elements within the container simultaneously, depending on how the code is written.</p>

<p>I plan to go back to this bug and find a real solution to why these properties were not working on my site as expected.</p>

<p>And that was it. Job done.</p>

<p><b>If you have any feedback or suggestions, please comment below. Until next time...stay enthusiastic about coding!</b></p>
