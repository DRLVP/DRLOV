import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedTorusKnot() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
      
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <TorusKnot ref={meshRef} args={[10, 3, 100, 16]} scale={0.12}>
      <meshBasicMaterial 
        color="#a855f7" 
        wireframe={true} 
        transparent={true}
        opacity={0.6}
        side={THREE.DoubleSide}
      />
    </TorusKnot>
  )
}

export default function Hero3D() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <group position={[1.5, 0, 0]}>
          <AnimatedTorusKnot />
        </group>
      </Canvas>
    </div>
  )
}
