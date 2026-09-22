/**
 * CALENDAR LOGIC - VANILLA JAVASCRIPT
 * Suporta visualizações de Mês, Semana e Dia com eventos demonstrativos
 */

class CalendarApp {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentDate = new Date(2026, 8, 21); // Setembro de 2026
    this.currentView = "month"; // 'month', 'week', 'day'
    this.appointments = [];
  }

  async init() {
    await this.loadAppointments();
    this.render();
  }

  async loadAppointments() {
    if (window.DatabaseService) {
      this.appointments = await DatabaseService.appointments.getAll();
    } else {
      this.appointments = StorageService.get("appointments", []);
    }
  }

  setView(view) {
    this.currentView = view;
    this.render();
  }

  next() {
    if (this.currentView === "month") {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    } else if (this.currentView === "week") {
      this.currentDate.setDate(this.currentDate.getDate() + 7);
    } else {
      this.currentDate.setDate(this.currentDate.getDate() + 1);
    }
    this.render();
  }

  prev() {
    if (this.currentView === "month") {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    } else if (this.currentView === "week") {
      this.currentDate.setDate(this.currentDate.getDate() - 7);
    } else {
      this.currentDate.setDate(this.currentDate.getDate() - 1);
    }
    this.render();
  }

  today() {
    this.currentDate = new Date(2026, 8, 21);
    this.render();
  }

  getEventClass(serviceName = "") {
    const s = serviceName.toLowerCase();
    if (s.includes("limpeza")) return "event-limpeza";
    if (s.includes("aparelho") || s.includes("ortodôntico")) return "event-aparelho";
    if (s.includes("implante")) return "event-implante";
    if (s.includes("retorno")) return "event-retorno";
    return "event-consulta";
  }

  render() {
    if (!this.container) return;
    this.loadAppointments();

    const monthNames = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const month = monthNames[this.currentDate.getMonth()];
    const year = this.currentDate.getFullYear();

    let titleText = `${month} de ${year}`;
    if (this.currentView === "day") {
      titleText = `${this.currentDate.getDate()} de ${month} de ${year}`;
    }

    this.container.innerHTML = `
      <div class="calendar-container">
        <div class="calendar-header">
          <div class="calendar-nav">
            <button type="button" class="btn btn-outline btn-sm" id="cal-btn-prev">Anterior</button>
            <button type="button" class="btn btn-outline btn-sm" id="cal-btn-today">Hoje</button>
            <button type="button" class="btn btn-outline btn-sm" id="cal-btn-next">Próximo</button>
            <span class="calendar-title">${titleText}</span>
          </div>

          <div class="calendar-view-toggle">
            <button type="button" class="calendar-view-btn ${this.currentView === 'month' ? 'active' : ''}" data-view="month">Mês</button>
            <button type="button" class="calendar-view-btn ${this.currentView === 'week' ? 'active' : ''}" data-view="week">Semana</button>
            <button type="button" class="calendar-view-btn ${this.currentView === 'day' ? 'active' : ''}" data-view="day">Dia</button>
          </div>
        </div>

        <div id="calendar-body-content"></div>
      </div>
    `;

    // Bind nav buttons
    this.container.querySelector("#cal-btn-prev").onclick = () => this.prev();
    this.container.querySelector("#cal-btn-next").onclick = () => this.next();
    this.container.querySelector("#cal-btn-today").onclick = () => this.today();

    this.container.querySelectorAll(".calendar-view-btn").forEach(btn => {
      btn.onclick = () => this.setView(btn.getAttribute("data-view"));
    });

    const bodyEl = this.container.querySelector("#calendar-body-content");
    if (this.currentView === "month") {
      this.renderMonthView(bodyEl);
    } else if (this.currentView === "week") {
      this.renderWeekView(bodyEl);
    } else {
      this.renderDayView(bodyEl);
    }
  }

  renderMonthView(container) {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay(); // 0=Dom
    const totalDays = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    let html = `
      <div class="calendar-month-grid">
        ${weekdays.map(d => `<div class="calendar-weekday">${d}</div>`).join("")}
    `;

    // Dias do mês anterior
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const dayNum = prevMonthDays - i;
      html += `
        <div class="calendar-day-cell other-month">
          <span class="calendar-day-number">${dayNum}</span>
        </div>
      `;
    }

    // Dias do mês atual
    for (let d = 1; d <= totalDays; d++) {
      const isToday = (d === 21 && month === 8 && year === 2026);
      const dayStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const dayApts = this.appointments.filter(a => a.date === dayStr);

      const eventsHtml = dayApts.map(a => `
        <div class="event-chip ${this.getEventClass(a.service)}" data-apt-id="${a.id}" title="${a.time} - ${a.patientName} (${a.service})">
          <strong>${a.time}</strong> ${a.patientName}
        </div>
      `).join("");

      html += `
        <div class="calendar-day-cell ${isToday ? 'today' : ''}">
          <span class="calendar-day-number">${d}</span>
          <div class="calendar-events-list">
            ${eventsHtml}
          </div>
        </div>
      `;
    }

    html += `</div>`;
    container.innerHTML = html;
    this.bindEventClicks(container);
  }

  renderWeekView(container) {
    const weekdays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    let html = `
      <div class="calendar-month-grid" style="grid-template-columns: repeat(7, 1fr);">
        ${weekdays.map(d => `<div class="calendar-weekday">${d}</div>`).join("")}
    `;

    for (let i = 21; i <= 27; i++) {
      const dateStr = `2026-09-${String(i).padStart(2, "0")}`;
      const dayApts = this.appointments.filter(a => a.date === dateStr);
      const isToday = (i === 21);

      const eventsHtml = dayApts.map(a => `
        <div class="event-chip ${this.getEventClass(a.service)}" data-apt-id="${a.id}">
          <strong>${a.time}</strong> ${a.patientName} — <span class="text-xs">${a.service}</span>
        </div>
      `).join("");

      html += `
        <div class="calendar-day-cell ${isToday ? 'today' : ''}" style="min-height: 240px;">
          <span class="calendar-day-number">${i} Set</span>
          <div class="calendar-events-list">
            ${eventsHtml || '<span class="text-xs text-muted">Sem consultas</span>'}
          </div>
        </div>
      `;
    }

    html += `</div>`;
    container.innerHTML = html;
    this.bindEventClicks(container);
  }

  renderDayView(container) {
    const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
    const year = this.currentDate.getFullYear();
    const month = String(this.currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(this.currentDate.getDate()).padStart(2, "0");
    const dateStr = `${year}-${month}-${day}`;

    const dayApts = this.appointments.filter(a => a.date === dateStr);

    let html = `<div class="calendar-time-schedule">`;
    hours.forEach(hour => {
      const hourApts = dayApts.filter(a => a.time.startsWith(hour.slice(0, 2)));
      const eventsHtml = hourApts.map(a => `
        <div class="event-chip ${this.getEventClass(a.service)}" data-apt-id="${a.id}" style="padding: 6px 10px; font-size: 0.8125rem;">
          <strong>${a.time}</strong> — ${a.patientName} (${a.service}) • Status: ${a.status}
        </div>
      `).join("");

      html += `
        <div class="time-row">
          <div class="time-col-hour">${hour}</div>
          <div class="time-col-events">
            ${eventsHtml || '<span class="text-xs text-muted" style="opacity: 0.5;">Horário livre</span>'}
          </div>
        </div>
      `;
    });
    html += `</div>`;
    container.innerHTML = html;
    this.bindEventClicks(container);
  }

  bindEventClicks(container) {
    container.querySelectorAll(".event-chip[data-apt-id]").forEach(chip => {
      chip.onclick = () => {
        const id = chip.getAttribute("data-apt-id");
        this.openEventModal(id);
      };
    });
  }

  openEventModal(aptId) {
    const apt = this.appointments.find(a => a.id === aptId);
    if (!apt) return;

    let modal = document.getElementById("calendar-event-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "calendar-event-modal";
      modal.className = "modal-backdrop";
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div>
            <span class="badge badge-info">${apt.id}</span>
            <h3 class="modal-title" style="margin-top: 4px;">Detalhes do Agendamento</h3>
          </div>
          <button type="button" class="btn btn-ghost btn-icon" data-modal-close aria-label="Fechar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="modal-body">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-bottom: var(--space-4);">
            <div>
              <span class="text-xs text-muted" style="text-transform: uppercase;">Paciente</span>
              <p class="text-bold">${apt.patientName}</p>
            </div>
            <div>
              <span class="text-xs text-muted" style="text-transform: uppercase;">Status</span>
              <div>${UIComponents.renderStatusBadge(apt.status)}</div>
            </div>
            <div>
              <span class="text-xs text-muted" style="text-transform: uppercase;">Procedimento</span>
              <p class="text-bold text-primary">${apt.service}</p>
            </div>
            <div>
              <span class="text-xs text-muted" style="text-transform: uppercase;">Profissional</span>
              <p class="text-bold">${apt.professional || "Dra. Marta Gelsi Dias"}</p>
            </div>
            <div>
              <span class="text-xs text-muted" style="text-transform: uppercase;">Data</span>
              <p class="text-bold">${Navigation.formatDate(apt.date)}</p>
            </div>
            <div>
              <span class="text-xs text-muted" style="text-transform: uppercase;">Horário & Duração</span>
              <p class="text-bold">${apt.time} (${apt.duration})</p>
            </div>
          </div>
          <div>
            <span class="text-xs text-muted" style="text-transform: uppercase;">Observações</span>
            <p class="text-secondary" style="margin-top: 2px;">${apt.notes || "Sem observações registradas."}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline" data-modal-close>Fechar</button>
          <a href="whatsapp.html?phone=&name=${encodeURIComponent(apt.patientName)}" class="btn btn-whatsapp">Mensagem WhatsApp</a>
        </div>
      </div>
    `;

    Modal.open(modal);
  }
}
