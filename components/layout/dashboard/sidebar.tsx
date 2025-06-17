import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import {
  HomeIcon,
  ClipboardIcon,
  ClockIcon,
  RefreshCcwIcon,
  CheckIcon,
  UsersIcon,
  BellIcon,
} from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  role: "admin" | "worker";
  user: { name: string } | null;
}

export default function Sidebar({ user, role }: SidebarProps) {
  const pathname = usePathname();

  if (!user?.name) return null;
  // Generate initials from name
  const initials = (() => {
    const parts = user.name.trim().split(" ");
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    } else {
      return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
    }
  })();

  const isAdmin = role === "admin";

  return (
    <div
      id="sidebar"
      className="bg-background border-r border-border fixed inset-y-0 left-0 z-30 w-64 md:w-64 sm:w-20 xs:w-16 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto shadow-sm flex flex-col"
    >
      {/* Logo */}
      <div className="flex items-center justify-center min-h-16 border-b border-border">
        <Link href={`/${role}`} className="flex items-center gap-2">
          <span className="text-2xl font-semibold text-primary tracking-tight hidden sm:inline">
            PuService
          </span>
          <Badge
            variant="outline"
            className="text-xs font-semibold text-muted-foreground px-2 py-0.5 hidden sm:inline"
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </Badge>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 sm:px-4 py-6 space-y-2">
        <ul className="space-y-1">
          <li>
            <Link
              href={`/${role}`}
              className={clsx(
                "flex items-center gap-3 px-2 sm:px-3 py-2 rounded-lg font-medium text-base transition-colors group",
                pathname === `/${role}`
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
              )}
            >
              <HomeIcon
                className={clsx(
                  "h-5 w-5 transition-colors",
                  pathname === `/${role}`
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-primary",
                )}
              />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          </li>
        </ul>

        <div className="mt-7">
          <h3 className="px-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 hidden sm:block">
            Reports
          </h3>
          <Separator className="my-2 hidden sm:block" />
          <ul className="space-y-1">
            <li>
              <Link
                href={`/${role}/reports`}
                className={clsx(
                  "flex items-center gap-3 px-2 sm:px-3 py-2 rounded-lg font-medium text-base transition-colors group",
                  pathname === `/${role}/reports`
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                )}
              >
                <ClipboardIcon
                  className={clsx(
                    "h-5 w-5 transition-colors",
                    pathname === `/${role}/reports`
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary",
                  )}
                />
                <span className="hidden sm:inline">All Reports</span>
              </Link>
            </li>

            {!isAdmin && (
              <>
                <li>
                  <Link
                    href={`/${role}/reports/pending`}
                    className={clsx(
                      "flex items-center gap-3 px-2 sm:px-3 py-2 rounded-lg font-medium text-base transition-colors group",
                      pathname.startsWith(`/${role}/reports/pending`)
                        ? "bg-yellow-100 text-yellow-700"
                        : "text-yellow-700 hover:bg-yellow-100 hover:text-yellow-700",
                    )}
                  >
                    <ClockIcon
                      className={clsx(
                        "h-5 w-5 transition-colors",
                        pathname.startsWith(`/${role}/reports/pending`)
                          ? "text-yellow-700"
                          : "text-yellow-500 group-hover:text-yellow-700",
                      )}
                    />
                    <span className="hidden sm:inline">Pending</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${role}/reports/in-progress`}
                    className={clsx(
                      "flex items-center gap-3 px-2 sm:px-3 py-2 rounded-lg font-medium text-base transition-colors group",
                      pathname.startsWith(`/${role}/reports/in-progress`)
                        ? "bg-blue-100 text-blue-700"
                        : "text-blue-700 hover:bg-blue-100 hover:text-blue-700",
                    )}
                  >
                    <RefreshCcwIcon
                      className={clsx(
                        "h-5 w-5 transition-colors",
                        pathname.startsWith(`/${role}/reports/in-progress`)
                          ? "text-blue-700"
                          : "text-blue-500 group-hover:text-blue-700",
                      )}
                    />
                    <span className="hidden sm:inline">In Progress</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${role}/reports/resolved`}
                    className={clsx(
                      "flex items-center gap-3 px-2 sm:px-3 py-2 rounded-lg font-medium text-base transition-colors group",
                      pathname.startsWith(`/${role}/reports/resolved`)
                        ? "bg-green-100 text-green-700"
                        : "text-green-700 hover:bg-green-100 hover:text-green-700",
                    )}
                  >
                    <CheckIcon
                      className={clsx(
                        "h-5 w-5 transition-colors",
                        pathname.startsWith(`/${role}/reports/resolved`)
                          ? "text-green-700"
                          : "text-green-500 group-hover:text-green-700",
                      )}
                    />
                    <span className="hidden sm:inline">Resolved</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="mt-7">
          <h3 className="px-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 hidden sm:block">
            Management
          </h3>
          <Separator className="my-2 hidden sm:block" />
          <ul className="space-y-1">
            <li>
              <Link
                href={`/${role}/users`}
                className={clsx(
                  "flex items-center gap-3 px-2 sm:px-3 py-2 rounded-lg font-medium text-base transition-colors group",
                  pathname.startsWith(`/${role}/users`)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                )}
              >
                <UsersIcon
                  className={clsx(
                    "h-5 w-5 transition-colors",
                    pathname.startsWith(`/${role}/users`)
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary",
                  )}
                />
                <span className="hidden sm:inline">User Management</span>
              </Link>
            </li>
            <li>
              <Link
                href={`/${role}/notifications`}
                className={clsx(
                  "flex items-center gap-3 px-2 sm:px-3 py-2 rounded-lg font-medium text-base transition-colors group",
                  pathname.startsWith(`/${role}/notifications`)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                )}
              >
                <BellIcon
                  className={clsx(
                    "h-5 w-5 transition-colors",
                    pathname.startsWith(`/${role}/notifications`)
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary",
                  )}
                />
                <span className="hidden sm:inline">Manage Notifications</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="border-t border-border p-2 sm:p-4">
        <div className="flex items-center px-2">
          <Avatar className="h-9 w-9">
            <AvatarImage src="" alt="User" />
            <AvatarFallback
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="ml-2 sm:ml-3">
            <p className="text-sm capitalize sm:text-base font-semibold hidden sm:block">
              {user.name}
            </p>
            <Link
              href={`/${role}/profile`}
              className="text-xs text-muted-foreground hover:text-primary transition-colors hidden sm:block"
            >
              View profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
