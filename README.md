# HOS-Tutorial_1
This is the first tutorial using the APIs in the Initial Developer Rlease.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setup

This tutorial project has been tested on Ubuntu 16.04 LTS.
If you haven't installed Node or your Node.js isn't the latest, please do so as follows.

```console
$ sudo apt-get install nodejs
$ sudo apt-get install npm

$ curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

This process might take a long time.

Check if your node version by:
```bash
$ sudo node -v
```
Next, you need to create a directory for your own test and install the following modules needed for this project into the directory.

```bash
$ npm init
```
You'll need to provide some details of this project you're planning to create.
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (HOS-Tutorial_1) HOS-Tutorial_1
Sorry, name can no longer contain capital letters.
name: (HOS-Tutorial_1) hos-tutorial-1
version: (1.0.0) 
description: 
entry point: (tutorial_1.js) 
test command: 
git repository: (https://github.com/artofus/HOS-Tutorial_1.git) 
keywords: 
author: 
license: (ISC) ISC
About to write to /media/kai/Kai/aou/code/tutorials/tutorial 1/HOS-Tutorial_1/package.json:

{
  "name": "hos-tutorial-1",
  "version": "1.0.0",
  "description": "This is the first tutorial using the APIs in the Initial Developer Rlease.",
  "main": "tutorial_1.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/artofus/HOS-Tutorial_1.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/artofus/HOS-Tutorial_1/issues"
  },
  "homepage": "https://github.com/artofus/HOS-Tutorial_1#readme"
}


Is this ok? (yes) yes
```

```bash
$ npm i request --save
$ npm i express --save
$ npm i eventsource --save
```
Finally, please put the 3 files in this project into the same directory and run the following.

```bash
$ node tutorial_1.js
```

## License
This material is Copyright (c) 2018 Artofus and licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the [LICENSE.md](LICENSE.md) file for details


