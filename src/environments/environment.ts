// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDs6ogiNoauW2evtNE92UxPvYvKiuL5PPw",
    authDomain: "mymovcat.firebaseapp.com",
    databaseURL: "https://mymovcat.firebaseio.com",
    projectId: "mymovcat",
    storageBucket: "mymovcat.appspot.com",
    messagingSenderId: "523856391965"
  },

  algolia: {
    appId: 'HRD8BPHTMH',
    apiKey: 'f02ea4832f6a11fe872e633f4445d6a4',
    indexName: 'dev_movcat',
  }
};
