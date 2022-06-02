// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function useUserApi(fastify, opts) {
  fastify.get('/getUserById/:id', async (req, reply) => {
    fastify.mysql.getConnection(onConnect)

    // eslint-disable-next-line consistent-return
    function onConnect(err, client) {
      if (err) return reply.send(err)

      client.query('SELECT * FROM user WHERE id=?', [req.params.id], function onResult(err1, result) {
        client.release()
        reply.send(err1 || result)
      })
    }
  })
}
