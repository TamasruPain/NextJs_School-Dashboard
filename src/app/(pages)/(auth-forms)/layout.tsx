
import LoginPageNavbar from "@/components/LoginPage-Navbar";
import "./dashboard-globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import type { Metadata } from "next";
import Link from "next/link";

config.autoAddCss = false

export const metadata: Metadata = {
    title: "Login"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen gap-5">

                <LoginPageNavbar />

                <div className="flex items-center justify-center mt-10">
                    {children}
                </div>
            </div>
        </div >
    );
}
