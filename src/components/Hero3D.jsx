import { useRef, useState, useEffect } from 'react'
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="hero-3d-box">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <group position={isMobile ? [0, 0.2, -1.2] : [1.5, 0, 0]}>
          <AnimatedTorusKnot />
        </group>
      </Canvas>
    </div>
  )
}
