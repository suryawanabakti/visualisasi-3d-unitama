import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps, User } from "@/types";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/Components/ui/breadcrumb";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import PaginationComponent from "@/Components/PaginationComponent";

export default function Users({ auth, users }: PageProps<{ users: any }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Users</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </>
            }
        >
            <Head title="Users" />

            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Users</CardTitle>
                        <CardDescription>
                            Manage your users and view their activity
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="w-full">
                            <div className="flex justify-between py-4">
                                <Input
                                    placeholder="Search..."
                                    className="max-w-sm"
                                />
                                <div className="hidden sm:table-cell">
                                    Total : {users.meta.total}
                                </div>
                            </div>
                            <div className="">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead className="hidden sm:table-cell">
                                                Email
                                            </TableHead>
                                            <TableHead className="hidden sm:table-cell">
                                                Roles
                                            </TableHead>
                                            <TableHead className="hidden sm:table-cell">
                                                Created At
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {users.data.map((user: User) => (
                                            <TableRow
                                                key={user.id}
                                                className="hover:cursor-pointer hover:bg-slate-200"
                                            >
                                                <TableCell className="text-nowrap">
                                                    {user.name}
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    {user.email}
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    {user.roles.map(
                                                        (role: any) => {
                                                            return role.name;
                                                        }
                                                    )}
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    {user.created_at}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                        <PaginationComponent
                            links={users.meta.links}
                            currentPage={users.meta.current_page}
                        />
                    </CardContent>
                </Card>
            </main>
        </AuthenticatedLayout>
    );
}
