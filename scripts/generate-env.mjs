import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const envPath = path.join(root, ".env");
const outPath = path.join(root, "public", "env.js");

function parseDotEnv(src) {
  const out = {};
  for (const line of src.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const k = trimmed.slice(0, eq).trim();
    let v = trimmed.slice(eq + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    out[k] = v;
  }
  return out;
}

const fromProcess = process.env.VITE_GEMINI_API_KEY;
let fromEnvFile = "";
try {
  const raw = fs.readFileSync(envPath, "utf8");
  fromEnvFile = parseDotEnv(raw).VITE_GEMINI_API_KEY || "";
} catch {
  // ignore
}

const key = fromProcess || fromEnvFile || "";
const body =
  "globalThis.__RAVI_PORTFOLIO_ENV__ = " +
  JSON.stringify({ VITE_GEMINI_API_KEY: key }) +
  ";\n";

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, body, "utf8");
