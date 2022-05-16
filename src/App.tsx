import React from 'react';
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from '@mantine/core';

function App() {
  return (
    <div>
      <Button>Hello Mars!</Button>;
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
      <ImageIcon />
    </div>
  );
}

export default App;

