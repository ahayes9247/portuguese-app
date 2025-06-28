import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import '../Cards.css';

library.add(faChevronLeft, faChevronRight)

function Books() {
    // Click a button to scroll to another part of the page.
    const handleClickScroll = () => {
        const element = document.getElementById('app-cards-carousel');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
    // Calls the API.
    const [bData, bookList] = useState([]);
    useEffect(() => {
        fetch('https://portuguese-app-phi.vercel.app//api/server')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched data:", data);
                if (Array.isArray(data)) {
                    bookList(data);
                } else {
                    console.warn("Expected an array, but got:", typeof data);
                }
            })
            .catch((err) => {
                console.error("Fetch error:", err.message);
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
                        <h1>Books for Learning Portuguese from Portugal</h1>

                        <p>On this page, you will find a list of books for learning Portuguese from Portugal.</p>

                        <div>
                            <button type="button" class="list-scroll-link" onClick={handleClickScroll}>
                                See the List
                            </button>
                        </div>
                    </article>

                <aside>
                    <img id="article-image-right" src={require('../img/books-image.png')} alt="People reading books about Portuguese from Portugal."></img>
                </aside>
                </section>
            </header>

            <div id="main-slider-container">
                <span class="slider-icon left" onClick={slideLeft}>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" size="sm" />
                </span>


            <div id="slider">
                {bData.map((bookItem, index) => {
                    

                    return(
                        <div id="app-cards-carousel" class="slider-card" key={index}>
                            
                            <div class="slider-card-image" style={{backgroundImage:`url(${bookItem.image})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}></div>
                            <div id="text-container">
                            <p class="slider-card-title">{bookItem.title}</p>

                                <p class="slider-card-description" style={{textOverflow: 'ellipsis'}}>
                                    {bookItem.description}
                                </p>
                                <p class="slider-card-description">
                                    <strong class="card-description-text">Languages:</strong>
                                    <span>&nbsp;{bookItem.languages}</span>
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
                                                        background: '#fff',
                                                        zIndex: '4',
                                                        position: 'relative'
                                                    }}
                                                        >
                                                            {bookItem.notes}</p>
                                                )}
                                            </div>
                                    </p>
                                </div>
                            </div>
                         
                         <div id="card-footer">
                            <div class="slider-card-link-container">
                                <form action={bookItem.link} target="_new">
                                    <button class="slider-card-link" type="submit" style={{zIndex: '2', positive: 'relative'}}>
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
                            <span class="notes-button">see/hide notes</span>
                        </button>    
                    </strong>
                </p>
            </div>
        </section>
        </main>
    );
}

export default Books;