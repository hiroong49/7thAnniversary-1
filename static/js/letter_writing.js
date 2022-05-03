

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

function duplicate_check(){
    // 닉네임을 변경했을 경우
    $('.author_input').change(function () {
            $('#id_check_success').hide();
            $('.duplicate_button').show();
            $('.author_input').attr("check_result", "fail");
    })

    // do_duplicate_check 함수에 json 전달
    var author_input = document.getElementById("uid");
    $.ajax({
        url: "/do_duplicate_check",
        data: {'author': author_input.value},
        datatype: 'json',

        success: function (data) {
            if (data['duplicate'] == "fail") {
                alert("이미 존재하는 닉네임 입니다.");
                author_input.focus();
                return;
            } else {
                alert("사용 가능한 닉네임 입니다.");
                $('.author_input').attr("check_result", "success");
                $('#id_check_success').show();
                $('.duplicate_button').hide();
                return;
            }
        }
    });
}

function submit_check() {
    var author = document.getElementById("uid");
    var photo = document.getElementById("uploadFile");
    var body = document.getElementById("content");
    console.log(photo.value)

    if (author.value == ""){
        alert("아이디를 입력하세요.");
        author.focus();
        return false;
    }

    else if (photo.value == ""){
        alert("사진을 첨부하세요.");
        photo.focus();
        return false;
    }

    else if (body.value == ""){
        alert("메세지를 입력하세요.");
        body.focus();
        return false;
    }

    // 닉네임 중복 체크
    else if ($('.author_input').attr("check_result") == "fail"){
        alert("닉네임 중복체크를 해주시기 바랍니다.");
        $('.username_input').focus();
        return false;
    }
    // 폼 submit
    else if ($('.author_input').attr("check_result") == "success") {
        document.getElementById('frm').submit();
        return false;
    }
}

