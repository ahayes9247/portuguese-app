import './Sitemap.css';

function Sitemap() {
    return (
        <main>
            <nav id="sitemap-nav">
                <h1>Sitemap</h1>
                <ul class="sitemap-list">
                    <li class="sitemap-list-item">
                        <a href="/">Home</a>
                    </li>
                    <li class="sitemap-list-item">
                        <a href="/MobileApps">Apps</a>
                    </li>
                    <li class="sitemap-list-item">
                        <a href="/Books">Books</a>
                    </li>
                    <li class="sitemap-list-item">
                        <a href="/Websites">Websites</a>
                    </li>
                    <li class="sitemap-list-item">
                        <a href="/Contact">Contact</a>
                    </li>
                    <li class="sitemap-list-item">
                        <a href="/Sitemap">Sitemap</a>
                    </li>
                </ul>
            </nav>
        </main>
    )
}

export default Sitemap;