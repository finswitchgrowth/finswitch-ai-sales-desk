import {NextRequest} from 'next/server';
export async function GET(req:NextRequest){const url=new URL(req.url);const mode=url.searchParams.get('hub.mode');const token=url.searchParams.get('hub.verify_token');const challenge=url.searchParams.get('hub.challenge');if(mode==='subscribe'&&token&&token===process.env.WHATSAPP_VERIFY_TOKEN&&challenge)return new Response(challenge);return new Response('Forbidden',{status:403});}
export async function POST(req:NextRequest){const body=await req.json().catch(()=>null);console.log('WhatsApp webhook received',body);return Response.json({received:true});}
