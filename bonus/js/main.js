$(document).ready(function() {

// indice dell'immagine(circle da visualizzare
var indexImg = 0;

// indicizza i circle aggiungendo la classe ind0, ind1...
arrayCircle = $(".nav .fa-circle");
for (var i = 0; i < arrayCircle.length; i++) {
  arrayCircle[i].classList += " ind" + i;
}

// indicizza le immagini aggiungendo la classe ind0, ind1...
arrayImg = $(".images img");
for (var i = 0; i < arrayImg.length; i++) {
  arrayImg[i].classList += " ind" + i;
}

// CLICK ARROW_RIGHT mostra immagine successiva
$(".next").click(imgNext);

// CLICK ARROW_LEFT mostra immagine preedente
$(".prev").click(imgPrev);

// KEYPRESS: intercetta il valore del tasto premuto sulla tastiera
$(document).on("keydown", function (e) {
  // *** NEXT IMG ***
  // al click sul tasto ArrowRight mostra immagine successiva
  if (e.which == 39) {
    imgNext();
  } else if (e.which == 37) {
    // *** PREV IMG ***
    // al click sul tasto ArrowLeft mostra immagine precedente
    imgPrev();
  }
})

// CLICK SU CIRCLE colora di blu il circle cliccato e visualizza immagine corrispondente
$(".nav .fa-circle").click (
  function() {
    // cerca l'indice del circle cliccato
    for (var i = 0; i < arrayCircle.length; i++) {
      if($(this).hasClass("ind" + i)) {
        indexImg = i;
      }
    }

    // while (indTrovato == false) {
    //   var classeIndex = "ind"+ contatore;
    //   console.log($(this).hasClass(classeIndex));
    //   if($(this).hasClass(classeIndex)) {
    //     indexImg = contatore;
    //     indTrovato == true;
    //     console.log("indexImg: " + contatore);
    //   }
    //   contatore++;
    //   console.log(contatore);
    // }

    // visualizza immagine e circle dell'indice scelto
    displayImgCircle ();
});

  // funzione che mostra l'immagine successiva del carousel;
  // se l'immagine al momento del click è l'ultima del carousel allora mostra la prima.
  function imgNext() {
    // controlla se è l'indice dell'ultima foto del carousel
    if (indexImg == arrayCircle.length -1) {
      // imposta l'indice della prima foto del carousel
      indexImg = 0;
    } else {
      // imposta l'indice della foto successiva nel carousel
      indexImg += 1;
    }
    // visualizza immagine e circle dell'indice scelto
    displayImgCircle ();
  }

  // funzione che mostra l'immagine precedente del carousel;
  // se l'immagine al momento del click è la prima del carousel allora mostra l'ultima.
  function imgPrev() {
    // controlla se è l'indice della prima foto del carousel
    if (indexImg == 0) {
      // imposta l'indice dell'ultima foto del carousel
      indexImg = arrayCircle.length -1;
      // function display
    } else {
      // imposta l'indice della foto precedente nel carousel
      indexImg -= 1;
    }
    // visualizza immagine e circle dell'indice scelto
    displayImgCircle ();
  }

  // funzione che mostra immagine e circle dell'indice sceto
  function  displayImgCircle () {
    // colora di blu il circle cliccato
    $(".fa-circle").removeClass("active");
    arrayCircle[indexImg].classList += " active";

    // nasconde la foto visualizzata al momento dell'evento
    $(".images img").removeClass("active");
    // visualizza la foto con il nuovo indice scelto tramite uno dei vari eventi (click arrows, keypress, click su circle)
    arrayImg[indexImg].classList += " active";
  }

});

// DEBUG
// $(document).on("keydown", function (e) {
//   console.log("hai schiacciato il tasto" + e.which);
//   console.log("hai schiacciato il tasto" + e.key);
// });
