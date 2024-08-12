import { NextRequest, NextResponse } from "next/server";

export function middleware (req:NextRequest){
    const response = NextResponse.next()


    
    if(req.nextUrl.pathname === '/Feed'){
        console.log('logando do /Feed')
    }
   
   
    
    // if(!authCookie){  
    //     return NextResponse.redirect(
    //         new URL('/',req.url)
    //     )
    // }
    
    return response
}

export const config ={
    matcher:['/NewPost','/Feed','/UserProfile','/Posts/:path*','/EditProfile','/UserProfile']
}

