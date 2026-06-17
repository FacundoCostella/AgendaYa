/**
 * Determina si un día del mes actual debe bloquearse (es anterior a hoy).
 * @param {number} day - El número de día a evaluar.
 * @param {Date} currentDate - La fecha actual del sistema (inyectada para testing).
 * @returns {boolean} True si el día debe bloquearse, false si está habilitado.
 */
export function debeBloquearDia(day, currentDate = new Date()) {
  const hoy = currentDate.getDate();
  return day < hoy;
}

/**
 * Filtra los horarios disponibles, eliminando los que ya transcurrieron si es el día de hoy.
 * @param {Array<string>} horarios - Lista de horarios en formato "HH:MM".
 * @param {boolean} esHoy - Si el usuario seleccionó la fecha actual.
 * @param {Date} currentDate - La fecha y hora actual del sistema (inyectada para testing).
 * @returns {Array<string>} Horarios válidos y futuros.
 */
export function filtrarHorariosPasados(horarios, esHoy, currentDate = new Date()) {
  if (!esHoy) return horarios;

  const horaActual = currentDate.getHours();
  const minutosActual = currentDate.getMinutes();

  return horarios.filter(horario => {
    const [hora, minutos] = horario.split(':').map(Number);
    if (hora > horaActual) return true;
    if (hora === horaActual) return minutos > minutosActual;
    return false;
  });
}