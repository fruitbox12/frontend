import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Routers from './routes';
import './tailwind.css';

function App() {
  return (
    <div className="w-full h-full">
      <Routers />
          <ChakraProvider>
          </ChakraProvider>

      

    </div>
  );
}

export default App;
// App.tsx
