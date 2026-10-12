/**
 * Liam Template JavaScript — Pranish Prajapati
 * Interactive Filters, Clipboard Toast, and Smooth Navigation
 */

document.addEventListener('DOMContentLoaded', () => {

  // Toast Functionality
  const toast = document.getElementById('toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Copy Email Buttons
  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'pranishprajapati721@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email copied to clipboard: ' + email);
      }).catch(() => {
        window.location.href = 'mailto:' + email;
      });
    });
  });

  // Portfolio Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const workCards = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      workCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-cat') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

});
