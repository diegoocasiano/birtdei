import fs from 'fs/promises';

async function numberVersionBuild() {
  const packageJsonContent = await fs.readFile('./package.json', 'utf8');
  const packageJson = JSON.parse(packageJsonContent);

  const currentVersion = packageJson.buildVersion || 0;

  // Incrementa el número de versión
  const numberVersion = currentVersion + 1;

  // Actualiza o crea (si no existe) el campo buildVersion en package.json
  packageJson.buildVersion = numberVersion;

  // Guarda el archivo package.json
  await fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2)); // se pone el 2 solo para que el formato json sea ordenado y no todo en una línea (más legible para el humano)
  // Mensaje en la terminal
  console.log(`Number version: ${numberVersion}`);
  
  return numberVersion; // Devuelve el valor de nextVersion
}

export default numberVersionBuild;
