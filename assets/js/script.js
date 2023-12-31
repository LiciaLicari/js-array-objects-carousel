/* 

Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.


MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.


MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. 
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.


BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. 
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.

Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template". 
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"

Buon lavoro e buon divertimento! :slightly_smiling_face:




MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. 


Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


<img class="active" src="./assets/img/01.webp" alt="">
*/


/* Define the slides list */
const slides = [
    './assets/img/01.webp', //0
    './assets/img/02.webp', //1
    './assets/img/03.webp', //etc
    './assets/img/04.webp',
    './assets/img/05.webp',
]

// Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.

const mySlides = [
    {
        pic: './assets/img/01.webp',
        ind: 0
    },
    {
        pic: './assets/img/02.webp',
        ind: 1
    },
    {
        pic: './assets/img/03.webp',
        ind: 2
    },
    {
        pic: './assets/img/04.webp',
        ind: 3
    },
    {
        pic: './assets/img/05.webp',
        ind: 4
    }

]

let activeSlide = 0;

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')


//console.log(sliderImagesEl);

/* Print all images into the dom */
//loop over the slides 
// for (let i = 0; i < slides.length; i++) {
//     const slidePath = slides[i];
//     console.log(slidePath);

//     // for each slide we create the markup
//     const slideMarkup = `<img class="${activeSlide === i ? 'active' : ''}" src="${slidePath}" alt="">`
//     //console.log(slideMarkup);

//     sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)

// }

/* 
Bonus 0:
Non eravamo ancora a conoscenza di molti strumenti utili, come ad esempio le funzioni. 
É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito? 
*/



mySlides.forEach(slide => {

    const slideMarkup = `<img class="${activeSlide === slide.ind ? 'active' : ''}" src="${slide.pic}" alt="">`

    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)

    console.log(slide.pic);

});




/* 
 
if(condition) {
  // code to run
} else {
  // code to run
}
 
// terary operator
 
condition ? 'code to run' : 'code to run'
 
*/


/* 
 
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
 
*/

const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);



/* 
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
 
*/

/* 
 
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, 
come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. 
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
 
*/


const thumbsElement = document.querySelector('.thumbnails')

// for (let i = 0; i < slides.length; i++) {
//     const thumbPath = slides[i];
//     const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${thumbPath}" alt="">`
//     //console.log(thumbMarkup);

//     thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)

// }

mySlides.forEach(slide => {

    const thumbPath = slide.ind;
    const thumbMarkup = `<img class="thumb ${activeSlide === thumbPath ? 'active' : ''}" src="${slide.pic}" alt="">`
    //console.log(thumbMarkup);

    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)

});



// intercept click on the next icon 
nextEl.addEventListener('click', function () {
    console.log('cliccato su next');

    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')

    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')


    // activeSlide = 4

    if (activeSlide === slidesImages.length - 1) {
        activeSlide = 0
        // activeSlide = 5
    } else {
        // increment the activeSlide of 1
        activeSlide++
    }


    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')


    /* TODO */


    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')


})

/*
  Bonus 1:
  Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
  al click di un bottone o già dall'inizio possiamo far partire, 
  ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
  Bonus 2:
  E se volessi un bottone per invertire la "direzione" del carosello?
*/



prevEl.addEventListener('click', autoScrollPrev);
nextEl.addEventListener('click', autoScrollNext);


function autoScrollPrev() {
    setInterval(prevPic, 2000);
}

function autoScrollNext() {

    setInterval(nextPic, 2000);

}

function prevPic() {
    console.log('cliccato su prev');
    // select the current slide
    const currentSlide = slidesImages[activeSlide];
    // remove the active class from the current slide
    currentSlide.classList.remove('active');
    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active');
    //console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active');


    // activeSlide = 4

    if (activeSlide === 0) {
        activeSlide = slidesImages.length - 1
        // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }


    // select the next slide
    const prevSlide = slidesImages[activeSlide];
    //console.log(prevSlide);
    // add the active class to the next slide
    prevSlide.classList.add('active');


    //TODO

    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide];
    //console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active');

}

function nextPic(){
    console.log('cliccato su next');
    // select the current slide
    const currentSlide = slidesImages[activeSlide];
    //console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
    
    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    //console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')
    
    
    // activeSlide = 4
    
    if (activeSlide === slidesImages.length - 1) {
        activeSlide = 0
        // activeSlide = 5
    } else {
        // increment the activeSlide of 1
        activeSlide++
    }
    
    
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    //console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active');
    
    //TODO
    
    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    //console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')

  }




/*
// activeSlide = 0
prevEl.addEventListener('click', function () {
    console.log('cliccato su prev');


    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')

    if (activeSlide === 0) {
        activeSlide = slidesImages.length - 1
        // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }


    console.log(activeSlide);


    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')
})
*/


