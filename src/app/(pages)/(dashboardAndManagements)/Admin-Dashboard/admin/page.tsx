"use client"
import UsersCard from "@/components/usersCard";
import EventCalendar from "@/components/calendarCard";
import CountChart from "@/components/studentsChart";
import AttandanceChart from "@/components/attendanceChart";
import AnnouncementsCard from "@/components/announcementCard";
import TeachersCard from "@/components/teachersCard";
import AdminDashboardHeader from "@/components/dashboardHeader/AdminHeader";



export default function AdminDashboardPage() {

    const LocalTeacherDataUrl = "/Admin-Dashboard/manage-teachers";

    const LocalAnnouncementUrl = "/Admin-Dashboard/manage-announcements";

    return (
        <div className="h-screen overflow-scroll">
            {/* Heading of dashboard */}
            <AdminDashboardHeader />
            {/* userCards, Rightside bar */}
            {/* ---------------------------------------------------------------------------- */}
            <div className="flex backdrop-blur-sm bg-black/10 rounded-2xl shadow-lg p-2 mt-2">
                <div className="flex flex-col gap-5 m-2 
                    w-full sm:w-[60%] md:w-[60%] lg:w-[70%] xl:w-[80%]">
                    {/* user Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 
                                    gap-4 
                                    ">
                        <UsersCard type="Teachers" count={50} />
                        <UsersCard type="Students" count={1000} />
                        <UsersCard type="Parents" count={995} />
                        <UsersCard type="Staff Members" count={100} />
                    </div>
                    {/* charts */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 p-1">
                        <div className="xl:w-[100%]">
                            <CountChart />
                        </div>
                        <div className="xl:w-[185%]">
                            <AttandanceChart />
                        </div>
                    </div>
                    <div className="block sm:hidden">
                        <AnnouncementsCard urlData={LocalAnnouncementUrl} />
                    </div>
                    <div className="hidden lg:block xl:block ">
                        <TeachersCard urlData={LocalTeacherDataUrl} />
                    </div>
                </div>

                {/* announcement, Event  */}
                <div className="flex flex-col gap-5 m-2
                                w-[0%] sm:w-[50%] md:w-[60%] lg:w-[50%] xl:w-[30%]
                                ">
                    <div className="hidden sm:block">
                        <EventCalendar />
                    </div>

                    <div className="hidden sm:block">
                        <AnnouncementsCard urlData={LocalAnnouncementUrl} />
                    </div>
                </div>
            </div>
            {/* ---------------------------------------------------------------------------- */}
        </div>
    )
}
