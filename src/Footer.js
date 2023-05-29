import './Footer.css';
const FooterLogo = require('./img/footer_logo.png');

function Footer() {
    return(
        <footer>
            <section id="footer-wrapper">
                <article id="footer-article">
                <div id="footer-logo-container">
                        <a href="/">
                            <img src={FooterLogo} class="footer-logo-image" border="0"></img>
                            </a>
                    </div>
                    <nav id="footer-nav">
                        <div id="footer-links">
                        <ul>
                            <li>
                                <a href="/MobileApps">
                                    Apps
                                </a>
                            </li>

                            <li>
                                <a href="/Books">
                                    Books
                                </a>
                            </li>

                            <li>
                                <a href="/Websites">
                                    Websites
                                </a>
                            </li>

                            <li>
                                <a href="/Contact">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Top
                                </a>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </article>
            </section>
        </footer>
    );
}

export default Footer;