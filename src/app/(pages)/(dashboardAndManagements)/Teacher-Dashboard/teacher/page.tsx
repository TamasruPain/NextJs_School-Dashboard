"use client"
import EventCalendar from "@/components/calendarCard";
import CountChart from "@/components/studentsChart";
import AttandanceChart from "@/components/attendanceChart";

import AnnouncementsCard from "@/components/announcementCard";
import MessageCard from "@/components/messageCard";
import ClassesCard from "@/components/classesCard";
import TeacherHeader from "@/components/dashboardHeader/TeacherHeader";


export default function TeacherDashboardPage() {

    const LocalTeachersMessageUrl = "/Teacher-Dashboard/manage-messages";
    const LocalTeachersClassesUrl = "/Teacher-Dashboard/manage-classes";
    const LocalTeachersAnnouncementUrl = "/Teacher-Dashboard/manage-announcements";


    return (
        <div className="h-screen overflow-scroll">
            {/* Box-1: Heading of dashboard */}
            <TeacherHeader />
            {/* userCards, Rightside bar */}
            {/* ---------------------------------------------------------------------------- */}
            <div className="backdrop-blur-sm bg-black/10 rounded-2xl shadow-lg">
                <div className="flex rounded-2xl p-5 gap-5">
                    {/* user Card */}
                    <div className="flex flex-col w-[100%] md:w-[160%] lg:w-[120%] xl:w-[75%] gap-5">
                        {/* charts */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                            <ClassesCard urlData={LocalTeachersClassesUrl} />
                            <MessageCard urlData={LocalTeachersMessageUrl} />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 p-1">
                            <div className="xl:w-[100%]">
                                <CountChart />
                            </div>
                            <div className="xl:w-[205%]">
                                <AttandanceChart />
                            </div>
                        </div>
                    </div>

                    {/* announcement, Event  */}
                    <div className="flex flex-col w-[0%] md:w-[60%] lg:w-[60%] xl:w-[25%] gap-5">
                        <div className="hidden md:block">
                            <EventCalendar />
                        </div>
                        <div className="hidden md:block">
                            <AnnouncementsCard urlData={LocalTeachersAnnouncementUrl} />
                        </div>
                    </div>
                </div>
                {/* ---------------------------------------------------------------------------- */}
            </div>
        </div >
    )
}
