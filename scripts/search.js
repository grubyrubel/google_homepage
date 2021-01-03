var text_field_prevent=document.getElementById('text_field');
var searchbox_prevent=document.getElementById('searchbox');
var button_clear=document.getElementById('button');
var bar_clear=document.getElementById('bar');
var magnifier=document.getElementById('magnifier');
var magnifier_blue=document.getElementById('magnifier_blue');

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

    var i=1;
    var k;
    
    
    document.getElementById('o1i').src="images/ored.png";
    document.getElementById('o1').style="color:black";
    document.getElementById('o1').className="";
    document.getElementById('pre').style.visibility="hidden";
    document.getElementById('nex').style.visibility="visible";
    
        document.getElementById('o1').onclick=function(){
          document.getElementById('o1i').src="images/ored.png";
          document.getElementById('o1').style="color:black";
          document.getElementById('o1').className="";
          document.getElementById('pre').style.visibility="hidden";
          document.getElementById('nex').style.visibility="visible";
          for(k=1; k<11; k++){
            if(k!=1){
              document.getElementById('o'+k+'i').src="images/oyellow.png";
              document.getElementById('o'+k).style="color:#4285f4";
              document.getElementById('o'+k).className="ooo1";
            };
          };
          i=1;
        }; 

        document.getElementById('o2').onclick=function(){
          document.getElementById('o2i').src="images/ored.png";
          document.getElementById('o2').style="color:black";
          document.getElementById('o2').className="";
          document.getElementById('pre').style.visibility="visible";
          document.getElementById('nex').style.visibility="visible";
          for(k=1; k<11; k++){
            if(k!=2){
              document.getElementById('o'+k+'i').src="images/oyellow.png";
              document.getElementById('o'+k).style="color:#4285f4";
              document.getElementById('o'+k).className="ooo1";
            };
          };
          i=2;
        };  

        document.getElementById('o3').onclick=function(){
          document.getElementById('o3i').src="images/ored.png";
          document.getElementById('o3').style="color:black";
          document.getElementById('o3').className="";
          document.getElementById('pre').style.visibility="visible";
          document.getElementById('nex').style.visibility="visible";
          for(k=1; k<11; k++){
            if(k!=3){
              document.getElementById('o'+k+'i').src="images/oyellow.png";
              document.getElementById('o'+k).style="color:#4285f4";
              document.getElementById('o'+k).className="ooo1";
            };
          };
          i=3;
        }; 

        document.getElementById('o4').onclick=function(){
          document.getElementById('o4i').src="images/ored.png";
          document.getElementById('o4').style="color:black";
          document.getElementById('o4').className="";
          document.getElementById('pre').style.visibility="visible";
          document.getElementById('nex').style.visibility="visible";
          for(k=1; k<11; k++){
            if(k!=4){
              document.getElementById('o'+k+'i').src="images/oyellow.png";
              document.getElementById('o'+k).style="color:#4285f4";
              document.getElementById('o'+k).className="ooo1";
            };
          };
          i=4;
        }; 

        document.getElementById('o5').onclick=function(){
          document.getElementById('o5i').src="images/ored.png";
          document.getElementById('o5').style="color:black";
          document.getElementById('o5').className="";
          document.getElementById('pre').style.visibility="visible";
          document.getElementById('nex').style.visibility="visible";
          for(k=1; k<11; k++){
            if(k!=5){
              document.getElementById('o'+k+'i').src="images/oyellow.png";
              document.getElementById('o'+k).style="color:#4285f4";
              document.getElementById('o'+k).className="ooo1";
            };
          };
          i=5;
        }; 

        document.getElementById('o6').onclick=function(){
          document.getElementById('o6i').src="images/ored.png";
          document.getElementById('o6').style="color:black";
          document.getElementById('o6').className="";
          document.getElementById('pre').style.visibility="visible";
          document.getElementById('nex').style.visibility="visible";
          for(k=1; k<11; k++){
            if(k!=6){
              document.getElementById('o'+k+'i').src="images/oyellow.png";
              document.getElementById('o'+k).style="color:#4285f4";
              document.getElementById('o'+k).className="ooo1";
            };
          };
          i=6;
        }; 

        document.getElementById('o7').onclick=function(){
          document.getElementById('o7i').src="images/ored.png";
          document.getElementById('o7').style="color:black";
          document.getElementById('o7').className="";
          document.getElementById('pre').style.visibility="visible";
          document.getElementById('nex').style.visibility="visible";
          for(k=1; k<11; k++){
            if(k!=7){
              document.getElementById('o'+k+'i').src="images/oyellow.png";
              document.getElementById('o'+k).style="color:#4285f4";
              document.getElementById('o'+k).className="ooo1";
            };
          };
          i=7;
        }; 

        document.getElementById('o8').onclick=function(){
          document.getElementById('o8i').src="images/ored.png";
          document.getElementById('o8').style="color:black";
          document.getElementById('o8').className="";
          document.getElementById('pre').style.visibility="visible";
          document.getElementById('nex').style.visibility="visible";
          for(k=1; k<11; k++){
            if(k!=8){
              document.getElementById('o'+k+'i').src="images/oyellow.png";
              document.getElementById('o'+k).style="color:#4285f4";
              document.getElementById('o'+k).className="ooo1";
            };
          };
          i=8;
        }; 

        document.getElementById('o9').onclick=function(){
          document.getElementById('o9i').src="images/ored.png";
          document.getElementById('o9').style="color:black";
          document.getElementById('o9').className="";
          document.getElementById('pre').style.visibility="visible";
          document.getElementById('nex').style.visibility="visible";
          for(k=1; k<11; k++){
            if(k!=9){
              document.getElementById('o'+k+'i').src="images/oyellow.png";
              document.getElementById('o'+k).style="color:#4285f4";
              document.getElementById('o'+k).className="ooo1";
            };
          };
          i=9;
        }; 

        document.getElementById('o10').onclick=function(){
          document.getElementById('o10i').src="images/ored.png";
          document.getElementById('o10').style="color:black";
          document.getElementById('o10').className="";
          document.getElementById('pre').style.visibility="visible";
          document.getElementById('nex').style.visibility="hidden";
          for(k=1; k<11; k++){
            if(k!=10){
              document.getElementById('o'+k+'i').src="images/oyellow.png";
              document.getElementById('o'+k).style="color:#4285f4";
              document.getElementById('o'+k).className="ooo1";
            };
          };
          i=10;
        }; 


    document.getElementById('nex').onclick=function(){
      var iplus=i+1;
      if(i < 10 && i>0){
      document.getElementById('o'+i+'i').src="images/oyellow.png";
      document.getElementById('o'+iplus+'i').src="images/ored.png";
      document.getElementById('o'+iplus).style="color:black";
      document.getElementById('o'+iplus).className="";
      document.getElementById('o'+i).style="color:#4285f4";
      document.getElementById('o'+i).className="ooo1";
      if(i==9){
        document.getElementById('nex').style.visibility="hidden";
      };
      if(i==1){
        document.getElementById('pre').style.visibility="visible";
      };
      i++;
      };
    };

    document.getElementById('gle').onclick=function(){
      var iplus=i+1;
      if(i < 10 && i>0){
      document.getElementById('o'+i+'i').src="images/oyellow.png";
      document.getElementById('o'+iplus+'i').src="images/ored.png";
      document.getElementById('o'+iplus).style="color:black";
      document.getElementById('o'+iplus).className="";
      document.getElementById('o'+i).style="color:#4285f4";
      document.getElementById('o'+i).className="ooo1";
      if(i==9){
        document.getElementById('nex').style.visibility="hidden";
      };
      if(i==1){
        document.getElementById('pre').style.visibility="visible";
      };
      i++;
      };
    };

    document.getElementById('pre').onclick=function(){
      var iminus=i-1;
      if(i > 1 && i<11){
      document.getElementById('o'+i+'i').src="images/oyellow.png";
      document.getElementById('o'+iminus+'i').src="images/ored.png";
      document.getElementById('o'+iminus).style="color:black";
      document.getElementById('o'+iminus).className="";
      document.getElementById('o'+i).style="color:#4285f4";
      document.getElementById('o'+i).className="ooo1";
      if(i==2){
        document.getElementById('pre').style.visibility="hidden";
      };
      if(i==10){
        document.getElementById('nex').style.visibility="visible";
      };
      i--;
      };
    };

    document.getElementById('G').onclick=function(){
      var iminus=i-1;
      if(i > 1 && i<11){
      document.getElementById('o'+i+'i').src="images/oyellow.png";
      document.getElementById('o'+iminus+'i').src="images/ored.png";
      document.getElementById('o'+iminus).style="color:black";
      document.getElementById('o'+iminus).className="";
      document.getElementById('o'+i).style="color:#4285f4";
      document.getElementById('o'+i).className="ooo1";
      if(i==2){
        document.getElementById('pre').style.visibility="hidden";
      };
      if(i==10){
        document.getElementById('nex').style.visibility="visible";
      };
      i--;
      };
    };

document.getElementById('pre').onmouseover=function(){
  if(i!=1){
    document.getElementById('pre').style="text-decoration:underline";
  };
};

document.getElementById('G').onmouseover=function(){
  if(i!=1){
    document.getElementById('pre').style="text-decoration:underline";
  };
};

document.getElementById('pre').onmouseout=function(){
  if(i!=1){
    document.getElementById('pre').style="text-decoration:none";
  };
};

document.getElementById('G').onmouseout=function(){
  if(i!=1){
    document.getElementById('pre').style="text-decoration:none";
  };
};

document.getElementById('nex').onmouseover=function(){
  if(i!=10){
    document.getElementById('nex').style="text-decoration:underline";
  };
};

document.getElementById('gle').onmouseover=function(){
  if(i!=10){
    document.getElementById('nex').style="text-decoration:underline";
  };
};

document.getElementById('nex').onmouseout=function(){
  if(i!=10){
    document.getElementById('nex').style="text-decoration:none";
  };
};

document.getElementById('gle').onmouseout=function(){
  if(i!=10){
    document.getElementById('nex').style="text-decoration:none";
  };
};
    