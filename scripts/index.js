var text_field_prevent=document.getElementById('text_field');
var searchbox_prevent=document.getElementById('searchbox');
var button_clear=document.getElementById('button');


document.addEventListener('click', function(event) {
  var isClickInside = text_field_prevent.contains(event.target);

  if (!isClickInside) {
    searchbox_prevent.className = "";
  }else{searchbox_prevent.className = "prevent";}
});


searchbox_prevent.onclick=function(){
  text_field_prevent.focus();
};


button_clear.style.visibility="hidden";

text_field_prevent.oninput = function(){
if (text_field_prevent.value ==''){
  button_clear.style.visibility="hidden";
}else{
  button_clear.style.visibility="visible";
  
};};

button_clear.onclick = function clearfields (){
  text_field_prevent.value="";
  button_clear.style.visibility="hidden";
};

document.getElementById('button1').onclick=function(){
  location.href="https://grubyrubel.github.io/google_homepage/search";
};

document.getElementById('button2').onclick=function(){
  location.href="https://www.google.com/doodles/";
};

document.getElementById('acount').onclick=function(){
  location.href="https://github.com/grubyrubel";
};

document.getElementById('top_buttons1').onclick=function(){
  location.href="https://accounts.google.com/";
};

document.getElementById('top_buttons2').onclick=function(){
  location.href="https://www.google.pl/imghp?hl=en&tab=wi&ogbl";
};

document.getElementById('advertising').onclick=function(){
  location.href="https://ads.google.com/";
};

document.getElementById('business').onclick=function(){
  location.href="https://www.google.com/services/";
};

document.getElementById('about').onclick=function(){
  location.href="https://about.google/";
};

document.getElementById('how_search_works').onclick=function(){
  location.href="https://www.google.com/search/howsearchworks/";
};

document.getElementById('privacy').onclick=function(){
  location.href="https://policies.google.com/privacy";
};

document.getElementById('terms').onclick=function(){
  location.href="https://policies.google.com/terms";
};

document.getElementById('settings').onclick=function(){
  location.href="https://www.google.com/preferences";
};