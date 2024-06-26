// src/components/Model.tsx
import React from "react";
import { useGLTF } from "@react-three/drei";

interface ModelProps {
    path: string;
}

const ModelLt2: React.FC<ModelProps> = ({ path }) => {
    const { scene, nodes, materials } = useGLTF(path);

    return (
        <primitive object={scene} position={[-2, -2, 1]} scale={[1, 1, 1]} />
    );
};

export default ModelLt2;
