// Typing animation on home page
if (document.getElementById('typed-quote')) {
    new Typed('#typed-quote', {
        strings: ['"Where every paw gets royal care."', '"Healthy pets, happy hearts."', '"Your pet deserves royalty."'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}

// VanillaTilt for service cards
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
    });
}

// Helper function to send email via mailto
function sendEmail(to, subject, body) {
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Booking form handler
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;

        const subject = `New Booking Request from ${fullName}`;
        const body = `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nService Requested: ${service}`;
        sendEmail('royalpawsvet@gmail.com', subject, body);
        alert('Thank you! Your booking request has been sent. We will reply soon.');
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        this.reset();
    });
}

// Feedback form handler
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('fbName').value;
        const email = document.getElementById('fbEmail').value;
        const ratingElem = document.querySelector('input[name="rating"]:checked');
        const rating = ratingElem ? ratingElem.value : 'Not given';
        const message = document.getElementById('fbMessage').value;

        const subject = `Feedback from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nRating: ${rating}\nMessage: ${message}`;
        sendEmail('royalpawsvet@gmail.com', subject, body);
        alert('Thank you for your feedback! We appreciate it.');
        confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
        this.reset();
    });
}
