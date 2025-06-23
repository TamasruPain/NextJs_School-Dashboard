
"use client"

import { faBullhorn, faCalendarCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function AnnouncementsCard({ urlData }: { urlData: string }) {

    const events = [
        {
            id: 1,
            title: "Fastival One",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name One",
        },
        {
            id: 2,
            title: "Fastival Two",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name Two",
        },
        {
            id: 3,
            title: "Fastival Three",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name Three",
        },
        {
            id: 4,
            title: "Fastival Four",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name Three",
        },
        {
            id: 5,
            title: "Fastival Five",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name Three",
        },
        {
            id: 6,
            title: "Fastival Six",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name Three",
        },
    ]

    return (


        <div className="bg-base-300 p-2 rounded-md hover:shadow-md shadow-sky-200">

            <div className="p-1">
                <h1>
                    <Link href={urlData}>
                        <FontAwesomeIcon icon={faBullhorn} /> Announcement
                    </Link>
                    <Link href={urlData}>
                        <span className="float-end underline">more{">>"}</span>
                    </Link>
                </h1>
            </div>

            <div className="flex flex-col gap-6 mt-2 mb-2 p-2">
                {events.slice(0, 5).map(events => (
                    <div className="bg-base-100 p-3 card hover:shadow shadow-blue-500" key={events.id}>
                        <div className="flex items-center justify-between my-1">
                            <h1>{events.title}</h1>
                            <span className="text-gray-500">{events.time}</span>
                        </div>
                        <p className="text-gray-400">{events.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}