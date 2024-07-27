"use server";

import { runSeedScript } from "../scripts/seed";

export const useSeedScript = async () => {
  await runSeedScript();
};
