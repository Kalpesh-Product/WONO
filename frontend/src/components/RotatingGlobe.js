import React,{useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture,Text,Plane} from '@react-three/drei';
import * as THREE from 'three'
import WorldMap from "../assets/greenLandscapeWhiteBackground.png"

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

  
  const indiaPosition = latLonToPosition(1.5937, 110.9629, 5);  

   // Rotation to keep the text upright
   const getLabelRotation = (lat, lon) => {
    const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon - 90) * (Math.PI / 180);
        return [0,-500,0];
};

    const getLabelRotationUsa = (lat, lon)=> {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon - 90) * (Math.PI / 180);
      return [0.2, -45,-63];
    }

    const getLabelRotationbrazil = (lat,lon) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon - 90) * (Math.PI / 180);
      return [1, -50,0];
    }

    const getLabelRotationjapan = (lat,lon) =>{
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon - 90) * (Math.PI / 180);
      return [0, 60,0];

    }

    const getLabelRotationGermany = (lat,lon) =>{
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon - 90) * (Math.PI / 180);
      return [0, -61,0];

    }

    const getLabelRotationmalaysia = (lat,lon) =>{
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon - 90) * (Math.PI / 180);
      return [0, 66,0];

    }

    

  const indiaLabelRotation = getLabelRotation(1.5937, 110.9629);

  //position for USA 
  const usaPosition = latLonToPosition(25.3781, -60.4360, 5);
  const usaLabelRotation = getLabelRotationUsa(25.3781, -60.4360);
  
  //position for Brazil
  const brazilPosition = latLonToPosition(-45.2350,-125.9253, 5);
  const brazilLabelPosition = getLabelRotationbrazil(-45.2350,-125.9253);
   
  //position for japan
  const japanPosition = latLonToPosition(20.2048,52.2529,5);
  const japanLabelPosition = getLabelRotationjapan(36.2048,138.2529);

  //position for Germany
  const germanyPosition = latLonToPosition(142.1657,-4.1545,5);
  const germanyLabelPosition = getLabelRotationGermany(142.1657,-4.1545);
  //position for Malaysia
  const malaysiaPosition = latLonToPosition(-19.2105,88.9758,5);
  const malaysiaLabelPosition = getLabelRotationmalaysia(-19.2105,88.9758);
  

  return (
    <>
    <mesh ref={globeRef} >
    <sphereGeometry args={[5, 50, 50]} />
    <meshBasicMaterial map={texture} />

    {/* Marker for India */}
    <mesh position={indiaPosition}>
                <sphereGeometry args={[0.1, 32, 32]} />
                <meshBasicMaterial color="red" />
    </mesh>

    {/* Background for the text */}
<Plane
    position={[...indiaPosition.map((coord) => coord * 1.1), -0.01]} // Slightly behind the text
    rotation={indiaLabelRotation}
    args={[2, 1]}
     // Adjust dimensions to match the text size
>
    <meshBasicMaterial color="white" opacity={0.8} transparent/>
</Plane>

            {/* Label for India */}
           
            <Text
                position={indiaPosition.map((coord, index) => coord * 1.1)}
                fontSize={0.5}
                color="black"
                anchorX="center"
                anchorY="middle"
                rotation={indiaLabelRotation}
                fontStyle='bold'
                fontWeight='600'
            >
               India
            </Text>
            {/* Usa position */}
            <mesh position={usaPosition}>
                <sphereGeometry args={[0.1, 32, 32]} />
                <meshBasicMaterial color="red" />
           </mesh>

           <Plane
    position={[...usaPosition.map((coord) => coord * 1.1), -0.01]} // Slightly behind the text
    rotation={usaLabelRotation}
    args={[2, 1]}
     // Adjust dimensions to match the text size
>
    <meshBasicMaterial color="white" opacity={0.8} transparent/>
</Plane>


           <Text
                position={usaPosition.map((coord, index) => coord * 1.1)}
                fontSize={0.5}
                color="black"
                anchorX="center"
                anchorY="middle"
                rotation={usaLabelRotation}
                fontStyle='bold'
                fontWeight='600'
            >
               USA
            </Text>
   {/* Usa end */}
   

   {/* Brazil */}
   <mesh position={brazilPosition}>
                <sphereGeometry args={[0.1, 32, 32]} />
                <meshBasicMaterial color="red" />
    </mesh>
    <Plane
    position={[...brazilPosition.map((coord) => coord * 1.1), -0.01]} // Slightly behind the text
    rotation={brazilLabelPosition}
    args={[2, 1]}
     // Adjust dimensions to match the text size
>
    <meshBasicMaterial color="white" opacity={0.8} transparent/>
</Plane>
<Text
                position={brazilPosition.map((coord, index) => coord * 1.1)}
                fontSize={0.5}
                color="black"
                anchorX="center"
                anchorY="middle"
                rotation={brazilLabelPosition}
                fontStyle='bold'
                fontWeight='600'
            >
               Brazil
            </Text>
            {/* End brazil */}
            {/* Japan */}
            <mesh position={japanPosition}>
                <sphereGeometry args={[0.1, 32, 32]} />
                <meshBasicMaterial color="red" />
            </mesh>
            <Plane
    position={[...japanPosition.map((coord) => coord * 1.1), -0.01]} // Slightly behind the text
    rotation={japanLabelPosition}
    args={[2, 1]}
     // Adjust dimensions to match the text size
>
    <meshBasicMaterial color="white" opacity={0.8} transparent/>
</Plane>
<Text
                position={japanPosition.map((coord, index) => coord * 1.1)}
                fontSize={0.5}
                color="black"
                anchorX="center"
                anchorY="middle"
                rotation={japanLabelPosition}
                fontStyle='bold'
                fontWeight='600'
            >
               Japan
            </Text>
      {/* End japan */}

      {/* Germany */}
      <mesh position={germanyPosition}>
                <sphereGeometry args={[0.1, 32, 32]} />
                <meshBasicMaterial color="red" />
    </mesh>
    <Plane
    position={[...germanyPosition.map((coord) => coord * 1.1), -0.01]} // Slightly behind the text
    rotation={germanyLabelPosition}
    args={[2, 1]}
     // Adjust dimensions to match the text size
>
    <meshBasicMaterial color="white" opacity={0.8} transparent/>
</Plane>
<Text
                position={germanyPosition.map((coord, index) => coord * 1.1)}
                fontSize={0.5}
                color="black"
                anchorX="center"
                anchorY="middle"
                rotation={germanyLabelPosition}
                fontStyle='bold'
                fontWeight='600'
            >
               Germany
            </Text>
      {/* End Germany */}
      {/* Malaysia */}
      <mesh position={malaysiaPosition}>
                <sphereGeometry args={[0.1, 32, 32]} />
                <meshBasicMaterial color="red" />
    </mesh>
    <Plane
    position={[...malaysiaPosition.map((coord) => coord * 1.1), -0.01]} // Slightly behind the text
    rotation={malaysiaLabelPosition}
    args={[2, 1]}
     // Adjust dimensions to match the text size
>
    <meshBasicMaterial color="white" opacity={0.8} transparent/>
</Plane>
<Text
                position={malaysiaPosition.map((coord, index) => coord * 1.1)}
                fontSize={0.5}
                color="black"
                anchorX="center"
                anchorY="middle"
                rotation={malaysiaLabelPosition}
                fontStyle='bold'
                fontWeight='600'
            >
               Malaysia
            </Text>

            
  </mesh>
  
   </>
  )
}

export default RotatingGlobe