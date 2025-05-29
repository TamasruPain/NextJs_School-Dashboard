"use client"
import { faEye, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const teachers = [
    { id: 1, title: "Aloo", status: "Avalaible", description: "PHD in Math " },
    { id: 2, title: "Kaloo", status: "Avalaible", description: "PHD in History" },
    { id: 3, title: "Lol", status: "Avalaible", description: "Geography" },
    { id: 4, title: "Bol", status: "Avalaible ", description: "Life Science" },
    { id: 5, title: "Roll", status: "unavalaible ", description: "PHD in Computer Science" },
    { id: 7, title: "Dall", status: "unavalaible ", description: "PHD in English" },
    { id: 8, title: "Dall", status: "unavalaible ", description: "PHD in English" },
    { id: 9, title: "Dall", status: "unavalaible ", description: "PHD in English" },
    { id: 10, title: "Dall", status: "unavalaible ", description: "PHD in English" },
    { id: 11, title: "Dall", status: "unavalaible ", description: "PHD in English" },
]

export default function ViewTeachers() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredteachers = teachers.filter(e =>
        e.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="">
            <div className="p-2 m-3">
                <h1 className="text-2xl p-2">
                    <FontAwesomeIcon icon={faPersonChalkboard} /> All Teachers
                </h1>
                <div className="">
                    {/* search bar */}
                    <div className="flex items-center justify-center mt-5 gap-3">
                        <input
                            type="search"
                            className="input bg-zinc-700 text-white placeholder:text-gray-400 hover:shadow-md shadow-sky-400 w-64 p-2 rounded"
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
                </div>
                
                {/* table */}
                <div className="m-4 ">
                    <div className="rounded-box h-screen overflow-scroll border border-base-content/5 bg-base-100">
                        <table className="table w-full">
                            {/* head */}
                            <thead className="sticky top-0 z-10 bg-base-200">
                                <tr>
                                    <th></th>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {filteredteachers.map(teachers => (
                                    <tr className="hover:bg-[rgba(255,255,255,0.1)]" key={teachers.id}>
                                        <td></td>
                                        <th>{teachers.id}</th>
                                        <td>{teachers.title}</td>
                                        <td>{teachers.description}</td>
                                        <td>{teachers.status}</td>
                                        <td>
                                            <a href="#my_modal_8" className="btn btn-soft btn-primary mx-2 my-1">
                                                <FontAwesomeIcon icon={faEye} /> View
                                            </a>
                                            <div className="modal" role="dialog" id="my_modal_8">
                                                <div className="modal-box">
                                                    <h3 className="font-bold text-lg">{teachers.title}</h3>
                                                    <p className="py-4">{teachers.description}</p>
                                                    <span className="badge badge-secondary">{teachers.status}</span>
                                                    <div className="modal-action">
                                                        <a href="#" className="btn">Close!</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}



