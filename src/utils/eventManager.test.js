// src/utils/eventManager.test.js
import { crearTipoEvento } from './eventManager';

describe('US_013 - Creación básica de tipo de evento', () => {

  // Definimos una lista vacía para usar como base en nuestras pruebas
  let listaBase = [];

  beforeEach(() => {
    // Esto limpia la lista antes de cada test para que no se mezclen los datos
    listaBase = [];
  });

  // --- PRUEBA 1 (Escenario Principal) ---
  test('Debe crear el evento exitosamente y agregarlo a la lista (sin descripción)', () => {
    // PREPARAR
    const datosCorrectos = { nombre: 'Consulta de Rutina', duracion: 30 };
    
    // ACTUAR
    const resultado = crearTipoEvento(datosCorrectos, listaBase);

    // AFIRMAR
    expect(resultado.exito).toBe(true);
    expect(resultado.mensaje).toBe('Evento creado exitosamente.');
    expect(resultado.eventos.length).toBe(1); // La lista ahora tiene 1 elemento
    expect(resultado.eventos[0].nombre).toBe('Consulta de Rutina');
  });

  // --- PRUEBA 2 (Caso Negativo: Falta el nombre) ---
  test('Debe fallar si se intenta crear el evento con el nombre vacío', () => {
    // PREPARAR
    const datosSinNombre = { nombre: '', duracion: 45, descripcion: 'Chequeo' };
    
    // ACTUAR
    const resultado = crearTipoEvento(datosSinNombre, listaBase);

    // AFIRMAR
    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('El nombre del evento es obligatorio.');
    expect(resultado.eventos).toBeUndefined(); // No devuelve lista porque falló
  });

  // --- PRUEBA 3 (Caso Negativo: Duración inválida) ---
  test('Debe fallar si la duración es cero, negativa o no se envía', () => {
    // PREPARAR
    const datosDuracionCero = { nombre: 'Consulta Rápida', duracion: 0 };
    
    // ACTUAR
    const resultado = crearTipoEvento(datosDuracionCero, listaBase);

    // AFIRMAR
    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('La duración debe ser mayor a 0 minutos.');
  });

})
;