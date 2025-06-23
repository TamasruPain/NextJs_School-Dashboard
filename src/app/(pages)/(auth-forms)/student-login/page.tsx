
import Image from "next/image";
import Link from "next/link";

export default function ParentLoginPage() {
    return (
        <div className="flex flex-col justify-center items-center p-5 gap-5">

            <div className="flex p-5 rounded-box  hover:shadow-md shadow-sky-400 gap-5">
                {/* image */}
                <div className="hidden md:block">
                    <div className="flex items-center justify-center bg-base-100 rounded-2xl p-5 mt-4">
                        <Image
                            src={"/images/register_page01.png"}
                            alt="teacher-email-form"
                            width={320}
                            height={320}
                        />
                    </div>
                </div>
                <fieldset className="fieldset p-5 w-full md:w-[50%]">
                    <legend className="fieldset-legend text-2xl mb-6">Student Login</legend>
                    <div>
                        <label className="floating-label mb-5">
                            <input className="input validator  bg-black/10" type="email" required placeholder="mail@site.com"/>
                            <span>Email</span>
                        </label>
                        <label className="floating-label">
                            <input type="password" className="input validator  bg-black/10" required placeholder="Password" minLength={8}/>
                            <span>
                                Password
                            </span>
                        </label>
                    </div>

                    <Link href={"/Student-Dashboard/student"} className="btn btn-outline btn-ghost mt-10 mb-2 hover:shadow-md shadow-green-400">
                        Login
                    </Link>
                    <div className="flex justify-center mt-4">
                        <a href="/forgot-password" className="">
                            <p>Forgot Password? <span className="text-blue-600"> Click here</span> </p>
                        </a>
                    </div>
                    <div>
                        <div className="flex justify-center mt-2">
                            <Link href="/student-emailForm" className="">
                                <p>Having Problem while Login<span className="text-blue-600"> Click here to Report</span></p>
                            </Link>
                        </div>
                    </div>
                </fieldset>
            </div>

        </div>
    )
}