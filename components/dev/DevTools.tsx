"use client";

import { useEffect } from "react";

export default function DevTools() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    let erudaInstance: typeof import("eruda") | undefined;
    let vConsoleInstance: import("vconsole").default | undefined;

    const load = async () => {
      const eruda = await import("eruda");
      const VConsole = (await import("vconsole")).default;

      eruda.default.init();
      erudaInstance = eruda;

      vConsoleInstance = new VConsole();
    };

    load();

    return () => {
      erudaInstance?.default.destroy();
      vConsoleInstance?.destroy();
    };
  }, []);

  return null;
}

