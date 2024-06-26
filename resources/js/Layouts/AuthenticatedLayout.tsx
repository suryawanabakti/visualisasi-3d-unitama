import { User } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import {
    Badge,
    Bell,
    Box,
    BoxIcon,
    CircleUser,
    Database,
    File,
    FileArchive,
    Fingerprint,
    Home,
    LineChart,
    ListOrdered,
    MapPin,
    Menu,
    Package,
    Package2,
    PanelLeft,
    Pickaxe,
    Search,
    Settings,
    ShoppingCart,
    Users,
    Users2,
} from "lucide-react";
import { PropsWithChildren, ReactNode, useEffect } from "react";

import { Button } from "@/Components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Toaster } from "@/Components/ui/sonner";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";
import { toast } from "sonner";
import { Input } from "@/Components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

export default function Authenticated({
    user,
    header,
    children,
    searchForm,
}: PropsWithChildren<{
    user: User;
    header?: ReactNode;
    searchForm?: ReactNode;
}>) {
    const { flash }: any = usePage().props;
    useEffect(() => {
        flash.message ? toast.success(flash.message) : "";
    }, [flash]);
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="">UNITAMA</span>
                        </Link>
                        <Button
                            variant="outline"
                            size="icon"
                            className="ml-auto h-8 w-8"
                        >
                            <Bell className="h-4 w-4" />
                            <span className="sr-only">
                                Toggle notifications
                            </span>
                        </Button>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <div className="mb-2">Home</div>
                            {user.roles[0].name == "admin" && (
                                <Link
                                    href={route("dashboard")}
                                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                        route().current("dashboard")
                                            ? "bg-muted"
                                            : "text-muted-foreground"
                                    } transition-all hover:text-primary`}
                                >
                                    <Home className="h-4 w-4" />
                                    Dashboard
                                </Link>
                            )}

                            {user.roles[0].name == "admin" && (
                                <Link
                                    href={route("admin.users.index")}
                                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                        route().current("admin.users.index")
                                            ? "bg-muted"
                                            : "text-muted-foreground"
                                    } transition-all hover:text-primary`}
                                >
                                    <Users className="h-4 w-4" />
                                    Pegawai
                                </Link>
                            )}

                            <Link
                                href={route("absen.index")}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                    route().current("absen.index")
                                        ? "bg-muted"
                                        : "text-muted-foreground"
                                } transition-all hover:text-primary`}
                            >
                                <MapPin className="h-4 w-4" />
                                Absen
                            </Link>

                            <Link
                                href={route("admin.reports.index")}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                    route().current("admin.reports.index")
                                        ? "bg-muted"
                                        : "text-muted-foreground"
                                } transition-all hover:text-primary`}
                            >
                                <FileArchive className="h-4 w-4" />
                                Laporan
                            </Link>
                            <div className="mt-5 mb-3">Visualisasi 3D</div>
                            <Link
                                href={route("visualisasi.kampus")}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                    route().current("visualisasi.kampus")
                                        ? "bg-muted"
                                        : "text-muted-foreground"
                                } transition-all hover:text-primary`}
                            >
                                Kampus
                            </Link>
                            <Link
                                href={route("visualisasi.aula")}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                    route().current("visualisasi.aula")
                                        ? "bg-muted"
                                        : "text-muted-foreground"
                                } transition-all hover:text-primary`}
                            >
                                Aula
                            </Link>
                            <Link
                                href={route("visualisasi.lt1")}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                    route().current("visualisasi.lt1")
                                        ? "bg-muted"
                                        : "text-muted-foreground"
                                } transition-all hover:text-primary`}
                            >
                                Lantai 1
                            </Link>
                            <Link
                                href={route("visualisasi.lt2")}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                    route().current("visualisasi.lt2")
                                        ? "bg-muted"
                                        : "text-muted-foreground"
                                } transition-all hover:text-primary`}
                            >
                                Lantai 2
                            </Link>
                            <Link
                                href={route("visualisasi.musholla")}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                    route().current("visualisasi.lt3")
                                        ? "bg-muted"
                                        : "text-muted-foreground"
                                } transition-all hover:text-primary`}
                            >
                                Lantai 3
                            </Link>
                            <Link
                                href={route("visualisasi.musholla")}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                    route().current("visualisasi.musholla")
                                        ? "bg-muted"
                                        : "text-muted-foreground"
                                } transition-all hover:text-primary`}
                            >
                                Musholla
                            </Link>
                            <Link
                                href={route("visualisasi.sekret2")}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                    route().current("visualisasi.sekret2")
                                        ? "bg-muted"
                                        : "text-muted-foreground"
                                } transition-all hover:text-primary`}
                            >
                                Sekret 2
                            </Link>
                        </nav>
                    </div>
                    <div className="mt-auto p-4"></div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                {user.roles[0].name == "admin" && (
                                    <Link
                                        href={route("admin.users.index")}
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <Users className="h-5 w-5" />
                                        Pegawai
                                    </Link>
                                )}
                                <Link
                                    href={route("dashboard")}
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Package2 className="h-6 w-6" />
                                    <span className="sr-only">UNITAMA</span>
                                </Link>
                                <Link
                                    href={route("dashboard")}
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>

                                <Link
                                    href={route("absen.index")}
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <MapPin className="h-5 w-5" />
                                    Absen
                                </Link>
                            </nav>
                            <div className="mt-auto">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Upgrade to Pro</CardTitle>
                                        <CardDescription>
                                            Unlock all features and get
                                            unlimited access to our support
                                            team.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button size="sm" className="w-full">
                                            Upgrade
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">{searchForm}</div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="rounded-full"
                            >
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">
                                    Toggle user menu
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href={route("profile.edit")}>
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href={route("notifications.index")}>
                                    Notifications
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>

            <Toaster />
        </div>
    );
}
