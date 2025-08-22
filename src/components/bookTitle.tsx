import { useState } from "react";

export function BookTitle({ description }: { description?: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-sm text-gray-700 space-y-1   dark:text-white">
      <p className={expanded ? "line-clamp-none" : "line-clamp-1"}>
        {description}
      </p>
      {description && description.length >50 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 hover:underline text-xs font-medium"
        >
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </div>
  );
}
