/**
 * APPOINTMENTS MODULE
 * Gestão de consultas, criação com timeline e integração mock
 */

class AppointmentsManager {
  static getAppointments() {
    return StorageService.get("appointments", []);
  }

  static getAppointmentById(id) {
    const list = this.getAppointments();
    return list.find(a => a.id === id) || null;
  }

  static saveAppointment(data) {
    const list = this.getAppointments();
    let isNew = false;

    if (data.id) {
      const index = list.findIndex(a => a.id === data.id);
      if (index !== -1) {
        list[index] = { ...list[index], ...data };
        StorageService.logActivity("UPDATE_APPOINTMENT", `Agendamento atualizado para ${data.patientName}`, data.id);
      }
    } else {
      isNew = true;
      data.id = "APT-" + String(list.length + 1).padStart(3, "0");
      data.googleEventId = "mock-google-event-" + Date.now();
      list.unshift(data);
      StorageService.logActivity("CREATE_APPOINTMENT", `Agendamento criado para ${data.patientName} (${data.service})`, data.id);
    }

    StorageService.set("appointments", list);
    return { success: true, appointment: data, isNew };
  }

  static updateStatus(id, newStatus) {
    const list = this.getAppointments();
    const apt = list.find(a => a.id === id);
    if (apt) {
      apt.status = newStatus;
      StorageService.set("appointments", list);
      StorageService.logActivity("UPDATE_APPOINTMENT_STATUS", `Status alterado para '${newStatus}' no agendamento ${id}`, id);
      return true;
    }
    return false;
  }

  static deleteAppointment(id) {
    const list = this.getAppointments();
    const apt = list.find(a => a.id === id);
    const filtered = list.filter(a => a.id !== id);
    StorageService.set("appointments", filtered);
    if (apt) {
      StorageService.logActivity("DELETE_APPOINTMENT", `Agendamento cancelado/removido: ${apt.patientName}`, id);
    }
    return true;
  }
}
