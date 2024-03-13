import { ChatGPT } from "@/lib/ChatGPT";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest,res:NextResponse){

    try{

        
        const profession = req.nextUrl.searchParams.get('profession');

        if(!profession ) return NextResponse.json({ error:'profession is required'}, { status:400});
        
        const skillPrompt = `Suggest 10 technologies used in ${profession} for resume `;
        
        const skill  = await ChatGPT(skillPrompt);
        
        return NextResponse.json(skill,{status:200});
    }
    catch(e){
        console.log(`Error in GET skill req ${e}`);
        return NextResponse.json({error:`Error in GET skill req ${e}`},{status:500});
    }

     
}