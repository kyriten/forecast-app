import React from "react";

const DailyPredictionCard = ({ forecast, formatDate, getColorByISPU }) => {
  return (
    <section className="my-2 col-md-6 col-lg-6">
      <div className="row">
        <div className="card">
          
          <h6 className="card-title text-start my-3">Prediksi setiap hari</h6>

          {Object.keys(forecast).length === 0 ? (
            <p
              className="text-muted text-center animate-fade"
              style={{ fontSize: "10px" }}>
              Sedang mengolah model...
            </p>
          ) : (
            <div
              className="card-container overflow-auto d-flex rounded"
              style={{ whiteSpace: "nowrap" }}>
              {forecast[Object.keys(forecast)[0]].map((entry, index) => (
                <div
                  key={index}
                  className="card mx-2 mb-4"
                  style={{
                    minWidth: "200px",
                    border: "0px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#F3F5F7",
                  }}>
                  <div
                    className="card-header text-center pb-0"
                    style={{ border: "0px", backgroundColor: "#F3F5F7" }}>
                    <span
                      className="badge text-dark"
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "10px",
                        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.2)",
                        fontSize: "14px",
                        padding: "8px 12px",
                      }}>
                      {formatDate(entry.date)}
                    </span>
                  </div>
                  <div className="card-body">
                    <table className="table table-sm">
                      <tbody>
                        {Object.keys(forecast).map((pollutant) => {
                          const dayForecast = forecast[pollutant].find(
                            (f) => f.date === entry.date
                          );
                          const ispu = dayForecast
                            ? dayForecast.yhat <= 0
                              ? 0
                              : dayForecast.yhat
                            : "-";
                          const color = getColorByISPU(ispu);

                          return (
                            <tr key={pollutant}>
                              <td
                                className="border-0"
                                style={{ backgroundColor: "#F3F5F7" }}>
                                {pollutant === "CO" && (
                                  <i style={{ marginRight: "10px" }}>🚗</i>
                                )}
                                {pollutant === "O3" && (
                                  <i style={{ marginRight: "10px" }}>🌞</i>
                                )}
                                {pollutant === "NO2" && (
                                  <i style={{ marginRight: "10px" }}>🏭</i>
                                )}
                                {pollutant === "HC" && (
                                  <i style={{ marginRight: "10px" }}>🛢️ </i>
                                )}
                                {pollutant === "PM10" && (
                                  <i style={{ marginRight: "10px" }}>💨</i>
                                )}
                                {pollutant === "PM2.5" && (
                                  <i style={{ marginRight: "10px" }}>⚙️</i>
                                )}
                                {pollutant === "SO2" && (
                                  <i style={{ marginRight: "10px" }}>🌫️</i>
                                )}
                                {pollutant}
                              </td>

                              <td
                                className="border-0"
                                style={{ backgroundColor: "#F3F5F7" }}>
                                <p
                                  className="badge"
                                  style={{
                                    margin: 0,
                                    backgroundColor: color,
                                  }}>
                                  {ispu ?? "-"}
                                </p>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DailyPredictionCard;
