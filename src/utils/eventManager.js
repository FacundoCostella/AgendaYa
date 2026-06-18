// src/utils/eventManager.js

/**
 * Valida y crea un nuevo tipo de evento, agregándolo a la lista existente.
 * @param {Object} nuevoEvento - Objeto con { nombre, duracion, descripcion }
 * @param {Array} listaEventosActual - Array con los eventos ya existentes
 * @returns {Object} { exito: boolean, mensaje: string, eventos: Array }
 */
export function crearTipoEvento(nuevoEvento, listaEventosActual) {
  const { nombre, duracion, descripcion = "" } = nuevoEvento;

  // Validación 1: El nombre es estrictamente obligatorio
  if (!nombre || nombre.trim() === "") {
    return { 
      exito: false, 
      mensaje: "El nombre del evento es obligatorio." 
    };
  }

  // Validación 2: La duración es obligatoria y debe ser lógica (mayor a 0)
  if (!duracion || duracion <= 0) {
    return { 
      exito: false, 
      mensaje: "La duración debe ser mayor a 0 minutos." 
    };
  }

  // Si pasa todas las validaciones, construimos el evento final
  const eventoCreado = {
    id: Date.now(), // Simulamos la creación de un ID único
    nombre,
    duracion,
    descripcion
  };

  // Retornamos éxito y la lista con el nuevo evento agregado al final
  return {
    exito: true,
    mensaje: "Evento creado exitosamente.",
    eventos: [...listaEventosActual, eventoCreado]
  };
}