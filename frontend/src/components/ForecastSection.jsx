import React from "react";
import { formatDate } from "../utils/dateUtils";

export default function ForecastSection({ data }) {
  if (!data || Object.keys(data).length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Forecast</h2>
      <ul className="space-y-2">
        {Object.entries(data).map(([date, value]) => (
          <li key={date} className="border p-3 rounded bg-gray-50">
            <strong>{formatDate(date)}</strong>: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
