import React,{useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture,Text } from '@react-three/drei';
import * as THREE from 'three'
import WorldMap from "../assets/WONO_images/img/WorldGlobeNew.png"

const RotatingGlobe = () => {
    const globeRef = useRef();
    const texture = useTexture(WorldMap);

    useFrame(() => {
        if (globeRef.current) {
          globeRef.current.rotation.y += 0.002;
        }
      });

      // Function to convert latitude and longitude to spherical coordinates
  const latLonToPosition = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return [
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta),
    ];
  };

  
    
  return (
    <>
    <mesh ref={globeRef} >
    <sphereGeometry args={[5, 50, 50]} />
    <meshBasicMaterial map={texture} />
  </mesh>
  
   </>
  )
}

export default RotatingGlobe