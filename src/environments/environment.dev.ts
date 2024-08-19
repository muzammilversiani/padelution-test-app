export const environment = {
  production: true,
  apiUrl: 'https://testapi.padelution.com/api/',
  chatApiUrl: 'https://padelution-chat.localhost/api/',
  pusher: {
    authUrl: 'https://padelution-chat.localhost/broadcasting/auth',
    key: '3okODQ',
  },
  s3Url: 'https://padelution.s3.eu-west-1.amazonaws.com/',
  oauthClientId: '9c75288f-31a7-48c2-a86d-e635b23ab323',
  oauthAppRedirectUri: 'http://localhost:8100/auth/callback',
  oauthWebRedirectUri: 'http://localhost:8100/auth/callback',
  oauthAuthorizationUrl: 'https://testapi.padelution.com/oauth/authorize',
  oauthTokenUrl: 'https://testapi.padelution.com/oauth/token',
  ablyPublicKey: 'Z7zhZw.3okODQ',
};
