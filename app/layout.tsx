import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'FIN.SWITCH AI Sales Desk',description:'Lead qualification, WhatsApp automation and revenue CRM for FIN.SWITCH.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
