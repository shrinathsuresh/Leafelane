document.addEventListener('DOMContentLoaded', function () {
    const deliveryForm = document.getElementById('deliveryForm');
    const deliveryDetails = document.getElementById('deliveryDetails');
  
    // Delivery Form Submission
    if (deliveryForm) {
      deliveryForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const deliveryDate = document.getElementById('deliveryDate').value;
        const deliveryTime = document.getElementById('deliveryTime').value;
  
        if (deliveryDate && deliveryTime) {
          localStorage.setItem('deliverySchedule', JSON.stringify({ date: deliveryDate, time: deliveryTime }));
          alert('Delivery scheduled successfully!');
          window.location.href = '../orders/orders.html';
        }
      });
    }
  
    // Order Tracking
    if (deliveryDetails) {
      const storedSchedule = JSON.parse(localStorage.getItem('deliverySchedule'));
      if (storedSchedule) {
        deliveryDetails.textContent = `Delivery Scheduled for ${storedSchedule.date} at ${storedSchedule.time}`;
      }
  
      const statuses = ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
      let currentStatusIndex = 0;
  
      function updateStatus() {
        if (currentStatusIndex < statuses.length) {
          document.getElementById('statusText').innerText = statuses[currentStatusIndex];
          currentStatusIndex++;
        } else {
          clearInterval(statusInterval);
        }
      }
  
      const statusInterval = setInterval(updateStatus, 5000); // Update every 5 seconds
    }
  });
  