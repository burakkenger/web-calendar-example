$(document).ready(function(){

    var date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const renderCalendar = () => {

    const months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
    date.setDate(1);
    $("#set_month").text(months[date.getMonth()]);
    
    const last_day = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prev_last_day = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    var fdom_w_index = date.getDay() - 1;
    if(fdom_w_index == (-1)) fdom_w_index = 6;

    var ldom_w_index = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    var nextMonthDays = 7 - ldom_w_index;

    $("#date").text(new Date().toLocaleDateString('tr-TR', options));
    
    var days = "";
    for(let i = fdom_w_index; i > 0; i--)
    {
        days += `<div class="foreign-days">${(prev_last_day - i) + 1}</div>`;
    }

    for(let i = 1; i <= last_day; i++)
    {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {days += `<div class="today">${i}</div>`;} 
        else {days += `<div class="day">${i}</div>`;}
    }

    if(nextMonthDays != 7)
    for(let i = 1; i <= nextMonthDays; i++)
    {
        days += `<div class="foreign-days">${i}</div>`;
    }

    $("#days").html(days);
    $("#year").text(date.getFullYear());
    } 

    var monthSelection = (monthIndex) => {
        date.setMonth(monthIndex);
        renderCalendar();
    }

    $("#left_arrow").on( "click", function() {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });
    
    $("#right_arrow").click(function() { 
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });
    
    $("#set_month").click(function() { 
        $("#month-menu").css("display", "inline");
        if($('#calendar').height() == 453.547)
        {
            $(".m-selection").css("margin-top", "11px");
        }
        else
        {
            $(".m-selection").css("margin-top", "23px");
        }
        $("#year").text(date.getFullYear());
        renderCalendar();
    });

    $(".m-selection").click(function() {
        monthSelection($(".m-selection").index(this));
        $("#month-menu").css("display", "none");
        renderCalendar();
    });

    $("#left_arrow2").click(function() { 
        date.setFullYear(date.getFullYear() - 1);
        $("#year").text(date.getFullYear());
    });

    $("#right_arrow2").click(function() { 
        date.setFullYear(date.getFullYear() + 1);
        $("#year").text(date.getFullYear());
    });

    renderCalendar()
});

