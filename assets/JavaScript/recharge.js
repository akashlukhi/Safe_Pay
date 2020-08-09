function validate() {


  var phn = document.getElementById("phone").value;
  var patt = /^\d{10}$/;
  var chkphn = patt.test(phn);

  if (chkphn == true) {
    window.location.href = "index.html";
  }
  else { }
}

function phonevalidate() {
  var phn = document.getElementById("phone").value;
  var patt = /^\d{10}$/;
  var chkphn = patt.test(phn);

  // if(chkphn == false)
  // {
  //   var tag = document.createElement("p");
  //   var text = document.createTextNode("Mobile Number must be 10 digit*" );
  //   tag.style.fontSize="10pt";
  //   tag.style.color="red";
  //   tag.appendChild(text);
  //   var element = document.getElementById("phone-p");
  //   element.removeChild(element.childNodes[2]);
  //   element.appendChild(tag);
  // }
  // else{
  //   var element = document.getElementById("phone-p").innerHTML="<p></p>";
  // }
  if (chkphn == false) {
    document.getElementById("phone-p").style.removeProperty("display");
  }
  else {
    document.getElementById("phone-p").style.setProperty("display", "none");
  }
}
