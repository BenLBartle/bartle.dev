---
title: The Problem with Citizen Developer
date: "2019-05-14"
---

Here I discuss the rise of low-code/no-code platforms, and the potential pitfalls of *Citizen Developers*

<!-- end -->

<blockquote style="padding:22px; background-color: #fffbe0; border-color: #ffec82; "/>
<strong>DISCLAIMER:</strong> I know this topic will be divisive, and I am not just saying what I am about to say to be deliberately controversial. There are many differing viewpoints on the 'low-code'  is the only option, this is just mine.</a>
</blockquote>

Before you start, please read the disclaimer above. Done? OK, lets start.

So, for anyone who knows me, I am a hacker, a tinkerer, someone who can’t stand the thought of not knowing how something works in detail. This lead me to me starting coding for fun at the age of about 14 and I’ve never really stopped. I have never (apart from a period of about 12 months in 2014-15) been a full time programmer as my profession, but I’ve always done it as a hobby. Anything you’ve seen on this blog has been done for fun and mostly stemmed from curiosity.

I want people, lots of people, to be involved with technology. It’s why I read the [Hello Ruby](https://www.helloruby.com/) books with my 4 year-old daughter,  it’s why I mentor at [Get Coding MK](https://www.meetup.com/Get-Coding-MK/) (though I don’t organise it, props for that go to [@LaylaCodesIt](https://twitter.com/LaylaCodesIt)), it’s something I really care about.

So I should be behind this move towards this concept of a **Citizen Developer** then, right? I want people to feel empowered by technology and break down the barriers of complexity that application code creates? Power to the people!

Well yes, I do. But I am worried this can often introduce problems that people don’t really think about. Which is what I want to discuss here today.

## Art and Engineering

So much of what we do when we develop products and services using technology is based on our creativity. We find new and cool ways of solving problems every day. But we are also engineers. We apply rigour to our designs to make sure they are feasible and long lasting, making sure they’re really up to the job.

Things like the Power Platform allows everyone to create things much more easily, all you need is a login and a browser and you’re away! 

It’s sort of like the Hello World! of low-code/no-code, but you’re already way ahead of the curve. 

The issue is, that when developers like me were one step away from Hello World. we were writing, really, really, bad code. We hadn’t heard of things like the SOLID principles, and dependency management and concurrency or thread-safety. But our stuff worked. Well, I say it worked, it *functionally* worked but was plagued with performance and maintainability issues, but we were juniors so it didn’t matter.

Over the years I’ve done projects where these things have become gotchyas, and now from the outside anything I create will be much better engineered, so I know that when I am gone the system will be performant, understood and build to defined standards.

Any software I built could also be rigorously unit tested, and would be designed from the outset so that I could be tested. This means employing decomposition skills, as by design any software component that is loosely coupled to it’s dependencies, is easier to test independently. This is incredibly difficult to do on a low-code/no-code platform, as you don’t control everything; there are many parts that may move, whether you want them to or not.

## Infinite Generality
Low-code/no-code platforms migrate (not remove, see [this post](https://capgemini.github.io/architecture/The-Conservation-of-Complexity-in-Software-Architecture/)) some of this complexity but at a cost. They do not allow infinite generality in your software design. 

I have seen, from experience, what this leads to:

Hacks, Workarounds, Design by Convention.

If your low-code platform doesn’t do function A, you slightly hack function’s B and C so they do the same thing. However this only works if you put a certain value in the first parameter. This is a design by convention, which is what we don’t want. We want a design by contract. Where two components of a system know exactly how to talk to each other, and no further info needs to be implied by specific parameter values etc. 

A great example of this I saw recently (through I am damned if I can find it now) was a tweet showing someone who had created a flow to do intent analysis using [LUIS](https://www.luis.ai/). This was cool, but when you look into it there is basically a giant switch statement in the middle of the flow. Anyone who has coded professionally will tell you this is a [bad code smell](https://www.c-sharpcorner.com/article/switch-statement-a-code-smell/). Software Engineers have learned from years of experience best practices, and by putting the power into everyone’s hands, but not sharing that experience, will only end in tears.

Modularity
Low-code/no code platforms do not lend themselves well to decomposition into modular components. It is getting better, but often you will see repeated code all over the place because the platform doesn’t support the level of modularity that application code does.

For me, this is technical debt. If I was writing code that was not [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), I would also count this as technical debt.

## A Defined Standard

Application Code is standardised. You know what is allowed, and what is not allowed. Because of this, everyone learns the same. This means that anyone who advertises their trade as a C# developer, will be implicitly be able to understand anyone else’s work in C#, as it is a defined standard.

Low-code/no-code platforms are not standardised to the same degree, as such it would much more difficult one PowerApp developer to easily understand what another one has created. I am not saying this is impossibly, but much more difficult. Also, the availability of said resources is much lower.

## It is still code

Low-code, is still code. Just because everything is written in Excel style syntax, doesn’t mean it isn’t a codified algorithm. But now the code doesn’t live in a repository, it lives as properties of controls all over the app.

## Conclusion
In short, I think the buzz behind low-code/no-code apps is definitely justified, it puts power into the hands of the people. What I object to is statements such as the following:

>Completely serious! Code = technical debt = not very maintainable.
>And with OneVersion too? Naah.
>
>— Sara Lagerquist ([@lagerquistsara](https://twitter.com/lagerquistsara)) April 3, 2019

Now I consider the whole *Code = Technical debt* thing a total fallacy. I’ve been on projects where due to insistence on configuration over code, developers have been using XML transformations to read .xlsx files. This is un-maintainable, over-complex and liable to break at any time. Talk about technical debt!

This could’ve been done much more easily in in application code, using a decent client library. 

This is just one example.

Nothing is modular as code, nothing is as general as code, and nothing is testable as code. Until Low-code/no-code platforms. 

So what does this mean for our *Citizen Developer*? I still think his/her life is pretty rosy, as she/he has access to lots of great low-code/no-code platforms, with great communities, fantastic development tools and great learning material. 

I wish we didn’t have to obsess over the dichotomy of code being something that is made using magic by wizards, and low-code/no-code something that can be created and maintained by my Mother (love you Mum, but this isn’t your field ❤️).

We should be empowering people to get hands on with technology, using all the tools they have available, and selecting the correct one at the correct time. That’s what I want for my *Citizen Developers*.