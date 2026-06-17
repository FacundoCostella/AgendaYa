/**
 * Valida los datos del formulario de un usuario invitado.
 * @param {Object} datos - Objeto con { nombre, email }
 * @returns {Object} { valido: boolean, mensaje: string }
 */
export function validarFormularioInvitado(datos) {
  const { nombre, email } = datos;

  // Validación de campos vacíos u obligatorios
  if (!nombre || !nombre.trim() || !email || !email.trim()) {
    return {
      valido: false,
      mensaje: 'Por favor completar los campos obligatorios.'
    };
  }

  // Validación del formato de correo electrónico (Regex estándar)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      valido: false,
      mensaje: 'Por favor ingrese una dirección de correo electrónico válida.'
    };
  }

  return { valido: true, mensaje: 'Validación exitosa.' };
}