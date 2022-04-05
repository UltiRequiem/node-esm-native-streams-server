import url from "node:url";
import process from "node:process";
import path from "node:path";
import { Readable } from "node:stream";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const dataFilePath = `${dirname}/data.json`;
export const frontendPath = `${dirname}/frontend/index.html`;
export const frontendStyles = `${dirname}/frontend/styles.css`;
export const frontendAppPath = `${dirname}/frontend/app.js`;

/** @param {string} text */
export function streamText(text) {
  const stream = new Readable({ read() {} });
  stream.push(text);
  stream.push(null);
  return stream;
}

export const HOST = process.env.HOST || "localhost";
export const PORT = process.env.PORT || 8000;
