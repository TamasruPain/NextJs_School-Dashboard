"use client"

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
        <div className="flex flex-col items-center justify-center gap-5">
            <ul className="steps">
                <li className="step step-primary">Email Verify</li>
                <li className="step step-primary">OTP Verify</li>
                <li className="step step-primary">Set password</li>
            </ul>
            <div className="backdrop-blur-xl rounded-box hover:shadow-md shadow-sky-400">
                {/* passwordfiled form */}
                <fieldset className="fieldset p-5 w-70">
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
    )
}