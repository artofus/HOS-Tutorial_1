# HOS-Tutorial_1
This is the first tutorial using the APIs in the Initial Developer Rlease.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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
### Next, you need to create a directory for your own test and install the following modules needed for this project into the directory.

```bash
$ npm init
$ npm i request --save
$ npm i express --save
$ npm i eventsource --save
```
### Finally, please put the 3 files in this project into the same directory and run the following.

```bash
$ node tutorial_1.js
```
## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
