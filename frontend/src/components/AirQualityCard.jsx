import React from "react";
import { getColorByISPU, getLevelByISPU } from "../utils/ispuUtils";

export default function AirQualityCard({ data, onPollutantClick }) {
  if (!data || Object.keys(data).length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {Object.entries(data).map(([pollutant, value]) => (
        <div
          key={pollutant}
          className="p-4 rounded shadow cursor-pointer text-white"
          style={{ backgroundColor: getColorByISPU(value) }}
          onClick={() => onPollutantClick(pollutant, value)}>
          <h3 className="text-lg font-bold uppercase">{pollutant}</h3>
          <p className="text-2xl">{value}</p>
          <p className="text-sm italic">{getLevelByISPU(value)}</p>
        </div>
      ))}
    </div>
  );
}
