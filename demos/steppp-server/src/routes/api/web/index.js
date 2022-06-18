// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function genresFn(fastify, opts) {
  fastify.get('/test', async function genresRoot() {
    return 'welcome! test web-api root success~'
  })
}
