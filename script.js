// ========== TYPING ANIMATION (HOME PAGE) ==========
if (document.getElementById('typed-quote')) {
    new Typed('#typed-quote', {
        strings: [
            '"Where every paw gets royal care."',
            '"Healthy pets, happy hearts."',
            '"Compassionate care you can trust."'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}

// ========== CONFETTI ON "EXPLORE SERVICES" BUTTON (HOME) ==========
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
        setTimeout(() => {
            window.location.href = exploreBtn.getAttribute('href');
        }, 300);
    });
}

// ========== VANILLA TILT (SERVICES CARDS, IF ANY) ==========
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 20,
        speed: 400,
        glare: true,
        "max-glare": 0.4,
    });
}

// ========== BOOKING FORM (DYNAMIC SERVICE DROPDOWN + MESSAGE) ==========
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    const petTypeSelect = document.getElementById('petType');
    const serviceSelect = document.getElementById('service');
    const bookingMessage = document.getElementById('bookingMessage');

    const dogServices = ["Wellness Exam", "Vaccination", "Dental Cleaning", "Spay/Neuter", "X-Ray", "Blood Test", "Ultrasound", "Surgery (minor)", "Microchipping", "Grooming"];
    const catServices = ["Wellness Exam", "Vaccination", "Dental Cleaning", "Spay/Neuter", "X-Ray", "Blood Test", "Ultrasound", "Surgery (minor)", "Microchipping", "Grooming"];

    function updateServices() {
        const services = petTypeSelect.value === 'dog' ? dogServices : catServices;
        serviceSelect.innerHTML = '';
        services.forEach(service => {
            const option = document.createElement('option');
            option.value = service;
            option.textContent = service;
            serviceSelect.appendChild(option);
        });
    }

    petTypeSelect.addEventListener('change', updateServices);
    updateServices();

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const petType = petTypeSelect.options[petTypeSelect.selectedIndex]?.text;
        const service = serviceSelect.value;
        const subject = `Booking Request from ${fullName}`;
        const body = `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nPet Type: ${petType}\nService: ${service}`;
        window.location.href = `mailto:royalpawsvet@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        if (bookingMessage) bookingMessage.style.display = 'block';
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        bookingForm.reset();
        updateServices();
        if (bookingMessage) bookingMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// ========== FEEDBACK FORM ==========
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    const feedbackMessage = document.getElementById('feedbackMessage');
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('fbName').value;
        const email = document.getElementById('fbEmail').value;
        const ratingElem = document.querySelector('input[name="rating"]:checked');
        const rating = ratingElem ? ratingElem.value : 'Not given';
        const message = document.getElementById('fbMessage').value;
        const subject = `Feedback from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nRating: ${rating}\nMessage: ${message}`;
        window.location.href = `mailto:royalpawsvet@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        if (feedbackMessage) feedbackMessage.style.display = 'block';
        confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
        feedbackForm.reset();
        if (feedbackMessage) feedbackMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// ========== PAWFOLIO MODAL (LIGHTBOX) ==========
const imageModal = document.getElementById('imageModal');
if (imageModal) {
    imageModal.addEventListener('show.bs.modal', function(event) {
        const trigger = event.relatedTarget;
        const imgSrc = trigger.getAttribute('data-img');
        const caption = trigger.getAttribute('data-caption');
        const modalImg = document.getElementById('modalImage');
        const modalCaption = document.getElementById('modalCaption');
        if (modalImg) modalImg.src = imgSrc;
        if (modalCaption) modalCaption.textContent = caption;
    });
}

// ========== SMOOTH SCROLL FOR INTERNAL LINKS (optional) ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== "#" && href !== "") {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
