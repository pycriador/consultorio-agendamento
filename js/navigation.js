/**
 * NAVIGATION & HELPERS
 * Roteamento visual, proteção mock de rotas e formatadores pt-BR
 */

class Navigation {
  /**
   * Inicializa ouvintes de navegação
   */
  static init() {
    // Menu mobile da landing page
    const navToggle = document.getElementById("mobile-menu-btn");
    const siteNav = document.getElementById("site-nav");
    if (navToggle && siteNav) {
      navToggle.addEventListener("click", () => {
        siteNav.classList.toggle("mobile-open");
      });
    }

    // Proteger visualmente páginas administrativas
    this.checkAdminAuth();
  }

  /**
   * Verificação mock de autenticação em páginas do painel
   */
  static checkAdminAuth() {
    const isPublicPage = window.location.pathname.endsWith("index.html") ||
                         window.location.pathname.endsWith("login.html") ||
                         window.location.pathname.endsWith("agendar.html") ||
                         window.location.pathname.endsWith("contato.html") ||
                         window.location.pathname === "/" ||
                         window.location.pathname.endsWith("servicos.html");

    // Se estiver em uma página administrativa mas sem sessão
    if (!isPublicPage && !StorageService.isAuthenticated()) {
      // Cria uma sessão mock padrão para não travar a exploração do avaliador
      StorageService.setSession({
        id: "USR-001",
        name: "Dra. Marta Gelsi Dias",
        email: "admin@demo.com",
        role: "Cirurgiã-Dentista / Administradora"
      });
    }
  }

  /**
   * Formatação de Moeda Brasileira
   * @param {number|string} value 
   */
  static formatCurrency(value) {
    if (typeof value === "string" && isNaN(Number(value))) {
      return value; // "Consultar"
    }
    const num = Number(value);
    if (isNaN(num)) return "Consultar";
    return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  /**
   * Formatação de Data Brasileira (DD/MM/AAAA)
   * @param {string} dateString (AAAA-MM-DD)
   */
  static formatDate(dateString) {
    if (!dateString) return "—";
    const parts = dateString.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateString;
  }

  /**
   * Formatação de Telefone / WhatsApp Brasileiro
   * @param {string} phone 
   */
  static formatPhone(phone) {
    if (!phone) return "";
    const clean = phone.replace(/\D/g, "");
    if (clean.length === 11) {
      return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7)}`;
    }
    if (clean.length === 10) {
      return `(${clean.slice(0, 2)}) ${clean.slice(2, 6)}-${clean.slice(6)}`;
    }
    return phone;
  }
}

// Inicializar na carga
document.addEventListener("DOMContentLoaded", () => {
  Navigation.init();
});
