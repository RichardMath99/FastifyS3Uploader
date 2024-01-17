import fastify from "fastify";

const app = fastify()

console.log(process.env.DATABASE_URL)
 
app.get('/', () => {
    return 'Hello World' 
})

app.listen({
    port: 3333,
    host: '0.0.0.0'
}).then(() => {
    console.log('HTTP server running')
})