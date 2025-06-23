"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import Link from "next/link"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import Image from "next/image"


const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

export default function ParentOTPForm() {

    const [progress, setProgress] = useState(0)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })

    // otp pregress---------------------------
    const pinValue = form.watch("pin")

    useEffect(() => {
        const length = pinValue?.length || 0
        setProgress((length / 6) * 100)
    }, [pinValue])
    // ---------------------------------------

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast.success("OTP submitted: " + data.pin)
    }

    return (
        <div className="flex flex-col justify-center items-center p-5 gap-5">

            <ul className="steps">
                <li className="step step-primary">Email Verify</li>
                <li className="step step-primary">OTP Verify</li>
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

                {/* otp form */}
                <div className="flex items-center justify-center m-5 ml-5 mr-5">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="mb-6">
                                <h1 className="text-2xl">
                                    One-Time Password
                                </h1>
                            </div>
                            <div className="mt-3">
                                <span className="text-sm">
                                    Please enter the OTP sent to your email.
                                </span>
                            </div>

                            <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <InputOTP maxLength={6} {...field}>
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                    <InputOTPSlot index={2} />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={3} />
                                                    <InputOTPSlot index={4} />
                                                    <InputOTPSlot index={5} />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <progress className="progress progress-primary" value={progress} max="100"></progress>
                            <Link href={"/parent-passwordForm"} className="btn btn-outline btn-ghost hover:shadow-md shadow-green-500 w-full" type="submit">Submit</Link>
                        </form>
                    </Form>
                </div>
            </div>
        </div>

    )
}
