// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function genresFn(fastify, opts) {
  fastify.get('/', async function genresRoot() {
    return 'here is api root '
  })
}
