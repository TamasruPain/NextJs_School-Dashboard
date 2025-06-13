"use client"

import { faBook, faBullhorn, faCalendarCheck, faChalkboard, faCircleUser, faCommentDots, faFilePen, faGear, faHouse, faListCheck, faPeopleLine, faPeopleRoof, faPersonChalkboard, faScroll, faSquareCaretRight, faUserAstronaut, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"


const menuItems = [
    {
        title: "Profile",
        titleIcon: <FontAwesomeIcon icon={faCircleUser} style={{ color: "#B197FC", }} />,
        titleHref: "/Admin-Dashboard/admin-profile",
        items: [
            {
                icon: <FontAwesomeIcon icon={faHouse} style={{ color: "#B197FC", }} />,
                label: "Home",
                href: "/Admin-Dashboard/admin"
            },
            {
                icon: <FontAwesomeIcon icon={faPersonChalkboard} style={{ color: "#B197FC", }} />,
                label: "Teachers",
                href: "/Admin-Dashboard/manage-teachers"
            },
            {
                icon: <FontAwesomeIcon icon={faUsers} style={{ color: "#B197FC", }} />,
                label: "Studnets",
                href: "/Admin-Dashboard/manage-students"
            },
            {
                icon: <FontAwesomeIcon icon={faUserGroup} style={{ color: "#B197FC", }} />,
                label: "Parents",
                href: "/Admin-Dashboard/manage-parents"
            },
            {
                icon: <FontAwesomeIcon icon={faChalkboard} style={{ color: "#B197FC", }} />,
                label: "Classes",
                href: "/Admin-Dashboard/manage-classes"
            },
            {
                icon: <FontAwesomeIcon icon={faBook} style={{ color: "#B197FC", }} />,
                label: "Lessons",
                href: "/Admin-Dashboard/manage-lessons"
            },
            {
                icon: <FontAwesomeIcon icon={faFilePen} style={{ color: "#B197FC", }} />,
                label: "Exams",
                href: "/Admin-Dashboard/manage-exams"
            },
            {
                icon: <FontAwesomeIcon icon={faScroll} style={{ color: "#B197FC", }} />,
                label: "Assignments",
                href: "/Admin-Dashboard/manage-assignments"
            },
            {
                icon: <FontAwesomeIcon icon={faListCheck} style={{ color: "#B197FC", }} />,
                label: "Attendance",
                href: "/Admin-Dashboard/manage-attendance"
            },
            {
                icon: <FontAwesomeIcon icon={faCommentDots} style={{ color: "#B197FC", }} />,
                label: "Messages",
                href: "/Admin-Dashboard/manage-messages"
            },
            {
                icon: <FontAwesomeIcon icon={faBullhorn} style={{ color: "#B197FC", }} />,
                label: "Announcements",
                href: "/Admin-Dashboard/manage-announcements"
            },
        ]
    }
]

export default function AdminSideNavbar() {

    return (

        <div className="text-sm">
            {menuItems.map((i) => (
                <div className="flex flex-col gap-1" key={i.title}>
                    <Link href={i.titleHref} className="btn btn-ghost btn-outline hover:shadow-xl shadow-sky-500 text-lg">
                        <span>
                            {i.titleIcon}
                        </span>
                        <span className="hidden lg:block">
                            {i.title}
                        </span>
                    </Link>
                    {i.items.map((item) => (
                            <Link href={item.href} key={item.label}
                                className="flex items-center justify-center lg:justify-start gap-2 
                            hover:shadow-2xl shadow-sky-500
                            btn btn-ghost
                            ">
                                <div>{item.icon}</div>
                                <span className="hidden lg:block">{item.label}</span>
                            </Link>
                    ))}
                </div>

            ))}
        </div>


    )
}