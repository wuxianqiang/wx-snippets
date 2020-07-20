const vscode = require('vscode');
const wx = require('./wx')

function provideCompletionItems(document, position, token, context) {
  const line = document.lineAt(position);
  const lineText = line.text.substring(0, position.character);
  for (const key in wx) {
    if (new RegExp(`<${key}\.*$`).test(lineText)) {
      const value = wx[key]
      const keys = Object.keys(value)
      return keys.map(key => {
        let item = new vscode.CompletionItem(key, vscode.CompletionItemKind.Enum)
        item.documentation = value[key]
        // item.insertText = `${key}="$1"`
        item.insertText = new vscode.SnippetString(`${key}="$1"`)
        return item
      })
    }
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
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider('mpx', {
    provideCompletionItems,
    resolveCompletionItem
  }, '1'));
  vscode.languages.registerHoverProvider('mpx', {
    provideHover(document, position) {
      const line = document.lineAt(position)
      const text = line.text
      const index = position.character
      for (const key in wx) {
        if (new RegExp(`<${key}\.*$`).test(text)) {
          const value = wx[key]
          let left = index - 1
          let right = index
          const list = []
          const reg = /([a-z]|[A-Z]|-)/
          while(reg.test(text[right]) && right < text.length) {
            list.push(text[right++])
          }
          while(reg.test(text[left]) && left > -1) {
            list.unshift(text[left--])
          }
          const code = list.join('')
          if (code === key) {
            return new vscode.Hover(`${code}标签说明: 包含可选属性, ${Object.keys(value).join(', ')}`)
          }
          if (value[code]) {
            return new vscode.Hover(`${code}属性说明: ${value[code]}`)
          }
        }
      }
      return null
    }
  });
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;