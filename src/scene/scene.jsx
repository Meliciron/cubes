import React, { Fragment } from 'react';
import { Canvas } from 'react-three-fiber';

const Scene = ({ children }) => {
  const aspect = window.innerWidth / window.innerHeight;

  return (
    <Fragment>
      <Canvas>{children}</Canvas>
    </Fragment>
  );
};

export default Scene;
