

function readFile(event){
    var reader=new FileReader();

    reader.onload=function(e){
        var preview=document.querySelector("#preview");
        preview.src=e.target.result;
    };
       reader.readAsDataURL(event.target.files[0]);
}


function duplicate_check(){
    alert('클릭 이벤트 발생');
    const author = document.getElementById("uid").value;
    console.log(author);

    // do_duplicate_check 함수 연결
    /*
    $.ajax({
        url: "{% url 'letter_writing:do_duplicate_check' %}",
        data: {'author': author},
        datatype: 'json',

        success: function (data) {
            if (data['duplicate'] == "fail") {
            return false;
          } else {
            return ;
          }
        }
      });
     */

}