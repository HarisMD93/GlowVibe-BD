let currentSlide = 1;
let totalSlides = 12;

function updateSlideCounter() {
  document.getElementById('current-slide').textContent = currentSlide;
  document.getElementById('total-slides').textContent = totalSlides;
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.classList.remove('active'));
  
  if (n > totalSlides) currentSlide = 1;
  if (n < 1) currentSlide = totalSlides;
  
  document.getElementById(`slide-${currentSlide}`).classList.add('active');
  updateSlideCounter();
  
  document.getElementById('prev-btn').disabled = currentSlide === 1;
  document.getElementById('next-btn').disabled = currentSlide === totalSlides;
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

function initCharts() {
  // Revenue Growth Chart
  const ctx2 = document.getElementById('revenueChart');
  if (ctx2) {
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Month 6', 'Year 1', 'Year 2', 'Year 3'],
        datasets: [{
          label: 'Monthly Revenue (৳ Lakhs)',
          data: [2.5, 8.5, 18.2, 35.8],
          borderColor: '#e94385',
          backgroundColor: 'rgba(233, 67, 133, 0.1)',
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  // Use of Funds Chart
  const ctx3 = document.getElementById('fundsChart');
  if (ctx3) {
    new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ['Inventory & Materials', 'Marketing & Ads', 'Operations', 'Working Capital'],
        datasets: [{
          data: [40, 30, 20, 10],
          backgroundColor: ['#e94385', '#f9b4ce', '#b9b3f8', '#89e8d5']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'right' }
        }
      }
    });
  }
}

window.addEventListener('load', function() {
  showSlide(1);
  initCharts();
});
