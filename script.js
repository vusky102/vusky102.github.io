// Typing effect for hero section
function typeWriter(element, text, speed) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Form validation and interactive feedback
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect on page load
    const heroText = document.querySelector('#hero h1');
    if (heroText) {
        typeWriter(heroText, "Welcome to Son's Portfolio", 100);
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateForm();
        });
    }

    // Interactive navigation highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ffc107'; // Yellow highlight
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.length < 2) {
        showAlert('Please enter a valid name', 'danger');
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        showAlert('Please enter a valid email', 'danger');
        return;
    }
    if (message.length < 10) {
        showAlert('Message must be at least 10 characters long', 'danger');
        return;
    }

    showAlert('Message sent successfully!', 'success');
    document.getElementById('contactForm').reset();
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} mt-3`;
    alertDiv.role = 'alert';
    alertDiv.textContent = message;

    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(alertDiv, form.nextSibling);

    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}
