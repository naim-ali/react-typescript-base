// Note: Browser test is repeated in `index.html` because we want
// the code to run as early as possible.
const isChrome =
  !!(window as any).chrome &&
  (!!(window as any).chrome.webstore || !!(window as any).chrome.runtime);

if (isChrome) {
  // IMPORTANT: `build/webpack/env-dev.js` uses this chunk name to target source map generation.
  import(/*
      webpackChunkName: "login",
      webpackMode: "lazy"
    */
  "./index");
} else {
  console.log("Unsupported browser: ", window.navigator.userAgent);
}
