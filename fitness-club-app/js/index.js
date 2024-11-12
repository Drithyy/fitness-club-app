// Sample Data for Products and Sales
const products = [
  { id: 1, name: "Product A", stock: 50 },
  { id: 2, name: "Product B", stock: 30 },
  { id: 3, name: "Product C", stock: 20 },
];
const sales = [
  { id: 1, product: "Product A", quantity: 10, date: "2024-10-30" },
  { id: 2, product: "Product B", quantity: 5, date: "2024-11-03" },
  { id: 3, product: "Product A", quantity: 15, date: "2024-11-05" },
  { id: 4, product: "Product C", quantity: 5, date: "2024-11-06" },
  { id: 5, product: "Product B", quantity: 10, date: "2024-11-07" },
];

// Calculate Summary Data
function calculateSummary() {
  const totalProductsSold = sales.reduce((acc, sale) => acc + sale.quantity, 0);
  const remainingStock = products.reduce((acc, product) => acc + product.stock, 0);
  const salesThisWeek = sales.filter(sale => new Date(sale.date) >= getStartOfWeek())
                              .reduce((acc, sale) => acc + sale.quantity, 0);

  document.getElementById("totalProductsSold").textContent = totalProductsSold;
  document.getElementById("remainingStock").textContent = remainingStock;
  document.getElementById("totalSalesThisWeek").textContent = salesThisWeek;
}

// Get start of the week (last 7 days)
function getStartOfWeek() {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - 7);
  return startOfWeek;
}

// Prepare Data for Sales Trend Chart
function getSalesTrendData() {
  const labels = [];
  const salesData = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateString = date.toISOString().split("T")[0];
    
    const dailySales = sales.filter(sale => sale.date === dateString)
                            .reduce((acc, sale) => acc + sale.quantity, 0);
    labels.push(dateString);
    salesData.push(dailySales);
  }

  return { labels, salesData };
}

// Initialize Chart.js Sales Trend Chart
function renderSalesTrendChart() {
  const { labels, salesData } = getSalesTrendData();
  const ctx = document.getElementById("salesTrendChart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Daily Sales",
        data: salesData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: { beginAtZero: true },
        x: { title: { display: true, text: "Date" } }
      }
    }
  });
}



// Initialize the dashboard
document.addEventListener("DOMContentLoaded", () => {
  calculateSummary();
  renderSalesTrendChart();
});