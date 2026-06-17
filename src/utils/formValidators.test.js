import { validarFormularioInvitado } from './formValidators';

describe('US_029 - Ingreso de datos del Usuario Invitado en Mobile', () => {
  
  // --- PRUEBA 4 ---
  test('Debe fallar si el nombre o el email se envían vacíos', () => {
    const datosInvalidos = { nombre: '', email: 'juan@email.com' };
    const resultado = validarFormularioInvitado(datosInvalidos);
    
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toBe('Por favor completar los campos obligatorios.');
  });

  // --- PRUEBA 5 ---
  test('Debe fallar si el formato del correo electrónico es inválido', () => {
    const datosConEmailInvalido = { nombre: 'Juan Pérez', email: 'juan-sin-arroba.com' };
    const resultado = validarFormularioInvitado(datosConEmailInvalido);
    
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toContain('dirección de correo electrónico válida');
  });

  // --- PRUEBA 6 ---
  test('Debe retornar exitoso (true) cuando los campos obligatorios están completos y el formato de email es correcto', () => {
    const datosCorrectos = { nombre: 'Juan Pérez', email: 'juan@gmail.com' };
    const resultado = validarFormularioInvitado(datosCorrectos);
    
    expect(resultado.valido).toBe(true);
    expect(resultado.mensaje).toBe('Validación exitosa.');
  });
});