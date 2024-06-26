// src/components/Model.tsx
import React from "react";
import { useGLTF } from "@react-three/drei";

interface ModelProps {
    path: string;
}

const Model: React.FC<ModelProps> = ({ path }) => {
    const { scene, nodes, materials } = useGLTF(path);

    return <primitive object={scene} position={[0, -2, 0]} scale={[1, 1, 1]} />;
};

export default Model;
