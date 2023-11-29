# 19 Progressive Web Applications (PWA): Text Editor

## About this project

This project was done as part of the assignments in the UC Berkeley full stuck web developer coding bootcamp. In this assignment, the students are tasked to build an API that meets the following requirements based on the incomplete starting codes:

```md
- have a client server folder structure
- have a script `npm run start` from the root directory set up to start up the backend and serve the client
- the JavaScript files have been bundled using webpack
- have a webpack plugins that creates an HTML file, service worker, and a manifest file
- support next-gen JavaScript in my application
- the usre input is stored in and retrieved from IndexedDB 
- the app can be installed as web application with an icon
- support a registered service worker using workbox
- static assets are pre cached upon loading along with subsequent pages and static assets
- deployed in Heroku
```

## Use

- Deployed URL: https://mitsukaichi-jate-a4d41c9807d2.herokuapp.com/
- Screenshot: ![screenshot](https://github.com/mitsukaichi/pwa-text-editor/assets/45612744/0782b423-5326-4939-83e0-cfd07fbc19e4)

## Things I learnt from this challenge

- [CodeMirror](https://codemirror.net/) : a code editor component for the web, open source under a permissive license (MIT).
- [code-mirror-themes](https://github.com/FarhadG/code-mirror-themes#readme) : npm package that allows developer to set the themes from popular editors
- How to handle the web application install event

When the web application which can be installed as a PWA is loaded in the browser, the browser that supports the install will display the brower's default install button to allow users to install. You can also add your own custom install button in your web app to make it stand out more, and provide more context (i.e. what's good about installing this as an app instead of using this on browser?).

In order to do this, you use `beforeinstallprompt` / `appinstalled` event fired from the browser.

When the installable application is loaded in the browser, the browsers support install fires the beforeinstallprompt event in the global Window scope in addition to the built-in install button, which looks like this: 
![screenshot](https://github.com/mitsukaichi/pwa-text-editor/assets/45612744/476dd065-7ccd-4df4-b1a7-3a1903bc00dd)

When you call `beforeinstallprompt`'s `prompt()` method, this returns a `Promise` object which resolves with an object indicating whether the user select to install (`accepted`) or cancel / dismiss the install (`dismissed`) in its `outcome` property.

When the user visits the same web application after they installed the app, the browser fires `appinstalled` event instead of `beforeinstallprompt` , and you can use this to hide the app install botton.

Reference: 

- [Trigger installation from your PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
- [Installation prompt](https://web.dev/learn/pwa/installation-prompt)
- [Window: beforeinstallprompt event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeinstallprompt_event)

## License
MIT License

Copyright (c) [2023] [Minami Mukai]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
