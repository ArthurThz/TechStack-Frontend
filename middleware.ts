import { url } from "inspector";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware (req:NextRequest){
    
    const urlPathName = req.nextUrl.pathname
    const response = NextResponse.next()
    const cookie = cookies()

    const testeCookie = cookie.get('isAuth')

    if(urlPathName === "/LogIn"){
        if(testeCookie){
            return NextResponse.redirect(
                new URL ('/Feed', req.url)
            )
        }        
    }
    
    if(!testeCookie && urlPathName !== "/LogIn"){  
        
        return NextResponse.redirect(
            new URL('/',req.url)
        )
    }

    
    return response
}

export const config ={
    matcher:['/NewPost','/Feed','/LogIn','/UserProfile','/Posts/:path*','/EditProfile','/UserProfile']
}

