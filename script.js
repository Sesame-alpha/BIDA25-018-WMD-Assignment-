// Helper function to send email via mailto
function sendEmail(to, subject, body) {
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Booking form handler
if (document.getElementById('bookingForm')) {
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;

        const subject = `New Booking Request from ${fullName}`;
        const body = `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nService Requested: ${service}`;
        sendEmail('royalpawsvet@gmail.com', subject, body);
        alert('Thank you! Your booking request has been sent. We will reply soon.');
        this.reset();
    });
}

// Feedback form handler
if (document.getElementById('feedbackForm')) {
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('fbName').value;
        const email = document.getElementById('fbEmail').value;
        const rating = document.querySelector('input[name="rating"]:checked');
        const ratingValue = rating ? rating.value : 'Not given';
        const message = document.getElementById('fbMessage').value;

        const subject = `Feedback from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nRating: ${ratingValue}\nMessage: ${message}`;
        sendEmail('royalpawsvet@gmail.com', subject, body);
        alert('Thank you for your feedback! We appreciate it.');
        this.reset();
    });
}
