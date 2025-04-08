import React,{Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls,useTexture,Html} from '@react-three/drei'
import * as THREE from 'three';

const markers = [
    { position: [1.5, 0.5, -1.0], label: 'USA' },
    { position: [1.7, 0.3, 1.2], label: 'Germany' },
    { position: [1.6, 0.4, 1.0], label: 'UK' },
    { position: [-0.8, -0.5, 1.5], label: 'Brazil' },
    { position: [0.5, -1.0, 1.2], label: 'South Africa' },
    { position: [1.0, 0.2, 0.5], label: 'Dubai' },
    { position: [1.2, 0.8, 0.8], label: 'India' },
    { position: [1.3, 0.5, 1.0], label: 'Sri Lanka' },
    { position: [1.4, 0.5, 1.1], label: 'Nepal' },
    { position: [1.5, 0.7, 0.9], label: 'Malaysia' },
    { position: [1.8, 0.9, 0.6], label: 'Japan' },
  ];

  function Globe({ markers }) {
    const globeTexture = useTexture('https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png?width=636&amp;height=636, https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png x2');
  
    return (
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial map={globeTexture}  />
        {markers.map((marker, index) => (
          <group key={index} position={marker.position}>
            <mesh scale={[0.03, 0.03, 0.03]}>
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color="red" />
            </mesh>
            <Html distanceFactor={10}>
              <div style={{ color: 'white', background: 'black', padding: '2px 4px', borderRadius: '3px' }}>
                {marker.label}
              </div>
            </Html>
          </group>
        ))}
      </mesh>
    );
  }

const GlobeWithMarkers = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 2, 2]} />
    <Suspense fallback={null}>
      <Globe markers={markers} />
    </Suspense>
    <OrbitControls enableZoom={false} />
  </Canvas>
  )
}

export default GlobeWithMarkers