
import LoginPageNavbar from "@/components/loginPage-Navbar";
import "./dashboard-globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import type { Metadata } from "next";

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
        <div
            style={
                {
                    backgroundImage: "url('/images/leafs02.png')",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }
            }
        >
            <div className="flex flex-col items-center justify-center h-screen gap-5">
                <div className="">
                    <LoginPageNavbar />
                </div>

                <div className="flex items-center justify-center mt-10">
                    {children}
                </div>
            </div>
        </div >
    );
}
