import './vendor';
import '../stylesheets/style.scss';

(function($) {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
    
})(jQuery);

var allMods      = $(".testimony");
var videoContent = $(".video__content");
var pricings     = $(".pricing");

function isVisible(el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
}

function animateElement(el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("come-in"); 
  }
}

videoContent.each(function(i, el) {
  isVisible(el);
});

allMods.each(function(i, el) {
  isVisible(el);
});

pricings.each(function(i, el) {
  isVisible(el);
});

$(window).scroll(function(event) {
  allMods.each(function(i, el) {
    animateElement(el);
  });

  videoContent.each(function(i, el) {
    animateElement(el);
  });

  pricings.each(function(i, el) {
    animateElement(el);
  });
});
