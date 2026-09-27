import { AlertTriangle, Check } from "lucide-react";
import { TimelineStep } from "@/lib/types";

interface DeliveryTimelineProps {
  steps: TimelineStep[];
}

function nodeStyles(status: TimelineStep["status"]) {
  switch (status) {
    case "complete":
      return "bg-route border-route text-white";
    case "current":
      return "bg-route border-route text-white ring-4 ring-route-soft";
    case "delayed":
      return "bg-amber border-amber text-white ring-4 ring-amber-soft";
    case "pending":
      return "bg-surface border-dashed border-ink-faint text-ink-faint";
    default:
      return "bg-surface border-line text-ink-faint";
  }
}

function lineStyles(status: TimelineStep["status"]) {
  if (status === "complete") return "bg-route";
  if (status === "delayed") return "bg-amber";
  return "bg-line";
}

export default function DeliveryTimeline({ steps }: DeliveryTimelineProps) {
  return (
    <div className="rounded-2xl bg-surface border border-line px-5 py-5">
      <p className="text-[13px] font-semibold text-ink-soft mb-4">Delivery progress</p>
      <ol>
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <li key={step.id} className="relative pl-9 pb-6 last:pb-0">
              {!isLast && (
                <span
                  className={`absolute left-[13px] top-6 h-full w-[2px] ${lineStyles(step.status)}`}
                />
              )}
              <span
                className={`absolute left-0 top-0 h-7 w-7 rounded-full border-2 flex items-center justify-center ${nodeStyles(
                  step.status
                )}`}
              >
                {step.status === "complete" && <Check size={14} strokeWidth={3} />}
                {step.status === "delayed" && <AlertTriangle size={13} strokeWidth={2.5} />}
              </span>
              <div className="flex items-baseline justify-between gap-3">
                <p
                  className={`text-[14px] font-medium ${
                    step.status === "pending" ? "text-ink-faint" : "text-ink"
                  }`}
                >
                  {step.label}
                </p>
                {step.timestamp && (
                  <p className="text-[12px] font-mono text-ink-soft shrink-0">{step.timestamp}</p>
                )}
              </div>
              {step.note && (
                <p className="text-[12.5px] text-amber mt-1 leading-snug">{step.note}</p>
              )}
              {step.status === "pending" && !step.note && (
                <p className="text-[12.5px] text-ink-faint mt-1">Awaiting carrier scan</p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
