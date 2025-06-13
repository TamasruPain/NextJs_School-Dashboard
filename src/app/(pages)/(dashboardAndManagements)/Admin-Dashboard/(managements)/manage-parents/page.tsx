
"use client"
import { faEye, faPenToSquare, faSquarePlus, faTrashCan, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const parents = [
    { id: 1, name: "parents", phone: 1234567890, parentOf: "Studnet1, student4", email: "abc@gmail.com" },
    { id: 2, name: "parent1", phone: 1234567890, parentOf: "Studnet2", email: "abc@gmail.com" },
    { id: 3, name: "parent2", phone: 1234567890, parentOf: "Studnet3", email: "abc@gmail.com" },
    { id: 4, name: "parent3", phone: 1234567890, parentOf: "Studnet5", email: "abc@gmail.com" },
    { id: 5, name: "parent4", phone: 1234567890, parentOf: "Studnet6", email: "abc@gmail.com" },
    { id: 6, name: "parent5", phone: 1234567890, parentOf: "Studnet7", email: "abc@gmail.com" },
    { id: 7, name: "parent6", phone: 1234567890, parentOf: "Studnet8", email: "abc@gmail.com" },
    { id: 8, name: "parent6", phone: 1234567890, parentOf: "Studnet8", email: "abc@gmail.com" },
    { id: 9, name: "parent6", phone: 1234567890, parentOf: "Studnet8", email: "abc@gmail.com" },
    { id: 10, name: "parent6", phone: 1234567890, parentOf: "Studnet8", email: "abc@gmail.com" },
    { id: 11, name: "parent6", phone: 1234567890, parentOf: "Studnet8", email: "abc@gmail.com" },
]

export default function ManageParents() {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredParents = parents.filter(e =>
        e.name.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="">
            <div className="p-2 m-3">
                <h1 className="text-2xl p-2">
                    <FontAwesomeIcon icon={faUserGroup} /> Parents Management
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
                    {/* add button */}
                    <div className="flex items-center justify-between mt-4 ">
                        <h1 className="text-lg ml-1">All Parents ( {parents.length} )</h1>
                        <a href="#my_modal_8" className="btn btn-soft mr-3">
                            <FontAwesomeIcon icon={faSquarePlus} /> Add a Parent
                        </a>
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
            {/* students table */}
            <div className="m-4 ">
                <div className="rounded-box h-screen overflow-scroll border border-base-content/5 bg-base-100">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="sticky top-0 z-10 bg-base-200">
                            <tr>
                                <th></th>
                                <th>NO.</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Parent Of</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {filteredParents.map(e => (
                                <tr className="hover:bg-[rgba(255,255,255,0.1)]" key={e.id}>
                                    <td></td>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.phone}</td>
                                    <td>{e.parentOf}</td>
                                    <td>{e.email}</td>
                                    <td>
                                        <button className="btn btn-soft btn-primary mx-2 my-1">
                                            <FontAwesomeIcon icon={faEye} /> View
                                        </button>
                                        <button className="btn btn-soft btn-success mx-2 my-1">
                                            <FontAwesomeIcon icon={faPenToSquare} /> Edit
                                        </button>
                                        <button className="btn btn-soft btn-warning mx-2 my-1">
                                            <FontAwesomeIcon icon={faTrashCan} /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
} 