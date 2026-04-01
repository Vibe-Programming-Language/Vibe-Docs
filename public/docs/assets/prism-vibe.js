(function (Prism) {
  Prism.languages.vibe = {
    comment: [
      { pattern: /\/\*[^]*?\*\//, greedy: true },
      { pattern: /\/\/\/.*/, greedy: true },
      { pattern: /\/\/.*/, greedy: true }
    ],
    regex: {
      pattern: /(^|[^/])\/(?![/*])(?:\\.|[^\\/\r\n])+\/[gimsuxy]*/,
      lookbehind: true,
      greedy: true
    },
    decorator: {
      pattern: /@[a-zA-Z_][\w]*/,
      alias: 'decorator'
    },
    string: [
      { pattern: /"""[\s\S]*?"""/, greedy: true },
      { pattern: /"(?:\\.|[^"\\])*"/, greedy: true },
      { pattern: /'(?:\\.|[^'\\])*'/, greedy: true }
    ],
    module: /\b(?:vibe\.(?:web|ui|time|ml|hardware)|dsa|neural|ai|data|viz|image|web|db|crypto|fs|async|test|math|audio|cloud|game|web3|iot|robot|quantum)\b/,
    builtin: /\b(?:show|input|typeof|sizeof|assert|panic|todo|unreachable|print|println|format|range|enumerate|zip|len|map|filter|reduce|min|max|sum|abs|floor|ceil)\b/,
    keyword: /\b(?:var|let|const|fn|async|await|return|if|else|for|while|loop|match|case|class|interface|enum|import|export|from|try|catch|finally|throw|new|this|self|super|true|false|null|undefined|in|is|as|not|and|or|type|implements|extends|operator|macro|break|continue|yield|defer|guard|where|static|private|public|protected|abstract|override|mut|ref|move|step|by)\b/,
    type: /\b(?:Int|Float|String|Bool|Array|Map|Set|Tuple|Result|Option|Any|Void|Never)\b/,
    number: /\b(?:0[xX][\da-fA-F_]+|0[bB][01_]+|0[oO][0-7_]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)\b/,
    operator: /\|>|\.\.\.|\.\.|=>|->|::|\?\.|\?\?|\*\*|==|!=|<=|>=|\+=|-=|\*=|\/=|&&|\|\||[@+\-*/%<>=!]/,
    function: /\b[a-zA-Z_][\w]*(?=\s*\()/,
    class-name: /\b[A-Z][\w]*\b/,
    punctuation: /[{}[\];(),.:]/
  };
})(window.Prism || (window.Prism = {}));
