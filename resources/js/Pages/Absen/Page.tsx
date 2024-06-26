import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/Components/ui/breadcrumb";
import { FormEventHandler, useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import dayjs from "dayjs";
export default function Absen({ auth, absensi }: PageProps<{ absensi: any }>) {
    const [currentTime, setCurrentTime] = useState(dayjs());
    const { data, setData, processing, reset, post } = useForm({
        latitude: "",
        longitude: "",
    });
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError]: any = useState(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: any) => {
                    setData({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    setError(null);
                },
                (error: any) => {
                    setError(error.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    const submit = () => {
        post(route("absen.store"));
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(dayjs());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Absen</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </>
            }
        >
            <Head title="Absen" />
            {error && (
                <Alert variant="destructive">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Your session has expired. Please log in again.
                    </AlertDescription>
                </Alert>
            )}

            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-1">
                    <Button type="button" onClick={() => getLocation()}>
                        Dapatkan Lokasi ku
                    </Button>
                </div>
                {latitude && (
                    <div className="">
                        <div>
                            <b>Absen</b> <br />
                            <br />
                            <p>Nama : {auth.user.name}</p> <br />
                            <p>NIP : {auth.user.username}</p> <br />
                            <p>
                                Tanggal & Waktu Sekarang :
                                {currentTime.format("DD-MM-YYYY HH:mm:ss")}
                            </p>{" "}
                            <br />
                            {absensi?.waktu_masuk && (
                                <p>Absen masuk : {absensi.waktu_masuk}</p>
                            )}
                            {absensi?.waktu_masuk && <br />}
                            {absensi?.waktu_pulang && (
                                <p>Absen pulang : {absensi.waktu_pulang}</p>
                            )}
                            {absensi ? (
                                <Button
                                    className="mt-5"
                                    onClick={() => submit()}
                                >
                                    Absen Pulang
                                </Button>
                            ) : (
                                <Button
                                    className="mt-5"
                                    onClick={() => submit()}
                                >
                                    Absen Masuk
                                </Button>
                            )}
                        </div>
                        <div>
                            <b>Lokasi kamu sekarang :</b>
                            <p>
                                Jika lokasi kamu tidak sesuai, disarankan
                                menggunakan device Mobile Phone 😁
                            </p>{" "}
                            <br />
                            <iframe
                                width="100%"
                                height="100%"
                                id="gmap_canvas"
                                src={`https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`}
                            ></iframe>
                        </div>
                    </div>
                )}
            </main>
        </AuthenticatedLayout>
    );
}
