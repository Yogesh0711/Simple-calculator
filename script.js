var answer=document.getElementById("inputbox");


var num1="";
var num2="";
var operator="";
var posi=0;

/*For clear Inputbox*/
function cle(){
  inputbox.value="";
  num1=0;
  num2=0;
  posi=0;
}

function sign(){
  inputbox.value= inputbox.value*(-1);
}
/*for declaring = function*/
function calculation(x,y,z){
  if(posi==1){
    inputbox.value=x+z;
    posi=0;
  }
  if(posi==2){
    inputbox.value=x-z;
    posi=0;
  }
  if(posi==3){
    inputbox.value=x*z;
    posi=0;
  }
  if(posi==4){
    inputbox.value=x/z;
    posi=0;
  }
  if(posi==5){
    inputbox.value=x%z;
    posi=0;
  } 
}

//for delete the last number
 function del(){
  inputbox.value=inputbox.value.slice(0,-1);
 }


//for print on input box
function number(no){
  inputbox.value +=no;
}

//for operations
function oper(op){
  if(op==1 && posi==0){
    num1=document.getElementById("inputbox").value;
    posi=1;
    inputbox.value=""
  }
  else if(op==2 && posi==0){
    num1=document.getElementById("inputbox").value;
    posi=2;
    inputbox.value=""
  }
  else if(op==3 && posi==0){
    num1=document.getElementById("inputbox").value;
    posi=3;
    inputbox.value=""
  }
  else if(op==4 && posi==0){
    num1=document.getElementById("inputbox").value;
    posi=4;
    inputbox.value=""
  }
  else if(op==5 && posi==0){
    num1=document.getElementById("inputbox").value;
    posi=5;
    inputbox.value=""
  }
  else if(op==1 && (posi==1 || posi==2 || posi==3 || posi==4 || posi==5)){
    num2=document.getElementById("inputbox").value;
    inputbox.value="";
    if(posi==1){
      
      num1=Number(num1)+Number(num2);
      inputbox.value="";
    }
    else if(posi==2){
      
      num1=Number(num1)-Number(num2);
      inputbox.value=""
    }
    else if(posi==3){
      
      num1=Number(num1)*Number(num2);
      inputbox.value=""
    }
    else if(posi==4){
      
      num1=Number(num1)/Number(num2);
      inputbox.value=""
    }
    else if(posi==5){
     
      num1=Number(num1)%Number(num2);
      inputbox.value=""
    }
    posi=1;
  }
  else if(op==2 && (posi==1 || posi==2 || posi==3 || posi==4 || posi==5)){
    num2=document.getElementById("inputbox").value;
    inputbox.value="";
    if(posi==1){
 
      num1=Number(num1)+Number(num2);
      inputbox.value="";
    }
    else if(posi==2){
      
      num1=Number(num1)-Number(num2);
      inputbox.value=""
    }
    else if(posi==3){
     
      num1=Number(num1)*Number(num2);
      inputbox.value=""
    }
    else if(posi==4){
      
      num1=Number(num1)/Number(num2);
      inputbox.value=""
    }
    else if(posi==5){
      
      num1=Number(num1)%Number(num2);
      inputbox.value=""
    }
    posi=2;
  }
  else if(op==3 && (posi==1 || posi==2 || posi==3 || posi==4 || posi==5)){
    num2=document.getElementById("inputbox").value;
    inputbox.value="";
    if(posi==1){
      
      num1=Number(num1)+Number(num2);
      inputbox.value="";
    }
    else if(posi==2){
     
      num1=Number(num1)-Number(num2);
      inputbox.value=""
    }
    else if(posi==3){
      
      num1=Number(num1)*Number(num2);
      inputbox.value=""
    }
    else if(posi==4){
      
      num1=Number(num1)/Number(num2);
      inputbox.value=""
    }
    else if(posi==5){
      
      num1=Number(num1)%Number(num2);
      inputbox.value=""
    }
    posi=3;
  }
 else if(op==4 && (posi==1 || posi==2 || posi==3 || posi==4 || posi==5)){
    num2=document.getElementById("inputbox").value;
    inputbox.value="";
    if(posi==1){
      
      num1=Number(num1)+Number(num2);
      inputbox.value="";
    }
    else if(posi==2){
     
      num1=Number(num1)-Number(num2);
      inputbox.value=""
    }
    else if(posi==3){
      
      num1=Number(num1)*Number(num2);
      inputbox.value=""
    }
    else if(posi==4){
      
      num1=Number(num1)/Number(num2);
      inputbox.value=""
    }
    else if(posi==5){
     
      num1=Number(num1)%Number(num2);
      inputbox.value=""
    }
    posi=4;
  }
  else if(op==5 && (posi==1 || posi==2 || posi==3 || posi==4 || posi==5)){
    num2=document.getElementById("inputbox").value;
    inputbox.value="";
    if(posi==1){
      
      num1=Number(num1)+Number(num2);
      inputbox.value="";
    }
    else if(posi==2){
      
      num1=Number(num1)-Number(num2);
      inputbox.value=""
    }
    else if(posi==3){
      
      num1=Number(num1)*Number(num2);
      inputbox.value=""
    }
    else if(posi==4){
      
      num1=Number(num1)/Number(num2);
      inputbox.value=""
    }
    else if(posi==5){
      
      num1=Number(num1)%Number(num2);
      inputbox.value=""
    }
    posi=5;
  }
}

/*For calling = function*/
function result(){
  num2=document.getElementById("inputbox").value;
  inputbox.value="";
  calculation(Number(num1),posi,Number(num2));
}