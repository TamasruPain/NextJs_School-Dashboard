"use client"

import { faCalendarCheck, faChalkboard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function TeacherClassesCard({ urlData }: { urlData: string }) {

    const classses = [
        { id: 1, title: "Alpha One", time: "12:00 PM ", description: "School have a Fastivel in coming few days name One", },
        { id: 2, title: "Alpha Two", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Two", },
        { id: 3, title: "Alpha Three", time: "12:00 PM", description: "School have a Fastivel in coming few days name Three", },
        { id: 4, title: "Alpha Four", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
        { id: 5, title: "Alpha Five", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
        { id: 6, title: "Alpha Six", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
        { id: 7, title: "Alpha Seven", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
    ]

    return (

        <div className="bg-base-300 p-2 rounded-md hover:shadow-lg shadow-sky-200">

            <div className="p-2">
                <h1>
                    <FontAwesomeIcon icon={faChalkboard} /> Classes
                    <Link href={urlData} className="float-end">
                        <span className="float-end underline">more {">>"}</span>
                    </Link>
                </h1>
            </div>

            <div className="flex flex-col gap-4 p-2">
                {classses.slice(0, 5).map(classses => (
                    <div className="bg-base-100 p-3 card hover:shadow shadow-blue-500" key={classses.id}>
                        <div className="flex items-center justify-between my-1">
                            <h1>{classses.title}</h1>
                            <span className="text-gray-500">{classses.time}</span>
                        </div>
                        <p className="text-sm text-gray-400">{classses.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}