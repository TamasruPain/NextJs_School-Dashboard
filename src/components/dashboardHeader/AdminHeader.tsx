"use client";
import { faBullhorn, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AdminDashboardHeader() {
    
    return (
        <div className="flex mt-2">
            <div className="w-[55%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[90%] p-2">
                <h1 className="text-2xl mx-2 mt-2 font-bold">
                    Admin Dashboard
                </h1>
            </div>
            <div className="flex w-[45%] sm:w-[20%] md:w-[20%] lg:w-[20%] xl:w-[6%] p-2">
                <div className="flex gap-5 mt-2">
                    <Link href={"Admin-Dashboard/manage-messages"} className="indicator btn btn-circle btn-soft float-end hover:shadow-2xl shadow-sky-100">
                        <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "15px" }} />
                        <span className="indicator-item badge badge-primary">12</span>
                    </Link>

                    <Link href={"Admin-Dashboard/manage-Announcement"} className="indicator btn btn-circle btn-soft float-end hover:shadow-2xl shadow-sky-100">
                        <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: "15px" }} />
                        <span className="indicator-item badge badge-primary">12</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}