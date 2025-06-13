"use client"
import { faHouseCrack, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeControl from "./Theme-Control";
import Link from "next/link";

export default function LoginPageNavbar() {
    return (
        <div>
            <ul className="menu menu-horizontal bg-base-200 rounded-box mt-4 gap-4">
                <li>
                    <div>
                        <Link href={'/'}>
                            <FontAwesomeIcon icon={faHouseCrack} /> Home
                        </Link>
                    </div>
                </li>
                <div className="m-1">
                    <ThemeControl />
                </div>
                <li>
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button">
                            <FontAwesomeIcon icon={faKey} /> Login as</div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-34 p-2 shadow-sm">
                            <li><Link href='/teacher-login'>Teachers</Link></li>
                            <li><Link href='/student-login'>Students</Link></li>
                            <li><Link href='/parent-login'>Parents</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}