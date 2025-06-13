"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ParentEmailForm() {

    const [progress, setProgress] = useState(0);
    const [email, setEmail] = useState("")

    useEffect(() => {
        if (email.length === 0) {
            setProgress(0);
        } else if (email.length < 2) {
            setProgress(25)
        } else if (email.includes("@") && !email.includes(".com")) {
            setProgress(55);
        } else if (email.includes("@") && email.includes(".com")) {
            setProgress(100);
        }
    }, [email]);

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <ul className="steps">
                <li className="step step-primary">Email Verify</li>
                <li className="step">OTP Verify</li>
                <li className="step">Set password</li>
            </ul>

            <div className="backdrop-blur-xl rounded-box hover:shadow-md shadow-sky-400">

                {/* Email form  */}
                <fieldset className="fieldset p-6 w-70">
                    <h1 className="text-2xl">Verify Your Email</h1>
                    <label className="label  mt-10">Email</label>
                    <input className="input validator bg-black/10 w-full" type="email" required placeholder="mail@site.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <progress className="progress progress-primary" value={progress} max="100"></progress>
                    <div className="validator-hint">Enter valid email address</div>
                    <Link href={"/parent-OTPForm"} className="btn btn-outline btn-ghost mt-5 hover:shadow-md shadow-green-500" type="submit">Submit</Link>
                    <div className="flex items-center justify-center mt-5">
                        <p>Already have an account?{" "}
                            <Link href={"/parent-login"} className="text-sky-600">
                                Login
                            </Link>
                        </p>
                    </div>
                </fieldset>
            </div>
        </div>

    )
}