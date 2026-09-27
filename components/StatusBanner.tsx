import { Clock, PackageCheck, PackageSearch, Truck } from "lucide-react";
import { TrackingState } from "@/lib/types";

interface StatusBannerProps {
  state: TrackingState;
  eta: string;
}

const config: Record<
  TrackingState,
  { icon: React.ReactNode; tone: string; headline: string; sub: string }
> = {
  on_track: {
    icon: <Truck size={22} strokeWidth={2} />,
    tone: "bg-route text-white",
    headline: "Out for delivery",
    sub: "Arriving today by 8:00 PM"
  },
  delayed: {
    icon: <Clock size={22} strokeWidth={2} />,
    tone: "bg-amber text-white",
    headline: "Delivery delayed",
    sub: "Now expected tomorrow by 12:00 PM"
  },
  delivered_disputed: {
    icon: <PackageCheck size={22} strokeWidth={2} />,
    tone: "bg-moss text-white",
    headline: "Marked as delivered",
    sub: "Delivered Sep 23, 6:42 PM"
  },
  tracking_unavailable: {
    icon: <PackageSearch size={22} strokeWidth={2} />,
    tone: "bg-ink text-white",
    headline: "Tracking will appear soon",
    sub: "Usually within 24 hours of shipment"
  }
};

export default function StatusBanner({ state, eta }: StatusBannerProps) {
  const { icon, tone, headline, sub } = config[state];

  return (
    <div className={`${tone} rounded-2xl px-5 py-5 flex items-start gap-4`}>
      <div className="shrink-0 mt-0.5 h-11 w-11 rounded-full bg-white/15 flex items-center justify-center">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[17px] font-semibold leading-tight">{headline}</p>
        <p className="text-[13px] opacity-90 mt-1 leading-snug">{eta || sub}</p>
      </div>
    </div>
  );
}
