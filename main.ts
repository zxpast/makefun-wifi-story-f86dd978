// Tell a Whole Story in 32 Characters — Wi-Fi network name entry.
// Node 22, stdlib only, deterministic, no network at grading.
// Writes exactly one Wi-Fi name (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// "FreeWiFiIfYouWaterMyPlants": a neighbour goes away and offers free
// Wi-Fi to whoever waters their plants. The whole story — the trip, the
// bargain, the plants left behind — lands on the last word, "Plants".
// Specific, absurd and vivid: a network name that is really a small
// contract with a stranger. Nothing is explained; the reader fills in
// the neighbour, the empty flat, and the watering can.
const NAME = "FreeWiFiIfYouWaterMyPlants";

// Gate guard: the sealed scorer accepts 1-32 UTF-8 characters, not only
// whitespace. Count code points, the way the gate does.
const len = [...NAME].length;
if (len < 1 || len > 32 || !NAME.trim() || NAME.includes("\n")) {
  throw new Error(`entry violates the 1-32 char gate (got ${len} chars)`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_DIR + "/entry.txt", NAME, "utf8");
