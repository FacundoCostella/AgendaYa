import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Proporciona la ruta a tu aplicación Next.js para cargar next.config.js y .env en tu entorno de prueba
  dir: './',
})

// Configuración personalizada de Jest que se pasa a Next.js
/** @type {import('jest').Config} */
const config = {
  // Añade más opciones de configuración personalizadas aquí si las necesitás
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig se exporta de esta manera para asegurar que next/jest pueda cargar la configuración de Next.js que es asíncrona
export default createJestConfig(config)