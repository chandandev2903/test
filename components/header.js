// components/header.js
document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
<header class="main-header main-header--one sticky-header sticky-header--normal">
    <div class="main-header__bg" style="background-image: url(assets/images/shapes/header-shape-bg-1-1.png);"></div>

    <div class="topbar-one">
        <div class="container-fluid">
            <div class="topbar-one__inner">
                <ul class="list-unstyled topbar-one__info">
                    <li>
                        <span class="topbar-one__info__icon">
                            <i class="icon-mail"></i>
                        </span>
                        <a href="mailto:navtejonco@gmail.com">navtejonco@gmail.com</a>
                    </li>
                    <li>
                        <span class="topbar-one__info__icon topbar-one__info__icon--phone">
                            <i class="icon-phone-call"></i>
                        </span>
                        <a href="tel:+918150863905">+918150863905</a>
                    </li>
                </ul>

                <div class="topbar-one__right">
                    <div class="topbar-one__open">
                        <span class="topbar-one__open__icon">
                            <i class="icon-clock"></i>
                        </span>
                        <p class="topbar-one__open__text">Mon to Fri 9:00am to 6:00pm</p>
                    </div>

                    <div class="topbar-one__social">
                        <a href="https://www.facebook.com/profile.php?id=61584545017522">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/navtej_acupuncture/">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@Navtej-Acupuncture">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="main-header__inner">
            <div class="main-header__logo logo-retina">
                <a href="index.html">
                    <img src="assets/images/logo/logo.png" alt="Navtej Acupuncture" width="143">
                </a>
            </div>

            <div class="main-header__right">
                <nav class="main-header__nav main-menu">
                    <ul class="main-menu__list">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>

                        <li class="dropdown">
                            <a href="#">Services</a>
                            <ul>
                                <li><a href="chiropractic-care.html">Chiropractic Care</a></li>
                                <li><a href="#">Cancer Nutrition</a></li>
                                <li><a href="#">Physiotherapy & G5 Treatment</a></li>
                                <li><a href="#">Cupping Therapy</a></li>
                                <li><a href="#">Seed Therapy</a></li>
                                <li><a href="#">Magnetic Therapy</a></li>
                                <li><a href="#">Cosmetic Acupuncture</a></li>
                            </ul>
                        </li>

                        <li class="dropdown">
                            <a href="#">Treatments</a>
                            <ul>
                                <li><a href="#">Infertility Treatment</a></li>
                                <li><a href="#">Spinal Problems</a></li>
                                <li><a href="#">Neurological Conditions</a></li>
                                <li><a href="#">Musculoskeletal Pain Conditions</a></li>
                            </ul>
                        </li>

                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>

                <div class="mobile-nav__btn mobile-nav__toggler">
                    <span></span><span></span><span></span>
                </div>

                <a href="appointment.html" class="sifoxen-btn main-header__btn">
                    Book Appointment
                </a>
            </div>
        </div>
    </div>
</header>
    `;

    document.getElementById("site-header").innerHTML = headerHTML;
});
