

function readFile(event){
    var reader=new FileReader();

    reader.onload=function(e){
        var preview=document.querySelector("#preview");
        preview.src=e.target.result;
    };
       reader.readAsDataURL(event.target.files[0]);
}

function duplicate_check(){
    // 닉네임을 변경했을 경우
    $('.author_input').change(function () {
            $('#id_check_success').hide();
            $('.duplicate_button').show();
            $('.author_input').attr("check_result", "fail");
    })

    // do_duplicate_check 함수에 json 전달
    let author_input = document.getElementById("uid");
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
    // 닉네임 중복 체크
    if ($('.author_input').attr("check_result") == "fail"){
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