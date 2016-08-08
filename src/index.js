const default_options = { }

export default function(opts) {
  const options = Object.assign({}, default_options, opts)

  return (files, metalsmith, done) => {
    Object.keys(files)
    .forEach(file => {

    })
    done()
  }
}
