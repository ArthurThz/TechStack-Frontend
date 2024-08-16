import { NextRequest, NextResponse } from "next/server";

export function middleware (req:NextRequest){
    const response = NextResponse.next()


    
   
   
   
    
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

