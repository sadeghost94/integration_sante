export const environment = {
  production: true,
  environmentName: 'Production',
  apiUrl: 'production url',
  LOGIN_URL : 'https://epod-zuul.herokuapp.com/api/v1/auth-service/oauth/token',
  FORGET_PASSWORD_URL  : "https://epod-zuul.herokuapp.com/api/v1/auth-service/update/password/mail",
  CONFIRMATION_EMAIL_URL : "https://epod-zuul.herokuapp.com/api/v1/auth-service/registration/confirm?token=",
  PASSWORD_UPDATE_TOKEN_URL : "https://epod-zuul.herokuapp.com/api/v1/auth-service/update/password?token=",
  PASSWORD_UPDATE_URL : 'https://epod-zuul.herokuapp.com/api/v1/auth-service/update/password',
  LOG_OUT_URL :'https://epod-zuul.herokuapp.com/api/v1/auth-service/logingout'

};
