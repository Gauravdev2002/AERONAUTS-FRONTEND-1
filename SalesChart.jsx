import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SalesChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 0, 300);
      grad.addColorStop(0, "#22d3ee");
      grad.addColorStop(1, "#0ea5a4");

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["2023", "2024", "2025"],
          datasets: [{
            data: [45, 70, 95],
            backgroundColor: grad,
            borderRadius: 12
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } },
          maintainAspectRatio: false
        }
      });
    }
    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="graph-card">
      <h5 className="graph-title">
        <i className="fa-solid fa-chart-column me-2"></i>
        System Usage
      </h5>
      <p className="graph-subtitle">Last 3 Years Growth</p>
      <div style={{ height: '260px' }}>
        <canvas ref={chartRef} id="salesChart"></canvas>
      </div>
    </div>
  );
};

export default SalesChart;