"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { faArrowRightFromBracket, faBullhorn, faCommentDots, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type ProfileDeatails = {
    userData: {
        user: string,
        role: string,
        email: string
        url?: string
    }
}

export default function ProfileCard({ userData }: ProfileDeatails) {


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userProfileUrl, setUserProfileUrl] = useState("");

    const route = useRouter();

    const { user, role, email, url } = userData;

    useEffect(() => {
        if (role === "admin") {
            setUserProfileUrl("/Admin-Dashboard/admin-profile");
        } else if (role === "teacher") {
            setUserProfileUrl("/Teacher-Dashboard/teacher-profile");
        } else if (role === "parent") {
            setUserProfileUrl("/Parent-Dashboard/parent-profile");
        } else {
            setUserProfileUrl("/Student-Dashboard/student-profile");
        }
    }, [role]);



    const notify = () => {
        setIsLoggedIn(false);
        route.push("/")
        toast.success("Successfully Logged out 🎉")
    }


    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn btn-ghost hover:shadow-lg shadow-sky-500 ">
                <FontAwesomeIcon icon={faUserAstronaut} style={{ color: "#B197FC", }} />
                {user ? `${user}` : "Profile"}
                {""}
            </label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box flex flex-col gap-6">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center gap-2 outline rounded-xl p-5 ml-5">
                            <div className="text-5xl">
                                <FontAwesomeIcon icon={faUserAstronaut} style={{ color: "#B197FC", }} />
                            </div>
                            <div className="">
                                <span>{user ? `${user}` : "Profile"}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 p-4 m-4">
                            <Link href={url || "/"} className="btn btn-soft hover:shadow-2xl shadow-sky-500">Dashboard</Link>
                            <Link href={userProfileUrl} className="btn btn-soft hover:shadow-2xl shadow-sky-500">Profile</Link>
                        </div>
                    </div>

                    <label className="btn btn-ghost btn-outline hover:shadow-2xl shadow-sky-500 "
                        onClick={notify}
                    >
                        <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
                    </label>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div >
    );
}