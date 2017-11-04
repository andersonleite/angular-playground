/* tslint:disable */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

// Here's our Spotify API token you can use for testing. Acquiring one of these tokens
// is beyond the scope of this book. See spotify's developer docs for details
// Yes, I will work to hide this soon...
  spotifyApiKey: "BQBvRCGgM0Q8PJv4vu5q0bxcZAxCuTl7yeJ6joenFOhfbr-bFo-Oy4oN7ALVcVbo0NLm-eeW9M5YAeTSbtuRlA","token_type":"Bearer","expires_in":3600
};

// https://developers.getbase.com/docs/rest/articles/oauth2/requests
// curl -X POST https://accounts.spotify.com/api/token \
//   -u "7953d701241148dea69baefdfbd88849:888dd675deb24ec897eac0431ba3bcaa" \
//      -d "grant_type=client_credentials"

