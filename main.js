//user defined function/event. its run when the page is load ...
function showtime() {
//"new Date()" 'gethours()', "getminutes()" and 'getseconds()' all are pre defined functions ...
  var Time = new Date();
  var h = Time.getHours();
  var m = Time.getMinutes();
  var s = Time.getSeconds();
  var session = "AM";
  
 //NOTE: line 33 to line 35 is same as line 11 to 18. ...
  //  m = checktime(i);
  //  s = checktime(i);
  // function checkTime(i) {
  //  if(i < 10){
 //    i = "0" + i
 //   }
//    return i;
//  };
  
//to denote the time is AM or PM ...
// 12 hour format, remove this to 24 hour format ...
 if (h > 12) {
  var session = "PM";
  h = h-12;
 };
  if (h==0) {
  h = 12;
};

//using ternary oparator ...
//sentax < (condition)? true : false >
  h = (h < 10)? "0" + h : h;
  m = (m < 10)? "0" + m : m;
  s = (s < 10)? "0" + s : s;
//you can write code with if condition line 26-28 is same as line 22...
  //  if (h<10) {  h = "0" + h;  };
 
//print time(hour, minute and second) in div ...
//here use this additional sign '+' to concatenate the strings ...
  document.getElementById('time') .innerHTML = h + ":" + m + ":" + s + session;
  
//run time automatically ...
  setTimeout(showtime, 1000);

};

//js for date ...
  function showdate() {
    var date = new Date();
    var dd = date.getDate();
//NOTE: here we can't use this line42 for months we need to use Array ...
  //  var mm = date.getMonth();
  
  //Here i don't print YEARS
   // var yy = date.getFullYear();
  
//create Array for getMonth ...
  var month = [];
  month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
    ];
    
//create Array for weeks ...
  var week = new Date();
  var weeks = new Array(  
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
  );
  
//print date(weeks, day and month) in div ...
  document.getElementById('date') .innerHTML =  weeks[week.getDay()-1] + ",  " + dd + " " + month[date.getMonth()] ;
  };