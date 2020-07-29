jQuery(document).ready(function(){
//hideTitles();
//downWidgets
//translateToRussian();
//translateToRussianMobile();
removeFooter();
removeSearchbar();
fixArticles();
});

function removeSearchbar() {
  jQuery("#sb-search").remove();
  jQuery("#searchform").remove();
}

//TODO rendere univerlare basandosi sul fatto che ci sia o meno lo slider nella pagina
function downWidgets() {
  var url = window.location.pathname;
  if(url.includes('corpo-docenti') || url.includes('contattaci')) {
    jQuery(".widget-area").css("margin-top",'unset');
  }
}

function translateToRussian() {

  if(jQuery('#menu-item-9999999999').children().find('a').text() === 'it') {

    jQuery("#menu-nsr").children().each(function() {
      var el = jQuery(this).find('a');

      switch(el.text().toLowerCase()) {
        case 'home'.toLowerCase():
          el.text('Главная');
          break;
          case 'scuola'.toLowerCase():
          el.text('Школа');
          break;
          case 'asilo e scuola dell\’infanzia'.toLowerCase():
          el.text('Дошкольное образование');
          break;
          case 'adulti'.toLowerCase():
          el.text('Курсы для взрослых');
          break;
          case 'corpo docenti'.toLowerCase():
          el.text('Наши учителя');
          break;
          case 'doposcuola'.toLowerCase():
          el.text('Кружки');
          break;
          case 'eventi'.toLowerCase():
          el.text('Мероприятия');
          break;
          case 'contatti'.toLowerCase():
          el.text('Контакты');
          break;
      }
    });
  }
}

function removeFooter() {
  console.log("Giulia ti amo");
  jQuery("footer").remove();
}

function translateToRussianMobile(){

    if(jQuery('#av-mobile-menu-item-9999999999').children().find('a').text() === 'it') {
    jQuery("#av-mobile-main-menu").children().each(function() {
      var el = jQuery(this).find('a');

      switch(el.text().toLowerCase()) {
        case 'home'.toLowerCase():
          el.text('Главная');
          break;
          case 'scuola'.toLowerCase():
          el.text('Школа');
          break;
          case 'asilo e scuola dell\’infanzia'.toLowerCase():
          el.text('Дошкольное образование');
          break;
          case 'adulti'.toLowerCase():
          el.text('Курсы для взрослых');
          break;
          case 'corpo docenti'.toLowerCase():
          el.text('Наши учителя');
          break;
          case 'doposcuola'.toLowerCase():
          el.text('Кружки');
          break;
          case 'eventi'.toLowerCase():
          el.text('Мероприятия');
          break;
          case 'contatti'.toLowerCase():
          el.text('Контакты');
          break;
      }
    });
  }
}

function hideTitles() {
  jQuery(".entry-title").remove();
}



function fixArticles() {
  var url = window.location.pathname;
  if(!url.includes('eventi'))
    return;
  removeReadMore();
  replaceThumpImgInArticles();
  addOnClickToPreview();
  fixArticlePreview();
  truncateArticlePreviewText();
  addPaddingToArticlePewviewText();
}


function removeReadMore() {
    jQuery(".readmore_button").remove();
}

function replaceThumpImgInArticles() {
  jQuery(".post-thumb").each(function(){
      var urlImage = jQuery(this).children().children().attr('src');
      var newDiv = '<div class="attachment-foodica-loop-portrait size-foodica-loop-portrait wp-post-image" style="background-image: url(\'' + urlImage + '\'); height: 250px; background-position: center;"></div>';
      jQuery(this).children().children().replaceWith(newDiv);
  });
}

function addOnClickToPreview() {
  jQuery(".post-thumb").each(function(){
    var url = jQuery(this).find("a").attr("href");
    jQuery(this).parent().click(function(){
      location.href = url;
    });
  });
}

function fixArticlePreview() {
  jQuery("article").addClass("article-fixes");
}

function truncateArticlePreviewText() {
  jQuery(".entry-content").each(function() {
    var text = jQuery(this).find("p").text();
    if(text.length>100)
      text = text.substring(0,100).trim() + "...";
    jQuery(this).find("p").text(text);
  });
}

function addPaddingToArticlePewviewText() {
  jQuery(".entry-content").each(function(){
    jQuery(this).find("p").addClass("preview-content");
  });

}