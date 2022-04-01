

// 아이콘 선택하면 꾹 눌리고 다음으로 버튼 활성화
function select_icon() {
    var btns = document.getElementsByClassName("btn"); 

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            if(current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active"; // 선택되면 클래스 이름 active 추가 
        });
    }

    // 다음으로 버튼 활성화 
    document.getElementById("next_btn").disabled = false;
}


// 다음으로 버튼 이벤트 처리 
function to_letter() {
    window.location.href = 'letter.html'
}
