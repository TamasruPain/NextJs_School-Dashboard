"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function ParentPasswordForm() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [progressOne, setProgressOne] = useState(0)
    const [progressTwo, setProgressTwo] = useState(0)

    useEffect(() => {
        let strength = 0
        if (password.length >= 8) strength += 25
        if (/[a-z]/.test(password)) strength += 25
        if (/[A-Z]/.test(password)) strength += 25
        if (/\d/.test(password)) strength += 25
        setProgressOne(strength)
    }, [password])

    useEffect(() => {
        let strength = 0
        if (confirmPassword.length >= 8) strength += 25
        if (/[a-z]/.test(confirmPassword)) strength += 25
        if (/[A-Z]/.test(confirmPassword)) strength += 25
        if (/\d/.test(confirmPassword)) strength += 25
        setProgressTwo(strength)
    }, [confirmPassword])


    return (
        <div className="flex flex-col justify-center items-center p-5 gap-5">

            <ul className="steps">
                <li className="step step-primary">Email Verify</li>
                <li className="step step-primary">OTP Verify</li>
                <li className="step step-primary">Set password</li>
            </ul>

            <div className="flex p-5 rounded-box hover:shadow-md shadow-sky-400 gap-4">
                {/* image */}
                <div className="hidden md:block">
                    <div className="flex items-center justify-center bg-base-100 rounded-2xl p-5 mt-4">
                        <Image
                            src={"/images/register_page01.png"}
                            alt="teacher-email-form"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-center m-5 ml-5 mr-5">

                    {/* passwordfiled form */}
                    <fieldset className="fieldset mt-2">
                        <h1 className="text-2xl">Set Password</h1>

                        <label className="label mt-5">Enter Password</label>
                        <input type="password" className="input validator bg-black/10" required placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <progress className="progress progress-primary" value={progressOne} max="100"></progress>

                        <label className="label">Confirm Password</label>
                        <input type="password" className="input validator bg-black/10" required placeholder="Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <progress className="progress progress-primary" value={progressTwo} max="100"></progress>

                        <Link href={"/parent-login"} className="btn btn-ghost btn-outline mt-5 mb-5 hover:shadow-md shadow-green-500">Submit</Link>

                    </fieldset>
                </div>
            </div>
        </div>
    )
}