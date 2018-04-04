# HOS-Tutorial_1
This is the first tutorial using the APIs in the Initial Developer Rlease.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setup

This tutorial project has been tested on Ubuntu 16.04 LTS.
If you haven't installed Node or your Node.js isn't the latest, please do so as follows.

```bash
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


