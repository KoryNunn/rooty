# rooty

Allow root-of-project (closest package.json) requires in node with `^`

## Usage

Require rooty as the first thing in your entry file:

```javascript

require('rooty');

// more app code

```

And then, instead of:

```javascript

var something = require('../../../../../something');

```

You can use:

```javascript

var something = require('^something');

```