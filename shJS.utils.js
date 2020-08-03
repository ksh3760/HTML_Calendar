// file name : calendarJS.utils.js
// 자주사용될 함수들의 모음

// Date 객체 또는 년,월,일을 전달받아서 
// 오늘이면 true, 
// 그렇지 않으면 false를 반환하는 함수
// 사용방법 : 
// isToday(Date 객체);
// isToday(년, 월, 일);
function isToday(){
    var today = new Date();
    var sday = new Date();
    var argc = arguments.length;
    if (argc == 1 && arguments[0] instanceof Date){
        sday = arguments[0];
    } else if (argc == 3) {
        sday = new Date(arguments[0], arguments[1], arguments[2]);
    } else {
        throw new Error('사용법을 확인 하세요.(인자는 Date 객체이거나 년, 월, 일로 사용해야 합니다.)');
    }
    return (today.getFullYear() == sday.getFullYear()) 
        && (today.getMonth() == sday.getMonth()) 
        && (today.getDate() == sday.getDate());
}