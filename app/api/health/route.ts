export async function GET(){return Response.json({ok:true,service:'FIN.SWITCH AI Sales Desk',version:'v1',whatsappNumber:process.env.NEXT_PUBLIC_WHATSAPP_NUMBER||'8929863394'});}
