import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/(Navbar)/Navbar";
import NavbarInfoBlock from "@/app/components/(Navbar)/NavbarInfoBlock";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Бесплатный вывоз техники в Минске — Быстро и Безопасно",
    description: "Вывоз любой бытовой и офисной техники в Минске бесплатно. Звоните и избавьтесь от ненужной техники без лишних хлопот!",
};


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NavbarInfoBlock/>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
