
function download(strData, strFileName, strMimeType) {
  var D = document,
      A = arguments,
      a = D.createElement("a"),
      d = A[0],
      n = A[1],
      t = A[2] || "text/plain";

  //build download link:
  a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);


  if (window.MSBlobBuilder) { // IE10
      var bb = new MSBlobBuilder();
      bb.append(strData);
      return navigator.msSaveBlob(bb, strFileName);
  } /* end if(window.MSBlobBuilder) */



  if ('download' in a) { //FF20, CH19
      a.setAttribute("download", n);
      a.innerHTML = "downloading...";
      D.body.appendChild(a);
      setTimeout(function() {
          var e = D.createEvent("MouseEvents");
          e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          a.dispatchEvent(e);
          D.body.removeChild(a);
      }, 66);
      return true;
  }; /* end if('download' in a) */



  //do iframe dataURL download: (older W3)
  var f = D.createElement("iframe");
  D.body.appendChild(f);
  f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
  setTimeout(function() {
      D.body.removeChild(f);
  }, 333);
  return true;
}
let texta=document.getElementById("texta")

let teile1=document.getElementById("teile1")
let teile2=document.getElementById("teile2")
let teile3=document.getElementById("teile3")
let teile4=document.getElementById("teile4")
let a=1

teile1.onclick=function(){
teile1.style.pointerEvents = "none"
 teile1.style.borderRight="3px solid red"
 

 let texta=document.getElementById("texta").value+="\nSeitenwand Links";
 a=0
}
teile2.onclick=function(){
  teile2.style.pointerEvents = "none"
  teile2.style.borderRight="3px solid red"
a=0
 let texta=document.getElementById("texta").value+="\nSeitenwand Rechts";
 }
 teile3.onclick=function(){
  teile3.style.pointerEvents = "none"
  teile3.style.borderRight="3px solid red"
  a=0
 let texta=document.getElementById("texta").value+="\nHEBEL";
 }
 teile4.onclick=function(){
  teile4.style.pointerEvents = "none"
  teile4.style.borderRight="3px solid red"
  a=0
 let texta=document.getElementById("texta").value+="\nARM";
 }
function Test2(){
  let texta=document.getElementById("texta").value="";
  teile1.style.pointerEvents = "auto"
  teile2.style.pointerEvents = "auto"
  teile3.style.pointerEvents = "auto"
  teile4.style.pointerEvents = "auto"
  teile3.style.border="none"
 teile4.style.border="none"
 teile2.style.border="none"
 teile1.style.border="none"
}

function red(){


if (a==0){
 let texta=document.getElementById("texta").value+=" -RED";
 a=1
}
}
  
  function blue(){
    if (a==0){
 let   texta=document.getElementById("texta").value+=" -BLUE";
  a=1
    }
    }
    function purple(){
      if (a==0){
    let  texta=document.getElementById("texta").value+=" -PURPLE";
    a=1
      }
      }
      function orange(){
        if (a==0){
      let  texta=document.getElementById("texta").value+=" -ORANGE";
      a=1
        }
      
        }
        function white(){
          if (a==0){
        let  texta=document.getElementById("texta").value+=" -WHITE";
        a=1
          }
          }
          function yellow(){
            if (a==0){
          let texta=document.getElementById("texta").value+=" -YELLOW";
          a=1
            }
           
            }
            function green(){
              if (a==0){
            let texta=document.getElementById("texta").value+=" -GREEN";
            a=1
              }
             
              }
              function black(){
                if (a==0){
              let texta=document.getElementById("texta").value+=" -BLACK";
              a=1
                }
               
                }
              
            function Test(){
          
              console.log(texta)
            
              download( texta.value,'test.txt');
              window.open("Dodan.html","_blank")
            }
            



