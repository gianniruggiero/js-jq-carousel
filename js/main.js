$(document).ready(function() {

  // *** NEXT IMG ***
  // al click su freccia destra mostra immagine successiva
  $(".next").click(imgNext);

  // *** PREV IMG ***
  // al click su freccia sinistra mostra immagine preedente
  $(".prev").click(imgPrev)

  // KEYPRESS
  // intercetta il valore del tasto premuto sulla tastiera
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

  // DEBUG
  // $(document).on("keydown", function (e) {
  //   console.log("hai schiacciato il tasto" + e.which);
  //   console.log("hai schiacciato il tasto" + e.key);
  // });

  // funzione che mostra l'immagine successiva del carousel;
  // se l'immagine al momento del click è l'ultima del carousel allora mostra la prima.
  function imgNext() {
    // individua l'immagine visualizzata al momento del click
    var imgAttiva = $("img.active");
    // nasconde l'immagine attualmente visualizzata
    imgAttiva.removeClass("active");
    // verifica se l'immagine attuale è l'ultima del carousel
    if (imgAttiva.hasClass("last")) {
      // come immagine NEXT imposta la prima immagine del carousel
      var imgNext = $("img.first");
    } else {
      // come immagine NEXT imposta limmagine successiva nel carousel
      var imgNext = imgAttiva.next();
    }
    // fa comparire l'immagine definita come successiva dal controllo
    imgNext.addClass("active");
  }

  // funzione che mostra l'immagine precedente del carousel;
  // se l'immagine al momento del click è la prima del carousel allora mostra l'ultima.
  function imgPrev() {
    // individua l'immagine visualizzata al momento del click
    var imgAttiva = $("img.active");
    // nasconde l'immagine attualmente visualizzata
    imgAttiva.removeClass("active");
    // verifica se l'immagine attuale è la prima del carousel
    if (imgAttiva.hasClass("first")) {
      // è la 1^ img del carousel: come immagine PREV imposta l'ultima immagine del carousel
      var imgPrev = $("img.last");
    } else {
      // come immagine PREV imposta l'immagine precedente nel carousel
      var imgPrev = imgAttiva.prev();
    }
    // fa comparire l'immagine definita come precedente dal controllo
    imgPrev.addClass("active");
  }

});
