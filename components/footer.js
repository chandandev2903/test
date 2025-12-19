// components/footer.js
document.addEventListener("DOMContentLoaded", function () {
    const sidebarHTML = `
     <footer class="main-footer">
            <div class="main-footer__bg" style="background-image: url(assets/images/banner/footer.png);"></div>
            <!-- /.main-footer__bg -->
            <div class="container">
                <div class="main-footer__top wow fadeInUp" data-wow-duration="1500ms">
                    <div class="main-footer__top__bg"
                        style="background-image: url(assets/images/shapes/footer-top-bg.png);"></div>
                    <!-- /.main-footer__top__bg -->
                    <div class="main-footer__logo">
                        <a href="index.html">
                            <img src="assets/images/logo/logo.png" width="161" alt="Sifoxen HTML Template">
                        </a>
                    </div><!-- /.main-footer__logo -->
                    <div class="main-footer__newsletter">
                        <form action="#" data-url="MAILCHIMP_FORM_URL" class="main-footer__newsletter__form mc-form">
                            <div class="main-footer__newsletter__inner">
                                <input type="text" name="EMAIL" placeholder="Your Email Address">
                                <span class="main-footer__newsletter__icon">
                                    <i class="icon-email-1"></i>
                                </span><!-- /.main-footer__newsletter__icon -->
                            </div><!-- /.main-footer__newsletter__inner -->
                            <button type="submit" class="sifoxen-btn">subscribe now</button>
                        </form><!-- /.footer-widget__newsletter__form mc-form -->
                        <div class="mc-form__response"></div><!-- /.mc-form__response -->
                    </div><!-- /.main-footer__newsletter -->

                    <div class="main-footer__shape">
                        <div class="main-footer__shape__image">
                            <img src="assets/images/resources/foter-musk.png" alt="">
                        </div><!-- /.main-footer__shape__image -->
                        <div class="main-footer__shape__box"></div><!-- /.main-footer__shape__box -->
                    </div><!-- /.main-footer__shape -->
                </div><!-- /.main-footer__top -->
                <div class="row gutter-y-40">
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="00ms">
                        <div class="footer-widget footer-widget--about">
                            <h2 class="footer-widget__title">about </h2><!-- /.footer-widget__title -->
                            <p class="footer-widget__about-text"> A holistic care promise with no pain, no intake of medicines, and no side effects, delivering safe natural therapies focused on root cause healing and long term wellness.
</p><!-- /.footer-widget__about-text -->

                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-4 -->
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="200ms">
                        <div class="footer-widget footer-widget--links">
                            <h2 class="footer-widget__title">our Services</h2><!-- /.footer-widget__title -->
                            <ul class="list-unstyled footer-widget__links">
                                <li><a href="#">Chiropractic Care</a></li>
                                <li><a href="#">Cancer Nutrition</a></li>
                                <li><a href="#">Physiotherapy & G5 Treatment</a></li>
                                <li><a href="#">Cupping Therapy </a></li>
                                <li><a href="#">Seed Therapy</a></li>
                                <li><a href="#">Magnetic Therapy</a></li>
                                <li><a href="#">Cosmetic Acupuncture</a></li>
                            </ul><!-- /.list-unstyled footer-widget__links -->
                            
                        </div><!-- /.footer-widget -->
                        
                    </div>
                    <!-- /.col-lg-4 -->
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="400ms">
                        <div class="footer-widget footer-widget--time">
                            <h2 class="footer-widget__title">Quick Links</h2><!-- /.footer-widget__title -->
                            <ul class="list-unstyled footer-widget__time">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul><!-- /.list-unstyled footer-widget__links -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-6 -->
                    <div class="col-md-6 col-lg-5 col-xl-3 wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="600ms">
                        <div class="footer-widget footer-widget--contact">
                            <h2 class="footer-widget__title">Get in Touch</h2><!-- /.footer-widget__title -->
                            <address class="footer-widget__address">Near Reliance Petrol Bunk, Aarogya Hospital, Manvi –
                                58423
                                PA 19020</address>
                            <ul class="list-unstyled footer-widget__info">
                                <li>
                                    <span class="footer-widget__info__icon"><i
                                            class="icon-paper-plane"></i></span><!-- /.footer-widget__info__icon -->
                                    <a href="mailto:navtejonco@gmail.com">navtejonco@gmail.com</a>
                                </li>
                                <li>
                                    <span class="footer-widget__info__icon"><i
                                            class="icon-telephone"></i></span><!-- /.footer-widget__info__icon -->
                                    <a href="tel:+918150863905">+918150863905</a>
                                </li>
                            </ul><!-- /.list-unstyled -->
                        </div><!-- /.footer-widget -->
                    </div><!-- /.col-lg-5 -->
                </div><!-- /.row -->
            </div><!-- /.container -->
            <div class="main-footer__bottom">
                <div class="container">
                    <div class="main-footer__bottom__inner">
                        <div class="social-links">
                            <a href="https://www.facebook.com/profile.php?id=61584545017522">
                                <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                <span class="sr-only">Facebook</span>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter" aria-hidden="true"></i>
                                <span class="sr-only">Twitter</span>
                            </a>
                            <a href="https://www.instagram.com/navtej_acupuncture/">
                                <i class="fab fa-instagram" aria-hidden="true"></i>
                                <span class="sr-only">Instagram</span>
                            </a>
                            <a href="https://www.youtube.com/@Navtej-Acupuncture">
                                <i class="fab fa-youtube" aria-hidden="true"></i>
                                <span class="sr-only">Youtube</span>
                            </a>
                        </div><!-- /.social-links -->
                        <p class="main-footer__copyright">
                            &copy; Copyright <span class="dynamic-year"></span> by Navtej
                            Hospital </p>
                    </div><!-- /.main-footer__inner -->
                </div><!-- /.container -->
            </div><!-- /.main-footer__bottom -->
        </footer>
    `;

    document.getElementById("site-footer").innerHTML = sidebarHTML;
});
