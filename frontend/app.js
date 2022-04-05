import { html, render } from "https://unpkg.com/htm/preact/index.mjs?module";
import { useState } from "https://unpkg.com/preact/hooks/dist/hooks.module.js?module";

async function randomNumber() {
  const response = await fetch("/random");
  return response.json();
}

function App() {
  const [number, setNumber] = useState(0);

  return html`
    <div class="container">
      <h1>NENSS</h1>
      <p>
        <button onClick=${async () => setNumber(await randomNumber())}>
          Get random number
        </button>
      </p>
      <p>${number}</p>
    </div>
  `;
}

render(html`<${App} />`, document.body);
