import { j } from "./__internals/j"

// /**
//  * Middleware for providing a built-in cache with your Prisma database.
//  *
//  * You can remove this if you don't like it, but caching can massively speed up your database queries.
//  */

// const extendedDatabaseMiddleware = j.middleware(async ({ c, next }) => {
//   const variables = env(c)

//   const pool = new Pool({
//     connectionString: variables.DATABASE_URL,
//   })

//   const adapter = new PrismaNeon(pool)

//   const redis = new Redis({
//     token: variables.REDIS_TOKEN,
//     url: variables.REDIS_URL,
//   })

//   const db = new PrismaClient({
//     adapter,
//   }).$extends(cacheExtension({ redis }))

//   // Whatever you put inside of `next` is accessible to all following middlewares
//   return await next({ db })
// })

// /**
//  * Public (unauthenticated) procedures
//  *
//  * This is the base piece you use to build new queries and mutations on your API.
//  */
export const baseProcedure = j.procedure
export const publicProcedure = baseProcedure
