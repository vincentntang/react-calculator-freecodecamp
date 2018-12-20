React-markdown calculator is the first react-app I made mostly on my own.
Changelog of things I figure out along the way

### 1. Getting a basic input to register

Things learned

- Your `app.js` method needs to have a parameter of `e`, which is the event triggered on the `onClick` synthetic event. That HTML DOM element has a value so you use `e.target.value` to grab it. From there you can use `setState`, and, this changes the state, which rerenders the change over to the `Output` component

![](https://i.imgur.com/YVNrvD5.gif)
