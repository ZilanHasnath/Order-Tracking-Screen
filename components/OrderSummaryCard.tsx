"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { OrderItem } from "@/lib/types";

interface OrderSummaryCardProps {
  orderId: string;
  trackingCode: string | null;
  carrier: string;
  address: string;
  items: OrderItem[];
}

export default function OrderSummaryCard({
  orderId,
  trackingCode,
  carrier,
  address,
  items
}: OrderSummaryCardProps) {
  const [expanded, setExpanded] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const firstItem = items[0];
  const extraCount = items.length - 1;

  return (
    <div className="rounded-2xl bg-surface border border-line overflow-hidden">
      <button
        onClick={() => setExpanded((value) => !value)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left"
      >
        <img
          src={firstItem.image}
          alt=""
          className="h-14 w-14 rounded-xl object-cover border border-line shrink-0"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-medium text-ink truncate">{firstItem.name}</p>
          <p className="text-[12.5px] text-ink-soft mt-0.5">
            {extraCount > 0 ? `+${extraCount} more item${extraCount > 1 ? "s" : ""} · ` : ""}
            Order {orderId}
          </p>
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ink-soft transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded && (
        <div className="px-5 pb-5 pt-1 border-t border-line">
          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt=""
                  className="h-12 w-12 rounded-lg object-cover border border-line shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] text-ink truncate">{item.name}</p>
                  <p className="text-[12px] text-ink-soft">
                    {item.variant} · Qty {item.quantity}
                  </p>
                </div>
                <p className="text-[13.5px] font-medium text-ink shrink-0">
                  {(item.price * item.quantity).toFixed(2)} BDT
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[13.5px] py-3 border-t border-line">
            <span className="text-ink-soft">Order total</span>
            <span className="font-semibold text-ink">{total.toFixed(2)} BDT</span>
          </div>

          <div className="pt-1 space-y-2">
            <div className="flex items-start gap-2">
              <MapPin size={15} className="text-ink-soft mt-0.5 shrink-0" />
              <p className="text-[12.5px] text-ink-soft leading-snug">{address}</p>
            </div>
            <p className="text-[12.5px] text-ink-soft">
              Carrier: <span className="text-ink">{carrier}</span>
            </p>
            {trackingCode && (
              <p className="text-[12.5px] text-ink-soft">
                Tracking ID: <span className="font-mono text-ink">{trackingCode}</span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
