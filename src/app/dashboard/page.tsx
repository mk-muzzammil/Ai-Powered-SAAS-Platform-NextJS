import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const page = async () => {
  const authorizedUser = await currentUser()
  if (!authorizedUser) {
    redirect("/sign-in")
  }
  const user = await db.user.findUnique({
    where: { externalId: authorizedUser.id },
  })

  if (!user) {
    redirect("/sign-in")
  }

  return <div>Dashboard Page </div>
}

export default page
