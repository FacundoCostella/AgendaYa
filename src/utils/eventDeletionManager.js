/**
 * Gestiona la eliminación lógica de un tipo de evento.
 * La función no borra el objeto físicamente: conserva sus datos históricos,
 * pero lo deja inactivo y marcado como eliminado.
 *
 * @param {Object} evento - Tipo de evento a eliminar.
 * @param {boolean} confirmado - Indica si el administrador confirmó la acción.
 * @returns {Object} Resultado de la operación.
 */
export function eliminarEventoLogicamente(evento, confirmado) {
  if (!evento) {
    return {
      exito: false,
      requiereConfirmacion: false,
      mensaje: 'No se encontró el tipo de evento a eliminar.'
    };
  }

  if (evento.eliminado === true) {
    return {
      exito: false,
      requiereConfirmacion: false,
      mensaje: 'El tipo de evento ya se encuentra eliminado.',
      evento
    };
  }

  if (!confirmado) {
    return {
      exito: false,
      requiereConfirmacion: true,
      mensaje: '¿Está seguro de que desea eliminar este tipo de evento?',
      evento
    };
  }

  return {
    exito: true,
    requiereConfirmacion: false,
    mensaje: 'Tipo de evento eliminado correctamente.',
    evento: {
      ...evento,
      activo: false,
      eliminado: true
    }
  };
}
