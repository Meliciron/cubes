import React from 'react';
import './App.css';

import CameraController from './cameraController/cameraController';
import Scene from './scene/scene';
import Cube from './cube/cube';

function App() {
  const [cubeColor, setCubeColor] = React.useState('#63f4f9');
  const cubeSize = [3, 3, 3];
  const columns = Math.floor(window.innerWidth / 278);
  const gap = 7;
  const cubesArray = [];

  React.useEffect(() => {
    for (let x = 0; x < columns + 10; x++) {
      const zeroX = -9.4;
      for (let y = 0; y < columns + 10; y++) {
        const zeroY = 5;
        for (let z = 0; z < columns + 10; z++) {
          const zeroZ = 0;
          cubesArray.push(
            <Cube
              key={x + y + Math.random()}
              position={[zeroX + gap * x, zeroY - gap * y, zeroZ - gap * z]}
              size={cubeSize}
              color={cubeColor}
            />
          );
        }
      }
    }
  }, []);

  return (
    <div className="app">
      <Scene>
        <CameraController />
        <ambientLight intensity={0.1} color="white" />
        <directionalLight
          castShadow
          position={[0, 0, 130]}
          intensity={1}
          color="white"
        />
        <directionalLight
          castShadow
          position={[0, -130, 0]}
          intensity={0.5}
          color="white"
        />
        <directionalLight
          castShadow
          position={[0, 130, 0]}
          intensity={0.5}
          color="white"
        />
        <directionalLight
          castShadow
          position={[-130, 0, 0]}
          intensity={0.5}
          color="white"
        />
        <directionalLight
          castShadow
          position={[130, 0, 0]}
          intensity={0.5}
          color="white"
        />
        {cubesArray}
      </Scene>
    </div>
  );
}

export default App;
