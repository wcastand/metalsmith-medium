const Metalsmith = require('metalsmith')
const layouts = require('metalsmith-layouts')
const jade = require('metalsmith-jade')
const medium = require('../lib').default

Metalsmith(__dirname)
.use(medium('mpjme'))
.use(layouts({ engine: 'jade' }))
.use(jade({useMetadata: true}))
.build((err) => err ? console.error(err) : console.log("Build."))
