import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "@/Components/Model";
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
import { useEffect, useState } from "react";

export default function Aula({ auth }: PageProps) {
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
                <Canvas
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <OrbitControls minDistance={1} maxDistance={30} />
                    <Model path="/unitama/AULA.gltf" />
                </Canvas>
            </main>
        </AuthenticatedLayout>
    );
}

// return (
//     <Canvas style={{ width: "500px", height: "500px" }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <OrbitControls minDistance={2} maxDistance={2} />
//         <Model path="/shiba/scene.gltf" />
//     </Canvas>
// );
