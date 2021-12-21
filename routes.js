import fs from "node:fs";

import { dataFilePath, frontendPath } from "./utils.js";

export default function requestListener(request, response) {
  switch (request.url) {
    case "/":
      pageEndpoint(request, response);
      break;
    case "/data":
      dataEndpoint(request, response);
      break;
    default:
      response.writeHead(404);
      response.end("404 Not Found");
  }
}

function pageEndpoint(_request, response) {
  response.setHeader("Content-Type", "text/html");
  fs.createReadStream(frontendPath).pipe(response);
}

function dataEndpoint(_request, response) {
  response.setHeader("Content-Type", "application/json");
  fs.createReadStream(dataFilePath).pipe(response);
}
