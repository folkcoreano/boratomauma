import Server from "https://deno.land/x/lume@v1.15.1/core/server.ts";

const server = new Server({
  port: 8000,
  root: Deno.cwd(),
});

server.start();

console.log("http://localhost:8000");
