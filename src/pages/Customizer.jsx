import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Experience } from '../components/Experience';
import { UI } from '../components/UI';

const Customizer = () => {
  return (
    <div className="relative flex w-full outline-10 -outline-offset-4 outline-blue-600 overflow-hidden">
      <UI />
      <Canvas camera={{ position: [0, 5, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Customizer;
