import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../components/Experience';

const Customizer = () => {
  return (
    <div className="flex-col relative grow outline-3 -outline-offset-2">
      <div className="h-full w-full absolute outline-5 -outline-offset-5">
        <Canvas>
          <Experience />
        </Canvas>
      </div>
      <div className="flex left-0 top-50 outline-1 absolute">
        <div className="w-xs">Menu L</div>
      </div>
      <div className="flex h-1/16 justify-center inset-0 absolute">
        <div className="w-3xs">Mid</div>
      </div>
      <div className="flex w-xs right-0 top-50 outline-1 absolute">
        <div className="">
          Menu R<div>asrgdfoujh</div>
          <div>asrgdfoujh</div>
          <div>asrgdfoujh</div>
          <div>asrgdfoujh</div>
        </div>
      </div>
    </div>
  );
};

export default Customizer;
