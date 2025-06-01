import React from "react";
import { getLevelByISPU } from "../utils/ispuUtils";

export default function PollutantModal({ show, data, onClose }) {
  if (!show || !data) return null;

  const { pollutant, airQualityData } = data;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}>
      <div
        className="bg-white p-6 rounded shadow max-w-md w-full"
        onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-2">
          Detail {pollutant.toUpperCase()}
        </h2>
        <p>
          <strong>Nilai:</strong> {airQualityData}
        </p>
        <p>
          <strong>Kategori:</strong> {getLevelByISPU(airQualityData)}
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Tutup
        </button>
      </div>
    </div>
  );
}
