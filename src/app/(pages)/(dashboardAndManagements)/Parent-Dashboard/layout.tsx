
import "./dashboard-globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import type { Metadata } from "next";
import ParentSideNavbar from "@/components/sideNavBar/ParentSideNavbar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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
                <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-base-200 p-4">
                    <ParentSideNavbar />
                </div>
                {/* Right side */}

                <div className="flex flex-col w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]"
                    style={{
                        backgroundImage: "url('/images/3000WP.jpg')",
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
