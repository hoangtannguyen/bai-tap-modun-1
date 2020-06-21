let str=" "
for(let i = 0 ; i < 5 ; i++){
    str = str + "<tr Class = 'a'>" +
    "<td>"+ (i+1) +   "</td>" + 
    "<td>Nguyen"+ (i+1) +   "</td>" + 
    "<td>Khoa"+ (i+1) +   "</td>" + 
    "<td>2042001</td>" 
    "<td>thuathienhue</td>" + 
    "<tr>";

}
document.getElementById("tbStudent").innerHTML = str