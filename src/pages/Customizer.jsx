import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../components/Experience';
import { UI } from '../components/UI';

const Customizer = () => {
  return (
    // <div className="flex-col relative grow outline-3 -outline-offset-2">
    //     <div className="h-full w-full absolute outline-5 -outline-offset-5">
    //       <Canvas>
    //         <Experience />
    //       </Canvas>
    //     </div>
    //   </div>
    <main className="flex relative grow">
      <UI />
      <Canvas>
        <Experience />
      </Canvas>
    </main>
  );
};

export default Customizer;
