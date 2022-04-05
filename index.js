import http from "node:http";

import { HOST, PORT } from "./utils.js";
import { requestListener } from "./routes.js";

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
