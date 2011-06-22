/**
  * Accordion – Super simple javascript accordion
  * Version: 1.3
  * Project Page: http://www.unwrongest.com/projects/accordion/
  * Requirements: jQuery
  * Usage Example: http://www.unwrongest.com/projects/accordion/
  *
  * Author: Jan Jarfalk
  * 
  * License:
  *
 **/ 
(function(d){d.fn.extend({accordion:function(){return this.each(function(){var $ul=$(this);if($ul.data('accordiated'))return false;$.each($ul.find('ul, li>div'),function(){$(this).data('accordiated',true);$(this).hide()});$.each($ul.find('a'),function(){$(this).click(function(e){activate(this);return void(0)})});var c=(location.hash)?$ul.find('a[href='+location.hash+']')[0]:'';if(c){activate(c,'toggle');$(c).parents().show()}function activate(a,b){$(a).parent('li').toggleClass('current').siblings().removeClass('current').children('ul, div').slideUp('fast');$(a).siblings('ul, div')[(b||'slideToggle')]((!b)?'fast':null)}})}})})(jQuery);