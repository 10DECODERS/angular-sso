interface AuthConfig {
  clientID: string;
  clientSecret: string;
  domain: string;
  callbackURL: string;
  slackAuthURL: string;
  audience: string;
  grantType: string;
  TOKEN_URI: string;
}

export const AUTH_CONFIG: AuthConfig = {
  domain: 'ashwinachu.auth0.com',
  clientID: 'glPUQd57403acJ4hk7NaT75gFJZ3vh6p',
  clientSecret: 'aQo5ABKtcksPqFB9O6FtToiQPwbnU95TtxZHQJP3Nvm5X9Whb7BvKEsMAiyz7icD',
  callbackURL: 'http://localhost:4200/callback',
  slackAuthURL: 'https://ashwinachu.auth0.com/samlp/62c18P8Z0qK4nqB3MuxbxZ6PR4ccIf2x',
  audience: '10decoders',
  grantType: 'client_credentials',
  TOKEN_URI: 'https://ashwinachu.auth0.com/oauth/token'
};

