function isLeap(year) {
    if(year%4===0){
               return "LEAP";
   
               if( year%100===0){
                   return "NOT LEAP";
                   if ( year%400 === 0){
                       return "LEAP";
                   }
                   else{
                       return "NOt LEAP";
                   }
               }
               else{
                   return "Leap year";
               }
           }
           else{
               return "not a leap year"
           }
   }
   console.log(isLeap(2000)); 
   