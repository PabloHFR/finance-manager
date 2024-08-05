"use server";

import { runSeedScript } from "@/scripts/seed";

export const seedScript = async () => {
  await runSeedScript();
};
