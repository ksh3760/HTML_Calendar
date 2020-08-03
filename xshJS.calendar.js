// 파일명 : xshJS.calendar.js
function Calendar(opt){
    this.options = opt || {
        date: new Date()
    };
}

Calendar.prototype.draw = function(id) {
    var date = this.options.date;
    
    var year = date.getFullYear();
    var month = date.getMonth();
    var html = "";
    
    var calendarDates = date.getCalendarDates();
    //console.log(date.getCalendarDates());
    // html 생성
    html = '<table>\
    <caption>\
        <span onclick="new Date('+year+','+(month-1)+',1).drawCalendar(\''+id+'\');">이전달</span>\
        '+year+'년 '+(month+1)+'월\
        <span onclick="new Date('+year+','+(month+1)+',1).drawCalendar(\''+id+'\');">다음달</span>\
    </caption>\
    <tr>\
        <th>일</th>\
        <th>월</th>\
        <th>화</th>\
        <th>수</th>\
        <th>목</th>\
        <th>금</th>\
        <th>토</th>\
    </tr>';
    for(let i=0; i<calendarDates.length;i++){
        var dayindex = calendarDates[i].date.getDay();
        if(dayindex == 0){
            html += '<tr>';
        }

        var today = calendarDates[i].date.isToday() ? ' today' : '';
        html += '<td class="' + calendarDates[i].tag + today + '">' + calendarDates[i].date.getDate() + '(' + calendarDates[i].date.getStrDay('en-long') + ')' + '</td>';
        if(dayindex == 6){
            html += '</tr>';
        }
    }
    html += '</table>';
    
    document.getElementById(id.replace('#','')).innerHTML = html;
    
}