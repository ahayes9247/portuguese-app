import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Cards.css';

library.add(faChevronLeft, faChevronRight)

function SiteList() {
    // Displays a modal popup when see notes is clicked //
        const [showModal, setShowModal] = useState(false);
    // Backdrop JSX code
        const renderBackdrop = (props) => <div className="backdrop" {...props} />;
    // Closes the modal.
        var handleClose = () => setShowModal(false);
        var handleSuccess = () => {
        console.log("success");
        };

    // Click a button to scroll to another part of the page.
    const handleClickScroll = () => {
        const element = document.getElementById('app-cards-carousel');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
    // Calls the API.
    const [app, appsList] = useState([]);
    useEffect(() => {
       fetch('https://646e50619c677e23218b7f91.mockapi.io/api/v1/websites')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             appsList(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    // Scrolls the slider to the left.
    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 420;
    }

    // Scrolls the slider to the right.
    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 420; 
    }

    // Toggles notes.
    const useToggle = (initialState) => {
        const [toggleValue, setToggleValue] = useState(initialState);
    
        const toggler = () => { setToggleValue(!toggleValue) };
        return [toggleValue, toggler]
    }
    
    const [toggle, setToggle] = useToggle();

    return(
        <main>
            <header id="article-wrapper">
                <section>
                    <article id="align-article-left" class="article-body-left">
                        <h1>Websites for Learning European Portuguese</h1>

                        <p>On this page, you will find a list of websites for learning European Portuguese.</p>

                        <div>
                            <button type="button" class="slider-card-link" onClick={handleClickScroll}>
                                See the List
                            </button>
                        </div>
                    </article>
                </section>
            </header>

            <div id="main-slider-container">
                <span class="slider-icon left" onClick={slideLeft}>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" size="sm" />
                </span>


            <div id="slider">
                {app.map((apps, index) => {

                    return(
                        <div id="app-cards-carousel" class="slider-card" key={index}>
                            
                            <div class="slider-card-image" style={{backgroundImage:`url(${apps.image})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}></div>
                            <div id="text-container">
                            <p class="slider-card-title">{apps.title}</p>
                             
                                <p class="slider-card-platform">
                                    <strong class="card-description-text">Android:</strong> &nbsp;{apps.android} | &nbsp;
                                    <strong class="card-description-text">iOS:</strong> &nbsp;{apps.ios}</p>

                                <p class="slider-card-description" style={{textOverflow: 'ellipsis'}}>
                                    {apps.description}
                                </p>
                                <p class="slider-card-description">
                                    <strong class="card-description-text">Languages:</strong>
                                    <span>&nbsp;{apps.languages}</span>
                                </p>

                                <div id="notes-text-container">
                                    <p class="slider-card-description-notes">
                                            <div id="toggled-notes">
                                                {toggle && (
                                                    <p 
                                                    style={{
                                                        maxHeight: '160px', 
                                                        height: '160px', 
                                                        width: '95%', 
                                                        overflowY: 'scroll', 
                                                        marginLeft: '10px',
                                                        background: '#fff'
                                                    }}
                                                        >
                                                            {apps.thoughts}</p>
                                                )}
                                            </div>
                                    </p>
                                </div>
                            </div>
                         
                         <div id="card-footer">
                            <div class="slider-card-link-container">
                                <form action={apps.link} target="_new">
                                    <button class="slider-card-link" type="submit" style={{zIndex: '-1'}}>
                                        View
                                    </button>
                                </form>
                            </div>
                        </div>
                </div>
                    )}
                )}
            </div>

            <span class="slider-icon right" onClick={slideRight}>
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="sm" />
            </span>
        </div>

        <section id="notes-wrapper">
            <div id="notes-link-container">
                <p id="slider-card-notes">
                    <strong class="card-description-notes">
                        <button class="slider-card-notes-button" 
                        type="button" 
                        onClick={setToggle}>
                            see/hide notes
                        </button>    
                    </strong>
                </p>
            </div>
        </section>
        </main>
    );
}

export default SiteList;