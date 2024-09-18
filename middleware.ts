import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware (req:NextRequest){
    
    const urlPathName = req.nextUrl.pathname
    const response = NextResponse.next()

    const authCookie = cookies().get("auth-token")


    if(!authCookie){
        if(urlPathName !== "/LogIn" || "/SignUp"){
 
            return NextResponse.rewrite(
                new URL('/Unauthorized', req.url)
            )
        }
    }

    
    return response
}

export const config ={
    matcher:['/NewPost','/Feed','/UserProfile','/Posts/:path*','/EditProfile','/UserProfile']
}