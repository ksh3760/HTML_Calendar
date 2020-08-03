// 파일명 : xsh.js
// 코어 자바스크립트를 확장한 라이브러리
// 개발자 : 김수환
// 소스코드는 개발자에게 저작권이 있으며 
// 수정하여 사용하시면 법적인 처벌을 받을수 있습니다.
// 기술지원은 oksh3760@naver.com 으로 문의해 주세요.
String.prototype.sayHello = function() {
    alert(this);
}
Date.prototype.isToday = function(){
    var today = new Date();
    return (today.getFullYear() == this.getFullYear()) 
        && (today.getMonth() == this.getMonth()) 
        && (today.getDate() == this.getDate());
}
Date.prototype.getKorDay = function() {
    var arr = ['일', '월', '화', '수', '목', '금', '토'];
    return arr[this.getDay()];
}
Date.prototype.getKorDay2 = function() {
    return this.getKorDay() + '요일';
}
Date.prototype.getEngDay = function() {
    var arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return arr[this.getDay()];
}
Date.prototype.getEngDay2 = function() {
    var arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return arr[this.getDay()];
}
Date.prototype.getStrDay = function(locale) {
    switch(locale) {
        case 'ko-short':
            return this.getKorDay();
        case 'ko-long':
            return this.getKorDay2();
        case 'en-short':
            return this.getEngDay();
        case 'en-long':
            return this.getEngDay2();
        default:
            return this.getKorDay();
    }
}
Date.prototype.getFirstDay = function(){
    return new Date(this.getFullYear(), this.getMonth(), 1).getDay();
}
Date.prototype.getLastDate = function(){
    return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
}
Date.prototype.getPrevMonthLastDate = function(){
    return new Date(this.getFullYear(), this.getMonth(), 0).getDate();
}
Date.prototype.getCalendarDates = function(){
    var dates = [];
    var year = this.getFullYear();
    var month = this.getMonth();
    
    var thisMonthFirstDay = this.getFirstDay();
    var thisMonthLastDate = this.getLastDate();
    var prevMonthLastDate = this.getPrevMonthLastDate();    
    
    //이전달 데이터 수집
    for(let i=prevMonthLastDate-(thisMonthFirstDay-1); i<=prevMonthLastDate;i++) {
        dates.push({
            date: new Date(year, month-1, i),
            tag: 'prev-month'
        });
    }
    //이번달 데이터 수집
    for(let i=1; i<=thisMonthLastDate;i++) {
        dates.push({
            date: new Date(year, month, i),
            tag: 'this-month'
        });
    }
    //다음달 데이터 수집
    var blank = dates.length % 7;
    if(blank > 0){
        for(let i=blank, j=1; i<7;i++, j++) {
            dates.push({
                date: new Date(year, month+1, j),
                tag: 'next-month'
            });
        }
    }
    // 데이터 수집 끝
    return dates;
}









