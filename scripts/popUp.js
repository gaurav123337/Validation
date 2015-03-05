/**
 * Created by gaurav on 13/2/15.
 */

$(document).ready( function() {
  //$("#link,#closeLink,#testConnection").click( function () { popup('popUpDiv')});
  $("#link,#closeLink").click( function () { popup('popUpDiv')});
});
function toggle(div_id,message) {
  var el = document.getElementById(div_id);
  //el.style.display = 'none'
  if(el.id !== "popUpDiv"){
    if ( el.style.display == 'none' ) {	el.style.display = 'block';
    }
    else{
      el.style.display = 'none';
    }
  }
  else if(el.id == "popUpDiv"){
    if ( el.style.display == 'none' ){
      if($("#"+el.id).children().length>0){
        $("#"+el.id).children('p').text(message);
        el.style.display = 'block';
      }
    }
    else if ( el.style.display == 'block' ){
      //el.style.display = 'none';
      $("#"+el.id).css("top", "400px").animate({top: 50}, 200);
      $("#"+el.id).hide("slow");
    }
  }
}
function blanket_size(popUpDivVar) {
  if (typeof window.innerWidth != 'undefined') {
    viewportheight = window.innerHeight;
  } else {
    viewportheight = document.documentElement.clientHeight;
  }
  if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
    blanket_height = viewportheight;
  } else {
    if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
      blanket_height = document.body.parentNode.clientHeight;
    } else {
      blanket_height = document.body.parentNode.scrollHeight;
    }
  }
  var blanket = document.getElementById('blanket');
  blanket.style.height = blanket_height + 'px';
  var popUpDiv = document.getElementById(popUpDivVar);
  //popUpDiv_height=blanket_height/2-200;//200 is half popup's height
  popUpDiv_height=blanket_height-50;//200 is half popup's height
  //popUpDiv.style.top = popUpDiv_height + 'px';
  popUpDiv.style.top = -(popUpDiv_height-650) + 'px';

}
function window_pos(popUpDivVar) {
  if (typeof window.innerWidth != 'undefined') {
    //viewportwidth = window.innerHeight;
    viewportwidth = window.outerHeight;
  } else {
    viewportwidth = document.documentElement.clientHeight;
  }
  if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
    window_width = viewportwidth;
  } else {
    if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
      window_width = document.body.parentNode.clientWidth;
    } else {
      window_width = document.body.parentNode.scrollWidth;
    }
  }
  var popUpDiv = document.getElementById(popUpDivVar);
  //window_width=window_width/2-200;//200 is half popup's width
  window_width=window_width/2-200;//200 is half popup's width
  //popUpDiv.style.left = window_width + 'px';
}
function popup(windowname,message) {
  blanket_size(windowname);
  window_pos(windowname);
  toggle('blanket','');
  toggle(windowname,message);
}




/*function toggle(div_id) {
  var el = document.getElementById(div_id);
  if ( el.style.display == 'none' ) {	el.style.display = 'block';}
  else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar) {
  if (typeof window.innerWidth != 'undefined') {
    viewportheight = window.innerHeight;
  } else {
    viewportheight = document.documentElement.clientHeight;
  }
  if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
    blanket_height = viewportheight;
  } else {
    if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
      blanket_height = document.body.parentNode.clientHeight;
    } else {
      blanket_height = document.body.parentNode.scrollHeight;
    }
  }
  var blanket = document.getElementById('blanket');
  blanket.style.height = blanket_height + 'px';
  var popUpDiv = document.getElementById(popUpDivVar);
  popUpDiv_height=blanket_height/2-200;//200 is half popup's height
  popUpDiv.style.top = popUpDiv_height + 'px';
}
function window_pos(popUpDivVar) {
  if (typeof window.innerWidth != 'undefined') {
    viewportwidth = window.innerHeight;
  } else {
    viewportwidth = document.documentElement.clientHeight;
  }
  if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
    window_width = viewportwidth;
  } else {
    if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
      window_width = document.body.parentNode.clientWidth;
    } else {
      window_width = document.body.parentNode.scrollWidth;
    }
  }
  var popUpDiv = document.getElementById(popUpDivVar);
  window_width=window_width/2-200;//200 is half popup's width
  popUpDiv.style.left = window_width + 'px';
}
function popup(windowname) {
  blanket_size(windowname);
  window_pos(windowname);
  toggle('blanket');
  toggle(windowname);
}*/
