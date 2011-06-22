/**
  * Tabify – Tabbed content with ease 
  * Version: 1.5
  * Project Page:  http://www.unwrongest.com/projects/tabify/
  * Requirements:  jQuery
  * Usage Example: http://www.unwrongest.com/projects/tabify/
  *
  * Author:  Jan Jarfalk
  * 
  * License:
  *
 **/ 
(function($){$.fn.extend({tabify:function(){function getHref(a){hash=$(a).find('a').attr('href');if(hash)return hash.substring(0,hash.length-4);else return false}function setcurrent(a){$(a).addClass('current');if(getHref(a))$(getHref(a)).show();else return false;$(a).siblings('li').each(function(){$(this).removeClass('current');$(getHref(this)).hide()})}return this.each(function(){var a=this;$(this).find('li a').each(function(){$(this).attr('href',$(this).attr('href')+'-tab')});function handleHash(){if(location.hash)setcurrent($(a).find('a[href='+location.hash+']').parent())}if(location.hash)handleHash();setInterval(handleHash,100);$(this).find('li').each(function(){if($(this).hasClass('current'))$(getHref(this)).show();else $(getHref(this)).hide()})})}})})(jQuery);