import { db } from "@/db"
import { router } from "../__internals/router"
import { publicProcedure } from "../procedures"
import { currentUser } from "@clerk/nextjs/server"

export const authRouter = router({
  getDatabaseSyncStatus: publicProcedure.query(async ({ c }) => {
    const authorizedUser = await currentUser()
    if (!authorizedUser) {
      return c.superjson({ isSynced: "false" })
    }
    const user = await db.user.findFirst({
      where: { externalId: authorizedUser.id },
    })
    console.log("User In Database ", user)
    if (!user) {
      await db.user.create({
        data: {
          quotaLimit: 100,
          externalId: authorizedUser.id,
          email: authorizedUser.emailAddresses[0].emailAddress,
        },
      })
    }
    return c.json({ isSynced: "true" })
  }),
})
