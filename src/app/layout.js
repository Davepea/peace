import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
// import Head from 'next/head';
// import Head from "next/head"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&f[]=bebas-neue@400&f[]=chillax@1,600,500,300,700,400,200&display=swap" rel="stylesheet"/>
      </head>



      <body className="">
        <Header/>
        {children}
        </body>
    </html>
  );
}
