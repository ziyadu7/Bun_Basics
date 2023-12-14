const server = Bun.serve({
    // port:process.env.PORT||4000,
    port:Bun.env.PORT||4000,
    fetch(req){
      const url = new URL(req.url)
      if(url.pathname=='/') return new Response('Home Page!');
      if(url.pathname=='/blog') return new Response('BlogPage!');
      if(url.pathname=='/error') throw new Error('Found a error');
      return new Response('404')
    },
    error(error){
      return new Response(`<pre>${error}\n${error.stack}</pre>`,{
        headers:{
          'Content-Type':'text/html'
        }
      })
    }
})


console.log(`Listening on port ${server.port}`)