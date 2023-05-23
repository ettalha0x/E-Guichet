
  
  <style>
    /* Custom styles */
    body {
      /* height: 100vh;
      display: flex; */
     
    /* background-color: #FFF5E6; */
      /* overflow: hidden; */
      background-size: cover;
      background-image: url('https://images.wallpaperscraft.com/image/single/work_pencil_drawing_4505_1280x720.jpg');
    
     background-repeat: no-repeat;
    }

    /* Import Holidays Homework font */
    /* @import url('https://fonts.cdnfonts.com/css/holidays-homework'); */

    #welcome {
      font-size: 64px;
      color: #336699;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      font-family: 'Holidays Homework', sans-serif;
      animation: floatAnimation 3s infinite ease-in-out;
      justify-content: center;
      align-items: center;
    }

    #datetime {
      /* position: absolute;
      top: 10px;
      right: 10px; */
      color: #336699;
      text-align: right;
      font-family: "Arial", sans-serif;
    }

    #date {
      font-size: 32px;
      margin-bottom: 5px;
    }

    #time {
      font-size: 100px;
    }

    /* Animation keyframes */
    @keyframes floatAnimation {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }

    /* Animated background */
    .animated-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #336699;
      opacity: 0.2;
      z-index: -1;
      animation: animatedBackground 30s infinite linear;
    }

    @keyframes animatedBackground {
      0% { background-position: 0 0; }
      100% { background-position: 2000px 2000px; }
    }
  </style>



  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1 id="welcome">Bienvenue, {{ auth()->user()->name}} !</h1>
      </div>
    </div>
  </div>

  <div id="datetime">
    <div id="date"></div>
    <div id="time"></div>
    <script>
      // Get the current date and time in French
      function getCurrentDateTime() {
        var now = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var date = now.toLocaleDateString('fr-FR', options).toUpperCase();
        var time = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        return { date: date, time: time };
      }

      // Update the date and time every second
      function updateTime() {
        var datetimeElement = document.getElementById("datetime");
        var dateTime = getCurrentDateTime();
        document.getElementById("date").innerHTML = dateTime.date;
        document.getElementById("time").innerHTML = dateTime.time;
      }

      setInterval(updateTime, 1000);
    </script>
  </div>



 