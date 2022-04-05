import fs from "node:fs";

import {
  dataFilePath,
  frontendAppPath,
  frontendPath,
  frontendStyles,
  streamText,
} from "./utils.js";

/**
 * @param {import("http").IncomingMessage} request
 * @param {import("http").ServerResponse} response
 */
export function requestListener(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Request-Method", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET");
  response.setHeader("Access-Control-Allow-Headers", "*");

  switch (request.url) {
    case "/":
      pageEndpoint(request, response);
      break;
    case "/app.js":
      appEndpoint(request, response);
      break;
    case "/styles.css":
      stylesEndpoint(request, response);
      break;
    case "/data":
      dataEndpoint(request, response);
      break;
    case "/random":
      randomEndpoint(request, response);
      break;
    default:
      response.writeHead(404);
      response.end("404 Not Found");
  }
}

/**
 * @param {import("http").IncomingMessage} request
 * @param {import("http").ServerResponse} response
 */
function pageEndpoint(_request, response) {
  response.setHeader("Content-Type", "text/html");
  fs.createReadStream(frontendPath).pipe(response);
}

/**
 * @param {import("http").IncomingMessage} request
 * @param {import("http").ServerResponse} response
 */
function stylesEndpoint(_request, response) {
  response.setHeader("Content-Type", "text/css");
  fs.createReadStream(frontendStyles).pipe(response);
}

/**
 * @param {import("http").IncomingMessage} request
 * @param {import("http").ServerResponse} response
 */
function appEndpoint(_request, response) {
  response.setHeader("Content-Type", "application/javascript");
  fs.createReadStream(frontendAppPath).pipe(response);
}

/**
 * @param {import("http").IncomingMessage} request
 * @param {import("http").ServerResponse} response
 */
function dataEndpoint(_request, response) {
  response.setHeader("Content-Type", "application/json");
  fs.createReadStream(dataFilePath).pipe(response);
}

/**
 * @param {import("http").IncomingMessage} request
 * @param {import("http").ServerResponse} response
 */
function randomEndpoint(_request, response) {
  response.setHeader("Content-Type", "application/json");
  streamText(Math.random().toFixed(20)).pipe(response);
}
