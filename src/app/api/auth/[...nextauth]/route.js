import adminModel from "@/model/admin"
import { connectDb } from "@/utils/connect"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    // call databse connection
                    await connectDb()

                    // chehck if user credentials is correct
                    const user = adminModel.findOne({email:credentials.email})
                   if(!user)throw new Error("Invalid crdentials")
                      
                    // chechk for user password
                    const passwordTrue=await bcrypt.compare(credentials.password, user.credentials)
                    if(!passwordTrue) throw new Error("invalid credentials")

                    return user

                }
                catch (error) {
                    console.log(error)
                    throw new Error("something went wrong")
                }
            }
        })
    ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }