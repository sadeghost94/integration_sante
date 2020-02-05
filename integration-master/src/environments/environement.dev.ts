export const environment = {
  production: true,
  environmentName: 'Dev',
  apiUrl: 'Dev url',
  LOGIN_URL: 'https://epod-zuul.herokuapp.com/api/v1/auth-service/oauth/token',
  FORGET_PASSWORD_URL: "https://epod-zuul.herokuapp.com/api/v1/auth-service/update/password/mail",
  CONFIRMATION_EMAIL_URL: "https://epod-zuul.herokuapp.com/api/v1/auth-service/registration/confirm?token=",
  PASSWORD_UPDATE_TOKEN_URL: "https://epod-zuul.herokuapp.com/api/v1/auth-service/update/password?token=",
  PASSWORD_UPDATE_URL: 'https://epod-zuul.herokuapp.com/api/v1/auth-service/update/password',
  LOG_OUT_URL: 'https://epod-zuul.herokuapp.com/api/v1/auth-service/logingout',
  REGISTER_URL: 'https://epod-zuul.herokuapp.com/api/v1/auth-service/create/user',
  INVITER_URL: 'https://epod-zuul.herokuapp.com/api/v1/auth-service/user/invite',
  VERIF_TOK_INVITE : "https://epod-zuul.herokuapp.com/api/v1/auth-service/user/invite?token="
};
