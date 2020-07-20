const mpxExtension = require('./extensions/mpx');

const plugins = [
  mpxExtension
];

function activate(context) {
  plugins.forEach(plugin => plugin.activate(context));
}

function deactivate() {
  plugins.forEach(plugin => plugin.deactivate());
}

exports.activate = activate;
exports.deactivate = deactivate;