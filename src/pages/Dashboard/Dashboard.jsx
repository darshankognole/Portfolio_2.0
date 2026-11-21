import React from 'react'
import Navbar from '../../components/Navbar'
import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'
import Particles from '@/components/Particles'

const Dashboard = () => {
  return (
    <div className="bg-black min-h-screen relative flex justify-center items-center">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={["#ffffff", "#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          glow={0.5}
          twinkle={0.3}
          moveParticlesOnHover
          hoverEffect="parallax"
          sizeRandomness={1}
          shape="circle"
          depthOfField={0}
          connections={false}
          connectionDistance={110}
          particleHoverFactor={1}
          hoverRadius={140}
          drift="none"
          driftSpeed={1}
          alphaParticles={false}
          disableRotation={false}
          cameraDistance={20}
          variation={0}
          opacity={1}
          clickBurst
          intro
          lightMode={false}
        />
      </div>
      <section className="absolute flex flex-col justify-center items-center">

        <header className="w-full bg-black/50 backdrop-blur-md">
          <Navbar />
          <Outlet />
        </header>

      </section>
    </div>
    
  )
}

export default Dashboard