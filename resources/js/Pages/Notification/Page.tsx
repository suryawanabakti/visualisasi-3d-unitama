import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Head, Link } from "@inertiajs/react";
export default function Page({
    auth,
    notifications,
}: PageProps<{ notifications: any }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <Breadcrumb className="hidden md:flex">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={route("dashboard")}>Dashboard</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Notification</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            }
        >
            <Head title="Notification" />
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                {notifications.data.map((data: any) => {
                    return (
                        <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ">
                            <div className="flex w-full flex-col gap-1">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="font-semibold">
                                            {data.from.name}
                                        </div>
                                    </div>
                                    <div className="ml-auto text-xs text-foreground">
                                        {data.created_at}
                                    </div>
                                </div>
                                <div className="text-xs font-medium">
                                    {data.type}
                                </div>
                            </div>
                            <div className="line-clamp-2 text-xs text-muted-foreground">
                                {data.message}
                            </div>
                        </button>
                    );
                })}
            </main>
        </AuthenticatedLayout>
    );
}
