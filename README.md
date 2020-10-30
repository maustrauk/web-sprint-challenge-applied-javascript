# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper called "Lambda Times"**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the animation linked below. NOTE that the animation includes one of the stretch goals (the filtering of the articles by clicking on a topic).

[Lambda Times](https://tk-assets.lambdaschool.com/83869a99-62dc-4896-be79-f5ad1885631b_Sprint-Challenge.gif)

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is the DOM?

Answer:

The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them one can change the structure, style or content of a document. Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.


2. What is an event?

Answer:

The Event interface represents an event which takes place in the DOM. An event can be triggered by the user action e.g. clicking the mouse button or tapping keyboard, or generated by APIs to represent the progress of an asynchronous task. It can also be triggered programmatically, such as by calling the HTMLElement.click() method of an element, or by defining the event, then sending it to a specified target using EventTarget.dispatchEvent().

3. What is an event listener?

Answer:

The EventListener interface represents an object that can handle an event dispatched by an EventTarget object.

4. Why would we convert a NodeList into an Array?

Answer:

To be able to use array prototype functions and methods on them.

5. What is a component?

Answer:

A part that combines with other parts to form something bigger. (by Cambridge English Dictionary)

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

#### Repository Set Up

- [*] Create a forked copy of this project
- [*] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [*] Create a new branch: `git checkout -b <firstName-lastName>`.
- [*] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [*] Push commits: `git push origin <firstName-lastName>`

#### Launching the App

- [*] Navigate to the root of the project with your command line
- [*] Run `npm install` to download the dependencies listed in the `package.json` file
- [*] Run `npm start` to compile the project and serve it
- [*] Navigate Chrome to the URL indicated in the output of the `npm start` command

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [*] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the `index.html` file itself.

- [*] Following the instructions in the `components/Header.js` file, create the Header.

- [*] Following the instructions in the `components/Tabs.js` file, create the Tabs.

- [*] Following the instructions in the `components/Cards.js` file, create the Cards.

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Use the tabs at the top of the page to filter articles by topic.
- [ ] Following the instructions in the `components/Carousel.js file`, create the Carousel component.
- [ ] Render an error message on the page for the user, if the network request to fetch articles fails.

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` branch (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request
