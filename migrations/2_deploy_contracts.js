const HelloWorld = artifacts.require('HelloWorld');
const SimpleStorage = artifacts.require('SimpleStorage');
const FileActions = artifacts.require('FileActions');
const Contacts = artifacts.require('Contacts');

module.exports = function (deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(SimpleStorage);
  deployer.deploy(FileActions);
  deployer.deploy(Contacts);
};
