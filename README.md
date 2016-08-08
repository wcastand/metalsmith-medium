# Metalsmith-medium

Metalsmith package to get latest post from medium api for a user.

## Install

```npm install metalsmith-medium```

## Usage

```javascript
...
import medium from 'metalsmith-medium'
// OR
const medium = require('metalsmith-medium').default

Metalsmith(__dirname)
.use(medium('mpjme')) //username
.use(layouts({ engine: 'jade' }))
.use(jade({useMetadata: true}))
.build((err) => err ? console.error(err) : console.log("Build."))

```

The user basic info and latest posts will be added to the metadata :).

## Contributing

Feel free to make issues or PRs or do some test (i would love that ;) ).
