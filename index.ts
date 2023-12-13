const server = Bun.serve({
    // port:process.env.PORT||4000,
    port:Bun.env.PORT||4000,
    fetch(req){
      const url = new URL(req.url)
      if(url.pathname=='/') return new Response('HomePadsdsdsge!');
      if(url.pathname=='/blog') return new Response('BlogPage!');
      return new Response('404')
    }
})

console.log(`Listening on port ${server.port}`)