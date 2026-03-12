<p align="center">
  <svg viewBox="0 0 512 512" width="80" height="80" fill="none">
    <path d="M 128 96 L 256 416 L 384 96" stroke="black" stroke-width="48" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="256" cy="432" r="12" fill="black" opacity="0.5"/>
  </svg>
</p>

<h1 align="center">Vibe Documentation</h1>

<p align="center">
  <strong>The official documentation site for the Vibe Programming Language.</strong>
</p>

<p align="center">
  <a href="https://vibe-lang-docs.vercel.app"><img src="https://img.shields.io/badge/docs-live-black?style=flat-square" alt="Docs"></a>
  <a href="https://github.com/Vibe-Programming-Language/Vibe"><img src="https://img.shields.io/badge/language-Vibe-black?style=flat-square" alt="Vibe"></a>
  <img src="https://img.shields.io/badge/hosted-Vercel-black?style=flat-square" alt="Vercel">
</p>

---

## 🌐 Live Site

**[https://vibe-lang-docs.vercel.app](https://vibe-lang-docs.vercel.app)**

## About

This repository contains the source for the Vibe Programming Language documentation website — a static single-page application (SPA) with:

- **25+ documentation pages** covering every aspect of the language
- **Full-text search** with keyboard navigation (Ctrl+K)
- **Dark / Light theme** toggle with pure black & white design
- **Syntax-highlighted code examples** throughout
- **Responsive design** for mobile and desktop
- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript

## Structure

```
public/
├── index.html      # Main HTML shell with sidebar navigation
├── styles.css      # Pure black & white theme with syntax highlighting
├── app.js          # SPA routing, search, theme toggle, keyboard shortcuts
└── content.js      # All 25+ documentation pages as HTML content
```

## Pages

| Page | Content |
|------|---------|
| Home | Overview, feature cards, quick example |
| Installation | Build from source, pre-built binaries, VS Code extension |
| Quick Start | Hello World, first program, CLI commands |
| REPL | Interactive REPL usage, commands, features |
| Variables & Types | var/let/const, data types, type checking, conversion |
| Functions | Basic functions, arrow functions, higher-order, closures |
| Control Flow | if/else, for/while loops, break/continue |
| Classes & OOP | Classes, inheritance, interfaces, access modifiers |
| Collections | Lists, Maps, method chains |
| Error Handling | try/catch/finally, throw, assert |
| Modules | import/export system |
| Built-in Functions | 50+ built-ins reference |
| Math Module | Constants and math functions |
| IO Module | File I/O operations |
| OS Module | Operating system interaction |
| String Methods | Full string method reference |
| List Methods | Full list method reference |
| Map Methods | Map/dictionary methods |
| Lambdas & Closures | Arrow function syntax, closures |
| Pattern Matching | match expressions |
| Enums | Enum declarations |
| Compilation | C++ transpilation and codegen |
| Examples | Fibonacci, Todo list, functional pipelines, class hierarchies |
| API Reference | Keywords, operators, escape sequences |

## Development

Just open `public/index.html` in a browser — no build step required.

```bash
# Or use a simple HTTP server
cd public
python3 -m http.server 8080
# Open http://localhost:8080
```

## Deployment

The site is deployed to [Vercel](https://vercel.com) as a static site. Any push to `main` triggers a redeploy.

## Related Repositories

| Repository | Description |
|------------|-------------|
| [Vibe](https://github.com/Vibe-Programming-Language/Vibe) | Core language — lexer, parser, runtime, codegen |
| [Vibe-Language-Extension](https://github.com/Vibe-Programming-Language/Vibe-Language-Extension) | VS Code extension for Vibe |

## License

MIT — see the [main Vibe repository](https://github.com/Vibe-Programming-Language/Vibe/blob/main/LICENSE) for details.
