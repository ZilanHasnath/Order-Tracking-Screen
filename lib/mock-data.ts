import { OrderRecord, TrackingState } from "./types";

const items = [
  {
    id: "itm-1",
    name: "Wireless Noise-Cancelling Headphones",
    variant: "Slate Grey",
    quantity: 1,
    price: 179.0,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop"
  },
  {
    id: "itm-2",
    name: "USB-C Fast Charging Cable, 2m",
    variant: "Braided, Black",
    quantity: 2,
    price: 14.5,
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=200&h=200&fit=crop"
  }
];

const address = "Farhana Ahmed · House 12, Road 4, Banani, Dhaka 1213";

export const orders: Record<TrackingState, OrderRecord> = {
  on_track: {
    state: "on_track",
    orderId: "ORD-48213",
    trackingCode: "TRK-8843-2091-JP",
    carrier: "Skyline Express",
    placedOn: "Sep 24, 9:12 AM",
    eta: "Arriving today by 8:00 PM",
    address,
    items,
    timeline: [
      { id: "confirmed", label: "Order confirmed", timestamp: "Sep 24, 9:12 AM", status: "complete" },
      { id: "processing", label: "Processing", timestamp: "Sep 24, 3:40 PM", status: "complete" },
      { id: "shipped", label: "Shipped", timestamp: "Sep 25, 7:05 AM", status: "complete" },
      { id: "out_for_delivery", label: "Out for delivery", timestamp: "Today, 8:15 AM", status: "current" },
      { id: "delivered", label: "Delivered", timestamp: null, status: "upcoming" }
    ]
  },
  delayed: {
    state: "delayed",
    orderId: "ORD-48213",
    trackingCode: "TRK-8843-2091-JP",
    carrier: "Skyline Express",
    placedOn: "Sep 22, 11:30 AM",
    eta: "Now expected tomorrow by 12:00 PM",
    address,
    items,
    timeline: [
      { id: "confirmed", label: "Order confirmed", timestamp: "Sep 22, 11:30 AM", status: "complete" },
      { id: "processing", label: "Processing", timestamp: "Sep 22, 4:05 PM", status: "complete" },
      { id: "shipped", label: "Shipped", timestamp: "Sep 23, 6:50 AM", status: "complete" },
      {
        id: "out_for_delivery",
        label: "Out for delivery",
        timestamp: "Sep 24, 9:20 AM",
        status: "delayed",
        note: "Held at regional hub due to weather"
      },
      { id: "delivered", label: "Delivered", timestamp: null, status: "upcoming" }
    ]
  },
  delivered_disputed: {
    state: "delivered_disputed",
    orderId: "ORD-48213",
    trackingCode: "TRK-8843-2091-JP",
    carrier: "Skyline Express",
    placedOn: "Sep 20, 10:02 AM",
    eta: "Delivered Sep 23, 6:42 PM",
    address,
    items,
    timeline: [
      { id: "confirmed", label: "Order confirmed", timestamp: "Sep 20, 10:02 AM", status: "complete" },
      { id: "processing", label: "Processing", timestamp: "Sep 20, 2:15 PM", status: "complete" },
      { id: "shipped", label: "Shipped", timestamp: "Sep 21, 8:00 AM", status: "complete" },
      { id: "out_for_delivery", label: "Out for delivery", timestamp: "Sep 23, 9:40 AM", status: "complete" },
      { id: "delivered", label: "Delivered", timestamp: "Sep 23, 6:42 PM", status: "complete" }
    ]
  },
  tracking_unavailable: {
    state: "tracking_unavailable",
    orderId: "ORD-48213",
    trackingCode: null,
    carrier: "Carrier assigned at pickup",
    placedOn: "Today, 10:03 AM",
    eta: "Tracking details expected within 24 hours",
    address,
    items,
    timeline: [
      { id: "confirmed", label: "Order confirmed", timestamp: "Today, 10:03 AM", status: "complete" },
      { id: "processing", label: "Processing", timestamp: null, status: "pending" },
      { id: "shipped", label: "Shipped", timestamp: null, status: "pending" },
      { id: "out_for_delivery", label: "Out for delivery", timestamp: null, status: "pending" },
      { id: "delivered", label: "Delivered", timestamp: null, status: "pending" }
    ]
  }
};
