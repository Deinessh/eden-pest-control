import React from "react";
import {
  Bug,
  ShieldAlert,
  Rat,
  Wind,
  BedDouble,
  Sparkles,
  Home,
} from "lucide-react";

export function ServiceIcon({
  id,
  className = "h-6 w-6",
}: {
  id: string;
  className?: string;
}) {
  switch (id) {
    case "termite":
      return <ShieldAlert className={className} />;
    case "cockroach":
      return <Bug className={className} />;
    case "rodent":
      return <Rat className={className} />;
    case "mosquito":
      return <Wind className={className} />;
    case "bedbug":
      return <BedDouble className={className} />;
    case "ant":
      return <Sparkles className={className} />;
    case "lizard-spider":
    default:
      return <Home className={className} />;
  }
}
