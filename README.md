# Pollen Engineering Test

## Feedback

### Jest Unit Testing
For some reason whenever I ran the provided script `npm run unit` this would just hang constantly and not detect any changes to test files.
I've had to develop on my windows machine - which I don't usually develop on at all as I have my work MacBook, that I can't use for this for reasons I'm sure you understand.

So I fiddled with the jest setup a little bit in `package.json` to get tests working. Right now in the state I've provided it to you in, the hook unit tests will run. However the component unit tests will not. I'm not sure what I missed to get it working properly but it will not work with the `tsconfig` `jsx` key set to `preserve` however if this is changed to `react-jsx` the tests will run fine. 

I also had to individually run each test `npm run jest ./path/to/component.spec.tsx`. For some reason they ran _really_ slowly, I'm talking a good 20 seconds on each run. Which was a bit of a nightmare but I got through it haha.

### Running the App
Just as a warning, when you run the app Next will modify the tsconfig `jsx` key back to `preserve` so if you do run it and then want to look at the tests again please make sure to change that value to `react-jsx`. 

#### Filtering the Rewards
Unfortunately I didn't have enough time to properly look at filtering. I have left some commented code and a hook to show you the direction I was planning to go in, but ultimately this is unfinished.

--------------------------------------------------------------------------------------------------------------------------------------------

## Introduction

Welcome to the Pollen code test. The test is broken into two parts:

- Code Review
- Implementation

You are free to tackle the sections in any order. Please take as much or as little time
as you need in order to complete the test to your satisfaction. We recommend that test
should take a couple of hours (2-3) rather than days. All we ask is that you
let us know, truthfully, how much time you spent on the test. There is no right or wrong
amount of time, this info will simply help us with context when reviewing the results.

## Setup

_Commands:_

- To start up the app server: `npm run dev`
- To run unit tests: `npm run unit`

After starting the servers, go to http://localhost:8700/ to begin the test.

## Code review

We would you to review the application code in the `components`, `pages`, and `hooks` folders. For this application, we are using [Next.js](https://nextjs.org/docs). If you have not come across it, don't worry - we want to focus on general practices on how to write good React Components. Feel free to skip the application configuration.

Please leave your review in `__FEEDBACK.md`. Feel free to quote blocks of code in the markdown file or format it.

Treat this as a code review you'd provide to your colleague on a Github pull request. What we're looking for in this part is to see what you normally pay attention to when you're reviewing the code of your teammate and how you communicate feedback to them. Feel free to also point out things you like in the code, not only things to improve.

## Implementation

The main objective of this task is to make a dashboard containing rewards for "Tiësto's Barcelona Weekender" only.

* We'd like you to extend the initial query we're making to our GraphQL service inside `./pages/task`
* Each reward should render it's description and image
* Support **ordering** – the user should be able to order the list of rewards by `quantity`, `points` and `capPerPollenMember`
* The UX should be optimised for mobile devices
* Optional if you have time: support **filtering** – the user should be able to filter the list of rewards by `quantity`, `points` and `capPerPollenMember`


| The GraphQL server runs at http://localhost:8700/api/graphql. 

If you get stuck on extending the GraphQL query: [view GraphiQL](http://localhost:8700/api/graphql?query=query%20allRewards(%24page%3A%20Int!)%20%7B%0A%20%20%20%20allRewards(page%3A%20%24page)%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%7D&variables=%7B%0A%20%20%22page%22%3A%200%0A%7D), open the Docs and search for `allRewards` for the schema you can extend your query from.

You may add or remove any other dependencies to this project as you like, but we'd prefer it if you use with React as the core library.

Feel free to use either JavaScript or TypeScript when creating your submission.

## Documentation

[Next.js](https://nextjs.org/docs)

[json-graphql-server](https://github.com/marmelab/json-graphql-server)

