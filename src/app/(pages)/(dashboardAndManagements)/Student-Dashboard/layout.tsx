import "./dashboard-globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { Metadata } from "next";
import StudentSideNavbar from "@/components/sideNavBar/StudentSideNavbar";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

config.autoAddCss = false

export const metadata: Metadata = {
    title: "Student-Dashboard"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <div className="h-screen">
            <Navbar />
            <div className="flex">
                {/* left side */}
                <div className="w-[15%] sm:w-[8%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-base-200 p-2">
                    <StudentSideNavbar />
                </div>
                  <div className="flex flex-col w-[85%] sm:w-[92%] md:w-[92%] lg:w-[84%] xl:w-[86%]"
                    style={{
                        backgroundImage: "url('/images/3000WP.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
