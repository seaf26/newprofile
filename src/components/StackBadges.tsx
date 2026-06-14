"use client";

import React from "react";
import {
  IconApi,
  IconBrandFirebase,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandStripe,
  IconBrandTailwind,
  IconBrandTypescript,
  IconCode,
  IconChartBar,
  IconDatabase,
  IconDeviceMobile,
  IconMap,
  IconFileUpload,
  IconFileTypePdf,
  IconMessageCircle,
  IconPackage,
  IconPhoto,
  IconPlugConnected,
  IconReceipt,
  IconShieldLock,
  IconTestPipe,
  IconUsersGroup,
  IconWorld,
} from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

type StackBadgesProps = {
  stack?: string[];
  className?: string;
  compact?: boolean;
};

const stackIcons = [
  { match: "laravel", icon: IconBrandLaravel },
  { match: "php", icon: IconBrandPhp },
  { match: "mysql", icon: IconDatabase },
  { match: "redis", icon: IconDatabase },
  { match: "api", icon: IconApi },
  { match: "jwt", icon: IconShieldLock },
  { match: "sanctum", icon: IconShieldLock },
  { match: "passport", icon: IconShieldLock },
  { match: "spatie", icon: IconPackage },
  { match: "firebase", icon: IconBrandFirebase },
  { match: "fcm", icon: IconBrandFirebase },
  { match: "stripe", icon: IconBrandStripe },
  { match: "websocket", icon: IconPlugConnected },
  { match: "pusher", icon: IconMessageCircle },
  { match: "paymob", icon: IconReceipt },
  { match: "s3", icon: IconDatabase },
  { match: "b2", icon: IconDatabase },
  { match: "tus", icon: IconFileUpload },
  { match: "docker", icon: IconPackage },
  { match: "next.js", icon: IconBrandNextjs },
  { match: "react native", icon: IconDeviceMobile },
  { match: "nextauth", icon: IconShieldLock },
  { match: "react navigation", icon: IconDeviceMobile },
  { match: "radix", icon: IconPackage },
  { match: "tanstack", icon: IconDatabase },
  { match: "react query", icon: IconDatabase },
  { match: "zustand", icon: IconPackage },
  { match: "asyncstorage", icon: IconDatabase },
  { match: "i18next", icon: IconWorld },
  { match: "react hook form", icon: IconCode },
  { match: "zod", icon: IconShieldLock },
  { match: "nativewind", icon: IconBrandTailwind },
  { match: "maps", icon: IconMap },
  { match: "webview", icon: IconWorld },
  { match: "image picker", icon: IconPhoto },
  { match: "xcode", icon: IconDeviceMobile },
  { match: "cocoapods", icon: IconPackage },
  { match: "android gradle", icon: IconPackage },
  { match: "recharts", icon: IconChartBar },
  { match: "gsap", icon: IconCode },
  { match: "vitest", icon: IconTestPipe },
  { match: "phpunit", icon: IconTestPipe },
  { match: "rbac", icon: IconUsersGroup },
  { match: "imagick", icon: IconPhoto },
  { match: "pdf", icon: IconFileTypePdf },
  { match: "mix", icon: IconPackage },
  { match: "react", icon: IconCode },
  { match: "react 19", icon: IconBrandReact },
  { match: "typescript", icon: IconBrandTypescript },
  { match: "vite", icon: IconCode },
  { match: "tailwind", icon: IconBrandTailwind },
  { match: "three", icon: IconWorld },
];

function getStackIcon(label: string) {
  const normalized = label.toLowerCase();
  return (
    stackIcons.find(({ match }) => normalized.includes(match))?.icon ?? IconCode
  );
}

export const StackBadges = ({
  stack,
  className,
  compact = false,
}: StackBadgesProps) => {
  if (!stack?.length) return null;

  return (
    <ul className={twMerge("flex flex-wrap gap-2", className)}>
      {stack.map((item) => {
        const Icon = getStackIcon(item);

        return (
          <li key={item}>
            <span
              className={twMerge(
                "inline-flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-neutral-50 font-medium leading-none text-neutral-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-[background-color,border-color,transform] duration-150 ease-out hover:border-neutral-300 hover:bg-white active:scale-[0.98]",
                compact ? "h-7 px-2.5 text-[11px]" : "h-8 px-3 text-xs"
              )}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" stroke={1.8} />
              <span className="whitespace-nowrap">{item}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
};
