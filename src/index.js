import request from 'request'

export default function(username) {
  const options = {
    method: 'GET',
    url : 'https://medium.com/@' + username + '/latest',
    headers: {
      accept: 'application/json'
    }
  }

  return (files, metalsmith, done) => {
    const metadata = metalsmith.metadata()
    request(options, (error, response, body) => {
      if (error) throw new Error(error)
      const res = JSON.parse(body.replace('])}while(1);</x>', ''))
      const posts = res.payload.references.Post
      const user_infos = res.payload.user
      metadata.medium = {
        user_infos
      , posts
      }
      done()
    })
  }
}
