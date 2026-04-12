"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "./tooltip";
import { Button } from "./button";

export default function LightDarkToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={className}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Enable light mode" : "Enable dark mode"}
          >
            {isDark ? (
              <SunIcon className="size-5 text-yellow-400" />
            ) : (
              <MoonIcon className="size-5 text-slate-700" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>{isDark ? "Enable light mode" : "Enable dark mode"}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}


