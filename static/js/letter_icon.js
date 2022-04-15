

// 아이콘 선택하면 꾹 눌리고 다음으로 버튼 활성화
function select_icon() {
    window.location.href = '/'
    
    var btns = document.getElementsByClassName("btn");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            // 선택된 btn id값 전달 (미완)
            var btnAttribute = this.getAttribute("id");
            console.log(btnAttribute)

            //         var current = document.getElementsByClassName("active");
            //         console.log(current)
            //         if(current.length > 0) {
            //             current[0].className = current[0].className.replace(" active", "");
            //
            //     }
            //         var btnAttribute = this.getAttribute("id");
            //         console.log(btnAttribute)
            //         // this.className += " active"; // 선택되면 클래스 이름 active 추가
        });
    }

    // 다음으로 버튼 활성화 
    //document.getElementById("next_btn").disabled = false;
}