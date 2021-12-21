import url from "node:url";
import process from "node:process";
import path from "node:path";

const currentDir = path.dirname(url.fileURLToPath(import.meta.url));

export const dataFilePath = `${currentDir}/data.json`;
export const frontendPath = `${currentDir}/index.html`;

export const HOST = process.env.HOST || "localhost";
export const PORT = process.env.PORT || 8000;
