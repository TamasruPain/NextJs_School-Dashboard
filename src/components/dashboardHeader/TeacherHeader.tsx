"use client"

import { faArrowRightFromBracket, faBullhorn, faCommentDots, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function TeacherHeader() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const route = useRouter();

    const user = "Tamasru";
    const userRole = "Teacher";
    const userEmail = "tamasrupain@gmail.com"

    const notify = () => {
        setIsLoggedIn(false);
        route.push("/")
        toast.success("Successfully Logged out 🎉")
    }
    return (
        <div className="flex">
            <div className="sm:w-[85%] md:w-[85%] lg:w-[85%] xl:w-[85%]">
                <h1 className="text-2xl p-3 mx-3 my-2 font-bold">
                    Teacher Dashboard
                </h1>
            </div>
            <div className="flex sm:w-[10%] md:w-[10%] lg:w-[10%] xl:w-[15%] p-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                    <div className="flex gap-5">
                        <Link href={"/Teacher-Dashboard/manage-messages"} className="indicator btn btn-circle btn-soft float-end hover:shadow-2xl shadow-sky-100">
                            <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "15px" }} />
                            <span className="indicator-item badge badge-primary">12</span>
                        </Link>

                        <Link href={"/Teacher-Dashboard/manage-announcements"} className="indicator btn btn-circle btn-soft float-end hover:shadow-2xl shadow-sky-100">
                            <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: "15px" }} />
                            <span className="indicator-item badge badge-primary">12</span>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}