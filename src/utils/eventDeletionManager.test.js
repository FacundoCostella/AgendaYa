// src/utils/eventDeletionManager.test.js
import { eliminarEventoLogicamente } from './eventDeletionManager';

describe('US_016 - Eliminación lógica de tipo de evento', () => {
  let eventoBase;

  beforeEach(() => {
    eventoBase = {
      id: 16,
      nombre: 'Consulta de seguimiento',
      duracion: 30,
      activo: true,
      eliminado: false
    };
  });

  // --- PRUEBA 1 ---
  test('Debe solicitar confirmación antes de eliminar el tipo de evento', () => {
    const resultado = eliminarEventoLogicamente(eventoBase, false);

    expect(resultado.exito).toBe(false);
    expect(resultado.requiereConfirmacion).toBe(true);
    expect(resultado.mensaje).toBe('¿Está seguro de que desea eliminar este tipo de evento?');
    expect(resultado.evento.activo).toBe(true);
    expect(resultado.evento.eliminado).toBe(false);
  });

  // --- PRUEBA 2 ---
  test('Debe realizar una eliminación lógica al confirmar la acción', () => {
    const resultado = eliminarEventoLogicamente(eventoBase, true);

    expect(resultado.exito).toBe(true);
    expect(resultado.requiereConfirmacion).toBe(false);
    expect(resultado.mensaje).toBe('Tipo de evento eliminado correctamente.');
    expect(resultado.evento.activo).toBe(false);
    expect(resultado.evento.eliminado).toBe(true);
  });

  // --- PRUEBA 3 ---
  test('Debe conservar los datos históricos y evitar eliminar nuevamente un evento ya eliminado', () => {
    const eventoEliminado = {
      ...eventoBase,
      activo: false,
      eliminado: true
    };

    const resultado = eliminarEventoLogicamente(eventoEliminado, true);

    expect(resultado.exito).toBe(false);
    expect(resultado.mensaje).toBe('El tipo de evento ya se encuentra eliminado.');
    expect(resultado.evento.id).toBe(16);
    expect(resultado.evento.nombre).toBe('Consulta de seguimiento');
    expect(resultado.evento.duracion).toBe(30);
  });
});
