document.addEventListener("DOMContentLoaded", function () {
  const textColor = 'rgba(255, 255, 255, 0.9)';
  const gridColor = 'rgba(255, 255, 255, 0.2)';

  // User Activity Chart
  const userActivityChartCtx = document.getElementById('userActivityChart').getContext('2d');
  new Chart(userActivityChartCtx, {
      type: 'line',
      data: {
          labels: Array.from({ length: 10 }, (_, i) => `Month ${i + 1}`),
          datasets: [{
              label: 'New Users',
              data: [10, 20, 15, 25, 30, 45, 40, 35, 50, 55],
              backgroundColor: 'rgba(0, 128, 255, 0.3)',
              borderColor: 'rgba(0, 128, 255, 1)',
              borderWidth: 2
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: { display: true, labels: { color: textColor } }
          },
          scales: {
              x: { ticks: { color: textColor }, grid: { color: gridColor } },
              y: { ticks: { color: textColor }, grid: { color: gridColor } }
          }
      }
  });

  // Workout Type Chart
  const workoutTypeChartCtx = document.getElementById('workoutTypeChart').getContext('2d');
  new Chart(workoutTypeChartCtx, {
      type: 'pie',
      data: {
          labels: ['Cardio', 'Strength', 'Flexibility', 'Balance'],
          datasets: [{
              data: [30, 40, 20, 10],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: { display: true, labels: { color: textColor } }
          }
      }
  });

  // User Growth Chart
  const userGrowthChartCtx = document.getElementById('userGrowthChart').getContext('2d');
  new Chart(userGrowthChartCtx, {
      type: 'bar',
      data: {
          labels: Array.from({ length: 10 }, (_, i) => `Month ${i + 1}`),
          datasets: [{
              label: 'New Users Growth',
              data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: { display: true, labels: { color: textColor } }
          },
          scales: {
              x: { ticks: { color: textColor }, grid: { color: gridColor } },
              y: { ticks: { color: textColor }, grid: { color: gridColor } }
          }
      }
  });
});