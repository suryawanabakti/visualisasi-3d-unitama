import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/Components/ui/breadcrumb";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Card, CardContent } from "@/Components/ui/card";

export default function Reports({
    auth,
    absensi,
}: PageProps<{ absensi: any }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Laporan</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </>
            }
        >
            <Head title="Laporan" />

            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Tanggal</TableHead>
                                    <TableHead>Pegawai</TableHead>
                                    <TableHead>Jam Masuk</TableHead>
                                    <TableHead>Jam Pulang</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {absensi.data.map((data: any) => {
                                    return (
                                        <TableRow>
                                            <TableCell>
                                                {data.created_at}
                                            </TableCell>
                                            <TableCell>
                                                {data.user.name}
                                            </TableCell>
                                            <TableCell>
                                                {data.waktu_masuk}
                                            </TableCell>
                                            <TableCell>
                                                {data.waktu_pulang}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </AuthenticatedLayout>
    );
}
