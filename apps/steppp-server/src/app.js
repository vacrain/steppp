/*
 * Author        vacrain
 * CreateDate    2022-06-02
 * LastEditor    vacrain
 * lastEditDate  2022-06-06
 * RelativePath  /apps/steppp-server/src/app.js
 * Description
 */
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import Fastify from 'fastify'
import AutoLoad from '@fastify/autoload'
import fastifyMySQL from '@fastify/mysql'

Fastify({ logger: true })

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function init(fastify, opts) {
  fastify.register(import('../plugins/index.js'))

  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD
  const host = process.env.DB_HOST
  const dbName = process.env.DB_NAME
  const port = process.env.DB_PORT
  const connectStr = `mysql://${host}:${port}/${dbName}?user=${user}&password=${password}`
  // console.log(`\nconnect url: ${connectStr}`)

  fastify.register(fastifyMySQL, { connectionString: connectStr })

  const fileName = fileURLToPath(import.meta.url)
  const dirName = dirname(fileName)
  fastify.register(AutoLoad, { dir: join(dirName, './routes') })
}
