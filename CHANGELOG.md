React-markdown calculator is the first react-app I made mostly on my own.
Changelog of things I figure out along the way

### 1. Getting a basic input to register

Things learned

- Your `app.js` method needs to have a parameter of `e`, which is the event triggered on the `onClick` synthetic event. That HTML DOM element has a value so you use `e.target.value` to grab it. From there you can use `setState`, and, this changes the state, which rerenders the change over to the `Output` component

![](https://i.imgur.com/YVNrvD5.gif)

### 2. Adjust CSS so it allows 2 line formula

![](https://i.imgur.com/rDsx0VV.png)

### 3. Disallow formula to change on sequential operators

- I used a regex command , `isOperator.test(string)` , which returns true or false. By setting the last flag of `lastClicked`, I can double check if the last item was an operator. If so, then do nothing.

![](https://i.imgur.com/z7LEu7i.gif)

### 4. Allow operator change on current token AND Disallow first value as operator

- I assume the `curDisplay ==0` as this is my default value, on a hard reset or initialization of calculator. This is how I disallow first value as operator
- To change operator on current token, slice off the last character, and add in the new one

![](https://i.imgur.com/yKFBzrL.gif)

### 5. Capture currentValue number token

- Assume that `curValue` == 0, we ignore this and if its an operator. This captures a stream of numbers into the `curValue` token

![](https://i.imgur.com/013g7nc.gif)

### 6. Allow only one decimal per numeric token

- `curValue` has a value of an `operator` before a numeric string is entered (at least, for the time being). Because of this, you can assume (For the time being) that it's you'll need to add a `"0."` value.
- To disallow multiple `.` per numeric token, use a regex match on the `curValue`

![](https://i.imgur.com/idr3uKD.gif)
