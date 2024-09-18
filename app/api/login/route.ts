import { createCookie } from "@/app/libs";
import { apiRoute } from "@/services/api";
import { NextRequest, NextResponse } from "next/server";


export async function POST (req: NextRequest){
    const body = await req.json()
    try {
        const response =  await apiRoute.post('/users/login',body)

        const {data} = response 

        const {error, token} = data

        if(error){
            const responseError = {
                message:error.message,
                code:error.status
            }
            return new Response(JSON.stringify({responseError}))
        }

        createCookie({name:'auth-token',value:token})
        
        return new Response(JSON.stringify(data))
        
    }catch (err){
        return err
    }

    

}