export type TrackingState =
  | "on_track"
  | "delayed"
  | "delivered_disputed"
  | "tracking_unavailable";

export type StepStatus = "complete" | "current" | "upcoming" | "delayed" | "pending";

export interface TimelineStep {
  id: string;
  label: string;
  timestamp: string | null;
  status: StepStatus;
  note?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  variant: string;
  quantity: number;
  price: number;
  image: string;
}

export interface OrderRecord {
  state: TrackingState;
  orderId: string;
  trackingCode: string | null;
  carrier: string;
  placedOn: string;
  eta: string;
  address: string;
  items: OrderItem[];
  timeline: TimelineStep[];
}
