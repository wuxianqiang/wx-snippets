const vscode = require('vscode');
const wx = require('./wx')
const { getMpxTag } = require('../utils/getTag')

function provideCompletionItems(document, position, token, context) {
  const line = document.lineAt(position);
  // const lineText = line.text.substring(0, position.character);
  let { name } = getMpxTag(document, position) || {}
  if (name && wx[name]) {
    const value = wx[name]
    const keys = Object.keys(value)
    return keys.map(key => {
      let item = new vscode.CompletionItem(key, vscode.CompletionItemKind.Enum)
      item.documentation = value[key]
      item.insertText = new vscode.SnippetString(`${key}="$1"`)
      return item
    })
  }
  const keys = Object.keys(wx)
  return keys.map((key) => {
    let item = new vscode.CompletionItem(key, vscode.CompletionItemKind.Property)
    item.detail = '小程序组件'
    item.documentation = `<${key}>｜</${key}>`
    item.insertText = new vscode.SnippetString(`<${key}>$1</${key}>`)
    return item
  })
  // new vscode.CompletionItem('h99', vscode.CompletionItemKind.Property)
}

function resolveCompletionItem(item, token) {
  return null;
}

function activate(context) {
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider(['mpx', 'wxml'], {
    provideCompletionItems,
    resolveCompletionItem
  }, '1'));
  vscode.languages.registerHoverProvider(['mpx', 'wxml'], {
    provideHover(document, position) {
      const { isOnTagName, isOnAttrName, name, posWord } = getMpxTag(document, position) || {}
      if (wx[name]) {
        if (isOnTagName) {
          return new vscode.Hover(`${name} 标签说明: 包含可选属性, ${Object.keys(wx[name]).join(', ')}`)
        }
        if (isOnAttrName && wx[name][posWord]) {
          return new vscode.Hover(`${posWord} 属性说明: ${wx[name][posWord]}`)
        }
      }
      return null
    }
  });
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;