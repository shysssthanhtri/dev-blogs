import Image from "next/image";
import React from "react";

import { Input } from "@/components/ui/input";

export const SiteHeaderSearch = () => {
  return (
    <div className="flex grow items-center gap-4 px-4 bg-secondary rounded-lg py-0.5 sm:py-1 my-0.5 sm:my-1">
      <Image src="/icons/search.svg" width={24} height={24} alt="Search" />

      <Input
        type="text"
        placeholder="Search articles..."
        className="paragraph-regular no-focus placeholder border-none shadow-none outline-none bg-secondary dark:bg-secondary"
      />
    </div>
  );
};
