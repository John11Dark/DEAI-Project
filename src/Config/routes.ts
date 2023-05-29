const ROUTES = Object.freeze({
  WELCOME: "/",
  DOCS: "/docs",
  ABOUT: "/about",
  CONTACT: "/contact",
  APIs: "/apis",
  FQA: "/fqa",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  NOT_FOUND: "*",
  SERVER_ERROR: "/500",
  FORBIDDEN: "/403",
  UNAUTHORIZED: "/401",
  RESET_PASSWORD: "/reset-password",
  RESET_PASSWORD_CONFIRM: "/reset-password-confirm",
  FORGET_PASSWORD: "/change-password",
  CHANGE_PASSWORD_CONFIRM: "/change-password-confirm",
  VERIFY_EMAIL: "/verify-email",
  VERIFY_EMAIL_CONFIRM: "/verify-email-confirm",
  VERIFY_PHONE: "/verify-phone",
  VERIFY_PHONE_CONFIRM: "/verify-phone-confirm",
  DASHBOARD: "/dashboard",
  DASHBOARD_CHAT: "/dashboard/chat",
  DASHBOARD_STATICS: "/dashboard/statics",
  DASHBOARD_APPOINTMENTS: "/dashboard/appointments",
  DASHBOARD_PERFORMANCE: "/dashboard/performance",
  DASHBOARD_TASKS: "/dashboard/tasks",
  DASHBOARD_PLATFORMS: "/dashboard/platforms",
});

export default ROUTES;
