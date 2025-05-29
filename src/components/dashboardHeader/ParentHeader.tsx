"use client";
import { faBullhorn} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function ParentDashboardHeader() {

    return (
        <div className="flex">
            <div className="sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
                <h1 className="text-2xl p-3 mx-3 my-2 font-bold">
                    Parent Dashboard
                </h1>
            </div>
            <div className="flex sm:w-[10%] md:w-[10%] lg:w-[10%] xl:w-[10%] p-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">

                    <Link href={"Parent-Dashboard/view-Announcement"} className="indicator btn btn-circle btn-soft me-10 float-end hover:shadow-2xl shadow-sky-100">
                        <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: "15px" }} />
                        <span className="indicator-item badge badge-primary">12</span>
                    </Link>
                   
                </div>
            </div>
        </div>
    )
}