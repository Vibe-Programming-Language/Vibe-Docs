// ============================================
// Vibe Docs — Content Pages
// ============================================

const PAGES = {

// ── Home / Introduction ─────────────────────
home: {
  title: 'Vibe Documentation',
  content: `
<div class="hero">
  <div class="hero-logo">
    <svg viewBox="0 0 512 512" fill="none">
      <path d="M 128 96 L 256 416 L 384 96" stroke="currentColor" stroke-width="48" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <circle cx="256" cy="432" r="12" fill="currentColor" opacity="0.5"/>
    </svg>
  </div>
  <h1>Vibe Programming Language</h1>
  <p class="lead">A modern, expressive language that compiles to C++ and features an interactive REPL, rich standard library, OOP, pattern matching, and more.</p>
  <div class="hero-actions">
    <a class="btn-primary" href="#getting-started" onclick="event.preventDefault();navigateTo('getting-started')">Get Started →</a>
    <a class="btn-secondary" href="#installation" onclick="event.preventDefault();navigateTo('installation')">Installation</a>
  </div>
</div>

<h2 id="why-vibe">Why Vibe?</h2>
<p>Vibe is designed to be a language you <strong>enjoy</strong> writing. It combines the simplicity of modern scripting languages with the performance of compiled code.</p>

<div class="card-grid">
  <div class="card" onclick="navigateTo('variables')">
    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
    <h3>Fast &amp; Expressive</h3>
    <p>Clean syntax with strong type inference. Write less, do more.</p>
  </div>
  <div class="card" onclick="navigateTo('classes')">
    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></div>
    <h3>OOP Built-in</h3>
    <p>Classes, inheritance, interfaces, and access modifiers out of the box.</p>
  </div>
  <div class="card" onclick="navigateTo('pattern-matching')">
    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg></div>
    <h3>Pattern Matching</h3>
    <p>Powerful match expressions for elegant control flow.</p>
  </div>
  <div class="card" onclick="navigateTo('stdlib-builtins')">
    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg></div>
    <h3>Rich Standard Library</h3>
    <p>Math, IO, OS, string utilities, and functional programming tools.</p>
  </div>
  <div class="card" onclick="navigateTo('codegen')">
    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
    <h3>C++ Transpilation</h3>
    <p>Compile Vibe code to native C++ binaries for production.</p>
  </div>
  <div class="card" onclick="navigateTo('repl')">
    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg></div>
    <h3>Interactive REPL</h3>
    <p>Explore and prototype with a colorful, feature-rich REPL.</p>
  </div>
</div>

<h2 id="quick-example">Quick Example</h2>
<pre><div class="code-header"><span>example.vibe</span></div><code><span class="token-comment">// Variables</span>
<span class="token-keyword">var</span> name = <span class="token-string">"World"</span>;
<span class="token-keyword">let</span> count = <span class="token-number">10</span>;
<span class="token-keyword">const</span> PI = <span class="token-number">3.14159</span>;

<span class="token-comment">// Functions</span>
<span class="token-keyword">fn</span> <span class="token-function">greet</span>(who) {
  <span class="token-builtin">print</span>(<span class="token-string">"Hello, "</span> + who + <span class="token-string">"!"</span>);
}

<span class="token-comment">// Classes</span>
<span class="token-keyword">class</span> <span class="token-type">Animal</span> {
  <span class="token-keyword">var</span> name;
  <span class="token-keyword">var</span> sound;

  <span class="token-function">init</span>(name, sound) {
    <span class="token-keyword">self</span>.name = name;
    <span class="token-keyword">self</span>.sound = sound;
  }

  <span class="token-keyword">fn</span> <span class="token-function">speak</span>() {
    <span class="token-builtin">print</span>(<span class="token-keyword">self</span>.name + <span class="token-string">" says "</span> + <span class="token-keyword">self</span>.sound);
  }
}

<span class="token-comment">// Usage</span>
<span class="token-function">greet</span>(name);
<span class="token-keyword">var</span> dog = <span class="token-type">Animal</span>(<span class="token-string">"Rex"</span>, <span class="token-string">"Woof!"</span>);
dog.<span class="token-function">speak</span>();

<span class="token-comment">// Functional</span>
<span class="token-keyword">var</span> numbers = [<span class="token-number">1</span>, <span class="token-number">2</span>, <span class="token-number">3</span>, <span class="token-number">4</span>, <span class="token-number">5</span>];
<span class="token-keyword">var</span> doubled = numbers.<span class="token-function">map</span>((x) <span class="token-operator">=></span> x * <span class="token-number">2</span>);
<span class="token-keyword">var</span> total = numbers.<span class="token-function">reduce</span>((a, b) <span class="token-operator">=></span> a + b, <span class="token-number">0</span>);
<span class="token-builtin">print</span>(<span class="token-string">"Doubled: "</span> + <span class="token-builtin">str</span>(doubled));
<span class="token-builtin">print</span>(<span class="token-string">"Total: "</span> + <span class="token-builtin">str</span>(total));</code></pre>

<h2 id="features">Feature Highlights</h2>
<table class="feature-table">
  <thead><tr><th>Feature</th><th>Status</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>Variables</td><td>✅</td><td><code>var</code>, <code>let</code>, <code>const</code> declarations</td></tr>
    <tr><td>Functions</td><td>✅</td><td>First-class with closures, default params</td></tr>
    <tr><td>Classes</td><td>✅</td><td>Inheritance, interfaces, constructors</td></tr>
    <tr><td>Pattern Matching</td><td>✅</td><td><code>match</code> with default arms</td></tr>
    <tr><td>Lambdas</td><td>✅</td><td>Arrow function syntax with closures</td></tr>
    <tr><td>Modules</td><td>✅</td><td><code>import</code> / <code>export</code> system</td></tr>
    <tr><td>Error Handling</td><td>✅</td><td><code>try</code> / <code>catch</code> / <code>finally</code></td></tr>
    <tr><td>Collections</td><td>✅</td><td>Lists, Maps with rich method chains</td></tr>
    <tr><td>Enums</td><td>✅</td><td>Enum declarations with values</td></tr>
    <tr><td>Codegen</td><td>✅</td><td>Transpile to C++ and compile to native</td></tr>
    <tr><td>REPL</td><td>✅</td><td>Interactive with auto-semicolons</td></tr>
  </tbody>
</table>
`
},

// ── Installation ────────────────────────────
installation: {
  title: 'Installation',
  content: `
<h1>Installation</h1>
<p class="lead">Get Vibe up and running on your system in minutes.</p>

<h2 id="prerequisites">Prerequisites</h2>
<ul>
  <li>A C++17 compatible compiler (<code>g++ ≥ 7</code> or <code>clang++ ≥ 5</code>)</li>
  <li>CMake 3.20 or later</li>
  <li>Linux, macOS, or Windows (with WSL recommended)</li>
</ul>

<h2 id="build-from-source">Build from Source</h2>
<pre><div class="code-header"><span>Terminal</span></div><code><span class="token-comment"># Clone the repository</span>
git clone https://github.com/Vibe-Programming-Language/Vibe.git
cd Vibe

<span class="token-comment"># Build with CMake</span>
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make -j$(nproc)

<span class="token-comment"># Install system-wide (optional)</span>
sudo make install</code></pre>

<h2 id="download-release">Download Pre-built Binary</h2>
<p>Pre-built binaries are available on the <a href="https://github.com/Vibe-Programming-Language/Vibe/releases" target="_blank">GitHub Releases</a> page.</p>
<pre><div class="code-header"><span>Terminal</span></div><code><span class="token-comment"># Download and extract</span>
tar -xzf vibe-v1.0.0-linux-x86_64.tar.gz
sudo mv vibe /usr/local/bin/</code></pre>

<h2 id="verify">Verify Installation</h2>
<pre><div class="code-header"><span>Terminal</span></div><code>vibe --version
<span class="token-comment"># Output: Vibe 1.0.0</span>

vibe --help</code></pre>

<h2 id="vscode-extension">VS Code Extension</h2>
<p>Install the official VS Code extension for syntax highlighting, IntelliSense, snippets, and more:</p>
<ol>
  <li>Open VS Code → Extensions (<code>Ctrl+Shift+X</code>)</li>
  <li>Search for <strong>"Vibe Language Support"</strong></li>
  <li>Click Install</li>
</ol>
<p>Or download the <code>.vsix</code> from the <a href="https://github.com/Vibe-Programming-Language/Vibe-Language-Extension/releases" target="_blank">Extension Releases</a> page.</p>

<div class="callout tip">
  <div class="callout-title">Tip</div>
  <p>Add the Vibe binary to your PATH for easy access from anywhere.</p>
</div>
`
},

// ── Getting Started ─────────────────────────
'getting-started': {
  title: 'Quick Start',
  content: `
<h1>Quick Start</h1>
<p class="lead">Write and run your first Vibe program in under a minute.</p>

<h2 id="hello-world">Hello, World!</h2>
<p>Create a file called <code>hello.vibe</code>:</p>
<pre><div class="code-header"><span>hello.vibe</span></div><code><span class="token-builtin">print</span>(<span class="token-string">"Hello, World!"</span>);</code></pre>

<p>Run it:</p>
<pre><div class="code-header"><span>Terminal</span></div><code>vibe hello.vibe
<span class="token-comment"># Output: Hello, World!</span></code></pre>

<h2 id="your-first-program">Your First Program</h2>
<pre><div class="code-header"><span>greet.vibe</span></div><code><span class="token-comment">// Get user input</span>
<span class="token-keyword">var</span> name = <span class="token-builtin">input</span>(<span class="token-string">"What's your name? "</span>);

<span class="token-comment">// Greet them</span>
<span class="token-keyword">if</span> name.length > <span class="token-number">0</span> {
  <span class="token-builtin">print</span>(<span class="token-string">"Hello, "</span> + name + <span class="token-string">"! Welcome to Vibe."</span>);
} <span class="token-keyword">else</span> {
  <span class="token-builtin">print</span>(<span class="token-string">"Hello, stranger!"</span>);
}

<span class="token-comment">// A simple loop</span>
<span class="token-keyword">for</span> i <span class="token-keyword">in</span> <span class="token-builtin">range</span>(<span class="token-number">1</span>, <span class="token-number">6</span>) {
  <span class="token-builtin">print</span>(<span class="token-builtin">str</span>(i) + <span class="token-string">". Learning Vibe is fun!"</span>);
}</code></pre>

<h2 id="cli-commands">CLI Commands</h2>
<table class="feature-table">
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>vibe &lt;file.vibe&gt;</code></td><td>Run a Vibe source file</td></tr>
    <tr><td><code>vibe build &lt;file&gt;</code></td><td>Transpile to C++ and compile to native binary</td></tr>
    <tr><td><code>vibe check &lt;file&gt;</code></td><td>Check for syntax errors without running</td></tr>
    <tr><td><code>vibe repl</code></td><td>Start the interactive REPL</td></tr>
  </tbody>
</table>

<h2 id="next-steps">Next Steps</h2>
<ul>
  <li><a href="#variables" onclick="event.preventDefault();navigateTo('variables')">Learn about variables and types</a></li>
  <li><a href="#functions" onclick="event.preventDefault();navigateTo('functions')">Explore functions and closures</a></li>
  <li><a href="#classes" onclick="event.preventDefault();navigateTo('classes')">Dive into classes and OOP</a></li>
  <li><a href="#stdlib-builtins" onclick="event.preventDefault();navigateTo('stdlib-builtins')">Browse the standard library</a></li>
</ul>
`
},

// ── REPL ────────────────────────────────────
repl: {
  title: 'REPL',
  content: `
<h1>Interactive REPL</h1>
<p class="lead">The Vibe REPL lets you experiment with code interactively.</p>

<h2 id="starting">Starting the REPL</h2>
<pre><div class="code-header"><span>Terminal</span></div><code>vibe repl</code></pre>
<p>You'll see a welcome screen with ASCII art and version info.</p>

<h2 id="repl-commands">REPL Commands</h2>
<table class="feature-table">
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>.help</code></td><td>Show available commands</td></tr>
    <tr><td><code>.clear</code></td><td>Clear the screen</td></tr>
    <tr><td><code>.reset</code></td><td>Reset the environment</td></tr>
    <tr><td><code>.exit</code></td><td>Exit the REPL</td></tr>
  </tbody>
</table>

<h2 id="repl-features">Features</h2>
<ul>
  <li>Auto-semicolons — no need to type <code>;</code> at the end of expressions</li>
  <li>Colored output — errors in red, results in green</li>
  <li>Expression evaluation — type any expression to see its value</li>
  <li>Persistent state — variables and functions persist across lines</li>
</ul>

<h2 id="repl-example">Example Session</h2>
<pre><div class="code-header"><span>REPL</span></div><code>vibe> <span class="token-keyword">let</span> x = <span class="token-number">42</span>
vibe> x * <span class="token-number">2</span>
<span class="token-number">84</span>
vibe> <span class="token-keyword">fn</span> <span class="token-function">square</span>(n) { <span class="token-keyword">return</span> n * n; }
vibe> <span class="token-function">square</span>(<span class="token-number">9</span>)
<span class="token-number">81</span>
vibe> [<span class="token-number">1</span>,<span class="token-number">2</span>,<span class="token-number">3</span>].<span class="token-function">map</span>((x) <span class="token-operator">=></span> x * <span class="token-number">10</span>)
[<span class="token-number">10</span>, <span class="token-number">20</span>, <span class="token-number">30</span>]</code></pre>
`
},

// ── Variables & Types ───────────────────────
variables: {
  title: 'Variables & Types',
  content: `
<h1>Variables &amp; Types</h1>
<p class="lead">Vibe has three ways to declare variables: <code>var</code>, <code>let</code>, and <code>const</code>.</p>

<h2 id="var-let-const">var, let, const</h2>
<pre><div class="code-header"><span>variables.vibe</span></div><code><span class="token-keyword">var</span> name = <span class="token-string">"Alice"</span>;     <span class="token-comment">// mutable</span>
<span class="token-keyword">let</span> age = <span class="token-number">25</span>;            <span class="token-comment">// mutable (alias for var)</span>
<span class="token-keyword">const</span> PI = <span class="token-number">3.14159</span>;     <span class="token-comment">// immutable — cannot be reassigned</span>

name = <span class="token-string">"Bob"</span>;            <span class="token-comment">// OK</span>
age = <span class="token-number">26</span>;                <span class="token-comment">// OK</span>
<span class="token-comment">// PI = 3.0;            // Error! const cannot be reassigned</span></code></pre>

<h2 id="types">Data Types</h2>
<table class="feature-table">
  <thead><tr><th>Type</th><th>Example</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>int</code></td><td><code>42</code>, <code>-7</code></td><td>64-bit signed integer</td></tr>
    <tr><td><code>float</code></td><td><code>3.14</code>, <code>-0.5</code></td><td>64-bit floating point</td></tr>
    <tr><td><code>str</code></td><td><code>"hello"</code></td><td>String (double-quoted)</td></tr>
    <tr><td><code>bool</code></td><td><code>true</code>, <code>false</code></td><td>Boolean value</td></tr>
    <tr><td><code>list</code></td><td><code>[1, 2, 3]</code></td><td>Ordered collection</td></tr>
    <tr><td><code>map</code></td><td><code>{"a": 1}</code></td><td>Key-value pairs</td></tr>
    <tr><td><code>null</code></td><td><code>null</code></td><td>Absence of a value</td></tr>
    <tr><td><code>function</code></td><td><code>(x) => x * 2</code></td><td>First-class function</td></tr>
  </tbody>
</table>

<h2 id="type-checking">Type Checking</h2>
<pre><div class="code-header"><span>types.vibe</span></div><code><span class="token-builtin">type</span>(<span class="token-number">42</span>)           <span class="token-comment">// "int"</span>
<span class="token-builtin">type</span>(<span class="token-number">3.14</span>)         <span class="token-comment">// "float"</span>
<span class="token-builtin">type</span>(<span class="token-string">"hello"</span>)      <span class="token-comment">// "str"</span>
<span class="token-builtin">type</span>(<span class="token-boolean">true</span>)         <span class="token-comment">// "bool"</span>
<span class="token-builtin">type</span>([<span class="token-number">1</span>,<span class="token-number">2</span>])        <span class="token-comment">// "list"</span>
<span class="token-builtin">type</span>({<span class="token-string">"a"</span>: <span class="token-number">1</span>})     <span class="token-comment">// "map"</span>

<span class="token-comment">// Type checking functions</span>
<span class="token-builtin">isInt</span>(<span class="token-number">42</span>)          <span class="token-comment">// true</span>
<span class="token-builtin">isStr</span>(<span class="token-string">"hi"</span>)        <span class="token-comment">// true</span>
<span class="token-builtin">isList</span>([])         <span class="token-comment">// true</span>
<span class="token-builtin">isNull</span>(<span class="token-keyword">null</span>)       <span class="token-comment">// true</span></code></pre>

<h2 id="type-conversion">Type Conversion</h2>
<pre><div class="code-header"><span>conversion.vibe</span></div><code><span class="token-builtin">int</span>(<span class="token-string">"42"</span>)          <span class="token-comment">// 42</span>
<span class="token-builtin">float</span>(<span class="token-string">"3.14"</span>)      <span class="token-comment">// 3.14</span>
<span class="token-builtin">str</span>(<span class="token-number">42</span>)            <span class="token-comment">// "42"</span>
<span class="token-builtin">bool</span>(<span class="token-number">1</span>)            <span class="token-comment">// true</span>
<span class="token-builtin">bool</span>(<span class="token-number">0</span>)            <span class="token-comment">// false</span>
<span class="token-builtin">list</span>(<span class="token-string">"abc"</span>)        <span class="token-comment">// ["a", "b", "c"]</span></code></pre>
`
},

// ── Functions ───────────────────────────────
functions: {
  title: 'Functions',
  content: `
<h1>Functions</h1>
<p class="lead">Functions in Vibe are first-class values. Declare them with <code>fn</code>, pass them around, return them.</p>

<h2 id="basic-functions">Basic Functions</h2>
<pre><div class="code-header"><span>functions.vibe</span></div><code><span class="token-keyword">fn</span> <span class="token-function">add</span>(a, b) {
  <span class="token-keyword">return</span> a + b;
}

<span class="token-keyword">fn</span> <span class="token-function">greet</span>(name) {
  <span class="token-builtin">print</span>(<span class="token-string">"Hello, "</span> + name + <span class="token-string">"!"</span>);
}

<span class="token-builtin">print</span>(<span class="token-function">add</span>(<span class="token-number">3</span>, <span class="token-number">4</span>));     <span class="token-comment">// 7</span>
<span class="token-function">greet</span>(<span class="token-string">"World"</span>);       <span class="token-comment">// Hello, World!</span></code></pre>

<h2 id="arrow-functions">Arrow Functions (Lambdas)</h2>
<pre><div class="code-header"><span>arrows.vibe</span></div><code><span class="token-keyword">var</span> double = (x) <span class="token-operator">=></span> x * <span class="token-number">2</span>;
<span class="token-keyword">var</span> add = (a, b) <span class="token-operator">=></span> a + b;
<span class="token-keyword">var</span> multiLine = (x) <span class="token-operator">=></span> {
  <span class="token-keyword">var</span> result = x * x;
  <span class="token-keyword">return</span> result + <span class="token-number">1</span>;
};

<span class="token-builtin">print</span>(<span class="token-function">double</span>(<span class="token-number">5</span>));     <span class="token-comment">// 10</span>
<span class="token-builtin">print</span>(<span class="token-function">add</span>(<span class="token-number">3</span>, <span class="token-number">4</span>));     <span class="token-comment">// 7</span></code></pre>

<h2 id="higher-order">Higher-Order Functions</h2>
<pre><div class="code-header"><span>higher-order.vibe</span></div><code><span class="token-keyword">fn</span> <span class="token-function">apply</span>(func, value) {
  <span class="token-keyword">return</span> <span class="token-function">func</span>(value);
}

<span class="token-keyword">fn</span> <span class="token-function">makeMultiplier</span>(factor) {
  <span class="token-keyword">return</span> (x) <span class="token-operator">=></span> x * factor;
}

<span class="token-keyword">var</span> triple = <span class="token-function">makeMultiplier</span>(<span class="token-number">3</span>);
<span class="token-builtin">print</span>(<span class="token-function">apply</span>(triple, <span class="token-number">7</span>));   <span class="token-comment">// 21</span></code></pre>

<h2 id="closures">Closures</h2>
<pre><div class="code-header"><span>closures.vibe</span></div><code><span class="token-keyword">fn</span> <span class="token-function">counter</span>() {
  <span class="token-keyword">var</span> count = <span class="token-number">0</span>;
  <span class="token-keyword">return</span> () <span class="token-operator">=></span> {
    count = count + <span class="token-number">1</span>;
    <span class="token-keyword">return</span> count;
  };
}

<span class="token-keyword">var</span> next = <span class="token-function">counter</span>();
<span class="token-builtin">print</span>(<span class="token-function">next</span>());   <span class="token-comment">// 1</span>
<span class="token-builtin">print</span>(<span class="token-function">next</span>());   <span class="token-comment">// 2</span>
<span class="token-builtin">print</span>(<span class="token-function">next</span>());   <span class="token-comment">// 3</span></code></pre>
`
},

// ── Control Flow ────────────────────────────
'control-flow': {
  title: 'Control Flow',
  content: `
<h1>Control Flow</h1>
<p class="lead">Vibe supports <code>if/else</code>, <code>for</code> loops, <code>while</code> loops, and <code>match</code> expressions.</p>

<h2 id="if-else">If / Else</h2>
<pre><div class="code-header"><span>control.vibe</span></div><code><span class="token-keyword">var</span> x = <span class="token-number">10</span>;

<span class="token-keyword">if</span> x > <span class="token-number">0</span> {
  <span class="token-builtin">print</span>(<span class="token-string">"positive"</span>);
} <span class="token-keyword">else</span> <span class="token-keyword">if</span> x == <span class="token-number">0</span> {
  <span class="token-builtin">print</span>(<span class="token-string">"zero"</span>);
} <span class="token-keyword">else</span> {
  <span class="token-builtin">print</span>(<span class="token-string">"negative"</span>);
}</code></pre>

<h2 id="for-loops">For Loops</h2>
<pre><div class="code-header"><span>loops.vibe</span></div><code><span class="token-comment">// Range-based for loop</span>
<span class="token-keyword">for</span> i <span class="token-keyword">in</span> <span class="token-builtin">range</span>(<span class="token-number">0</span>, <span class="token-number">5</span>) {
  <span class="token-builtin">print</span>(i);    <span class="token-comment">// 0, 1, 2, 3, 4</span>
}

<span class="token-comment">// Iterate over a list</span>
<span class="token-keyword">var</span> fruits = [<span class="token-string">"apple"</span>, <span class="token-string">"banana"</span>, <span class="token-string">"cherry"</span>];
<span class="token-keyword">for</span> fruit <span class="token-keyword">in</span> fruits {
  <span class="token-builtin">print</span>(fruit);
}

<span class="token-comment">// With step</span>
<span class="token-keyword">for</span> i <span class="token-keyword">in</span> <span class="token-builtin">range</span>(<span class="token-number">0</span>, <span class="token-number">10</span>, <span class="token-number">2</span>) {
  <span class="token-builtin">print</span>(i);    <span class="token-comment">// 0, 2, 4, 6, 8</span>
}</code></pre>

<h2 id="while-loops">While / Do-While</h2>
<pre><div class="code-header"><span>while.vibe</span></div><code><span class="token-keyword">var</span> count = <span class="token-number">0</span>;
<span class="token-keyword">while</span> count < <span class="token-number">5</span> {
  <span class="token-builtin">print</span>(count);
  count = count + <span class="token-number">1</span>;
}

<span class="token-comment">// Do-while</span>
<span class="token-keyword">var</span> n = <span class="token-number">0</span>;
<span class="token-keyword">do</span> {
  <span class="token-builtin">print</span>(n);
  n = n + <span class="token-number">1</span>;
} <span class="token-keyword">while</span> n < <span class="token-number">3</span>;</code></pre>

<h2 id="break-continue">Break &amp; Continue</h2>
<pre><div class="code-header"><span>break.vibe</span></div><code><span class="token-keyword">for</span> i <span class="token-keyword">in</span> <span class="token-builtin">range</span>(<span class="token-number">0</span>, <span class="token-number">100</span>) {
  <span class="token-keyword">if</span> i == <span class="token-number">5</span> { <span class="token-keyword">break</span>; }
  <span class="token-keyword">if</span> i % <span class="token-number">2</span> == <span class="token-number">0</span> { <span class="token-keyword">continue</span>; }
  <span class="token-builtin">print</span>(i);    <span class="token-comment">// 1, 3</span>
}</code></pre>
`
},

// ── Classes & OOP ───────────────────────────
classes: {
  title: 'Classes & OOP',
  content: `
<h1>Classes &amp; OOP</h1>
<p class="lead">Vibe supports object-oriented programming with classes, inheritance, interfaces, and access modifiers.</p>

<h2 id="basic-class">Basic Class</h2>
<pre><div class="code-header"><span>class.vibe</span></div><code><span class="token-keyword">class</span> <span class="token-type">Person</span> {
  <span class="token-keyword">var</span> name;
  <span class="token-keyword">var</span> age;

  <span class="token-function">init</span>(name, age) {
    <span class="token-keyword">self</span>.name = name;
    <span class="token-keyword">self</span>.age = age;
  }

  <span class="token-keyword">fn</span> <span class="token-function">greet</span>() {
    <span class="token-builtin">print</span>(<span class="token-string">"Hi, I'm "</span> + <span class="token-keyword">self</span>.name + <span class="token-string">", age "</span> + <span class="token-builtin">str</span>(<span class="token-keyword">self</span>.age));
  }
}

<span class="token-keyword">var</span> p = <span class="token-type">Person</span>(<span class="token-string">"Alice"</span>, <span class="token-number">30</span>);
p.<span class="token-function">greet</span>();   <span class="token-comment">// Hi, I'm Alice, age 30</span></code></pre>

<h2 id="inheritance">Inheritance</h2>
<pre><div class="code-header"><span>inheritance.vibe</span></div><code><span class="token-keyword">class</span> <span class="token-type">Animal</span> {
  <span class="token-keyword">var</span> name;
  <span class="token-function">init</span>(name) { <span class="token-keyword">self</span>.name = name; }
  <span class="token-keyword">fn</span> <span class="token-function">speak</span>() { <span class="token-builtin">print</span>(<span class="token-keyword">self</span>.name + <span class="token-string">" makes a sound"</span>); }
}

<span class="token-keyword">class</span> <span class="token-type">Dog</span> <span class="token-keyword">extends</span> <span class="token-type">Animal</span> {
  <span class="token-function">init</span>(name) { <span class="token-keyword">super</span>(name); }
  <span class="token-keyword">fn</span> <span class="token-function">speak</span>() { <span class="token-builtin">print</span>(<span class="token-keyword">self</span>.name + <span class="token-string">" says Woof!"</span>); }
}

<span class="token-keyword">var</span> dog = <span class="token-type">Dog</span>(<span class="token-string">"Rex"</span>);
dog.<span class="token-function">speak</span>();   <span class="token-comment">// Rex says Woof!</span></code></pre>

<h2 id="interfaces">Interfaces</h2>
<pre><div class="code-header"><span>interface.vibe</span></div><code><span class="token-keyword">interface</span> <span class="token-type">Printable</span> {
  <span class="token-keyword">fn</span> <span class="token-function">toString</span>();
}

<span class="token-keyword">class</span> <span class="token-type">Point</span> <span class="token-keyword">implements</span> <span class="token-type">Printable</span> {
  <span class="token-keyword">var</span> x; <span class="token-keyword">var</span> y;
  <span class="token-function">init</span>(x, y) { <span class="token-keyword">self</span>.x = x; <span class="token-keyword">self</span>.y = y; }
  <span class="token-keyword">fn</span> <span class="token-function">toString</span>() {
    <span class="token-keyword">return</span> <span class="token-string">"("</span> + <span class="token-builtin">str</span>(<span class="token-keyword">self</span>.x) + <span class="token-string">", "</span> + <span class="token-builtin">str</span>(<span class="token-keyword">self</span>.y) + <span class="token-string">")"</span>;
  }
}</code></pre>

<h2 id="access-modifiers">Access Modifiers</h2>
<pre><div class="code-header"><span>access.vibe</span></div><code><span class="token-keyword">class</span> <span class="token-type">BankAccount</span> {
  <span class="token-keyword">private</span> <span class="token-keyword">var</span> balance = <span class="token-number">0</span>;

  <span class="token-keyword">public</span> <span class="token-keyword">fn</span> <span class="token-function">deposit</span>(amount) {
    <span class="token-keyword">self</span>.balance = <span class="token-keyword">self</span>.balance + amount;
  }

  <span class="token-keyword">public</span> <span class="token-keyword">fn</span> <span class="token-function">getBalance</span>() {
    <span class="token-keyword">return</span> <span class="token-keyword">self</span>.balance;
  }
}</code></pre>
`
},

// ── Collections ─────────────────────────────
collections: {
  title: 'Collections',
  content: `
<h1>Collections</h1>
<p class="lead">Vibe provides Lists and Maps as first-class collection types with rich method chains.</p>

<h2 id="lists">Lists</h2>
<pre><div class="code-header"><span>lists.vibe</span></div><code><span class="token-keyword">var</span> nums = [<span class="token-number">1</span>, <span class="token-number">2</span>, <span class="token-number">3</span>, <span class="token-number">4</span>, <span class="token-number">5</span>];
<span class="token-keyword">var</span> mixed = [<span class="token-number">1</span>, <span class="token-string">"two"</span>, <span class="token-boolean">true</span>, <span class="token-keyword">null</span>];

<span class="token-comment">// Access</span>
<span class="token-builtin">print</span>(nums[<span class="token-number">0</span>]);       <span class="token-comment">// 1</span>
<span class="token-builtin">print</span>(nums[-<span class="token-number">1</span>]);      <span class="token-comment">// 5 (last element)</span>

<span class="token-comment">// Modification</span>
nums.<span class="token-function">push</span>(<span class="token-number">6</span>);         <span class="token-comment">// [1, 2, 3, 4, 5, 6]</span>
nums.<span class="token-function">pop</span>();            <span class="token-comment">// removes 6</span>
nums.<span class="token-function">insert</span>(<span class="token-number">0</span>, <span class="token-number">0</span>);    <span class="token-comment">// [0, 1, 2, 3, 4, 5]</span>

<span class="token-comment">// Functional</span>
<span class="token-keyword">var</span> doubled = nums.<span class="token-function">map</span>((x) <span class="token-operator">=></span> x * <span class="token-number">2</span>);
<span class="token-keyword">var</span> evens = nums.<span class="token-function">filter</span>((x) <span class="token-operator">=></span> x % <span class="token-number">2</span> == <span class="token-number">0</span>);
<span class="token-keyword">var</span> total = nums.<span class="token-function">reduce</span>((a, b) <span class="token-operator">=></span> a + b, <span class="token-number">0</span>);</code></pre>

<h2 id="maps">Maps</h2>
<pre><div class="code-header"><span>maps.vibe</span></div><code><span class="token-keyword">var</span> user = {
  <span class="token-string">"name"</span>: <span class="token-string">"Alice"</span>,
  <span class="token-string">"age"</span>: <span class="token-number">30</span>,
  <span class="token-string">"active"</span>: <span class="token-boolean">true</span>
};

<span class="token-builtin">print</span>(user[<span class="token-string">"name"</span>]);       <span class="token-comment">// Alice</span>
<span class="token-builtin">print</span>(<span class="token-builtin">keys</span>(user));         <span class="token-comment">// ["name", "age", "active"]</span>
<span class="token-builtin">print</span>(<span class="token-builtin">values</span>(user));       <span class="token-comment">// ["Alice", 30, true]</span>
<span class="token-builtin">print</span>(<span class="token-builtin">len</span>(user));          <span class="token-comment">// 3</span></code></pre>

<h2 id="list-methods">List Methods</h2>
<table class="feature-table">
  <thead><tr><th>Method</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>.push(val)</code></td><td>Add element to end</td></tr>
    <tr><td><code>.pop()</code></td><td>Remove and return last element</td></tr>
    <tr><td><code>.insert(i, val)</code></td><td>Insert at index</td></tr>
    <tr><td><code>.remove(i)</code></td><td>Remove at index</td></tr>
    <tr><td><code>.sort()</code></td><td>Sort in place</td></tr>
    <tr><td><code>.reverse()</code></td><td>Reverse in place</td></tr>
    <tr><td><code>.contains(val)</code></td><td>Check if element exists</td></tr>
    <tr><td><code>.indexOf(val)</code></td><td>Find index of element</td></tr>
    <tr><td><code>.map(fn)</code></td><td>Transform each element</td></tr>
    <tr><td><code>.filter(fn)</code></td><td>Keep matching elements</td></tr>
    <tr><td><code>.reduce(fn, init)</code></td><td>Reduce to single value</td></tr>
    <tr><td><code>.forEach(fn)</code></td><td>Execute function per element</td></tr>
    <tr><td><code>.find(fn)</code></td><td>Find first matching element</td></tr>
    <tr><td><code>.some(fn)</code></td><td>Check if any element matches</td></tr>
    <tr><td><code>.every(fn)</code></td><td>Check if all elements match</td></tr>
    <tr><td><code>.slice(from, to)</code></td><td>Get sub-list</td></tr>
    <tr><td><code>.join(sep)</code></td><td>Join elements into string</td></tr>
    <tr><td><code>.flat()</code></td><td>Flatten nested lists</td></tr>
  </tbody>
</table>
`
},

// ── Error Handling ──────────────────────────
'error-handling': {
  title: 'Error Handling',
  content: `
<h1>Error Handling</h1>
<p class="lead">Use <code>try</code> / <code>catch</code> / <code>finally</code> to handle errors gracefully.</p>

<h2 id="try-catch">Try / Catch</h2>
<pre><div class="code-header"><span>errors.vibe</span></div><code><span class="token-keyword">try</span> {
  <span class="token-keyword">var</span> result = <span class="token-number">10</span> / <span class="token-number">0</span>;
  <span class="token-builtin">print</span>(result);
} <span class="token-keyword">catch</span> e {
  <span class="token-builtin">print</span>(<span class="token-string">"Error: "</span> + <span class="token-builtin">str</span>(e));
}</code></pre>

<h2 id="finally">Finally</h2>
<pre><div class="code-header"><span>finally.vibe</span></div><code><span class="token-keyword">try</span> {
  <span class="token-keyword">var</span> data = <span class="token-builtin">io.readFile</span>(<span class="token-string">"config.txt"</span>);
  <span class="token-builtin">print</span>(data);
} <span class="token-keyword">catch</span> e {
  <span class="token-builtin">print</span>(<span class="token-string">"Could not read file: "</span> + <span class="token-builtin">str</span>(e));
} <span class="token-keyword">finally</span> {
  <span class="token-builtin">print</span>(<span class="token-string">"Done."</span>);
}</code></pre>

<h2 id="throw">Throwing Errors</h2>
<pre><div class="code-header"><span>throw.vibe</span></div><code><span class="token-keyword">fn</span> <span class="token-function">divide</span>(a, b) {
  <span class="token-keyword">if</span> b == <span class="token-number">0</span> {
    <span class="token-keyword">throw</span> <span class="token-string">"Division by zero!"</span>;
  }
  <span class="token-keyword">return</span> a / b;
}

<span class="token-keyword">try</span> {
  <span class="token-builtin">print</span>(<span class="token-function">divide</span>(<span class="token-number">10</span>, <span class="token-number">0</span>));
} <span class="token-keyword">catch</span> e {
  <span class="token-builtin">print</span>(<span class="token-string">"Caught: "</span> + <span class="token-builtin">str</span>(e));
}</code></pre>

<h2 id="assert">Assert</h2>
<pre><div class="code-header"><span>assert.vibe</span></div><code><span class="token-builtin">assert</span>(<span class="token-number">2</span> + <span class="token-number">2</span> == <span class="token-number">4</span>);                    <span class="token-comment">// passes</span>
<span class="token-builtin">assert</span>(<span class="token-number">2</span> + <span class="token-number">2</span> == <span class="token-number">5</span>, <span class="token-string">"Math is broken!"</span>);  <span class="token-comment">// throws</span></code></pre>
`
},

// ── Modules & Imports ───────────────────────
modules: {
  title: 'Modules & Imports',
  content: `
<h1>Modules &amp; Imports</h1>
<p class="lead">Organize code with Vibe's module system.</p>

<h2 id="importing">Importing Modules</h2>
<pre><div class="code-header"><span>imports.vibe</span></div><code><span class="token-keyword">import</span> math;
<span class="token-keyword">import</span> io;
<span class="token-keyword">import</span> os;

<span class="token-builtin">print</span>(math.PI);              <span class="token-comment">// 3.14159...</span>
<span class="token-builtin">print</span>(math.<span class="token-function">sqrt</span>(<span class="token-number">16</span>));        <span class="token-comment">// 4</span>
<span class="token-builtin">print</span>(os.<span class="token-function">platform</span>());        <span class="token-comment">// "linux"</span></code></pre>

<h2 id="available-modules">Available Modules</h2>
<table class="feature-table">
  <thead><tr><th>Module</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>math</code></td><td>Math functions (sqrt, pow, sin, cos, random, etc.)</td></tr>
    <tr><td><code>io</code></td><td>File I/O (readFile, writeFile, exists, etc.)</td></tr>
    <tr><td><code>os</code></td><td>OS interaction (exec, env, platform, sleep, etc.)</td></tr>
    <tr><td><code>time</code></td><td>Time functions (now, millis, sleep, measure)</td></tr>
    <tr><td><code>json</code></td><td>JSON serialization (stringify)</td></tr>
    <tr><td><code>string</code></td><td>String utilities</td></tr>
    <tr><td><code>collections</code></td><td>Advanced collection utilities</td></tr>
  </tbody>
</table>

<h2 id="exporting">Exporting</h2>
<pre><div class="code-header"><span>utils.vibe</span></div><code><span class="token-keyword">export</span> <span class="token-keyword">fn</span> <span class="token-function">helper</span>(x) {
  <span class="token-keyword">return</span> x * <span class="token-number">2</span>;
}

<span class="token-keyword">export</span> <span class="token-keyword">const</span> VERSION = <span class="token-string">"1.0.0"</span>;</code></pre>
`
},

// ── Built-in Functions ──────────────────────
'stdlib-builtins': {
  title: 'Built-in Functions',
  content: `
<h1>Built-in Functions</h1>
<p class="lead">Vibe comes with 50+ built-in functions available everywhere without imports.</p>

<h2 id="io-functions">I/O Functions</h2>
<table class="feature-table">
  <thead><tr><th>Function</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>print(...args)</code></td><td>Print values with newline</td></tr>
    <tr><td><code>println()</code></td><td>Print an empty newline</td></tr>
    <tr><td><code>write(...args)</code></td><td>Print without trailing newline</td></tr>
    <tr><td><code>input(prompt?)</code></td><td>Read a line of input</td></tr>
  </tbody>
</table>

<h2 id="type-functions">Type Functions</h2>
<table class="feature-table">
  <thead><tr><th>Function</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>type(val)</code></td><td>Get type name as string</td></tr>
    <tr><td><code>typeof(val)</code></td><td>Alias for type()</td></tr>
    <tr><td><code>str(val)</code></td><td>Convert to string</td></tr>
    <tr><td><code>int(val)</code></td><td>Convert to integer</td></tr>
    <tr><td><code>float(val)</code></td><td>Convert to float</td></tr>
    <tr><td><code>bool(val)</code></td><td>Convert to boolean</td></tr>
    <tr><td><code>list(val)</code></td><td>Convert to list</td></tr>
    <tr><td><code>isNull(val)</code></td><td>Check if null</td></tr>
    <tr><td><code>isInt(val)</code></td><td>Check if integer</td></tr>
    <tr><td><code>isFloat(val)</code></td><td>Check if float</td></tr>
    <tr><td><code>isStr(val)</code></td><td>Check if string</td></tr>
    <tr><td><code>isBool(val)</code></td><td>Check if boolean</td></tr>
    <tr><td><code>isList(val)</code></td><td>Check if list</td></tr>
    <tr><td><code>isMap(val)</code></td><td>Check if map</td></tr>
    <tr><td><code>isFunction(val)</code></td><td>Check if function</td></tr>
  </tbody>
</table>

<h2 id="math-functions">Math Functions</h2>
<table class="feature-table">
  <thead><tr><th>Function</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>abs(n)</code></td><td>Absolute value</td></tr>
    <tr><td><code>min(a, b)</code></td><td>Minimum of two values or list</td></tr>
    <tr><td><code>max(a, b)</code></td><td>Maximum of two values or list</td></tr>
    <tr><td><code>sum(list)</code></td><td>Sum of list elements</td></tr>
    <tr><td><code>random()</code></td><td>Random float [0,1) or int [0,n)</td></tr>
    <tr><td><code>hash(val)</code></td><td>Hash value of any value</td></tr>
  </tbody>
</table>

<h2 id="collection-functions">Collection Functions</h2>
<table class="feature-table">
  <thead><tr><th>Function</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>len(val)</code></td><td>Length of string, list, or map</td></tr>
    <tr><td><code>range(start, end, step?)</code></td><td>Create numeric range</td></tr>
    <tr><td><code>sorted(list)</code></td><td>Sorted copy of list</td></tr>
    <tr><td><code>reversed(val)</code></td><td>Reversed copy</td></tr>
    <tr><td><code>flatten(list)</code></td><td>Flatten nested lists</td></tr>
    <tr><td><code>unique(list)</code></td><td>Remove duplicates</td></tr>
    <tr><td><code>zip(a, b)</code></td><td>Zip two lists into pairs</td></tr>
    <tr><td><code>enumerate(list)</code></td><td>[index, value] pairs</td></tr>
    <tr><td><code>keys(map)</code></td><td>Get map keys</td></tr>
    <tr><td><code>values(map)</code></td><td>Get map values</td></tr>
    <tr><td><code>join(list, sep)</code></td><td>Join list into string</td></tr>
    <tr><td><code>map(list, fn)</code></td><td>Transform each element</td></tr>
    <tr><td><code>filter(list, fn)</code></td><td>Keep matching elements</td></tr>
    <tr><td><code>reduce(list, fn, init?)</code></td><td>Reduce to single value</td></tr>
  </tbody>
</table>

<h2 id="string-functions">String Functions</h2>
<table class="feature-table">
  <thead><tr><th>Function</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>chr(code)</code></td><td>Character from ASCII code</td></tr>
    <tr><td><code>ord(char)</code></td><td>ASCII code of character</td></tr>
    <tr><td><code>format(fmt, ...args)</code></td><td>Format with {} placeholders</td></tr>
    <tr><td><code>repeat(str, n)</code></td><td>Repeat string n times</td></tr>
  </tbody>
</table>

<h2 id="utility-functions">Utility Functions</h2>
<table class="feature-table">
  <thead><tr><th>Function</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>assert(cond, msg?)</code></td><td>Assert condition</td></tr>
    <tr><td><code>clock()</code></td><td>High-res time in seconds</td></tr>
    <tr><td><code>timestamp()</code></td><td>Unix timestamp</td></tr>
    <tr><td><code>toJSON(val)</code></td><td>Convert to JSON string</td></tr>
    <tr><td><code>exit(code?)</code></td><td>Exit program</td></tr>
  </tbody>
</table>
`
},

// ── Math Module ─────────────────────────────
'stdlib-math': {
  title: 'Math Module',
  content: `
<h1>Math Module</h1>
<p class="lead">Mathematical functions and constants. Use with <code>import math;</code></p>

<h2 id="constants">Constants</h2>
<table class="feature-table">
  <thead><tr><th>Constant</th><th>Value</th></tr></thead>
  <tbody>
    <tr><td><code>math.PI</code></td><td>3.14159265358979...</td></tr>
    <tr><td><code>math.E</code></td><td>2.71828182845904...</td></tr>
  </tbody>
</table>

<h2 id="math-functions">Functions</h2>
<table class="feature-table">
  <thead><tr><th>Function</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>math.sqrt(x)</code></td><td>Square root</td></tr>
    <tr><td><code>math.pow(base, exp)</code></td><td>Power</td></tr>
    <tr><td><code>math.sin(x)</code></td><td>Sine (radians)</td></tr>
    <tr><td><code>math.cos(x)</code></td><td>Cosine (radians)</td></tr>
    <tr><td><code>math.tan(x)</code></td><td>Tangent (radians)</td></tr>
    <tr><td><code>math.log(x, base?)</code></td><td>Logarithm</td></tr>
    <tr><td><code>math.floor(x)</code></td><td>Round down</td></tr>
    <tr><td><code>math.ceil(x)</code></td><td>Round up</td></tr>
    <tr><td><code>math.round(x)</code></td><td>Round to nearest</td></tr>
    <tr><td><code>math.random()</code></td><td>Random float [0, 1)</td></tr>
    <tr><td><code>math.randomInt(lo, hi)</code></td><td>Random integer [lo, hi]</td></tr>
    <tr><td><code>math.factorial(n)</code></td><td>Factorial (n!)</td></tr>
    <tr><td><code>math.isPrime(n)</code></td><td>Primality test</td></tr>
    <tr><td><code>math.gcd(a, b)</code></td><td>Greatest common divisor</td></tr>
    <tr><td><code>math.lcm(a, b)</code></td><td>Least common multiple</td></tr>
  </tbody>
</table>

<h2 id="math-example">Example</h2>
<pre><div class="code-header"><span>math_demo.vibe</span></div><code><span class="token-keyword">import</span> math;

<span class="token-builtin">print</span>(math.<span class="token-function">sqrt</span>(<span class="token-number">144</span>));         <span class="token-comment">// 12</span>
<span class="token-builtin">print</span>(math.<span class="token-function">pow</span>(<span class="token-number">2</span>, <span class="token-number">10</span>));        <span class="token-comment">// 1024</span>
<span class="token-builtin">print</span>(math.<span class="token-function">factorial</span>(<span class="token-number">10</span>));     <span class="token-comment">// 3628800</span>
<span class="token-builtin">print</span>(math.<span class="token-function">isPrime</span>(<span class="token-number">97</span>));       <span class="token-comment">// true</span>
<span class="token-builtin">print</span>(math.<span class="token-function">gcd</span>(<span class="token-number">48</span>, <span class="token-number">18</span>));      <span class="token-comment">// 6</span></code></pre>
`
},

// ── IO Module ───────────────────────────────
'stdlib-io': {
  title: 'IO Module',
  content: `
<h1>IO Module</h1>
<p class="lead">File I/O operations. Use with <code>import io;</code></p>

<h2 id="io-functions">Functions</h2>
<table class="feature-table">
  <thead><tr><th>Function</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>io.readFile(path)</code></td><td>Read entire file as string</td></tr>
    <tr><td><code>io.writeFile(path, data)</code></td><td>Write string to file</td></tr>
    <tr><td><code>io.appendFile(path, data)</code></td><td>Append to file</td></tr>
    <tr><td><code>io.readLines(path)</code></td><td>Read file as list of lines</td></tr>
    <tr><td><code>io.exists(path)</code></td><td>Check if file exists</td></tr>
  </tbody>
</table>

<h2 id="io-example">Example</h2>
<pre><div class="code-header"><span>io_demo.vibe</span></div><code><span class="token-keyword">import</span> io;

<span class="token-comment">// Write a file</span>
io.<span class="token-function">writeFile</span>(<span class="token-string">"greeting.txt"</span>, <span class="token-string">"Hello, World!"</span>);

<span class="token-comment">// Check existence</span>
<span class="token-keyword">if</span> io.<span class="token-function">exists</span>(<span class="token-string">"greeting.txt"</span>) {
  <span class="token-keyword">var</span> content = io.<span class="token-function">readFile</span>(<span class="token-string">"greeting.txt"</span>);
  <span class="token-builtin">print</span>(content);   <span class="token-comment">// Hello, World!</span>
}

<span class="token-comment">// Read lines</span>
<span class="token-keyword">var</span> lines = io.<span class="token-function">readLines</span>(<span class="token-string">"data.txt"</span>);
<span class="token-keyword">for</span> line <span class="token-keyword">in</span> lines {
  <span class="token-builtin">print</span>(line);
}</code></pre>
`
},

// ── OS Module ───────────────────────────────
'stdlib-os': {
  title: 'OS Module',
  content: `
<h1>OS Module</h1>
<p class="lead">Operating system interaction. Use with <code>import os;</code></p>

<h2 id="os-functions">Functions</h2>
<table class="feature-table">
  <thead><tr><th>Function</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>os.exec(cmd)</code></td><td>Execute shell command, return output</td></tr>
    <tr><td><code>os.env(name)</code></td><td>Get environment variable</td></tr>
    <tr><td><code>os.platform()</code></td><td>Get OS name ("linux", "darwin", "windows")</td></tr>
    <tr><td><code>os.cwd()</code></td><td>Current working directory</td></tr>
    <tr><td><code>os.sleep(ms)</code></td><td>Sleep for milliseconds</td></tr>
  </tbody>
</table>

<h2 id="os-example">Example</h2>
<pre><div class="code-header"><span>os_demo.vibe</span></div><code><span class="token-keyword">import</span> os;

<span class="token-builtin">print</span>(<span class="token-string">"Platform: "</span> + os.<span class="token-function">platform</span>());
<span class="token-builtin">print</span>(<span class="token-string">"CWD: "</span> + os.<span class="token-function">cwd</span>());
<span class="token-builtin">print</span>(<span class="token-string">"HOME: "</span> + os.<span class="token-function">env</span>(<span class="token-string">"HOME"</span>));

<span class="token-keyword">var</span> output = os.<span class="token-function">exec</span>(<span class="token-string">"ls -la"</span>);
<span class="token-builtin">print</span>(output);</code></pre>
`
},

// ── String Methods ──────────────────────────
'stdlib-string': {
  title: 'String Methods',
  content: `
<h1>String Methods</h1>
<p class="lead">Rich string manipulation methods available on all string values.</p>

<h2 id="string-methods">Methods</h2>
<table class="feature-table">
  <thead><tr><th>Method</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>.upper()</code></td><td>Convert to uppercase</td></tr>
    <tr><td><code>.lower()</code></td><td>Convert to lowercase</td></tr>
    <tr><td><code>.trim()</code></td><td>Remove leading/trailing whitespace</td></tr>
    <tr><td><code>.trimStart()</code></td><td>Trim leading whitespace</td></tr>
    <tr><td><code>.trimEnd()</code></td><td>Trim trailing whitespace</td></tr>
    <tr><td><code>.split(delim)</code></td><td>Split into list of strings</td></tr>
    <tr><td><code>.contains(sub)</code></td><td>Check if substring exists</td></tr>
    <tr><td><code>.startsWith(prefix)</code></td><td>Check prefix</td></tr>
    <tr><td><code>.endsWith(suffix)</code></td><td>Check suffix</td></tr>
    <tr><td><code>.replace(old, new)</code></td><td>Replace occurrences</td></tr>
    <tr><td><code>.slice(from, to)</code></td><td>Get substring</td></tr>
    <tr><td><code>.indexOf(sub)</code></td><td>Find substring index</td></tr>
    <tr><td><code>.repeat(n)</code></td><td>Repeat n times</td></tr>
    <tr><td><code>.reverse()</code></td><td>Reverse the string</td></tr>
    <tr><td><code>.charAt(i)</code></td><td>Get character at index</td></tr>
    <tr><td><code>.chars()</code></td><td>Split into character list</td></tr>
    <tr><td><code>.padStart(len, pad)</code></td><td>Pad from start</td></tr>
    <tr><td><code>.padEnd(len, pad)</code></td><td>Pad from end</td></tr>
    <tr><td><code>.count(sub)</code></td><td>Count occurrences</td></tr>
    <tr><td><code>.isDigit()</code></td><td>Check if all digits</td></tr>
    <tr><td><code>.isAlpha()</code></td><td>Check if all alphabetic</td></tr>
    <tr><td><code>.toInt()</code></td><td>Parse as integer</td></tr>
    <tr><td><code>.toFloat()</code></td><td>Parse as float</td></tr>
    <tr><td><code>.length</code></td><td>String length (property)</td></tr>
  </tbody>
</table>

<h2 id="string-example">Example</h2>
<pre><div class="code-header"><span>string_demo.vibe</span></div><code><span class="token-keyword">var</span> s = <span class="token-string">"  Hello, World!  "</span>;
<span class="token-builtin">print</span>(s.<span class="token-function">trim</span>());               <span class="token-comment">// "Hello, World!"</span>
<span class="token-builtin">print</span>(s.<span class="token-function">trim</span>().<span class="token-function">upper</span>());       <span class="token-comment">// "HELLO, WORLD!"</span>
<span class="token-builtin">print</span>(s.<span class="token-function">trim</span>().<span class="token-function">split</span>(<span class="token-string">", "</span>));   <span class="token-comment">// ["Hello", "World!"]</span>
<span class="token-builtin">print</span>(<span class="token-string">"abc"</span>.<span class="token-function">repeat</span>(<span class="token-number">3</span>));        <span class="token-comment">// "abcabcabc"</span>
<span class="token-builtin">print</span>(<span class="token-string">"hello"</span>.<span class="token-function">contains</span>(<span class="token-string">"ell"</span>));  <span class="token-comment">// true</span></code></pre>
`
},

// ── List Methods ────────────────────────────
'stdlib-list': {
  title: 'List Methods',
  content: `
<h1>List Methods</h1>
<p class="lead">Full reference of methods available on list values.</p>

<h2 id="list-methods-ref">Methods</h2>
<table class="feature-table">
  <thead><tr><th>Method</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>.push(val)</code></td><td>Add element to end</td></tr>
    <tr><td><code>.pop()</code></td><td>Remove and return last element</td></tr>
    <tr><td><code>.add(val)</code></td><td>Alias for push()</td></tr>
    <tr><td><code>.insert(index, val)</code></td><td>Insert at index</td></tr>
    <tr><td><code>.remove(index)</code></td><td>Remove at index</td></tr>
    <tr><td><code>.sort()</code></td><td>Sort in place</td></tr>
    <tr><td><code>.reverse()</code></td><td>Reverse in place</td></tr>
    <tr><td><code>.clear()</code></td><td>Remove all elements</td></tr>
    <tr><td><code>.contains(val)</code></td><td>Check if element exists</td></tr>
    <tr><td><code>.indexOf(val)</code></td><td>Find first index of value</td></tr>
    <tr><td><code>.count(val)</code></td><td>Count occurrences</td></tr>
    <tr><td><code>.first()</code></td><td>Get first element</td></tr>
    <tr><td><code>.last()</code></td><td>Get last element</td></tr>
    <tr><td><code>.slice(from, to)</code></td><td>Get sub-list</td></tr>
    <tr><td><code>.join(sep)</code></td><td>Join into string</td></tr>
    <tr><td><code>.map(fn)</code></td><td>Transform each element</td></tr>
    <tr><td><code>.filter(fn)</code></td><td>Keep matching elements</td></tr>
    <tr><td><code>.reduce(fn, init)</code></td><td>Reduce to single value</td></tr>
    <tr><td><code>.forEach(fn)</code></td><td>Run function on each element</td></tr>
    <tr><td><code>.find(fn)</code></td><td>Find first matching element</td></tr>
    <tr><td><code>.findIndex(fn)</code></td><td>Find index of first match</td></tr>
    <tr><td><code>.some(fn)</code></td><td>True if any element matches</td></tr>
    <tr><td><code>.every(fn)</code></td><td>True if all elements match</td></tr>
    <tr><td><code>.flat()</code></td><td>Flatten one level</td></tr>
    <tr><td><code>.length</code></td><td>Number of elements (property)</td></tr>
    <tr><td><code>.isEmpty</code></td><td>True if empty (property)</td></tr>
  </tbody>
</table>

<h2 id="list-example">Example</h2>
<pre><div class="code-header"><span>list_demo.vibe</span></div><code><span class="token-keyword">var</span> nums = [<span class="token-number">5</span>, <span class="token-number">3</span>, <span class="token-number">8</span>, <span class="token-number">1</span>, <span class="token-number">9</span>, <span class="token-number">2</span>];

<span class="token-comment">// Sort and reverse</span>
<span class="token-keyword">var</span> sorted = <span class="token-builtin">sorted</span>(nums);     <span class="token-comment">// [1, 2, 3, 5, 8, 9]</span>
<span class="token-keyword">var</span> rev = <span class="token-builtin">reversed</span>(nums);      <span class="token-comment">// [2, 9, 1, 8, 3, 5]</span>

<span class="token-comment">// Functional pipeline</span>
<span class="token-keyword">var</span> result = nums
  .<span class="token-function">filter</span>((x) <span class="token-operator">=></span> x > <span class="token-number">3</span>)
  .<span class="token-function">map</span>((x) <span class="token-operator">=></span> x * <span class="token-number">10</span>)
  .<span class="token-function">reduce</span>((a, b) <span class="token-operator">=></span> a + b, <span class="token-number">0</span>);
<span class="token-builtin">print</span>(result);   <span class="token-comment">// 220 = (5+8+9) * 10 summed… wait, = 50+80+90 = 220</span></code></pre>
`
},

// ── Map Methods ─────────────────────────────
'stdlib-map': {
  title: 'Map Methods',
  content: `
<h1>Map Methods</h1>
<p class="lead">Methods available on map (dictionary) values.</p>

<h2 id="map-methods-ref">Methods</h2>
<table class="feature-table">
  <thead><tr><th>Method</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>.get(key, default)</code></td><td>Get value with fallback</td></tr>
    <tr><td><code>.set(key, val)</code></td><td>Set key-value pair</td></tr>
    <tr><td><code>.has(key)</code></td><td>Check if key exists</td></tr>
    <tr><td><code>.delete(key)</code></td><td>Remove key-value pair</td></tr>
    <tr><td><code>.keys()</code></td><td>Get list of keys</td></tr>
    <tr><td><code>.values()</code></td><td>Get list of values</td></tr>
    <tr><td><code>.length</code></td><td>Number of entries (property)</td></tr>
  </tbody>
</table>

<h2 id="map-example">Example</h2>
<pre><div class="code-header"><span>map_demo.vibe</span></div><code><span class="token-keyword">var</span> scores = {
  <span class="token-string">"alice"</span>: <span class="token-number">95</span>,
  <span class="token-string">"bob"</span>: <span class="token-number">87</span>,
  <span class="token-string">"charlie"</span>: <span class="token-number">92</span>
};

<span class="token-builtin">print</span>(scores[<span class="token-string">"alice"</span>]);        <span class="token-comment">// 95</span>
<span class="token-builtin">print</span>(<span class="token-builtin">keys</span>(scores));           <span class="token-comment">// ["alice", "bob", "charlie"]</span>
<span class="token-builtin">print</span>(<span class="token-builtin">values</span>(scores));         <span class="token-comment">// [95, 87, 92]</span>

scores[<span class="token-string">"dave"</span>] = <span class="token-number">88</span>;
<span class="token-builtin">print</span>(<span class="token-builtin">len</span>(scores));            <span class="token-comment">// 4</span></code></pre>
`
},

// ── Lambdas & Closures ──────────────────────
lambdas: {
  title: 'Lambdas & Closures',
  content: `
<h1>Lambdas &amp; Closures</h1>
<p class="lead">Arrow functions are concise, first-class function values that capture their enclosing scope.</p>

<h2 id="lambda-syntax">Lambda Syntax</h2>
<pre><div class="code-header"><span>lambdas.vibe</span></div><code><span class="token-comment">// Single expression</span>
<span class="token-keyword">var</span> double = (x) <span class="token-operator">=></span> x * <span class="token-number">2</span>;

<span class="token-comment">// Multi-line body</span>
<span class="token-keyword">var</span> process = (x) <span class="token-operator">=></span> {
  <span class="token-keyword">var</span> y = x * <span class="token-number">2</span>;
  <span class="token-keyword">return</span> y + <span class="token-number">1</span>;
};

<span class="token-comment">// Multiple parameters</span>
<span class="token-keyword">var</span> add = (a, b) <span class="token-operator">=></span> a + b;

<span class="token-comment">// As arguments</span>
[<span class="token-number">1</span>,<span class="token-number">2</span>,<span class="token-number">3</span>].<span class="token-function">map</span>((x) <span class="token-operator">=></span> x * <span class="token-number">10</span>);
[<span class="token-number">1</span>,<span class="token-number">2</span>,<span class="token-number">3</span>,<span class="token-number">4</span>].<span class="token-function">filter</span>((x) <span class="token-operator">=></span> x % <span class="token-number">2</span> == <span class="token-number">0</span>);</code></pre>

<h2 id="closures-detail">Closures</h2>
<p>Lambdas capture variables from their enclosing scope:</p>
<pre><div class="code-header"><span>closures.vibe</span></div><code><span class="token-keyword">fn</span> <span class="token-function">makeAdder</span>(n) {
  <span class="token-keyword">return</span> (x) <span class="token-operator">=></span> x + n;  <span class="token-comment">// captures 'n'</span>
}

<span class="token-keyword">var</span> add5 = <span class="token-function">makeAdder</span>(<span class="token-number">5</span>);
<span class="token-builtin">print</span>(<span class="token-function">add5</span>(<span class="token-number">10</span>));   <span class="token-comment">// 15</span>
<span class="token-builtin">print</span>(<span class="token-function">add5</span>(<span class="token-number">20</span>));   <span class="token-comment">// 25</span></code></pre>
`
},

// ── Pattern Matching ────────────────────────
'pattern-matching': {
  title: 'Pattern Matching',
  content: `
<h1>Pattern Matching</h1>
<p class="lead">The <code>match</code> expression lets you compare a value against multiple patterns.</p>

<h2 id="basic-match">Basic Match</h2>
<pre><div class="code-header"><span>match.vibe</span></div><code><span class="token-keyword">var</span> x = <span class="token-number">2</span>;

<span class="token-keyword">match</span> x {
  <span class="token-number">1</span> <span class="token-operator">=></span> <span class="token-builtin">print</span>(<span class="token-string">"one"</span>),
  <span class="token-number">2</span> <span class="token-operator">=></span> <span class="token-builtin">print</span>(<span class="token-string">"two"</span>),
  <span class="token-number">3</span> <span class="token-operator">=></span> <span class="token-builtin">print</span>(<span class="token-string">"three"</span>),
  _ <span class="token-operator">=></span> <span class="token-builtin">print</span>(<span class="token-string">"other"</span>),
}</code></pre>

<h2 id="match-strings">String Matching</h2>
<pre><div class="code-header"><span>match_string.vibe</span></div><code><span class="token-keyword">var</span> cmd = <span class="token-string">"greet"</span>;

<span class="token-keyword">match</span> cmd {
  <span class="token-string">"greet"</span> <span class="token-operator">=></span> <span class="token-builtin">print</span>(<span class="token-string">"Hello!"</span>),
  <span class="token-string">"bye"</span>   <span class="token-operator">=></span> <span class="token-builtin">print</span>(<span class="token-string">"Goodbye!"</span>),
  <span class="token-string">"help"</span>  <span class="token-operator">=></span> <span class="token-builtin">print</span>(<span class="token-string">"Use: greet, bye, help"</span>),
  _       <span class="token-operator">=></span> <span class="token-builtin">print</span>(<span class="token-string">"Unknown command"</span>),
}</code></pre>

<h2 id="match-blocks">Block Arms</h2>
<pre><div class="code-header"><span>match_blocks.vibe</span></div><code><span class="token-keyword">var</span> score = <span class="token-number">85</span>;

<span class="token-keyword">match</span> <span class="token-boolean">true</span> {
  score >= <span class="token-number">90</span> <span class="token-operator">=></span> { <span class="token-builtin">print</span>(<span class="token-string">"A"</span>); },
  score >= <span class="token-number">80</span> <span class="token-operator">=></span> { <span class="token-builtin">print</span>(<span class="token-string">"B"</span>); },
  score >= <span class="token-number">70</span> <span class="token-operator">=></span> { <span class="token-builtin">print</span>(<span class="token-string">"C"</span>); },
  _          <span class="token-operator">=></span> { <span class="token-builtin">print</span>(<span class="token-string">"F"</span>); },
}</code></pre>
`
},

// ── Enums ───────────────────────────────────
enums: {
  title: 'Enums',
  content: `
<h1>Enums</h1>
<p class="lead">Declare named constants with <code>enum</code>.</p>

<h2 id="basic-enum">Basic Enum</h2>
<pre><div class="code-header"><span>enum.vibe</span></div><code><span class="token-keyword">enum</span> <span class="token-type">Color</span> {
  Red,
  Green,
  Blue
}

<span class="token-keyword">var</span> c = Color.Red;
<span class="token-builtin">print</span>(c);   <span class="token-comment">// Color.Red</span>

<span class="token-keyword">match</span> c {
  Color.Red   <span class="token-operator">=></span> <span class="token-builtin">print</span>(<span class="token-string">"red!"</span>),
  Color.Green <span class="token-operator">=></span> <span class="token-builtin">print</span>(<span class="token-string">"green!"</span>),
  Color.Blue  <span class="token-operator">=></span> <span class="token-builtin">print</span>(<span class="token-string">"blue!"</span>),
}</code></pre>

<h2 id="enum-values">Enum with Values</h2>
<pre><div class="code-header"><span>enum_values.vibe</span></div><code><span class="token-keyword">enum</span> <span class="token-type">HttpStatus</span> {
  OK = <span class="token-number">200</span>,
  NotFound = <span class="token-number">404</span>,
  ServerError = <span class="token-number">500</span>
}

<span class="token-builtin">print</span>(HttpStatus.OK);          <span class="token-comment">// 200</span>
<span class="token-builtin">print</span>(HttpStatus.NotFound);    <span class="token-comment">// 404</span></code></pre>
`
},

// ── Compilation / Codegen ───────────────────
codegen: {
  title: 'Compilation / Codegen',
  content: `
<h1>Compilation / Codegen</h1>
<p class="lead">Vibe can transpile your code to C++ and compile it to a native binary.</p>

<h2 id="how-it-works">How It Works</h2>
<ol>
  <li>Vibe parses your <code>.vibe</code> source into an AST</li>
  <li>The code generator traverses the AST and emits C++ code</li>
  <li>The emitted C++ is compiled with <code>g++</code> to produce a native binary</li>
</ol>

<h2 id="build-command">Building</h2>
<pre><div class="code-header"><span>Terminal</span></div><code><span class="token-comment"># Transpile and compile</span>
vibe build myprogram.vibe

<span class="token-comment"># This produces a native binary: ./myprogram</span>
./myprogram</code></pre>

<h2 id="codegen-support">Supported Features</h2>
<p>The code generator supports most Vibe features:</p>
<ul>
  <li>Variables, constants, and arithmetic</li>
  <li>Functions and closures</li>
  <li>If/else and loops</li>
  <li>String operations</li>
  <li>Print and basic I/O</li>
  <li>Classes (basic)</li>
</ul>

<div class="callout note">
  <div class="callout-title">Note</div>
  <p>Some advanced runtime features (dynamic method dispatch, full REPL semantics) may not yet be supported in the codegen path. The interpreter remains the recommended way to run complex programs.</p>
</div>
`
},

// ── Examples ────────────────────────────────
examples: {
  title: 'Examples',
  content: `
<h1>Examples</h1>
<p class="lead">Real-world examples to learn from.</p>

<h2 id="fibonacci">Fibonacci</h2>
<pre><div class="code-header"><span>fib.vibe</span></div><code><span class="token-keyword">fn</span> <span class="token-function">fib</span>(n) {
  <span class="token-keyword">if</span> n <= <span class="token-number">1</span> { <span class="token-keyword">return</span> n; }
  <span class="token-keyword">return</span> <span class="token-function">fib</span>(n - <span class="token-number">1</span>) + <span class="token-function">fib</span>(n - <span class="token-number">2</span>);
}

<span class="token-keyword">for</span> i <span class="token-keyword">in</span> <span class="token-builtin">range</span>(<span class="token-number">0</span>, <span class="token-number">15</span>) {
  <span class="token-builtin">print</span>(<span class="token-string">"fib("</span> + <span class="token-builtin">str</span>(i) + <span class="token-string">") = "</span> + <span class="token-builtin">str</span>(<span class="token-function">fib</span>(i)));
}</code></pre>

<h2 id="todo-list">Todo List</h2>
<pre><div class="code-header"><span>todo.vibe</span></div><code><span class="token-keyword">var</span> todos = [];

<span class="token-keyword">fn</span> <span class="token-function">addTodo</span>(task) {
  todos.<span class="token-function">push</span>({<span class="token-string">"task"</span>: task, <span class="token-string">"done"</span>: <span class="token-boolean">false</span>});
}

<span class="token-keyword">fn</span> <span class="token-function">completeTodo</span>(index) {
  todos[index][<span class="token-string">"done"</span>] = <span class="token-boolean">true</span>;
}

<span class="token-keyword">fn</span> <span class="token-function">showTodos</span>() {
  <span class="token-keyword">for</span> i <span class="token-keyword">in</span> <span class="token-builtin">range</span>(<span class="token-number">0</span>, <span class="token-builtin">len</span>(todos)) {
    <span class="token-keyword">var</span> t = todos[i];
    <span class="token-keyword">var</span> status = <span class="token-keyword">if</span> t[<span class="token-string">"done"</span>] { <span class="token-string">"[x]"</span> } <span class="token-keyword">else</span> { <span class="token-string">"[ ]"</span> };
    <span class="token-builtin">print</span>(<span class="token-builtin">str</span>(i) + <span class="token-string">". "</span> + status + <span class="token-string">" "</span> + t[<span class="token-string">"task"</span>]);
  }
}

<span class="token-function">addTodo</span>(<span class="token-string">"Learn Vibe"</span>);
<span class="token-function">addTodo</span>(<span class="token-string">"Build a project"</span>);
<span class="token-function">addTodo</span>(<span class="token-string">"Share with friends"</span>);
<span class="token-function">completeTodo</span>(<span class="token-number">0</span>);
<span class="token-function">showTodos</span>();</code></pre>

<h2 id="functional-pipeline">Functional Pipeline</h2>
<pre><div class="code-header"><span>pipeline.vibe</span></div><code><span class="token-keyword">var</span> data = [<span class="token-number">1</span>, <span class="token-number">2</span>, <span class="token-number">3</span>, <span class="token-number">4</span>, <span class="token-number">5</span>, <span class="token-number">6</span>, <span class="token-number">7</span>, <span class="token-number">8</span>, <span class="token-number">9</span>, <span class="token-number">10</span>];

<span class="token-keyword">var</span> result = data
  .<span class="token-function">filter</span>((x) <span class="token-operator">=></span> x % <span class="token-number">2</span> == <span class="token-number">0</span>)     <span class="token-comment">// [2, 4, 6, 8, 10]</span>
  .<span class="token-function">map</span>((x) <span class="token-operator">=></span> x * x)             <span class="token-comment">// [4, 16, 36, 64, 100]</span>
  .<span class="token-function">reduce</span>((a, b) <span class="token-operator">=></span> a + b, <span class="token-number">0</span>);   <span class="token-comment">// 220</span>

<span class="token-builtin">print</span>(<span class="token-string">"Sum of squares of evens: "</span> + <span class="token-builtin">str</span>(result));</code></pre>

<h2 id="class-hierarchy">Class Hierarchy</h2>
<pre><div class="code-header"><span>shapes.vibe</span></div><code><span class="token-keyword">class</span> <span class="token-type">Shape</span> {
  <span class="token-keyword">fn</span> <span class="token-function">area</span>() { <span class="token-keyword">return</span> <span class="token-number">0</span>; }
  <span class="token-keyword">fn</span> <span class="token-function">describe</span>() {
    <span class="token-builtin">print</span>(<span class="token-builtin">type</span>(<span class="token-keyword">self</span>) + <span class="token-string">" with area "</span> + <span class="token-builtin">str</span>(<span class="token-keyword">self</span>.<span class="token-function">area</span>()));
  }
}

<span class="token-keyword">class</span> <span class="token-type">Circle</span> <span class="token-keyword">extends</span> <span class="token-type">Shape</span> {
  <span class="token-keyword">var</span> radius;
  <span class="token-function">init</span>(r) { <span class="token-keyword">self</span>.radius = r; }
  <span class="token-keyword">fn</span> <span class="token-function">area</span>() { <span class="token-keyword">return</span> <span class="token-number">3.14159</span> * <span class="token-keyword">self</span>.radius * <span class="token-keyword">self</span>.radius; }
}

<span class="token-keyword">class</span> <span class="token-type">Rectangle</span> <span class="token-keyword">extends</span> <span class="token-type">Shape</span> {
  <span class="token-keyword">var</span> w; <span class="token-keyword">var</span> h;
  <span class="token-function">init</span>(w, h) { <span class="token-keyword">self</span>.w = w; <span class="token-keyword">self</span>.h = h; }
  <span class="token-keyword">fn</span> <span class="token-function">area</span>() { <span class="token-keyword">return</span> <span class="token-keyword">self</span>.w * <span class="token-keyword">self</span>.h; }
}

<span class="token-keyword">var</span> shapes = [<span class="token-type">Circle</span>(<span class="token-number">5</span>), <span class="token-type">Rectangle</span>(<span class="token-number">4</span>, <span class="token-number">6</span>)];
<span class="token-keyword">for</span> s <span class="token-keyword">in</span> shapes {
  s.<span class="token-function">describe</span>();
}</code></pre>
`
},

// ── API Reference ───────────────────────────
reference: {
  title: 'API Reference',
  content: `
<h1>API Reference</h1>
<p class="lead">Complete reference of Vibe's syntax, keywords, and operators.</p>

<h2 id="keywords">Keywords</h2>
<div class="card-grid">
  <div class="card">
    <h3>Declarations</h3>
    <p><code>var</code> <code>let</code> <code>const</code> <code>fn</code> <code>class</code> <code>interface</code> <code>enum</code></p>
  </div>
  <div class="card">
    <h3>Control Flow</h3>
    <p><code>if</code> <code>else</code> <code>for</code> <code>in</code> <code>while</code> <code>do</code> <code>match</code> <code>break</code> <code>continue</code> <code>return</code></p>
  </div>
  <div class="card">
    <h3>OOP</h3>
    <p><code>class</code> <code>extends</code> <code>implements</code> <code>self</code> <code>super</code> <code>init</code> <code>override</code></p>
  </div>
  <div class="card">
    <h3>Access Modifiers</h3>
    <p><code>public</code> <code>private</code> <code>protected</code> <code>static</code></p>
  </div>
  <div class="card">
    <h3>Error Handling</h3>
    <p><code>try</code> <code>catch</code> <code>finally</code> <code>throw</code></p>
  </div>
  <div class="card">
    <h3>Modules</h3>
    <p><code>import</code> <code>export</code></p>
  </div>
</div>

<h2 id="operators">Operators</h2>
<table class="feature-table">
  <thead><tr><th>Category</th><th>Operators</th></tr></thead>
  <tbody>
    <tr><td>Arithmetic</td><td><code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code> <code>**</code></td></tr>
    <tr><td>Comparison</td><td><code>==</code> <code>!=</code> <code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code></td></tr>
    <tr><td>Logical</td><td><code>&amp;&amp;</code> <code>||</code> <code>!</code></td></tr>
    <tr><td>Assignment</td><td><code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code> <code>%=</code></td></tr>
    <tr><td>Other</td><td><code>=&gt;</code> <code>-&gt;</code> <code>..</code> <code>...</code></td></tr>
  </tbody>
</table>

<h2 id="escape-sequences">String Escape Sequences</h2>
<table class="feature-table">
  <thead><tr><th>Escape</th><th>Character</th></tr></thead>
  <tbody>
    <tr><td><code>\\n</code></td><td>Newline</td></tr>
    <tr><td><code>\\t</code></td><td>Tab</td></tr>
    <tr><td><code>\\r</code></td><td>Carriage return</td></tr>
    <tr><td><code>\\\\</code></td><td>Backslash</td></tr>
    <tr><td><code>\\"</code></td><td>Double quote</td></tr>
    <tr><td><code>\\0</code></td><td>Null character</td></tr>
  </tbody>
</table>
`
},


  "neural-modules": {
    title: "Neural Modules",
    content: `<h1>Neural Modules</h1>
<p>Using <code>vibe.ml</code> and <code>module</code>, Vibe constructs neural-architectures directly mapping to PyTorch-like <code>nn.Module</code> but fully statically typed. </p>
<pre><code class="language-vibe">import ml;

module MLP {
    let fc1 = new Linear(784, 128);
    let fc2 = new Linear(128, 10);

    fn forward(x: Tensor) -&gt; Tensor {
        return x |&gt; fc1.forward() |&gt; ml.relu() |&gt; fc2.forward();
    }
}
</code></pre>
`
  },

  "pipelines": {
    title: "Data Pipelines",
    content: `<h1>Data Pipelines</h1>
<p>Fast pipelines using threaded <code>streams</code>. </p>
<pre><code class="language-vibe">let raw_data = read_csv(&quot;data.csv&quot;);

let dataloader = raw_data 
        |&gt; stream()
        |&gt; map(normalize)
        |&gt; batch(32)
        |&gt; prefetch(2); // load two batches onto GPU memory concurrently!

parallel for batch in dataloader {
    // Neural processing running on multiple cores concurrently
    model.train_step(batch);
}
</code></pre>
<p>Vibe uses thread-pools and automatic parallelization across pipeline iterators when using <code>parallel for</code>.</p>
`
  },

  "tensor-autograd": {
    title: "Tensors and Autograd",
    content: `<h1>Tensors and Autograd</h1>
<p>Vibe treats matrices and multi-dimensional arrays as first-class citizens using <code>Tensor</code>.</p>
<p>Built into <code>Tensor</code> is native automatic differentiation via <code>requiresGrad()</code>.</p>
<pre><code class="language-vibe">let x = new Tensor([2.0, 3.0]).requiresGrad();
let y = x * x;

y.backward(); // Calculate gradients dynamically!
print(x.grad()); // Output vector gradients
</code></pre>
<p>Unlike python wrappers, autograd runs purely in optimized C++.</p>
`
  },

  "actors": {
    title: "Actor Models (Distributed Concurrency)",
    content: `<h1>Actor Models (Distributed Concurrency)</h1>
<p>Vibe integrates distributed concurrency built natively off event loops and fibers via <code>actors</code>.</p>
<pre><code class="language-vibe">actor PingServer {
    fn receive(msg: String) {
        if msg == &quot;Ping&quot; {
            print(&quot;Pong!&quot;);
        }
    }
}

let server = spawn PingServer();
server.send(&quot;Ping&quot;);
</code></pre>
`
  },

  "dataframes": {
    title: "DataFrame Primitives",
    content: `<h1>DataFrame Primitives</h1>
<p>Built into <code>vibe.data</code> are high performance dataframes for native, memory efficient analytical workloads using columnar storage.</p>
<pre><code class="language-vibe">import vibe.data

let df = new DataFrame();
df.add_column(&quot;A&quot;, [1, 2, 3]);
df.add_column(&quot;B&quot;, [4.5, 5.5, 6.5]);

df.print_head(2);

let active = df.filter(&quot;A&quot;, 1.0); // Removes row 1 where A isn&#39;t &gt; 1.0
</code></pre>
`
  },

  "destructuring": {
    title: "Destructuring",
    content: `<h1>Destructuring</h1>
<p>Vibe allows you to elegantly unpack values from structures into distinct variables bindings using destructuring.</p>
<h2>Object Destructuring</h2>
<pre><code class="language-vibe">class Point {
    public int x = 10;
    public int y = 20;
}

let p = new Point();

// Destructure x and y variables natively into scope
let { x, y } = p;
print(x); // 10
</code></pre>
<h2>Array Destructuring</h2>
<pre><code class="language-vibe">let colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;];
let [first, second, third] = colors;
</code></pre>
`
  },

  "pattern-matching": {
    title: "Pattern Matching",
    content: `<h1>Pattern Matching</h1>
<p>Pattern matching in Vibe allows you to elegantly match against values and types. It goes beyond a simple <code>switch</code> statement by supporting structural matching.</p>
<h2>Syntax</h2>
<pre><code class="language-vibe">enum State {
    Idle,
    Running,
    Finished
}

let current = State.Running;

match current {
    State.Idle =&gt; print(&quot;Idling...&quot;),
    State.Running =&gt; print(&quot;In progress!&quot;),
    State.Finished =&gt; print(&quot;Done.&quot;),
    _ =&gt; print(&quot;Unknown state&quot;)
}
</code></pre>
<p>The <code>_</code> is the wildcard operator which captures all unhandled conditions.</p>
`
  },

  "pipe": {
    title: "Pipe Operator (`|>`)",
    content: `<h1>Pipe Operator (<code>|&gt;</code>)</h1>
<p>The pipe operator allows you to chain function calls fluidly. It takes the output of the expression on the left and passes it as the <strong>first argument</strong> to the function on the right.</p>
<h3>Example</h3>
<pre><code class="language-vibe">// Without pipe:
let result = capitalize(trim(&quot;  hello  &quot;));

// With pipe:
let result = &quot;  hello  &quot; |&gt; trim() |&gt; capitalize();
</code></pre>
<p>This is especially powerful when chained with data operations and arrays.</p>
`
  },

  "python-interop": {
    title: "Python Interoperability",
    content: `<h1>Python Interoperability</h1>
<p>Vibe allows for full integration with Python code through embedded evaluation or native imports using CPython. This ensures you can access Numpy, Pandas, or PyTorch without leaving Vibe&#39;s static performance ecosystem.</p>
<h2><code>pyimport</code> Keyword</h2>
<pre><code class="language-vibe">pyimport numpy as np;

let arr = np.array([1, 2, 3]);
print(np.mean(arr));
</code></pre>
<h2><code>python</code> Inline Block</h2>
<pre><code class="language-vibe">python &quot;
import math
print(f&#39;Embedded Python: {math.pi}&#39;)
&quot;;
</code></pre>
`
  },

  "quantum": {
    title: "Quantum Computing Primitives",
    content: `<h1>Quantum Computing Primitives</h1>
<p>Vibe integrates quantum programming at a low level by interfacing standard gates to local simulations. </p>
<pre><code class="language-vibe">import quantum;

let qc = new QuantumCircuit(2); // 2 Qubits

qc.h(0);          // Hadamard on Q[0]
qc.cx(0, 1);      // CNOT entangling Q[0] and Q[1]

let results = qc.measure_all();
print(results);
</code></pre>
`
  },

  "type-aliases": {
    title: "Type Aliasing",
    content: `<h1>Type Aliasing</h1>
<p>To avoid deep nesting and simplify repeated complex type definitions, you can use <code>type</code>.</p>
<h2>Syntax</h2>
<pre><code class="language-vibe">type UserID = Int;
type UserMap = Map&lt;UserID, String&gt;;

let cache: UserMap = {
    101: &quot;Alice&quot;,
    102: &quot;Bob&quot;
};
</code></pre>
<p>This acts as syntactic sugar exactly like in TypeScript or Rust.</p>
`
  },


  "neural-modules": {
    title: "Neural Modules",
    content: `<h1>Neural Modules</h1>
<p>Using <code>vibe.ml</code> and <code>module</code>, Vibe constructs neural-architectures directly mapping to PyTorch-like <code>nn.Module</code> but fully statically typed. </p>
<pre><code class="language-vibe">import ml;

module MLP {
    let fc1 = new Linear(784, 128);
    let fc2 = new Linear(128, 10);

    fn forward(x: Tensor) -&gt; Tensor {
        return x |&gt; fc1.forward() |&gt; ml.relu() |&gt; fc2.forward();
    }
}
</code></pre>
`
  },

  "pipelines": {
    title: "Data Pipelines",
    content: `<h1>Data Pipelines</h1>
<p>Fast pipelines using threaded <code>streams</code>. </p>
<pre><code class="language-vibe">let raw_data = read_csv(&quot;data.csv&quot;);

let dataloader = raw_data 
        |&gt; stream()
        |&gt; map(normalize)
        |&gt; batch(32)
        |&gt; prefetch(2); // load two batches onto GPU memory concurrently!

parallel for batch in dataloader {
    // Neural processing running on multiple cores concurrently
    model.train_step(batch);
}
</code></pre>
<p>Vibe uses thread-pools and automatic parallelization across pipeline iterators when using <code>parallel for</code>.</p>
`
  },

  "tensor-autograd": {
    title: "Tensors and Autograd",
    content: `<h1>Tensors and Autograd</h1>
<p>Vibe treats matrices and multi-dimensional arrays as first-class citizens using <code>Tensor</code>.</p>
<p>Built into <code>Tensor</code> is native automatic differentiation via <code>requiresGrad()</code>.</p>
<pre><code class="language-vibe">let x = new Tensor([2.0, 3.0]).requiresGrad();
let y = x * x;

y.backward(); // Calculate gradients dynamically!
print(x.grad()); // Output vector gradients
</code></pre>
<p>Unlike python wrappers, autograd runs purely in optimized C++.</p>
`
  },

  "actors": {
    title: "Actor Models (Distributed Concurrency)",
    content: `<h1>Actor Models (Distributed Concurrency)</h1>
<p>Vibe integrates distributed concurrency built natively off event loops and fibers via <code>actors</code>.</p>
<pre><code class="language-vibe">actor PingServer {
    fn receive(msg: String) {
        if msg == &quot;Ping&quot; {
            print(&quot;Pong!&quot;);
        }
    }
}

let server = spawn PingServer();
server.send(&quot;Ping&quot;);
</code></pre>
`
  },

  "dataframes": {
    title: "DataFrame Primitives",
    content: `<h1>DataFrame Primitives</h1>
<p>Built into <code>vibe.data</code> are high performance dataframes for native, memory efficient analytical workloads using columnar storage.</p>
<pre><code class="language-vibe">import vibe.data

let df = new DataFrame();
df.add_column(&quot;A&quot;, [1, 2, 3]);
df.add_column(&quot;B&quot;, [4.5, 5.5, 6.5]);

df.print_head(2);

let active = df.filter(&quot;A&quot;, 1.0); // Removes row 1 where A isn&#39;t &gt; 1.0
</code></pre>
`
  },

  "destructuring": {
    title: "Destructuring",
    content: `<h1>Destructuring</h1>
<p>Vibe allows you to elegantly unpack values from structures into distinct variables bindings using destructuring.</p>
<h2>Object Destructuring</h2>
<pre><code class="language-vibe">class Point {
    public int x = 10;
    public int y = 20;
}

let p = new Point();

// Destructure x and y variables natively into scope
let { x, y } = p;
print(x); // 10
</code></pre>
<h2>Array Destructuring</h2>
<pre><code class="language-vibe">let colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;];
let [first, second, third] = colors;
</code></pre>
`
  },

  "pattern-matching": {
    title: "Pattern Matching",
    content: `<h1>Pattern Matching</h1>
<p>Pattern matching in Vibe allows you to elegantly match against values and types. It goes beyond a simple <code>switch</code> statement by supporting structural matching.</p>
<h2>Syntax</h2>
<pre><code class="language-vibe">enum State {
    Idle,
    Running,
    Finished
}

let current = State.Running;

match current {
    State.Idle =&gt; print(&quot;Idling...&quot;),
    State.Running =&gt; print(&quot;In progress!&quot;),
    State.Finished =&gt; print(&quot;Done.&quot;),
    _ =&gt; print(&quot;Unknown state&quot;)
}
</code></pre>
<p>The <code>_</code> is the wildcard operator which captures all unhandled conditions.</p>
`
  },

  "pipe": {
    title: "Pipe Operator (`|>`)",
    content: `<h1>Pipe Operator (<code>|&gt;</code>)</h1>
<p>The pipe operator allows you to chain function calls fluidly. It takes the output of the expression on the left and passes it as the <strong>first argument</strong> to the function on the right.</p>
<h3>Example</h3>
<pre><code class="language-vibe">// Without pipe:
let result = capitalize(trim(&quot;  hello  &quot;));

// With pipe:
let result = &quot;  hello  &quot; |&gt; trim() |&gt; capitalize();
</code></pre>
<p>This is especially powerful when chained with data operations and arrays.</p>
`
  },

  "python-interop": {
    title: "Python Interoperability",
    content: `<h1>Python Interoperability</h1>
<p>Vibe allows for full integration with Python code through embedded evaluation or native imports using CPython. This ensures you can access Numpy, Pandas, or PyTorch without leaving Vibe&#39;s static performance ecosystem.</p>
<h2><code>pyimport</code> Keyword</h2>
<pre><code class="language-vibe">pyimport numpy as np;

let arr = np.array([1, 2, 3]);
print(np.mean(arr));
</code></pre>
<h2><code>python</code> Inline Block</h2>
<pre><code class="language-vibe">python &quot;
import math
print(f&#39;Embedded Python: {math.pi}&#39;)
&quot;;
</code></pre>
`
  },

  "quantum": {
    title: "Quantum Computing Primitives",
    content: `<h1>Quantum Computing Primitives</h1>
<p>Vibe integrates quantum programming at a low level by interfacing standard gates to local simulations. </p>
<pre><code class="language-vibe">import quantum;

let qc = new QuantumCircuit(2); // 2 Qubits

qc.h(0);          // Hadamard on Q[0]
qc.cx(0, 1);      // CNOT entangling Q[0] and Q[1]

let results = qc.measure_all();
print(results);
</code></pre>
`
  },

  "type-aliases": {
    title: "Type Aliasing",
    content: `<h1>Type Aliasing</h1>
<p>To avoid deep nesting and simplify repeated complex type definitions, you can use <code>type</code>.</p>
<h2>Syntax</h2>
<pre><code class="language-vibe">type UserID = Int;
type UserMap = Map&lt;UserID, String&gt;;

let cache: UserMap = {
    101: &quot;Alice&quot;,
    102: &quot;Bob&quot;
};
</code></pre>
<p>This acts as syntactic sugar exactly like in TypeScript or Rust.</p>
`
  },

};