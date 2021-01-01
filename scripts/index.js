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
  location.href="search.html";
};

document.getElementById('acount').onclick=function(){
  location.href="https://github.com/grubyrubel";
};
