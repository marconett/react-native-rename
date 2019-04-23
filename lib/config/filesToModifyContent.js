'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filesToModifyContent = filesToModifyContent;
// nS - No Space
// lC - Lowercase

function filesToModifyContent(currentAppName, newName) {
  var nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  var nS_NewName = newName.replace(/\s/g, '');

  return [{
    regex: '<string name="app_name">' + currentAppName + '</string>',
    replacement: '<string name="app_name">' + newName + '</string>',
    paths: ['android/app/src/main/res/values/strings.xml']
  }, {
    regex: nS_CurrentAppName,
    replacement: nS_NewName,
    paths: ['index.js', 'index.android.js', 'index.ios.js', 'android/settings.gradle', 'app.json']
  }, {
    regex: '"displayName": "' + currentAppName + '"',
    replacement: '"displayName": "' + newName + '"',
    paths: ['app.json']
  }];
}