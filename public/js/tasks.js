$(document).ready(function() {
    var getUser = {
      id: sessionStorage.id,
    };
  
    var currentMonth = moment().month();
    var currentYear = moment().year();
  
    
  
  
    $.post("/api/Dates", getUser, function(user) {
      var eventsArr = [];
      console.log(user);
      var dayAgendaDate = moment();
      var tasksInThisMonth = [];
      var deleteTaskTitle = "";

      var taskIndex = 0;
  
      for(var i = 0 ; i < user.Dates.length; i++){
        eventsArr.push({
          id : user.Dates[i].taskID,
          title: user.Dates[i].taskTitle,
          start: moment(user.Dates[i].Year +'-'+ user.Dates[i].Month+'-'+user.Dates[i].Day+' '+user.Dates[i].Hour+':'+user.Dates[i].Minute,"YYYY-MM-DD hh:mm"),
          end: moment(user.Dates[i].Year +'-'+ user.Dates[i].Month+'-'+user.Dates[i].Day+' '+user.Dates[i].Hour+':'+user.Dates[i].Minute,"YYYY-MM-DD hh:mm")
        });
      }
      renderDayAgenda(dayAgendaDate);
      renderCalendar();
  
      console.log(eventsArr);
      function renderCalendar(){
        $('#calendar').fullCalendar('destroy');
  
        $('#calendar').fullCalendar({
          dayClick: function(date, jsEvent, view) {
            renderDayAgenda(moment(date));
            dayAgendaDate = moment(date);
          },
          eventClick: function(calEvent, jsEvent, view) {
            renderDayAgenda(moment(calEvent.start));
            dayAgendaDate = moment(calEvent.start);
          },
          events: eventsArr,
          displayEventTime : false
          
        });
  
        $('#calendar').fullCalendar('render');
      }
  
      $("#taskForm").on("submit", function() {
        event.preventDefault();
    
        var timeVal = $("#time").val();
        
        var titleVal = $("#title").val();
        var hourVal = parseInt(timeVal.slice(0,2));
        var minuteVal = parseInt(timeVal.slice(3,6));
        var descriptionVal = $("#textarea1").val();

        console.log(dayAgendaDate.date());
        var newTask = {
  
          taskTitle: titleVal,
          taskDescription: descriptionVal,
          UserId: user.id,
          Year: dayAgendaDate.year(),
          Month: dayAgendaDate.month()+1,
          Day: dayAgendaDate.date(),
          Hour: hourVal,
          Minute: minuteVal 
        }
        console.log(newTask);
        $.post("/api/Date", newTask, function(user) {
        
          alert("Task added!");

          location.reload();
        });
      });
      $("#delete").on("click", function(){
        $.ajax({
          method: "DELETE",
          url: "/api/delete/" + deleteTaskTitle
        })
          .then(function() {
            renderDayAgenda(dayAgendaDate);
            renderCalendar();
            location.reload();
          });
      })
  
      function renderDayAgenda(day){
        
        $('#dayAgenda').fullCalendar('destroy');
        $('#dayAgenda').fullCalendar({
          events: eventsArr,
          defaultView : "agendaDay",
          defaultDate : day,
          eventClick: function(calEvent, jsEvent, view) {
            deleteTaskTitle = calEvent.id;
            console.log(deleteTaskTitle);
            $('#modal2').modal('open'); 
          },
          aspectRatio : 0.65
        });
  
        $('#dayAgenda').fullCalendar('render');
      }
      $('.modal').modal();
     
    });
  });
  
  