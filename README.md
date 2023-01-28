# online-checker

A custom react hook to track if the browser goes offline. This hook simply returns true or false of the current browsers online status. This is very useful if we want to render a view depending on browsers online status.

## How to use

-   `npm install`

You can now import `online-checker` like so:

```
import useOnLineChecker from 'online-checker'
...
**Notice this is a default export**
...
Then use that inside script just like a normal React hook
...
const isOnLine = useOnLineChecker(); //returns true or false
```
