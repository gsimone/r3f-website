import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber'
import { OrbitControls, StandardEffects, Box } from 'drei'

function App() {
  return (
    <Canvas
      shadowMap
      colorManagement
      camera={{ position: [-4, 4, -4], far: 50 }}
      style={{
        background: "#121212"
      }}
    >
      <ambientLight />
      <spotLight
        intensity={2}
        position={[20, 20, 20]}
        shadow-bias={-0.00005}
        angle={Math.PI / 6}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
      <Box />
      <Suspense fallback={null}>
        <StandardEffects
          smaa
          bloom={{ luminanceThreshold: 0.99 }} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
