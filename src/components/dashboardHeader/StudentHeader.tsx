"use client";

import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function StudentHeader() {

    return (
        <div className="flex mt-2">
            <div className="w-[85%] md:w-[95%] lg:w-[90%] xl:w-[94%] p-2">
                <h1 className="text-2xl mx-2 mt-2 font-bold">
                    Student Dashboard
                </h1>
            </div>
            <div className="flex w-[25%] md:w-[15%] lg:w-[10%] xl:w-[6%] p-2">
                <div className="flex gap-5 mt-2">
                    <Link href={"Student-Dashboard/view-announcements"} className="indicator btn btn-circle btn-soft me-10 float-end hover:shadow-2xl shadow-sky-100">
                        <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: "15px" }} />
                        <span className="indicator-item badge badge-primary">12</span>
                    </Link>

                </div>
            </div>
        </div>
    );
}