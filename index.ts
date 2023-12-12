const server = Bun.serve({
    // port:process.env.PORT||4000,
    port:Bun.env.PORT||4000,
    fetch(req){
        return new Response('Hello world via bun')
    }
})

console.log(`Listening on port ${server.port}`)