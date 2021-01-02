var text_field_prevent=document.getElementById('text_field');
var searchbox_prevent=document.getElementById('searchbox');
var button_clear=document.getElementById('button');
var bar_clear=document.getElementById('bar');
var magnifier=document.getElementById('magnifier');
var magnifier_blue=document.getElementById('magnifier_blue');

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

document.getElementById('acount').onclick=function(){
  location.href="https://github.com/grubyrubel";
};

document.getElementById('first_label').className="bar_lower1";
document.getElementById('b1').src="images/all.png";

document.getElementById('first_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower1";
    document.getElementById('second_label').className="bar_lower";
    document.getElementById('third_label').className="bar_lower";
    document.getElementById('fiveth_label').className="bar_lower";
    document.getElementById('b1').src="images/all.png";
    document.getElementById('b2').src="images/images.png";
    document.getElementById('b3').src="images/videos.png";
    document.getElementById('b5').src="images/news.png";
};

document.getElementById('second_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower";
    document.getElementById('second_label').className="bar_lower1";
    document.getElementById('third_label').className="bar_lower";
    document.getElementById('fiveth_label').className="bar_lower";
    document.getElementById('b1').src="images/allb.png";
    document.getElementById('b2').src="images/imagesk.png";
    document.getElementById('b3').src="images/videos.png";
    document.getElementById('b5').src="images/news.png";
};

document.getElementById('third_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower";
    document.getElementById('second_label').className="bar_lower";
    document.getElementById('third_label').className="bar_lower1";
    document.getElementById('fiveth_label').className="bar_lower";
    document.getElementById('b1').src="images/allb.png";
    document.getElementById('b2').src="images/images.png";
    document.getElementById('b3').src="images/videosk.png";
    document.getElementById('b5').src="images/news.png";
};

document.getElementById('fiveth_label').onclick=function(){
    document.getElementById('first_label').className="bar_lower";
    document.getElementById('second_label').className="bar_lower";
    document.getElementById('third_label').className="bar_lower";
    document.getElementById('fiveth_label').className="bar_lower1";
    document.getElementById('b1').src="images/allb.png";
    document.getElementById('b2').src="images/images.png";
    document.getElementById('b3').src="images/videos.png";
    document.getElementById('b5').src="images/newsk.png";
};




document.getElementById('google_logo').onclick=function(){
  location.href="index.html";
};

document.getElementById('r1').onclick=function(){
  document.getElementById('r1').className="center_part_after";
};

document.getElementById('r2').onclick=function(){
  document.getElementById('r2').className="center_part_after";
};

document.getElementById('r3').onclick=function(){
  document.getElementById('r3').className="center_part_after";
};

document.getElementById('r4').onclick=function(){
  document.getElementById('r4').className="center_part_after";
};

document.getElementById('r5').onclick=function(){
  document.getElementById('r5').className="center_part_after";
};

document.getElementById('r6').onclick=function(){
  document.getElementById('r6').className="center_part_after";
};

document.getElementById('r7').onclick=function(){
  document.getElementById('r7').className="center_part_after";
};

document.getElementById('r8').onclick=function(){
  document.getElementById('r8').className="center_part_after";
};

document.getElementById('r9').onclick=function(){
  document.getElementById('r9').className="center_part_after";
};

document.getElementById('r10').onclick=function(){
  document.getElementById('r10').className="center_part_after";
};

var gora=document.getElementById('nav');
var top_nav_left=document.getElementById('top_nav_left');
var google_logo=document.getElementById('google_logo');



window.onscroll=function(){
  
  if (window.pageYOffset >= "118"){
    
    
    gora.className="nav_hidden";

    top_nav_left.className="top_nav_left1";
    
    google_logo.className="google_logo1";

    text_field_prevent.className="text_field1";

    button_clear.className="button1";

    bar_clear.className="bar1";

    magnifier_blue.className="magnifier_blue1";

    if(magnifier.className=="magnifier-non"){
      magnifier.className="magnifier-non1";
      searchbox_prevent.className="searchbox-non1";
    }else{
      if(magnifier.className=="magnifier-non1"){
        magnifier.className="magnifier-non1";
        searchbox_prevent.className="searchbox-non1";
      }else{
        magnifier.className="magnifier1";
        searchbox_prevent.className="searchbox1";
      };
    };

    document.addEventListener('click', function(event) {
      var isClickInside = text_field_prevent.contains(event.target);
    
      if (!isClickInside) {
        magnifier.className="magnifier-non1";
        searchbox_prevent.className="searchbox-non1";
      }else{
          magnifier.className="magnifier1";
          searchbox_prevent.className="searchbox1";
      }
    });

    text_field_prevent.onkeypress=function(){
      magnifier.className="magnifier1";
      searchbox_prevent.className="searchbox1";
  
    };

    if(window.pageYOffset <= "183"){
      gora.style.marginTop=window.pageYOffset + 'px';
    }else{
      gora.style.marginTop = "183px";
    };

    document.getElementById('top_nav_right').style.visibility="hidden";

  }else{

    gora.className="nav";

    top_nav_left.className="top_nav_left";

    google_logo.className="google_logo";

    text_field_prevent.className="text_field";

    button_clear.className="button";

    bar_clear.className="bar";
   
    magnifier_blue.className="magnifier_blue";

    if(magnifier.className=="magnifier-non1"){
      magnifier.className="magnifier-non";
      searchbox_prevent.className="searchbox-non";
    }else{
      if(magnifier.className=="magnifier-non"){
        magnifier.className="magnifier-non";
        searchbox_prevent.className="searchbox-non";
      }else{
        magnifier.className="magnifier";
        searchbox_prevent.className="searchbox";
      };
    };

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

    text_field_prevent.onkeypress=function(){
      magnifier.className="magnifier";
      searchbox_prevent.className="searchbox";
  
    };

    gora.style.marginTop="0";

    document.getElementById('top_nav_right').style.visibility="visible";
  };
  
};

document.getElementById('second_line1').style="display:none";
document.getElementById('buttonl2').src="images/down.png";

document.getElementById('second_line').onclick = function(){
  if (document.getElementById('second_line1').style.display=="block"){
    document.getElementById('second_line1').style="display:none";
    document.getElementById('buttonl2').src="images/down.png";
  }
  else{ 
    document.getElementById('second_line1').style="display:block";
    document.getElementById('buttonl2').src="images/up.png";
  };};

  document.getElementById('l2').onclick=function(){
    document.getElementById('l2').className="center_part_after";
  };

  document.getElementById('third_line1').style="display:none";
  document.getElementById('buttonl3').src="images/down.png";
  
  document.getElementById('third_line').onclick = function(){
    if (document.getElementById('third_line1').style.display=="block"){
      document.getElementById('third_line1').style="display:none";
      document.getElementById('buttonl3').src="images/down.png";
    }
    else{ 
      document.getElementById('third_line1').style="display:block";
      document.getElementById('buttonl3').src="images/up.png";
    };};
  
    document.getElementById('l3').onclick=function(){
      document.getElementById('l3').className="center_part_after";
    };

  document.getElementById('fourth_line1').style="display:none";
  document.getElementById('buttonl4').src="images/down.png";
  
  document.getElementById('fourth_line').onclick = function(){
    if (document.getElementById('fourth_line1').style.display=="block"){
      document.getElementById('fourth_line1').style="display:none";
      document.getElementById('buttonl4').src="images/down.png";
    }
    else{ 
      document.getElementById('fourth_line1').style="display:block";
      document.getElementById('buttonl4').src="images/up.png";
    };};
  
    document.getElementById('l4').onclick=function(){
      document.getElementById('l4').className="center_part_after";
    };