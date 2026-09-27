"use client";

import { useState } from "react";
import { TrackingState } from "@/lib/types";
import { orders } from "@/lib/mock-data";
import OrderTrackingScreen from "@/components/OrderTrackingScreen";
import StateSwitcher from "@/components/StateSwitcher";

export default function Home() {
  const [state, setState] = useState<TrackingState>("on_track");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <StateSwitcher active={state} onChange={setState} />
      <div className="w-full max-w-device h-[820px] rounded-[2.5rem] border-[8px] border-ink bg-ink overflow-hidden shadow-2xl">
        <div className="h-full w-full rounded-[2rem] overflow-hidden bg-paper">
          <OrderTrackingScreen order={orders[state]} />
        </div>
      </div>
    </main>
  );
}
