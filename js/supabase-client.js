/**
 * SUPABASE CLIENT & AUTH MODULE
 * Dra. Marta Gelsi Dias — Odontologia
 */

const SUPABASE_CONFIG = {
  url: "https://vqckwepoblccoirghmii.supabase.co",
  publishableKey: "sb_publishable_eRbvqsRoQDcyB-scbuIUVg_3KBm7_Vc"
};

// Instanciação global do cliente Supabase
let supabase = null;
if (typeof window !== "undefined" && window.supabase) {
  try {
    supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.publishableKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: "marta_gelsi_sb_auth_token"
      }
    });
    window.supabaseClient = supabase;
    console.info("Supabase Client conectado com sucesso.");
  } catch (err) {
    console.error("Falha ao inicializar Supabase Client:", err);
  }
}

/**
 * Serviço de Autenticação com Supabase
 */
class AuthService {
  static get client() {
    return window.supabaseClient || supabase;
  }

  /**
   * Realiza login no Supabase Auth com email e senha criptografada
   */
  static async login(email, password) {
    const client = this.client;
    if (!client) {
      throw new Error("Cliente Supabase não inicializado.");
    }

    const { data, error } = await client.auth.signInWithPassword({
      email: email.trim(),
      password: password
    });

    if (error) {
      console.error("Erro na autenticação:", error.message);
      throw error;
    }

    // Salva referência de usuário atual no LocalStorage
    if (data.session && data.user) {
      const profile = {
        id: data.user.id,
        email: data.user.email,
        name: data.user.user_metadata?.name || "Dra. Marta Gelsi Dias",
        role: data.user.user_metadata?.role || "admin",
        lastSignIn: new Date().toISOString()
      };
      localStorage.setItem("marta_gelsi_current_user", JSON.stringify(profile));
    }

    return data;
  }

  /**
   * Encerra a sessão atual no Supabase Auth
   */
  static async logout() {
    const client = this.client;
    try {
      if (client) {
        await client.auth.signOut();
      }
    } catch (err) {
      console.warn("Erro ao fazer logout no Supabase:", err);
    } finally {
      localStorage.removeItem("marta_gelsi_current_user");
      localStorage.removeItem("marta_gelsi_sb_auth_token");
      const isPagesDir = window.location.pathname.includes("/pages/");
      window.location.href = isPagesDir ? "../login.html" : "login.html";
    }
  }

  /**
   * Retorna a sessão ativa do usuário
   */
  static async getSession() {
    const client = this.client;
    if (!client) {
      const cached = localStorage.getItem("marta_gelsi_current_user");
      return cached ? { user: JSON.parse(cached) } : null;
    }

    const { data, error } = await client.auth.getSession();
    if (error || !data.session) {
      return null;
    }
    return data.session;
  }

  /**
   * Retorna o usuário logado
   */
  static async getUser() {
    const session = await this.getSession();
    return session ? session.user : null;
  }
}

window.AuthService = AuthService;
