# Electron

### What is Electron?
Electron is an open source library developed by GitHub for building cross-platform desktop applications with HTML, CSS, and JavaScript.  Some of you are already using some apps built on electron. 

source: *http://electron.atom.io/*

### Electron is built on [Chromium](https://www.chromium.org/Home) and [Node.js](https://nodejs.org/en/) 

<details>
  <summary><strong>What apps are developed with electron?</strong></summary>
 
 - [Slack](https://slack.com/)
 - [Atom](https://atom.io/)
 - [Visual Studio Code](https://code.visualstudio.com/)
 -  [Firebase Admin] (https://firebaseadmin.com/)
 - [Hyper](https://hyper.is/)
 - [And many more...](http://electron.atom.io/apps/)
 
</details>

### What are some of the advantages?
- You get to use tech you're already familiar with **(HTML, CSS, JS, Node)**
- One code base that works on Linux, Mac and Windows. No need to write separate applications for different environments.
- **File system access**
- **Memory Usage stats**
- **Screenshots**

## Electron-api-demos
- [Github Page](https://github.com/electron/electron-api-demos)
- [Latest releases](https://github.com/electron/electron-api-demos/releases)
	- 	For us Mac users => [electron-api-demos-mac.zip](https://github.com/electron/electron-api-demos/releases/download/v1.2.0/electron-api-demos-mac.zip)


## Electron has 2 main processes
  - **Main Process:**
  	- Is created when your application starts.
  	- The `main.js` file is considered the main process. The entry point of your application.
 	- It controls the lifecycle of the app, from open to close.
 	- Responsible for creating the renderer process.

 
  - **Renderer Process:**
  	- Is the browser window in your app
  	- Is responsible for running the user-interface of your app.
  	- Usually is the `index.html` file

# Definitions
 - **Process:** An instance of a computer program that is being executed.



#Packaging Files for Distribution
*"Electron Packager is a command line tool and Node.js library that bundles Electron-based application source code with a renamed Electron executable and supporting files into folders ready for distribution."*

- `electron-package` is the library that does all the magic.

We use the following command to create a distribution for the Mac platform: 

`electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds`

### Flag Definitions:
**overwrite:** replaces any existing output directory when packaging.

**platform:** The target platform to build for

**arch:** the architecture to build for

**icon:** sets the icon for the app

**prune:** runs npm prune –production before packaging the app. It removes unnecesary packages.

**out:** the name of the directory where the packages are created.



## Resources
- [Electron](http://electron.atom.io/)
-  [https://hyper.is/](https://hyper.is/)
-  [Event Emitter](https://docs.nodejitsu.com/articles/getting-started/control-flow/what-are-event-emitters/)
-  [Electron Packager](https://github.com/electron-userland/electron-packager)
-  [Leaflet Map API](http://leafletjs.com/)
-  [Node-notifier](https://github.com/mikaelbr/node-notifier)