import { BellIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

export const NotificationButton = () => {
  return (
    <Button variant="ghost" size="icon">
      <BellIcon />
    </Button>
  );
};
