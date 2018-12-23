React Markdown Calculator is based on create-react-app 2.0+

## State management

The source of truth at any given time is on the following state variables

```
curValue
formula
```

curValue holds the current numeric token
formula holds the entirety of everything before `eval` is made

While not computational efficient, it uses regex commands on `formula` and `curValue` to determine what actions should occur on the state.

For instance, you can't use `=` evaluate if the previous button click was an operator like `+-/*`.
