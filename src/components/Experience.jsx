import { OrbitControls, useGLTF } from '@react-three/drei';
import { useZStore } from '../store/useZStore';

const Model = ({ path, position = [0, 0, 0], scale = 1 }) => {
  const { scene } = useGLTF(path);

  return <primitive object={scene.clone()} position={position} scale={scale} />;
};

export const Experience = () => {
  const { selectedAssets, assetProperties } = useZStore();

  const selectedHeadVariant = assetProperties.head.find((variant) => variant.id === selectedAssets.head) ?? assetProperties.head[0];
  const selectedBodyVariant = assetProperties.body.find((variant) => variant.id === selectedAssets.body) ?? assetProperties.body[0];

  return (
    <>
      <color attach="background" args={['#0f172a']} />
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 4, 5]} intensity={2} />
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI * 0.9} minPolarAngle={Math.PI * 0.2} />

      {selectedHeadVariant && (
        <Model
          path={selectedHeadVariant.url}
          position={[selectedHeadVariant.position.x, selectedHeadVariant.position.y, selectedHeadVariant.position.z]}
          scale={1}
        />
      )}
      {selectedBodyVariant && (
        <Model
          path={selectedBodyVariant.url}
          position={[selectedBodyVariant.position.x, selectedBodyVariant.position.y, selectedBodyVariant.position.z]}
          scale={1}
        />
      )}
    </>
  );
};
