import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AdminLoginPage() {
    return (
        <div className="">
            <div className="backdrop-blur-xl font-bold rounded-box hover:shadow-md shadow-sky-400">

                <fieldset className="fieldset p-5">

                    <legend className="fieldset-legend text-2xl mb-8">Admin Login</legend>

                    <div className="">
                        <label className="floating-label mb-5">
                            <input className="input validator bg-black/10" type="email" required placeholder="mail@site.com"

                            />
                            <span >Email</span>
                            <div className="validator-hint">Enter valid email address</div>
                        </label>
                        <label className="floating-label">
                            <input type="password" className="input validator bg-black/10" required placeholder="Password" minLength={8}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            />
                            <span>
                                Password
                            </span>
                            <p className="validator-hint">
                                Must be more than 8 characters, including
                                <br />At least one number
                                <br />At least one lowercase letter
                                <br />At least one uppercase letter
                            </p>
                        </label>
                    </div>

                    <Link href={"/Admin-Dashboard/admin"} className="btn btn-outline btn-ghost mt-2 mb-5 hover:shadow-md shadow-green-400">
                        Login
                    </Link>
                    <div className="flex justify-center mt-4">
                        <a href="/forgot-password" className="">
                            <p>Forgot Password?<span className="text-blue-600"> Click here</span></p>
                        </a>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}