---
title: CS50 Lecture 6 Review - C Vs Python and the Michael Jackson 'Deep Fake'?
description: A review and summary of CS50 Lecture 6
read: 2 min
author: Ayo Adesanya
date: 2021-08-26
tags:
  - post
  - cs50 review
  - python
image: https://i.imgur.com/21RSfVJ.jpg
imageAlt: cs50 review
---

<h2 class="snippet__title text-gradient article-special-case bold day">Day 197</h2><br>

<h2 class="snippet__title text-gradient article-special-case bold">Lecture 6 Review</h2>

<p>Lecture 6 was a dive into the Python coding language while comparing it to C. Giving us a better perspective of the advantages of using a high-level language vs a lower-level language. Although I'm entirely focused on learning javascript, I found this lecture enjoyable and highly informative, increasing my overall appreciation for the programmers who work, update and innovate programming languages continuously.</p>

<p>Firstly, David talked about how more dynamic and loosely typed languages like Python have made the programmer's life much simpler.
A huge advantage of Python is that it's much easier to read intuitively, almost like English, making it much more accessible to newbies. </p>

<p>Higher-level languages like Python build upon low-level languages like C, abstracting many of the complexities away.</p>

<div class="image-block-2">

<img class="blog-img--2 picture" src="https://i.imgur.com/HhjtYJc.png" alt="high level vs low level language ayo adesanya" title="high level vs low level language ayo adesanya" />

</div>
<p > <a href="https://www.educba.com/high-level-languages-vs-low-level-languages/">Image Source</a><p>

<p> For example, in languages like C, we have to worry about memory management, archaic syntax that isn't easy to read at first glance, and fewer features.  Heard of the old adage nothing good comes cheap? Well, the price for this level of abstraction and reduced complexity is program execution speed. If you want an extended explanation read one of my previous blogs <a class="blog-link" href="https://blogv1.ayoadesanya.com/blog/2021-08-5-cs50-low-level-vs-high-level-languages-&-what-is-big-o-lecture-1-2-&-3-review-day-195/">'low-level languages vs high languages'</a> </p>

<p> So why do we have to pay this price? It's because languages like Python have a so-called 'middle program' and in Python's case, it's called the interpreter. The interpreter compiles Python code to machine code (1's and 0's),the only language a computer understands. In C there is no middle program or so-called interpreter, we have to compile our code ourselves in the terminal to machine code before we can run it.  </p>

<p><b> Think of it like this...</b></p>

<div class="code-block">
    <p>
    <b>
        Python Program --> Interpreter --> Complier = Program is run<br>
        C Program --> Complier = Program is run
    </b>
    </p>
</div>

<p>This extra step with compiling Python code with an interpreter reduces the execution speed of our programs. This means C, generally has a much faster run time execution speed than its Python equivalent. However, it often requires more code and complexity to write the C program variant. </p>

<p>To demonstrate this, David re-created C programs in Python and showed us how much the run time speeds differed, it was dramatic. C was much faster, which supported our earlier conclusions about the tradeoffs in using C vs Python. </p>

<p>For some enterprise projects, programmers have to consider trade-offs like these between different programming languages and more broadly tech stacks, before committing to any batch of technologies that will be used together to build a project. Ultimately, for 98% of all projects ideas out there, Python and the ecosystem that comes with it is an optimal enough language to use to build hobbyist to enterprise size projects. </p>

<p>At the end of the lecture, we discussed where Python is predominately used, and that's in the arena of artificial intelligence. Questioning if we should be writing code that could have potentially negative real-world impacts like the growing innovation in 'deep fake' technology.  </p>

<div class="image-block-2">

<img class="blog-img--2 picture" src="https://i.imgur.com/JiX0dc9.jpg" alt="deep fake ayo adesanya" title="deep fake ayo adesanya" />

</div>

<p> David using his voice speaking through 'deep fake' video representation likenesses of his colleagues and celebrities, made us think about ethics and philosophical questions around the implications of building certain technologies and if we should be doing it. Don't know what a 'deep fake' is? Watch <a class="blog-link" href="https://www.youtube.com/watch?v=ezeVFLBqFjE">Michael Jackson play him self in his own biography</a>. This section of the lecture was super interesting and scary at the same time. How does it make you feel?</p>

<p><b>Until next time keep calm and code. </b></p>
