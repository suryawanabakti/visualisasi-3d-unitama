import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/Components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Users } from "lucide-react";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";

export default function Dashboard({ auth, users }: PageProps<{ users: any }>) {
    const COLORS = ["#0088FE", "#00C49F"];

    const data01 = [
        { name: "Male", value: 400 },
        { name: "Female", value: 300 },
    ];
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Dashboard</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </>
            }
        >
            <Head title="Dashboard" />

            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Users
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                +{users.count}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                +{users.countFromLastYear} from last year
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium">
                                Gender with pie chart
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <PieChart width={300} height={300}>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={data01}
                                    fill="#8884d8"
                                >
                                    {data01.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
