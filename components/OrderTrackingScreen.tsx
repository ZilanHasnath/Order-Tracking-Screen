import { ArrowLeft } from "lucide-react";
import { OrderRecord } from "@/lib/types";
import StatusBanner from "./StatusBanner";
import DeliveryTimeline from "./DeliveryTimeline";
import OrderSummaryCard from "./OrderSummaryCard";
import SupportBar from "./SupportBar";

interface OrderTrackingScreenProps {
  order: OrderRecord;
}

export default function OrderTrackingScreen({ order }: OrderTrackingScreenProps) {
  return (
    <div className="flex flex-col h-full bg-paper">
      <header className="flex items-center gap-3 px-5 pt-5 pb-4 shrink-0">
        <button className="h-9 w-9 -ml-1 rounded-full flex items-center justify-center hover:bg-black/5">
          <ArrowLeft size={19} className="text-ink" />
        </button>
        <div>
          <p className="text-[15px] font-semibold text-ink leading-tight">Order {order.orderId}</p>
          <p className="text-[12px] text-ink-soft mt-0.5">Placed {order.placedOn}</p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-6 space-y-4">
        <StatusBanner state={order.state} eta={order.eta} />
        <DeliveryTimeline steps={order.timeline} />
        <OrderSummaryCard
          orderId={order.orderId}
          trackingCode={order.trackingCode}
          carrier={order.carrier}
          address={order.address}
          items={order.items}
        />
      </div>

      <SupportBar state={order.state} />
    </div>
  );
}
