
import "./dashboard-globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import type { Metadata } from "next";
import ParentSideNavbar from "@/components/sideNavBar/ParentSideNavbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

config.autoAddCss = false

export const metadata: Metadata = {
    title: "Parent-Dashboard"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen">
            <Navbar />
            <div className="flex">
                {/* left side */}
                <div className="w-[15%] sm:w-[8%] md:w-[8%] lg:w-[16%] xl:w-[12%] bg-base-200 p-2">
                    <ParentSideNavbar />
                </div>
                {/* Right side */}

                <div className="flex flex-col w-[85%] sm:w-[92%] md:w-[92%] lg:w-[84%] xl:w-[88%]"
                    style={{
                        backgroundImage: "url('/images/blackboard01.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {children}
                </div >
            </div>
            <Footer />
        </div>
    );
}
