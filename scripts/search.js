var text_field_prevent=document.getElementById('text_field');
var searchbox_prevent=document.getElementById('searchbox');
var button_clear=document.getElementById('button');
var bar_clear=document.getElementById('bar');
var magnifier=document.getElementById('magnifier');

document.addEventListener('click', function(event) {
  var isClickInside = text_field_prevent.contains(event.target);

  if (!isClickInside) {
    
    magnifier.className="magnifier-non";
    searchbox_prevent.className="searchbox-non";

  }else{
    
    magnifier.className="magnifier";
    searchbox_prevent.className="searchbox";
  }
});

searchbox_prevent.onclick=function(){
  text_field_prevent.focus();
};

button_clear.style.visibility="hidden";
bar_clear.style.visibility="hidden";

text_field_prevent.oninput = function(){
if (text_field_prevent.value ==''){
  button_clear.style.visibility="hidden";
  bar_clear.style.visibility="hidden";
}else{
  button_clear.style.visibility="visible";
  bar_clear.style.visibility="visible";
};};

button_clear.onclick = function clearfields (){
  text_field_prevent.value="";
  button_clear.style.visibility="hidden";
  bar_clear.style.visibility="hidden";
};

document.getElementById('magnifier_blue').onclick=function(){
  location.href="";
};

document.getElementById('acount').onclick=function(){
  location.href="https://github.com/grubyrubel";
};

document.getElementById('first_label').className="bar_lower1";

document.getElementById('first_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower1";
    document.getElementById('second_label').className="bar_lower";
    document.getElementById('third_label').className="bar_lower";
    document.getElementById('fourth_label').className="bar_lower";
    document.getElementById('fiveth_label').className="bar_lower";
    document.getElementById('sixth_label').className="bar_lower";
    document.getElementById('seventh_label').className="bar_lower";
    document.getElementById('eighth_label').className="bar_lower";
};

document.getElementById('second_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower";
    document.getElementById('second_label').className="bar_lower1";
    document.getElementById('third_label').className="bar_lower";
    document.getElementById('fourth_label').className="bar_lower";
    document.getElementById('fiveth_label').className="bar_lower";
    document.getElementById('sixth_label').className="bar_lower";
    document.getElementById('seventh_label').className="bar_lower";
    document.getElementById('eighth_label').className="bar_lower";

};

document.getElementById('third_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower";
    document.getElementById('second_label').className="bar_lower";
    document.getElementById('third_label').className="bar_lower1";
    document.getElementById('fourth_label').className="bar_lower";
    document.getElementById('fiveth_label').className="bar_lower";
    document.getElementById('sixth_label').className="bar_lower";
    document.getElementById('seventh_label').className="bar_lower";
    document.getElementById('eighth_label').className="bar_lower";

};

document.getElementById('fourth_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower";
    document.getElementById('second_label').className="bar_lower";
    document.getElementById('third_label').className="bar_lower";
    document.getElementById('fourth_label').className="bar_lower1";
    document.getElementById('fiveth_label').className="bar_lower";
    document.getElementById('sixth_label').className="bar_lower";
    document.getElementById('seventh_label').className="bar_lower";
    document.getElementById('eighth_label').className="bar_lower";

};

document.getElementById('fiveth_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower";
    document.getElementById('second_label').className="bar_lower";
    document.getElementById('third_label').className="bar_lower";
    document.getElementById('fourth_label').className="bar_lower";
    document.getElementById('fiveth_label').className="bar_lower1";
    document.getElementById('sixth_label').className="bar_lower";
    document.getElementById('seventh_label').className="bar_lower";
    document.getElementById('eighth_label').className="bar_lower";

};

document.getElementById('sixth_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower";
    document.getElementById('second_label').className="bar_lower";
    document.getElementById('third_label').className="bar_lower";
    document.getElementById('fourth_label').className="bar_lower";
    document.getElementById('fiveth_label').className="bar_lower";
    document.getElementById('sixth_label').className="bar_lower1";
    document.getElementById('seventh_label').className="bar_lower";
    document.getElementById('eighth_label').className="bar_lower";

};

document.getElementById('seventh_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower";
    document.getElementById('second_label').className="bar_lower";
    document.getElementById('third_label').className="bar_lower";
    document.getElementById('fourth_label').className="bar_lower";
    document.getElementById('fiveth_label').className="bar_lower";
    document.getElementById('sixth_label').className="bar_lower";
    document.getElementById('seventh_label').className="bar_lower1";
    document.getElementById('eighth_label').className="bar_lower";

};

document.getElementById('eighth_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower";
    document.getElementById('second_label').className="bar_lower";
    document.getElementById('third_label').className="bar_lower";
    document.getElementById('fourth_label').className="bar_lower";
    document.getElementById('fiveth_label').className="bar_lower";
    document.getElementById('sixth_label').className="bar_lower";
    document.getElementById('seventh_label').className="bar_lower";
    document.getElementById('eighth_label').className="bar_lower1";

};

document.getElementById('google_logo').onclick=function(){
  location.href="https://grubyrubel.github.io/google_homepage";
};