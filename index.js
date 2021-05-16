console.log("working");


///////////////////////////////////////start button

var flag =0;
var one = 0;
function fungenStart(){

    if(flag==0)
    {
        
        document.getElementById("redLed").src = "";
        document.getElementById("redLed").src = "images/greenLed.png";
        flag=1;
        one=1;
    }
    else{
        
        document.getElementById("redLed").src = "";
        document.getElementById("redLed").src = "images/redLed.png";
        flag=0;
        one=0;
    }


}



////////////////////////////////////////// slider value input

    var amp1 = document.getElementById("myRange1");
    var fre1 = document.getElementById("myRange2");
    
    var output1 = document.getElementById("sliderAmp");
    var output2 = document.getElementById("sliderFre");
    
    output1.innerHTML = amp1.value;
    amp1.oninput = function(){
        console.log("sliderValue working");
         output1.innerHTML = this.value;
    }
    
    output2.innerHTML = fre1.value;
    fre1.oninput = function(){
        output2.innerHTML = this.value;
    }
    


 function graph1()
{        
    console.log("message start");
    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        exportEnabled: true,
        title :{
            text: "Message Signal"
        },
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

    var amp = document.getElementById("myRange1").value;
    var fre = document.getElementById("myRange2").value;
    console.log(amp);
    console.log(fre);
    var xVal = 0;
    var yVal = 100;
    var amp = 15;
    var fre = 30;
    var flag = 0;
    var dataLength = 100; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
           if(j%fre<=amp)
           {
               if(flag==1)
               {
                   xVal--;
                   flag=0;
               }
               yVal = amp;
           }
           else{
               if(flag==0)
               {
                   xVal--;
                   flag=1;
               }
               yVal = -amp;
           }
            dps.push({
                x: xVal,
                y: yVal
            });
           
            xVal++;
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 
    
    one =0;
    
   
    
    
}

























function graph2()
{        
    console.log("message start");
    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        title :{
            text: "Message Signal"
        },
        data: [{
            type: "spline",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

    var amp = document.getElementById("myRange1").value;
    var fre = document.getElementById("myRange2").value;
    console.log(amp);
    console.log(fre);
    var xVal = 0;
    var yVal = 100;
    var counter = 0;
    // var amp =100;
    //  var fre = 5;
    var dataLength = 100; // number of dataPoints visible at any point
    var increase = (Math.PI * 2 / 100)*fre;
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
            yVal = (Math.sin(counter)/2)*amp*10;
            dps.push({
                x: xVal,
                y: yVal
            });
            counter = counter + increase;
            xVal++;
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 
    
    one =0;
    
}








// ///////////////////////////////play with graphs 


function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = func;
    } else {  
      window.onload = function() {
        oldonload();
        func();
      }
    }
  }
 // addLoadEvent(graph2);
 // addLoadEvent(graph1);




// window.onload = function () {

//     var dps = [];
//     var chart = new CanvasJS.Chart("chartContainer", {
//         exportEnabled: true,
//         title :{
//             text: "Dynamic Spline Chart"
//         },
//         data: [{
//             type: "spline",
//             markerSize: 0,
//             dataPoints: dps 
//         }]
//     });
    
//     var xVal = 0;
//     var yVal = 100;
//     var updateInterval = 1000;
//     var dataLength = 50; // number of dataPoints visible at any point
    
//     var updateChart = function (count) {
//         count = count || 1;
//         // count is number of times loop runs to generate random dataPoints.
//         for (var j = 0; j < count; j++) {	
//             yVal = yVal + Math.round(5 + Math.random() *(-5-5));
//             dps.push({
//                 x: xVal,
//                 y: yVal
//             });
//             xVal++;
//         }
//         if (dps.length > dataLength) {
//             dps.shift();
//         }
//         chart.render();
//     };
//     updateChart(dataLength); 
// setInterval(function(){ updateChart() }, updateInterval);
 
// } 
