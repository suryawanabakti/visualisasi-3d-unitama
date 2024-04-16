import SimplePagination from "@/Components/SimplePagination";
import { Badge } from "@/Components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    File,
    ListFilter,
    MoreHorizontal,
    PlusCircle,
    RefreshCcwIcon,
    Search,
} from "lucide-react";
import { FormEventHandler } from "react";

export default function Users({
    auth,
    users,
    search,
}: PageProps<{ users: any; search?: string }>) {
    const { data, setData, get } = useForm({
        search: search ? search : "",
    });
    const submitSearch: FormEventHandler = (e) => {
        e.preventDefault();
        get(route("admin.users.index"));
    };
    const searchForm = (
        <form onSubmit={submitSearch}>
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                onChange={(e) => setData("search", e.target.value)}
                value={data.search}
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
        </form>
    );
    return (
        <AuthenticatedLayout
            user={auth.user}
            searchForm={searchForm}
            header={
                <>
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href={route("dashboard")}>
                                        Dashboard
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Users</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </>
            }
        >
            <Head title="Users" />

            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 ">
                <div className="flex items-center">
                    <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-7 gap-1"
                                >
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Filter
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>
                                    Active
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Draft
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Archived
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-7 gap-1"
                        >
                            <File className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Export
                            </span>
                        </Button>
                        <Button size="sm" className="h-7 gap-1" asChild>
                            <Link href={route("admin.users.create")}>
                                <PlusCircle className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Add User
                                </span>
                            </Link>
                        </Button>
                    </div>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Users</CardTitle>
                        <CardDescription>
                            {users.meta.from}-{users.meta.to} of{" "}
                            {users.meta.total} user
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className=""></TableHead>
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
                                        className=" hover:bg-slate-200"
                                    >
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        aria-haspopup="true"
                                                        size="icon"
                                                        variant="ghost"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">
                                                            Toggle menu
                                                        </span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="start">
                                                    <DropdownMenuLabel>
                                                        Actions
                                                    </DropdownMenuLabel>
                                                    <DropdownMenuItem>
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {user.name}
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {user.email}
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {user.roles.map((role: any) => {
                                                return (
                                                    <Badge
                                                        variant="outline"
                                                        className="capitalize"
                                                    >
                                                        {role.name}
                                                    </Badge>
                                                );
                                            })}
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {user.created_at}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                    <CardFooter>
                        <SimplePagination
                            links={users.links}
                            search={search}
                            currentPage={users.meta.current_page}
                        />
                        {/* <PaginationComponent
                                links={users.meta.links}
                                currentPage={users.meta.current_page}
                            /> */}
                    </CardFooter>
                </Card>
            </main>
        </AuthenticatedLayout>
    );
}
