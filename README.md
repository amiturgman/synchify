# synchify

This node module provides a utility function to use async-await pattern on any function that's using callbacks

### Usage

```
npm install [--save] synchify
```

### Code Sample

```js

const obj1 = {
  f1: function(param1, param2, callback) {
    // do something and call the callback with or without the error
    return callback(null, { some: "result"});
  }
}

var synchify = require('synchify');

try {
  var result = await syncify(obj1, 'f1', param1, param2);
}
catch(err) {
  // if an error was returned, it will be catched here
}

```


# License
[MIT](LICENSE)
