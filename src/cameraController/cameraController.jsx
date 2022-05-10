import React, { Fragment } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';

const CameraController = () => {
  const [cameraXpos, setCameraXpos] = React.useState(30);
  const [cameraYpos, setCameraYpos] = React.useState(-10);
  const [cameraZpos, setCameraZpos] = React.useState(9);

  useFrame(({ clock, camera }) => {
    const speed = 0.5;
    const time = clock.getElapsedTime() / 10;
    setCameraXpos(30 + 10 * Math.cos(time * speed));
    setCameraZpos(-40 + 3 * Math.sin(time * speed));
    setCameraYpos(-40 + 6 * Math.cos(time * speed));
    camera.rotateY(Math.sin(10 / 10000));
  });

  useThree(({ camera, scene }) => {
    camera.position.set(cameraXpos, cameraYpos, cameraZpos);

    const fogNear = 7;
    const fogFar = 30;
    const fogColor = new THREE.Color(0x2c3bf8);

    scene.fog = new THREE.Fog(fogColor, fogNear, fogFar);
    scene.background = fogColor;
  });

  return <Fragment></Fragment>;
};

export default CameraController;
