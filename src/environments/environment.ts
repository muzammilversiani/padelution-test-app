// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://padelution.localhost/api/',
  chatApiUrl: 'https://padelution-chat.localhost/api/',
  pusher: {
    authUrl: 'https://padelution-chat.localhost/api/broadcasting/auth',
    key: 'Z7zhZw.3okODQ',
  },
  s3Url: 'https://padelution.s3.eu-west-1.amazonaws.com/',
  oauthClientId: '9c75288f-31a7-48c2-a86d-e635b23ab323',
  oauthAppRedirectUri: 'http://localhost:8100',
  oauthWebRedirectUri: 'http://localhost:8100',
  oauthAuthorizationUrl: 'https://padelution.localhost/oauth/authorize',
  oauthTokenUrl: 'https://padelution.localhost/oauth/token',
  ablyPublicKey: 'Z7zhZw.3okODQ',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
