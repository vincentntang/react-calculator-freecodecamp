React Markdown Calculator is based on create-react-app 2.0+

## State management

The source of truth at any given time is on the following state variables

```
curValue
formula
```

curValue holds the current numeric token
formula holds the entirety of everything before `eval` is made
