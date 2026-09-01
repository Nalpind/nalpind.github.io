import { OrbitControls, useGLTF } from '@react-three/drei';
import { useZStore } from '../store/useZStore';

const Model = ({ path, position = [0, 0, 0], scale = 1 }) => {
  const { scene } = useGLTF(path);

  return <primitive object={scene.clone()} position={position} scale={scale} />;
};

export const Experience = () => {
  const { selectedAssets, assetProperties } = useZStore();

  const selectedTopVariant = assetProperties.top.find((variant) => variant.id === selectedAssets.top) ?? assetProperties.top[0];
  const selectedBotVariant = assetProperties.bot.find((variant) => variant.id === selectedAssets.bot) ?? assetProperties.bot[0];

  return (
    <>
      <color attach="background" args={['#0f172a']} />
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 4, 5]} intensity={2} />
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI * 0.9} minPolarAngle={Math.PI * 0.2} />

      {selectedTopVariant && (
        <Model path={selectedTopVariant.texture} position={[0, 0.8, 0]} scale={1.3} />
      )}
      {selectedBotVariant && (
        <Model path={selectedBotVariant.texture} position={[0, -0.6, 0]} scale={1.3} />
      )}
    </>
  );
};
