# rooty

allow root-of-project (closest package.json) requires  in node with `^`

## Usage

require rooty as the first thing in your entry file:

```
require('rooty');
... more app code...
```

And then, instead of:

```
var something = require('../../../../../something');
```

You can use:

```
var something = require('^something');
```