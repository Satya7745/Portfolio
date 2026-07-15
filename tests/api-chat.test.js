"use strict";

const assert = require("node:assert/strict");
const handler = require("../api/chat.js");

function invoke(message, options) {
  const request = {
    method: options?.method || "POST",
    headers: { origin: options?.origin || "https://satya7745.github.io", "x-forwarded-for": options?.ip || `test-${Math.random()}` },
    body: { message },
    socket: { remoteAddress: "test" }
  };
  return new Promise((resolve, reject) => {
    const headers = {};
    const response = {
      statusCode: 200,
      setHeader(name, value) { headers[name.toLowerCase()] = value; },
      end(payload) {
        try {
          resolve({ status: this.statusCode, headers, body: payload ? JSON.parse(payload) : null });
        } catch (error) { reject(error); }
      }
    };
    Promise.resolve(handler(request, response)).catch(reject);
  });
}

(async () => {
  delete process.env.GEMINI_API_KEY;

  const unrelated = await invoke("What is the weather today?");
  assert.equal(unrelated.status, 200);
  assert.equal(unrelated.body.mode, "policy");
  assert.match(unrelated.body.answer, /only answer questions about Satya/);

  const approved = await invoke("Tell me about Satya's Microsoft client experience");
  assert.equal(approved.status, 200);
  assert.equal(approved.body.mode, "grounded_fallback");
  assert.ok(approved.body.sourceIds.includes("experience.ltm"));

  const blockedOrigin = await invoke("Tell me about Satya", { origin: "https://untrusted.example" });
  assert.equal(blockedOrigin.status, 403);
  assert.equal(blockedOrigin.body.error, "origin_not_allowed");

  console.log("API route checks passed: closed scope, grounded fallback, and CORS enforcement.");
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});