import '../App.css';

const HeroImage = require('../img/hero-image.png');
const LanguageImage = require('https://placehold.co/600x400');
const AboutImage = require('https://placehold.co/600x400');

function Home() {
    return(
        <main>
            <header id="article-wrapper">
                <article id="align-article-left" class="article-body-left">
                    <h1>Looking for European Portuguese resources?</h1>

                    <p>At Portugalese, our mission is to offer resources to help students around the world learn European Portuguese. Although many resources are available worldwide for Brazilian Portuguese, resources for European Portuguese outside of Portugal are rare. </p>

                    <p>This lack of resources makes European Portuguese less accessible to people who wish to visit, live, and work in Portugal. Portugalese aims to correct that gap so that more people outside of Portugal can appreciate the beauty of European Portuguese.</p>

                    <form action="/Sitemap">
                        <button type="submit" class="article-button">
                            See Sitemap
                        </button>
                    </form>
                </article>

                <aside>
                    <img id="article-image-right" src={HeroImage}></img>
                </aside>
            </header>

            <section id="article-wrapper">
                <article id="align-article-right" class="article-body-right">
                    <h1>
                        About Portuguese
                    </h1>

                    <p>
                        Portuguese is a Romance language. 
                        This language family includes, but is not limited to, 
                        Spanish, Italian, French, and Romanian.
                    </p>

                    <p>
                        According to <a href="https://www.babbel.com/en/magazine/how-many-people-speak-portuguese-and-where-is-it-spoken">Babbel</a>, <a href="https://www.berlitz.com/blog/most-spoken-languages-world">Berlitz</a>, and other language learning apps, Portuguese is the 9th most spoken language in the world today. 
                        Most of its 258 million speakers live Portugal, Brazil, Angola, Cabo Verde, Guinea-Bissau, 
                        Mozambique, São Tomé and Príncipe and East Timor, where it is an official language. However, 
                        many speakers also live in Macau and Goa.</p>

                    <p><a href="https://londres.consuladoportugal.mne.gov.pt/en/about-portugal/portuguese-culture-and-language#:~:text=Portuguese%20is%20currently%20the%20fifth,until%201999%2C%20and%20in%20Goa.">The Consulate General of Portugal in London also notes that Portuguese</a> "is the base of around twenty Creole languages and an important minority language in 
                        countries such as Andorra, Luxemburg, Namibia, Switzerland and South Africa, due to the 
                        numerous Portuguese communities in those countries." 
    
                    </p>

                    <form action="https://en.wikipedia.org/wiki/Portuguese_language" target="_new">
                        <button type="submit" class="article-button">
                            Learn More
                        </button>
                    </form>
                </article>

                <aside>
                    <img id="article-image-left" src={LanguageImage}></img>
                </aside>
        </section>

        <section id="article-wrapper">
                <article id="align-article-left" class="article-body-left">
                    <h1>About the Site Owner</h1>

                    <p>Olá a todos! My name is Amanda Hayes. I was born in the United States and I have been studying European Portuguese since Spring 2020. I currently hold a B1 certificate from the Universidade de Coimbra.</p>

                    <p>My interest in the Portuguese language was sparked by my maternal great-grandmother. She was the descendant of Black Africans, Sephardic Jews, and several other ethnic groups. Her Sephardic ancestors had come to the island of Jamaica — her birth country — from Portugal to escape the Spanish Inquisition. (It is no wonder to me why Jamaica’s national motto is “Out of many, one people!”)  Her immense pride in her Portuguese maiden name, Henriques, inspired me to learn more about where it had come from. My journey inevitably led me to Portugal itself, where I am now living. </p>

                    <p>Although none of this makes me an expert on the Portuguese language in general, it has led to an accumulation of European Portuguese learning resources. Now, I am eager share those resources with other European Portuguese language students. I understand their frustration with their lack of options and hope that my little hobby list can help them as it has helped me. Boa sorte!</p>

                    <form action="/Contact">
                        <button type="submit" class="article-button">
                            Contact Me
                        </button>
                    </form>
                </article>

                <aside>
                    <img id="article-image-right" src={AboutImage}></img>
                </aside>
            </section>
        </main>
    );
}

export default Home;