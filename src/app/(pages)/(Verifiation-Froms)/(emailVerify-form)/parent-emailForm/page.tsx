"use client";
import Image from "next/image";
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
        <div className="flex flex-col justify-center items-center p-5 gap-5">

            <ul className="steps">
                <li className="step step-primary">Email Verify</li>
                <li className="step">OTP Verify</li>
                <li className="step">Set password</li>
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

                {/* Email form  */}
                <div className="flex items-center justify-center m-5 ml-5 mr-5">
                    <fieldset className="fieldset p-2 w-full">
                        <h1 className="text-2xl items-center">Verify Your Email</h1>
                        <label className="label mt-10">Email</label>
                        <input className="input validator bg-black/10" type="email" required placeholder="mail@site.com"
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
        </div>
    )
}