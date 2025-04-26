"use client"
import React from "react"
import { SignUp } from "@clerk/nextjs"
const SignUpPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <SignUp />
    </div>
  )
}

export default SignUpPage
