import './Sitemap.css';
import './App.css';

function Sitemap() {
    return (
        <main>
            <header id="article-wrapper">
                <section>
                    <article id="align-article-left" class="article-body-left">
                        <h1>Sitemap</h1>

                        <nav id="sitemap-nav">
                            <ul class="sitemap-list">
                                <li class="sitemap-list-item">
                                    <a href="/" style={{fontWeight: 'normal'}}>Home</a>
                                </li>
                                <li class="sitemap-list-item">
                                    <a href="/MobileApps" style={{fontWeight: 'normal'}}>Apps</a>
                                </li>
                                <li class="sitemap-list-item">
                                    <a href="/Books" style={{fontWeight: 'normal'}}>Books</a>
                                </li>
                                <li class="sitemap-list-item">
                                    <a href="/Websites" style={{fontWeight: 'normal'}}>Websites</a>
                                </li>
                                <li class="sitemap-list-item">
                                    <a href="/Contact" style={{fontWeight: 'normal'}}>Contact</a>
                                </li>
                                <li class="sitemap-list-item">
                                    <a href="/Sitemap" style={{fontWeight: 'normal'}}>Sitemap</a>
                                </li>
                            </ul>
                        </nav>

                    </article>

                <aside>
                    <img id="article-image-right" src={require('./img/sitemap-image.png')} alt="Several people use books and technology to learn Portuguese from Portugal."></img>
                </aside>
                </section>
            </header>

            
        </main>
    )
}

export default Sitemap;