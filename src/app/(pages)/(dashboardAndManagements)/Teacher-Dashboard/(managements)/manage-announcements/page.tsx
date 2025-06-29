
"use client"
import { faBullhorn, faEye, faPenToSquare, faSquarePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const annoucements = [
    { id: 1, title: "Fastival One", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name One", },
    { id: 2, title: "Fastival Two", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Two", },
    { id: 3, title: "Fastival Three", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 4, title: "Fastival Four", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 5, title: "Fastival Five", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 6, title: "Fastival Six", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 7, title: "Fastival Seven", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 8, title: "Fastival Seven", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 9, title: "Fastival Seven", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 10, title: "Fastival Seven", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 11, title: "Fastival Seven", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 12, title: "Fastival Seven", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 13, title: "Fastival Seven", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
]

export default function ManageAnnoucements() {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredAnnoucement = annoucements.filter(e =>
        e.title.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="">
            <div className="p-2 m-2">
                <h1 className="text-2xl p-2">
                    <FontAwesomeIcon icon={faBullhorn} /> Management Announcments
                </h1>
                <div className="">
                    {/* search bar */}
                    <div className="flex items-center justify-center mt-2 gap-3">
                        <input
                            type="search"
                            className="input placeholder:text-gray-400 hover:shadow-md shadow-sky-400 w-64 p-2 rounded"
                            placeholder="🔍 Search by Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            className="btn btn-soft"
                            onClick={() => setSearchTerm("")}
                        >
                            Clear
                        </button>
                    </div>
                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-lift mt-4">
                        {/* tab 1 */}
                        <input type="radio" name="my_tabs_3" className="tab" aria-label="Your announcements" defaultChecked />
                        <div className="tab-content backdrop-blur-sm bg-black/10 border-base-300 p-2">

                            {/* add button */}
                            <div className="flex items-center justify-between p-2 mt-2">
                                <h1 className="text-lg hidden md:block">Announcements ( {annoucements.length} )</h1>
                                <a href="#my_modal_8" className="btn btn-soft ml-4">
                                    <FontAwesomeIcon icon={faSquarePlus} /> Add Announcment
                                </a>
                            </div>
                            {/* list of announcement */}
                            <div className="mt-2">
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-4
                                    backdrop-blur-xl
                                    h-screen overflow-scroll rounded-xl">
                                    {filteredAnnoucement.map(e => (
                                        <div className="bg-base-300 p-3 card hover:shadow shadow-blue-500" key={e.id}>
                                            <div className="flex items-center justify-between my-1">
                                                <h1>{e.title}</h1>
                                                <span className="text-gray-500">{e.time}</span>
                                            </div>
                                            <p className="text-gray-400">{e.description}</p>
                                            <div className="flex items-end justify-end">
                                                <button className="btn btn-soft btn-primary mx-2 my-1">
                                                    <FontAwesomeIcon icon={faEye} />
                                                </button>
                                                <button className="btn btn-soft btn-success mx-2 my-1">
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </button>
                                                <button className="btn btn-soft btn-warning mx-2 my-1">
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* tab 2 */}
                        <input type="radio" name="my_tabs_3" className="tab  [--tab-bg:]" aria-label="All annoucements" />
                        <div className="tab-content backdrop-blur-sm bg-black/10 border-base-300 p-2">
                            {/* list of announcement */}
                            <div className="mt-2">
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-4
                                    backdrop-blur-xl
                                    h-screen overflow-scroll rounded-xl">
                                    {filteredAnnoucement.map(e => (
                                        <div className="bg-base-300 p-3 card hover:shadow shadow-blue-500" key={e.id}>
                                            <div className="flex items-center justify-between my-1">
                                                <h1>{e.title}</h1>
                                                <span className="text-gray-500">{e.time}</span>
                                            </div>
                                            <p className="text-gray-400">{e.description}</p>
                                            <div className="flex items-end justify-end">
                                                <button className="btn btn-soft btn-primary mx-2 my-1">
                                                    <FontAwesomeIcon icon={faEye} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal" role="dialog" id="my_modal_8">
                        <div className="modal-box">
                            <div className="modal-action mt-1">
                                <a href="#" className="btn">close</a>
                            </div>
                            <h3 className="text-lg font-bold">Hello!</h3>
                            <div className="">
                                <fieldset className="fieldset p-4">

                                    <label className="label">Title</label>
                                    <input type="text" className="input w-full" placeholder="My awesome page" />

                                    <label className="label">Slug</label>
                                    <input type="text" className="input w-full" placeholder="my-awesome-page" />

                                    <label className="label">Author</label>
                                    <input type="text" className="input w-full" placeholder="Name" />

                                    <button className="btn btn-neutral mt-10">Submit</button>

                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 