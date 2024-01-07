/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.*/


function truncateString(str, num) {
  let firstString=str.length;
  console.log(firstString);
  console.log(str);
  if(firstString>num){
    str=str.slice(0,num);
    return(str+"...");
  }
  else{
    return str;
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
