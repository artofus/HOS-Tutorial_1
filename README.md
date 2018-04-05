# HOS-Tutorial_1
This is the first tutorial using the APIs in the Initial Developer Release.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setup

This tutorial project has been tested on Ubuntu 16.04 LTS and the latest version of nodejs.

To install nodejs, follow instructions below:

```bash
$ curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

This process might take a long time.

Check your nodejs version by:
```bash
$ sudo nodejs -v
```
Next, you need to create a directory for your own test and install the following modules needed for this project into the directory.

```bash
$ npm init --yes
$ npm i request --save
$ npm i express --save
$ npm i eventsource --save
```
Finally, please put the 3 files in this project into the same directory and run the following.

```bash
$ nodejs tutorial_1.js
```

## License
This material is Copyright (c) 2018 Artofus and licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the [LICENSE.md](LICENSE.md) file for details


