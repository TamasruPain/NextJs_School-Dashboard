"use client"
import toast, { Toaster } from 'react-hot-toast'
import { faPeopleRoof, faSchoolCircleCheck, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import ProfileCard from '@/components/Profile-Card';
import ThemeControl from './Theme-Control';


export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [url, setUrl] = useState<string | undefined>(undefined);

    const route = useRouter();

    const user = "Tamasru";
    const role: "admin" | "teacher" | "student" | "parent" | string = "admin";
    const email = ""
    const userData = {
        user, role, email, url
    }

    const notify = () => {
        setIsLoggedIn(false);
        route.push("/")
        toast.success("Successfully Logged out 🎉")
    }

    const loginisClicked = () => {
        setIsLoggedIn(true);
        toast.success("Successfully Logged in 🎉")
    }

    useEffect(() => {
        if (user) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [user]);

    useEffect(() => {
        if (role === "admin") {
            setUrl('/Admin-Dashboard/admin')
        } else if (role === "teacher") {
            setUrl('/Teacher-Dashboard/teacher')
        } else if (role === "student") {
            setUrl('/Student-Dashboard/student')
        } else if (role === "parent") {
            setUrl('Parent-Dashboard/parent')
        } else {
            setUrl('/')
        }
    }, [role])



    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow">
                        <li><Link href="/" className="hover:shadow-xl shadow-sky-500">Home</Link></li>
                        <li><Link href="/about" className="hover:shadow-xl shadow-sky-500">Adout</Link></li>
                        <li><Link href="/contactus" className="hover:shadow-xl shadow-sky-500">contact us</Link></li>
                    </ul>
                </div>
                <Link href='/' className="flex justify-center items-center gap-2 text-xl w-auto p-2">
                    <FontAwesomeIcon icon={faPeopleRoof} style={{ color: "#B197FC", }} />
                    <span className="hidden sm:block">Next School</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/" className="hover:shadow-xl shadow-sky-500">Home</Link></li>
                    <li><Link href="/about" className="hover:shadow-xl shadow-sky-500">Adout</Link></li>
                    <li><Link href="/contactus" className="hover:shadow-xl shadow-sky-500">Contact us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='mx-2'>
                    <ThemeControl />
                </div>
                {!isLoggedIn ? (
                    <div className="dropdown dropdown-end hover:shadow-xl shadow-sky-500">
                        <div tabIndex={0} role="button" className="btn btn-ghost">Login</div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-34 p-2 shadow-sm">
                            <li><Link href='/teacher-login'>Teachers</Link></li>
                            <li><Link href='/student-login'>Students</Link></li>
                            <li><Link href='/parent-login'>Parents</Link></li>
                            <li><Link href='/admin-login'>Admin</Link></li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <div className="flex gap-1">

                            <ProfileCard userData={userData} />
                            <button className='hidden sm:block btn btn-ghost hover:shadow-xl shadow-sky-500'>
                                <Link href="/" onClick={notify} className=''>
                                    Logout
                                </Link>
                            </button>

                        </div>
                    </>
                )}
                <Toaster />
            </div>
        </div>
    )
}