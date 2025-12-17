// components/header.js
document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
   <div class="service-sidebar">
                            <div class="service-sidebar__info service-sidebar__single">
                                <ul class="list-unstyled service-sidebar__nav wow fadeInLeft"
                                    data-wow-duration="1500ms">
                                    <h2 class="mb-4">Explore Services</h2>
                                    <li><a href="chiropractic-care.html">Cancer Nutrition</a></li>
                                    <li><a href="#">Acupunctur therapy</a></li>
                                    <li><a href="#">Physiotherapy & G5 Treatment</a>
                                    </li>
                                    <li><a href="#">Cupping Therapy </a></li>
                                    <li> <a href="#">Seed Therapy</a></li>
                                    <li><a href="#">Magnetic Therapy</a></li>
                                    <li><a href="#">Cosmetic Acupuncture</a></li>
                                </ul><!-- /.list-unstyled service-sidebar__nav -->
                                <div class="service-sidebar__contact wow fadeInLeft" data-wow-duration="1500ms"
                                    data-wow-delay="100ms"
                                    style="background-image: url('assets/images/services/service-sidebar-contact-bg.jpg');">
                                    <div class="service-sidebar__contact__bg">
                                        <div class="service-sidebar__contact__bg__inner"
                                            style="background-image: url('assets/images/shapes/service-sidebar-contact-bg-2.png');">
                                        </div><!-- /.service-sidebar__contact__bg__inner -->
                                    </div><!-- /.service-sidebar__contact__bg -->
                                    <div class="service-sidebar__contact__inner">
                                        <div class="service-sidebar__contact__icon">
                                            <i class="icon-telephone"></i>
                                        </div><!-- /.service-sidebar__contact__icon -->
                                        <div class="service-sidebar__contact__content">
                                            <h4 class="service-sidebar__contact__time">MON - SAT 8:00-9:00</h4>
                                            <!-- /.service-sidebar__contact__time -->
                                            <h4 class="service-sidebar__contact__number">
                                                <a href="tel:+918150863905">+918150863905</a>
                                            </h4><!-- /.service-sidebar__contact__number -->
                                        </div><!-- /.service-sidebar__contact__content -->
                                    </div><!-- /.service-sidebar__contact__inner -->
                                </div><!-- /.service-sidebar__contact -->
                            </div><!-- /.service-sidebar__info service-sidebar__single -->
                            <div class="service-sidebar__single wow fadeInLeft" data-wow-duration="1500ms"
                                data-wow-delay="200ms">
                                <div class="service-sidebar__company">
                                    <ul class="list-unstyled service-sidebar__nav wow fadeInLeft"
                                        data-wow-duration="1500ms">
                                        <h2 class="mb-4">Explore Treatments</h2>
                                        <li><a href="#">Infertility Treatment</a></li>
                                        <li><a href="#">Spinal Problems</a></li>
                                        <li><a href="#">Neurological Conditions</a></li>
                                        <li><a href="#">Musculoskeletal Pain Conditions </a></li>
                                    </ul><!-- /.list-unstyled service-sidebar__nav -->

                                </div><!-- /.service-sidebar__company -->
                                \
                            </div><!-- /.service-sidebar__single -->
                        </div>
    `;

    document.getElementById("site-sidebar").innerHTML = headerHTML;
});
