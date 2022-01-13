

# The Slideshow Code Generator

## Table of contents

- [Introduction](#introduction)
- [My process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Resources](#resources)
  - [Tools Utilized](#tools-utilized)

## Introduction

This project is in response to another project I recently completed, which was a replication of [Instagram's login page](https://www.instagram.com/). Despite the seeming simplicity of IG's login page, there were several new problems to solve, one of which was creating an image slideshow similar to IG's. 

IG's page uses javascript, which is, to me, an obvious approach. I wanted to challenge myself and decided to do it using just HTML and CSS. I looked online and found this guide [here](https://snook.ca/archives/html_and_css/simplest-css-slideshow), which helped me to utilize CSS animations to get the job done. 

It was fun diving deeper into animations. I got the slideshow working awesomely and finished the IG login page. But while coding the animation, I realized that adding/removing images requires a total recalculation of all the animation properties and keyframe percentages. But getting the correct values isn't that straightforward,  so I dived deeper into how the calculations work. 

Once I thought I had a decent understanding of the relevant variables, I thought it would be helpful to have a tool/app that does all the calculating for us and provides working code snippets for HTML and CSS.

Alas, The Slideshow Code Generator was born! (Perhaps it's not the best name, but it works for now, and it describes the tool accurately enough, I find).

Here's a screenshot of the result:
![](./images/slideshow-code-generator-site-ss.png)

### Links

- Live Site URL: [The Slideshow Code Generator](https://chrissoncrant.github.io/Slideshow-code-generator/)

## My Process

I use my iPad and Apple Pencil with the Goodnotes app to plan and brainstorm, make project to-do lists, etc. It is a crucial component of my workflow. 

The first to-do was to get some images and then build the slideshow based on the article I found.

Once the show was on the road, it was time to build a form for users to enter specific values for Fade Time, Hold Time, and Number of Images.

I soon found out that there are two parts to the tool:
1. The Preview
2. The Code Generator

The Preview is for users to test out different Fade and Hold Times. These times would adjust the Preview on the page to give them an idea of what that would look like. 

Once the slideshow is to the user's liking, they can generate code for their specific project based on their entered values for Fade and Hold Times and the Number of Images.

At first, the form had the 3 inputs at the top and the 2 buttons at the bottom, but to foster a more logical flow, I rearranged the form to match the intended workflow. 

The first task was to get the Preview function to work. I wasn't sure if this would be possible because I did not know if I could edit the keyframe percentages, but this difficulty led me to discover the CSSOM. 

I took a deep dive into how the CSSOM works and how to access it, and its properties using the DOM. I was then able to apply this newfound knowledge, and BOOM! Working Preview function, baby!

The next part was to create the code display functionality, which would generate the code for the user. 

The first problem to solve here was how to display the code. Did I want to use a code embedder or update the DOM using plain text? I did some research and felt that the code embedder route was more involved than I wanted, so my decision was made.

The next problem I encountered was getting the code's format to show up in the desired manner. A Google search later, I discovered the "white-space: pre" property and value. This allowed me to format the code within the JavaScript document. 

I then coded a loop that would generate the appropriate number of ".slide-#" rulesets based on the Number of Images the user entered.

With all that done, I had a functional preview and code generator.

I then determined what copy would be necessary for this tool to make sense for users. This was perhaps the most challenging part. It was challenging because I was trying too hard to get it right the first time. After spinning my wheels on this for a spell, I finally just started to get it out there, not caring about right or wrong. 

I learned that doing something poorly is way better than trying to do something perfectly and ending up doing nothing as a result. You can't improve "nothing," but when something is there, it is vastly easier to improve upon it, no matter the quality. 

In short order, I had some decent copy which I then improved upon throughout the rest of the project. I did use [Josh Comeau's blog post](https://www.joshwcomeau.com/css/introducing-shadow-palette-generator/) as a template to aid me with this part.

With that done, I created the code displays for the Setup section of the site.

The styling of the site was not too involved. I played around with different class naming schemes and probably made more of a mess than I wanted to, but valuable lessons come from the messiness.

My next step was to ensure that users couldn't break it. So I implemented the necessary input filters and the error messaging system. 

Before testing, the last thing was to implement a copy button within each of the code displays. 

This was pretty simple and led me to be introduced to the navigator object. 

For some reason, I thought that the copy button would only work with a  textarea element. I took a quick detour by opening up my "Playground" project in VS Code, where I.... well, play around with new stuff I am learning and learned how to remove the resizing feature of the textarea and how to make it read-only.

Within the Playground, I also worked out a functional copy button. 

Once everything worked in the Playground, I implemented the code into my project (creating a new git branch before doing so). After changing the HTML code display section to be within a textarea element, I realized that I didn't have to do that. This realization saved me a lot of time. 

With the copy button in place and working, it was time to test this out. Back to the Playground I went and pretended to be a user with no code. 
I found some new images, then opened the tool, copied and pasted the generated code, and was thrilled to see it work as expected. 

Once done with that, I wrote this. 

### Built With

- Semantic HTML5 markup
- CSS3
- JavaScript
- Git
- GitHub

### What I Learned

- To change the keyframe percentages dynamically, I had to do some research. This led to my introduction to the CSSOM. I spent quite a bit of time getting more familiar with this and how to navigate the object. I was super pumped when I was able to manipulate the CSSOM in the manner that the tool required. Those moments are what it's all about!
- I learned about CSS animations, the associated properties, how keyframe percentages are related, and how to calculate them accordingly.
- Creating a copy button for the generated code. Learned about the navigator object. 
- Discovered the "mask" property and its usefulness in styling SVG elements. 
- While writing this write-up I learned more about Markdown, how it works, why it exists, what its function is.
  - [The Markdown Guide](https://www.markdownguide.org/)
  - [Daring Fireball](https://daringfireball.net/projects/markdown/)
  - [Dingus](https://daringfireball.net/projects/markdown/dingus)

### Continued Development

Moving forward, several areas that I will improve upon in future projects are:
- Optimizing CSS by using better class names and applying the recommendations within this excellent guide called [Maintainable CSS](https://maintainablecss.com/chapters/introduction/).
- Improve upon documenting my process as I go along.
- Start to implement better project management strategies
- Learn how to more effectively utilize CSS variables.
- Continue to improve upon HTML markup and efficiently structure a page.

### Resources

- [Intro to CSSOM and how to update keyframe values](https://css-tricks.com/controlling-css-animations-transitions-javascript/)
- [This article helped with creating the copy button](https://dev.to/walternascimentobarroso/creating-copy-button-with-js-4763)


### Tools Utilized

- [Josh Comeau's Shadow Generator](https://www.joshwcomeau.com/shadow-palette/)
  - Should be obvious what I used this for, but the reason why I chose this over the other valuable tools is that I find Josh's work to be inspiring. His [article on shadow design](https://www.joshwcomeau.com/css/designing-shadows/) was enlightening (pun intended? I let you decide)
- [AI Art Generator](https://app.wombo.art/)
  - Heard about this tool and gave it a whirl to generate the images on the site. Check it out!
- [Bear app](https://bear.app/)


