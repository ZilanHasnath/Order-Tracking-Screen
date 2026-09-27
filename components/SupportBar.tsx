"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { TrackingState } from "@/lib/types";

interface SupportBarProps {
  state: TrackingState;
}

export default function SupportBar({ state }: SupportBarProps) {
  const [reported, setReported] = useState(false);

  if (state === "delivered_disputed" && !reported) {
    return (
      <div className="border-t border-line bg-surface px-5 pt-4 pb-5 shadow-bar">
        <p className="text-[13px] text-ink-soft mb-3">
          Carrier shows this as delivered. Didn&apos;t receive it?
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setReported(true)}
            className="flex-1 rounded-xl bg-rust text-white text-[14px] font-semibold py-3"
          >
            Report missing package
          </button>
          <button className="h-[46px] w-[46px] shrink-0 rounded-xl border border-line flex items-center justify-center">
            <MessageCircle size={19} className="text-ink" />
          </button>
        </div>
      </div>
    );
  }

  if (state === "delivered_disputed" && reported) {
    return (
      <div className="border-t border-line bg-surface px-5 pt-4 pb-5 shadow-bar">
        <div className="flex items-center gap-2.5 rounded-xl bg-moss-soft px-4 py-3">
          <CheckCircle2 size={18} className="text-moss shrink-0" />
          <p className="text-[13px] text-moss font-medium leading-snug">
            Report submitted. We&apos;ll follow up within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  const copy: Record<TrackingState, { primary: string; secondary: string }> = {
    on_track: { primary: "Contact support", secondary: "Report a delivery issue" },
    delayed: { primary: "Contact support", secondary: "View new estimate" },
    delivered_disputed: { primary: "Contact support", secondary: "Report missing package" },
    tracking_unavailable: { primary: "Contact support", secondary: "What does this mean?" }
  };

  const { primary, secondary } = copy[state];

  return (
    <div className="border-t border-line bg-surface px-5 pt-4 pb-5 shadow-bar">
      <div className="flex gap-2">
        <button className="flex-1 rounded-xl bg-route text-white text-[14px] font-semibold py-3 flex items-center justify-center gap-2">
          <MessageCircle size={16} />
          {primary}
        </button>
        <button className="flex-1 rounded-xl border border-line text-ink text-[14px] font-medium py-3">
          {secondary}
        </button>
      </div>
    </div>
  );
}
