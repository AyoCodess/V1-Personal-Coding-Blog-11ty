---
title: How to optimize your website with Google Lighthouse - My Experience - Day 193
description: How to optimize your website with Google's Lighthouse tool.
read: 3 min
author: Ayo Adesanya
date: 2021-07-25
tags:
  - post
  - google lighthouse
  - featured
image: https://i.imgur.com/zLrjQFB.jpg
imageAlt: google lighthouse
---

<h2 class="snippet__title text-gradient article-special-case bold">The Problems </h2>

<p>Thanks to <a class="blog-link" href="https://www.linkedin.com/in/famerazak/" target="_blank" rel="noopener">Fame, a senior web developer</a>from <a class="blog-link" href="https://www.ayoadesanya.com/#join-us" target="_blank" rel="noopener">the web dev telegram group </a>, I was reminded of how helpful Google's lighthouse tool is and why I should be running reports on every website I produce.  </p>

<p>Lighthouse is a tool in your chrome dev tools that will generate a report on your website, based on how it measures up against current web standards.  </p>

<p>I ran a report on my website, and as you can guess, I wasn't entirely happy with the results. But instead of berating myself, I took it as an opportunity to learn where I was going wrong and how I could broaden my knowledge on web development best practices. </p>

<p><b>
 Implementing all the recommendations from the lighthouse results took my portfolio website from this…
</b></p>

<div class="image-block-2">

<img class="blog-img--2 picture" src="https://i.imgur.com/1OBGJjX.png" alt="ayo adesanya portfolio website before" title="ayo adesanya portfolio website before" />

</div>

<p style="text-align: center; font-size: 1.5rem;"> <b>To this...</b> </p>

<div class="image-block-2">

<img class="blog-img--2 picture" src="https://i.imgur.com/whLYoEP.png" alt="ayo adesanya portfolio website after" title="ayo adesanya portfolio website after" />

</div>

<p style="text-align: center; font-size: 1.5rem;"><b>And my blogging website from this...</b></p>

<div class="image-block-2">

<img class="blog-img--2 picture" style="margin: auto;" src="https://i.imgur.com/cO6SMyS.jpg?1" alt="ayo adesanya blog website before" title="ayo adesanya blog website before" />

</div>

<p style="text-align: center; font-size: 1.5rem;"> <b>To this...</b> </p>

<div class="image-block-2">

<img class="blog-img--2 picture"  src="https://i.imgur.com/wIPLtsu.png" alt="ayo adesanya blog website after" title="ayo adesanya blog website after" />

</div>

<p style="margin-top: 5rem;" >Unfortunately, I didn't screenshot my lighthouse scores for the blog before I made optimizations. But Fame took a screenshot of the best practices portion of the report, which sent me into the world of Google's lighthouse and an interesting learning experience.  </p>

<h2 class="snippet__title text-gradient article-special-case bold">The Solution: What I learned with Lighthouse</h2>

<h3>Performance</h3>

<p>The main thing I took away from this portion of the report was the awareness of a great solution that significantly reduced my website loading times.</p>

<p><b>Here's how…</b></p>

<p><b>1. </b>Reducing the size of images on my websites.</p>

<p><b>2.</b>  Implementing 'lazyloading' of images. (This feature only loads images when they are visible in the visitor's viewport or, in other words, visitor's screen at any time)
</p>

<p>Not 'lazyloading' my images meant my website waited for all the images to be loaded before making the website viewable to a visitor. Which was killing the performance of my portfolio website.  </p>

<p>I had over 15 images that were over 200kb in size, resulting in the total net size of my images, adding an extra 3 seconds to the loading time of my website. This was enough of a delay for a visitor to exit the website because it took too long to load.</p>

<p>I needed to get each image under 60kb in size or less to decrease the loading time. So that's exactly what I did. It wasn't the most exciting process, but I got the job done.</p>

<h3>How I did it...</h3>

<p>Firstly, I used a tool to compress the images without losing too much quality: <a class="blog-link" target="_blank" rel="noopener" href="https://tinyjpg.com/ ">Ting JPG</a> I got each image down between 30kb to 70kb.
</p>

<p>Secondly, from the lighthouse recommendations, I used an npm package called lazy sizes. It was super easy to implement; I only needed to add the script to my root folder and add the class "lazyload" to all my images in my html. Which resulted in images being loaded as the user scrolled through my portfolio website, improving its performance considerably and making me super happy!</p>

<p>Click this link to view the <a class="blog-link" target="_blank" rel="noopener" href="https://web.dev/use-lazysizes-to-lazyload-images/">Lighthouse/Web Dev Blog</a> on performance.</p>

<h3> Best Practices </h3>

<p>
You know when you have a link that opens a new tab? If you use only target"_blank", you're leaving your website open to potential malicious attacks, so it's imperative you also add rel="no opener" or rel= "noreferrer" attributes to your link. </p>

 <p>Read more about it on the<a class="blog-link" target="_blank" rel="noopener" href="https://web.dev/external-anchors-use-rel-noopener/"> Lighthouse/Web Dev Blog.</a></p>

<p>It was also good to learn about making my HTML semantics more crawlable, meaning updating my HTML so that Google crawlers could easily understand my website sections, elements and links, and what they were describing and/or containing. </p>

<p>This would ensure my website was more discoverable in search engines. For example, making sure all my images have alt and title attributes. These attributes are used to describe what the image is.</p>

<h3>Accessibility</h3>

<p>This section of the report highlighted the areas where my websites were essentially inaccessible to the visually impaired.</p>

<p>Thankfully, I didn't have too much to do here as I'm already conscious of accessibility best practices, but I still made some blunders that the lighthouse picked up on for me.</p>

<p><b>1.</b> Not labelling the text area field with a label in my contact form.</p>

<p><b>2.</b> Ensuring that all buttons had an accessible name. For example, a couple of my buttons used font-awesome icons (image icon) as their "name" instead of text. To a visually impaired person, this is problematic as the screen readers would not be able to read these buttons. </p>

<p>I didn't want a visual text label on the buttons, as it would mess up the website's visual design. Lighthouse therefore informed me that I could add an aria-name attribute to these buttons, which described their nature. Wallah! Fixed that issue. The screen readers could now describe what these buttons were doing to the visually impaired.</p>

<div class="image-block-2">

<img class="blog-img--2 picture" src="https://i.imgur.com/k87YPgy.png" alt="aria-label example" title="aria-label example" />

</div>

<p>Accessibility is essential. Being a person who stutters sometimes, I understand how important it is to give people with disabilities access to things more able people take for granted and don't really think about.</p>

<h3> SEO</h3>

<p>This tab helped me adjust the padding (padding is an invisible space around an element) around some button elements so users can easily click them without mistakenly clicking another button and ending up somewhere else, hindering user experience. In addition, it offered suggestions for making sure my font sizes were readable on all screen sizes.</p>

<p>In my opinion, Google's Lighthouse is an excellent tool within the google chrome dev tools for overall website optimization. And I recommend you run a report on your website once it is complete and follow most, if not all, of its recommendations.</p>

<p><b>Until next time, enjoy every moment.</b></p>
