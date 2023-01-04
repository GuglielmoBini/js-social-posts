/*
# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*

#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/

//------------------------------------------------------------

// prendo l'elemento dal DOM

const postContainer = document.getElementById("container");

// creo array

const postsList = [
  {
    id: 1,
    name: "Phil Mangione",
    namePic: "https://unsplash.it/300/300?image=15",
    date: "04/27/2022",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctiominima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postPic: "https://unsplash.it/600/300?image=171",
    like: 80,
  },
  {
    id: 2,
    name: "Charles Leclerc",
    namePic: "https://unsplash.it/300/300?image=17",
    date: "03/15/2022",
    text: "We will win the championship!",
    postPic: "https://unsplash.it/600/300?image=173",
    like: 3476,
  },
  {
    id: 3,
    name: "Giacomo Rossi",
    namePic: "https://unsplash.it/300/300?image=19",
    date: "08/13/2021",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctiominima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postPic: "https://unsplash.it/600/300?image=181",
    like: 65,
  },
  {
    id: 4,
    name: "Paolo Sorrentino",
    namePic: "https://unsplash.it/300/300?image=24",
    date: "12/25/2022",
    text: "Buon Natale a tutti!!",
    postPic: "https://unsplash.it/600/300?image=186",
    like: 5466,
  },
  {
    id: 5,
    name: "Serena Williams",
    namePic: "https://unsplash.it/300/300?image=27",
    date: "06/12/2022",
    text: "Roger Federer is the GOAT!",
    postPic: "https://unsplash.it/600/300?image=165",
    like: 126599,
  },
];

// creo funzione per creare un post

const createPost = (id, name, namePic, date, text, postPic, like) => {
  const post = `
    <div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img
            class="profile-pic"
            src="${namePic}"
            alt="Phil Mangione"
          />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${name}</div>
          <div class="post-meta__time">${date}</div>
        </div>
      </div>
    </div>
    <div class="post__text">${text}</div>
    <div class="post__image">
      <img src="${postPic}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <button
            class="like-button js-like-button"
            href="#"
            data-postid="1"
          >
            <i
              class="like-button__icon fas fa-thumbs-up"
              aria-hidden="true"
            ></i>
            <span class="like-button__label">Mi Piace</span>
          </button>
        </div>
        <div class="likes__counter">
          Piace a
          <b id="like-counter-${id}" class="js-likes-counter">${like}</b> persone
        </div>
      </div>
    </div>
  </div>`;
  return post;
};

// creo ciclo per stampare i post in pagina
let posts = "";

postsList.forEach((post) => {
  const { id, name, namePic, date, text, postPic, like } = post;
  posts += createPost(id, name, namePic, date, text, postPic, like);
});

postContainer.innerHTML = posts;

// prendo i bottoni dal DOM
const likeButtons = document.querySelectorAll(".like-button");

for (let i = 0; i < likeButtons.length; i++) {
  // aggancio event listener ai bottoni
  likeButtons[i].addEventListener("click", () => {
    likeButtons[i].classList.toggle("like-button--liked");
    // incremento e decremento i likes
    if (likeButtons[i].classList.contains("like-button--liked")) {
      postsList[i].like++;
    } else {
      postsList[i].like--;
    }

    //aggiorno il numero di likes
    const likeNumber = document.getElementById(`like-counter-${i + 1}`);
    likeNumber.innerText = postsList[i].like;
  });
}
