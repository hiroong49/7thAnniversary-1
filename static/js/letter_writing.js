

function readFile(event){
    var reader=new FileReader();

    reader.onload=function(e){
        var preview=document.querySelector("#preview");
        preview.src=e.target.result;
    };
       reader.readAsDataURL(event.target.files[0]);
}


function readFile(event){
  var reader=new FileReader();
  var container = document.getElementById("img_container");

  reader.onload=function(e){
      var preview=document.querySelector("#preview");
      preview.src=e.target.result;
  };
  reader.readAsDataURL(event.target.files[0]);
  container.style.border = "0px solid rgb(180, 180, 180)";
}

function inputFile(){
  var uploadFile=document.getElementById("uploadFile");
  uploadFile.click();
}
