"use client"
import EventCalendar from "@/components/calendarCard";
import CountChart from "@/components/studentsChart";
import AnnouncementsCard from "@/components/announcementCard";
import ClassesCard from "@/components/classesCard";
import LessonsCard from "@/components/lessonsCard";
import AssignmentsCard from "@/components/assignmentCard";
import ParentDashboardHeader from "@/components/dashboardHeader/ParentHeader";



export default function ParentDashboardPage() {

    const LocalParentsClassesUrl = "/Parent-Dashboard/view-classes";
    const LocalParentsAnnouncementUrl = "/Parent-Dashboard/view-announcements";
    const LocalParentsLessonsUrl = "/Parent-Dashboard/view-lessons";
    const LocalParentsAssignmentsUrl = "/Parent-Dashboard/view-assignments";


    return (
        <div className="h-screen overflow-scroll">
            {/* Heading of dashboard */}
            <ParentDashboardHeader />
            {/* userCards, Rightside bar */}
            {/* ---------------------------------------------------------------------------- */}
            <div className="backdrop-blur-sm bg-black/10 rounded-2xl shadow-lg p-2 mt-2">
                <div className="flex rounded-2xl gap-2 ">

                    <div className="w-[100%] sm:w-[100%] md:w-[65%] lg:w-[75%] xl:w-[75%]">
                        {/* charts */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 
                                        gap-5 p-2">
                            <CountChart />
                            <LessonsCard urlData={LocalParentsLessonsUrl} />
                            <ClassesCard urlData={LocalParentsClassesUrl} />
                            <AssignmentsCard urlData={LocalParentsAssignmentsUrl} />
                        </div>
                    </div>

                    {/* calendar, announcement */}
                    <div className="flex flex-col w-[0%] sm:w-[0%] md:w-[55%] lg:w-[30%] xl:w-[30%]  gap-5 m-2">
                        <div className="hidden md:block">
                            <EventCalendar />
                        </div>
                        <div className="hidden md:block">
                            <AnnouncementsCard urlData={LocalParentsAnnouncementUrl} />
                        </div>
                    </div>

                </div>
                {/* ---------------------------------------------------------------------------- */}
            </div>
        </div>

    )
}
