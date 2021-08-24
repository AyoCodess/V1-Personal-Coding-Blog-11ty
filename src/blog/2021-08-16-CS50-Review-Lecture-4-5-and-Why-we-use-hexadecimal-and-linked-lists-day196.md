---
title: CS50 Lecture 4 & 5 Review, Why we use hexadecimal & Linked-lists!
description: A review and summary of CS50 Lecture 4 and 5
read: 2 min
author: Ayo Adesanya
date: 2021-08-16
tags:
  - post
  - cs50 review
  - data structures
image: https://i.imgur.com/avikUbH.jpg
imageAlt: cs50 review
---

<h2 class="snippet__title text-gradient article-special-case bold day">Day 196</h2><br>

<h2 class="snippet__title text-gradient article-special-case bold">Lecture 4 Review</h2>

<p>To put it simply, lecture 4 was awesome!  We went back in time and talked about the origins of hexadecimal. The Hexadecimal numeral system represents numbers using a radix base of 16 when we're talking about programming. Now, if you're already confused, keep calm and watch this youtube video on <a class="blog-link"href="https://www.youtube.com/watch?v=dPxCGlW9lfM">what are hexadecimal numbers.</a> Briefly, hexadecimal, aka HEX which generally looks like 0xBF17 or #0xBA17 are just conversions of numbers me and you are more used to. For example, 874 in HEX = 0x36A </p>

<p>Why HEX? HEX is used as a better way of representing numbers when interacting with computers. In other words, it allows a programmer to represent data more conveniently to a computer to interpret and makes it easy for programmers to visually understand what the HEX presents numerically.</p>

<p>HEX is commonly used to represent colours, addresses in memory, network addresses and many other computer sciency things. We have also built tooling that works well with the HEX rather than binary. </p>

<p>  Additionally, binary is just difficult to understand visually. If we had to programmatically write 1000 in binary, it would look like this (0b1111101000). Experienced programmers would have trouble working with this line of code vs its Hex equivalent (0x3E8).</p>

<p>  Just to note, a person with no coding background could look at a HEX and be just as confused as if they were looking at its binary equivalent. But HEX was created for the programmer, and I would much rather work with HEX than with binary. So I strongly recommend watching this <a class="blog-link" href="https://www.youtube.com/watch?v=dPxCGlW9lfM">youtube video</a> for a deeper understanding. </p>

<div class="image-block-2">

<img class="blog-img--2 picture" src="https://i.imgur.com/fnttzpt.jpg" alt="hexadecimal ayo adesanya" title="hexadecimal ayo adesanya" />

</div>

<p>Next, we delved deeper into the world of computer memory. David went into low-level explanations of how computer memory (RAM) really works, increasing my knowledge and understanding of how programming languages access and use computer memory.  Next, we delved deeper into the world of computer memory. David went into low-level explanations of how computer memory (RAM) really works, increasing my knowledge and understanding of how programming languages access and use computer memory.  </p>

<p>For example, suppose you're using a data structure like an array in a lower-level language like C; in that case, you literally have to know and declare in advance how much space in computer memory that array would take up before you could even attempt to run that program. Sounds tricky?  It is! </p>

<p>In contrast, higher-level languages like Javascript, PHP, Python etc., take care of memory management under the hood. As a result, we don't need to worry about working out the sizes of arrays before we implement them. Saving us a lot of mental energy and written code.</p>

<h2 class="snippet__title text-gradient article-special-case bold">Lecture 5 Review</h2>

<p> In lecture 5, we got into more sophisticated data structures like a linked-list. What was really valuable about this lecture was getting to why programmers invented these data structures for the problems they solve. </p>

<p>For example, a linked list is handy because, unlike arrays, they do not need to store data contiguously, back to back, in a linear format. Linked-lists can work in a scenario where your computer's memory (RAM) is fragmented, resulting in not enough contiguous free space to store your data. This is an edge case but demonstrates one of the use-cases of a linked list.</p>

<p>This is how a linked-list solves this problem and how they fundamentally work. Linked-lists use a mechanism similar to pointers in the C language. A pointer points to the next sequential 'bit of data' or 'node' in the structure headed (labelled) by a number. So it doesn't matter if there is not enough contiguous memory in your computer. If there's enough overall memory, the linked list will fill the free space it needs with nodes and link them sequentially via a number (header). <b>For example  1(the data)-- 2( the data)-- 3(the data)-->.</b></p>

<p><b>1.</b>You need constant-time insertions/deletions from the list.</p>
<p><b>2.</b>You don't know how many items will be in the list. With arrays, you may need to re-declare and copy. This will impact memory if the array grows too big.</p>
<p><b>3.</b>You don't need random access to any elements.</p>
<p><b>4.</b>You want to insert items in the middle of the linked-list without affecting all the other elements in the array.</p>

<div class="image-block-2">

<img class="blog-img--2 picture" src="https://i.imgur.com/urjwz5W.png" alt="linked-list ayo adesanya" title="linked-list ayo adesanya" />

</div>

<p>We also briefly looked at other data structures like a stack, queue, binary search tree and different implementations of a hash table. Next, we looked at a custom data structure that combed arrays and linked-lists to create a time-efficient searchable data structure irrespective of its size. And finally, we looked at the Trie data structure, which moves us closer to the holy grail of data structures with an across the board time complexity of bigO(1). </p>

<p>In other words, searching, inserting and deleting anything within the data structure takes the same amount of time regardless of the data structure size. But remember, in programming, there are always trade-offs. In the case of a Trie data structure, we have to pay a considerable price in computer memory.</p>

<p>So, in conclusion, lectures 4 and 5 are great introductions to how data structures use memory in our computers to store and manage data and what data structures to use depending on the problem. I can't wait to learn and practice implementing these algorithms and data structures into my own code.</p>

<p><b>Until next time. Keep coding.</b></p>
