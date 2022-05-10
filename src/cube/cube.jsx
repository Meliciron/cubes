import React from 'react';

const Cube = ({ position, size, color }) => {
  return (
    <mesh receiveShadow castShadow position={position}>
      <boxBufferGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Cube;
