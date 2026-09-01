import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Experience } from '../components/Experience';
import { UI } from '../components/UI';

const Customizer = () => {
  return (
    <div className="relative flex h-[75vh] w-full overflow-hidden">
      <UI />
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="h-full w-full">
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Customizer;
