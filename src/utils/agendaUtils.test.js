import { debeBloquearDia, filtrarHorariosPasados } from './agendaUtils';

describe('US_039 - Bloqueo de días y horarios pasados', () => {
  // Fecha fija para pruebas estables: 15 de Octubre de 2026, 14:00 hs
  const fechaMock = new Date(2026, 9, 15, 14, 0);

  // --- PRUEBA 1 ---
  test('Debe bloquear (retornar true) los días anteriores al día de hoy', () => {
    const diaPasado = 14; 
    const resultado = debeBloquearDia(diaPasado, fechaMock);
    expect(resultado).toBe(true);
  });

  // --- PRUEBA 2 ---
  test('No debe bloquear (retornar false) el día de hoy ni los días futuros', () => {
    const diaHoy = 15;
    const diaFuturo = 16;
    expect(debeBloquearDia(diaHoy, fechaMock)).toBe(false);
    expect(debeBloquearDia(diaFuturo, fechaMock)).toBe(false);
  });

  // --- PRUEBA 3 ---
  test('Debe filtrar y remover los horarios pasados si se selecciona el día de hoy', () => {
    const listaHorarios = ['09:00', '13:30', '14:30', '16:00'];
    // Siendo las 14:00hs, deberían quedar únicamente 14:30 y 16:00
    const resultado = filtrarHorariosPasados(listaHorarios, true, fechaMock);
    
    expect(resultado).toEqual(['14:30', '16:00']);
    expect(resultado).not.toContain('09:00');
    expect(resultado).not.toContain('13:30');
  });
});