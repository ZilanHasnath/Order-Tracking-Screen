"use client";

import { TrackingState } from "@/lib/types";

interface StateSwitcherProps {
  active: TrackingState;
  onChange: (state: TrackingState) => void;
}

const options: { id: TrackingState; label: string }[] = [
  { id: "on_track", label: "On track" },
  { id: "delayed", label: "Delayed" },
  { id: "delivered_disputed", label: "Delivered, not received" },
  { id: "tracking_unavailable", label: "Tracking not available" }
];

export default function StateSwitcher({ active, onChange }: StateSwitcherProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-[430px]">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={`px-3.5 py-2 rounded-full text-[12.5px] font-medium border transition-colors ${
            active === option.id
              ? "bg-ink text-white border-ink"
              : "bg-transparent text-ink-soft border-line hover:border-ink-faint"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
