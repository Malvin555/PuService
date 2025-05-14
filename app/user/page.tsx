import Nav from "@/components/layout/user/nav";
import Footer from "@/components/layout/landing/footer";
import Link from "next/link";
import {
  PlusIcon,
  ClockIcon,
  BellIcon,
  UserIcon,
  MapPinIcon,
  CircleIcon as InformationCircleIcon,
  CalendarIcon,
  ChevronRightIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "PuService - User Dashboard",
  description: "User dashboard page",
};

export default function UserPage() {
  return (
    <>
      <Nav />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, Malvin!
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum id
              quos temporibus? Neque, maxime molestias tenetur dolores
              doloremque repudiandae cum!
            </p>
          </div>

          {/* Quick Actions */}
          <h2 className="text-xl font-semibold text-foreground mb-5">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            <Link href="user/reports/new" className="block group">
              <div className="bg-card overflow-hidden shadow-sm rounded-lg border border-border hover:border-primary transition-colors duration-200">
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <PlusIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-foreground">
                    Send Report
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Submit a new report or incident
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/user/reports/history" className="block group">
              <div className="bg-card overflow-hidden shadow-sm rounded-lg border border-border hover:border-primary transition-colors duration-200">
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <ClockIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-foreground">
                    View History
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    See all your past reports
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/user/notifications" className="block group">
              <div className="bg-card overflow-hidden shadow-sm rounded-lg border border-border hover:border-primary transition-colors duration-200">
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <BellIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-foreground">
                    Notifications
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Check your latest updates
                  </p>
                </div>
              </div>
            </Link>

            <Link href="user/profile" className="block group">
              <div className="bg-card overflow-hidden shadow-sm rounded-lg border border-border hover:border-primary transition-colors duration-200">
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-foreground">
                    Edit Profile
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Update your account details
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Recent Report */}
          <h2 className="text-xl font-semibold text-foreground mb-5">
            Recent Reports
          </h2>
          <Card className="bg-background shadow-sm rounded-md border border-border hover:bg-muted-foreground/10 transition-colors py-4">
            <CardContent>
              <ul className="divide-y divide-border">
                <li className="rounded-md">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-primary truncate">
                      Report Title
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                        Resolved
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-muted-foreground">
                        <MapPinIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
                        123 Main Street
                      </p>
                      <p className="mt-2 flex items-center text-sm text-muted-foreground sm:mt-0 sm:ml-6">
                        <InformationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
                        Category Name
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground sm:mt-0">
                      <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
                      <p>
                        Submitted on <time>Jan 1, 2023</time>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* View All Reports Button */}
          <div className="text-center m-5">
            <Link
              href="/dashboard/user/report/history"
              className="inline-flex items-center px-4 py-2 border border-input shadow-sm text-sm font-medium rounded-md text-foreground bg-card hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              View All Reports
              <ChevronRightIcon className="ml-2 -mr-1 h-5 w-5 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
