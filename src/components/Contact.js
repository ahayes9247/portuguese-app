import './Contact.css';

function Contact() {
    return(
        <main>
            <section>
                <article id="align-article-left" class="article-body-left">
                    <h1>Submit a European Portuguese Learning Tool</h1>

                    {/* Contact Form */}
                    <div id="section-contact-form">
                    <form method="GET" action="/Confirmation">
                        <div id="form-row">
                            <label name="fname" for="fname" id="form-label-style">Resource Type:</label>
                            <select id="form-input-style-select" required>
                                <option value="Type" id="form-input-style-option" selected="true" disabled>--Please Choose Type of Submission--</option>
                                <option value="App" id="form-input-style-option">Mobile App (Android)</option>
                                <option value="App" id="form-input-style-option">Mobile App (iOS)</option>
                                <option value="App" id="form-input-style-option">Desktop Software (PC)</option>
                                <option value="App" id="form-input-style-option">Desktop Software (Mac)</option>
                                <option value="App" id="form-input-style-option">Desktop Software (Other)</option>
                                <option value="Book" id="form-input-style-option">Book</option>
                                <option value="Website" id="form-input-style-option">Website</option>
                                <option value="Other" id="form-input-style-option">Other</option>
                            </select>
                        </div>

                        <div id="form-row">
                            <label for="resource-title" name="resource-title" id="form-label-style">Title:</label>
                            <input type="text" id="form-input-style" placeholder="Please enter the name of the resource." minlength="2" maxlength="500" required></input>
                        </div>

                        <div>
                            <input type="submit" name="submit" value="Submit" class="article-button">
                            </input> 
                        </div>

                    </form>
                    </div>

                </article>

                <aside>
                    <img id="article-image-right" src={require('../img/contact-image.png')}></img>
                </aside>
            </section>
        </main>
    );
}

export default Contact;