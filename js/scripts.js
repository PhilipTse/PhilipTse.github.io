

  

//banner list ticker
$(document).ready(function(){
$("ul#aboutme").list_ticker({speed:5000,effect:"fade"})
});
(function($){$.fn.list_ticker=function(options){var defaults={speed:5000,effect:"fade"};var options=$.extend(defaults,options);return this.each(function(){var obj=$(this);var list=obj.children();list.not(":first").hide();setInterval(function(){list=obj.children();list.not(":first").hide();var first_li=list.eq(0);var second_li=list.eq(1);if(options.effect=="fade")first_li.fadeOut(function(){second_li.fadeIn();first_li.remove().appendTo(obj)})},options.speed)})}})(jQuery);
//end

//header Parallax image
(function($){
	 var Picture = (function(){
		 var parent = {};
		 var _window,_picture;
		 parent.init = function(){
			_window = $(window);
			_picture = $(".picture");
			parent.delegate();
		}
		parent.delegate = function(){
			_window.on("scroll",parent.scrollPos);
			_window.on("resize",parent.scrollPos);
		}
		parent.scrollPos = function(){
			if($(window).width()>754){
				var scroll = Math.max(0,_window.scrollTop()-200);
				scroll = Math.min(1,scroll/($(window).height()-200));
				scroll = 1 - scroll;
				_picture.css({
					backgroundPosition: "50% "+(scroll*100)+"%"
				});
			}else{
				_picture.css("background-position","");
			}
		}
		return parent;
	})();
	$(document).ready(Picture.init);
	})(jQuery)
//end	.
