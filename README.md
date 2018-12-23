React Markdown Calculator is based on create-react-app 2.0+

## State management

The source of truth at any given time is on the following state variables

```
curValue
formula
evaluated
```

- curValue holds the current operation / numeric token
- formula holds the entirety of everything before `eval` is made
- Evaluated is a flag check to determine if "=" was last command

Quick demo showing the react state and functionality of app

![](https://i.imgur.com/XcV0eZH.gif)

## Installing

Run on root repository

```
npm install
npm run start
```
