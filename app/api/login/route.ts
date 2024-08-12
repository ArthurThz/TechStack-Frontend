import { apiRoute } from "@/services/api";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createCookie } from "@/app/libs";

export async function GET(req: Request) {
    return new Response('BATEU')
}

export async function POST (req: NextRequest){
    const body = await req.json()

    

    try {
        apiRoute.post('/users/login',body)
        createCookie({name:'teste',value:'123123'})
        
    }catch (err){
        return err
    }

    return new Response(JSON.stringify(body))

}