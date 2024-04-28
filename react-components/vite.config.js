import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import numberVersionBuild from './numberVersionBuild.js';

export default async () => {
  const numberVersion = await numberVersionBuild();
  
  return defineConfig({
    plugins: [react()], // Esto te dice que transpiler estas usando. Al parecer ahora utilizamos Babel. Vite utiliza Babel para transpilar el código JavaScript de tu aplicación a JavaScript compatible con versiones anteriores.
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // Variable que almacena el modo del entorno: development or production
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      rollupOptions: {
        output: {
          entryFileNames: `index-v${numberVersion}.js`, 
          chunkFileNames: `index-v${numberVersion}.js`, 
          assetFileNames: `index-v${numberVersion}.[ext]`,
        },
      },
    },
  });
};
