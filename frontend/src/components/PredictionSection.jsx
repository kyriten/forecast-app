import React from "react";

export default function PredictionSection({
  selectedDate,
  onDateChange,
  onPredict,
  prediction,
}) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">
        Prediksi Berdasarkan Tanggal
      </h2>
      <div className="flex gap-2 items-center mb-3">
        <input
          type="date"
          className="border px-2 py-1 rounded"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
          onClick={onPredict}>
          Prediksi
        </button>
      </div>
      {prediction && (
        <div className="border p-3 rounded bg-gray-100">
          <strong>Hasil Prediksi:</strong>{" "}
          {typeof prediction === "string"
            ? prediction
            : JSON.stringify(prediction)}
        </div>
      )}
    </div>
  );
}
