name_of_person_array = [];

function submit()
{
var name_1 = document.getElementById("name_of_person_1").value;
var name_1 = document.getElementById("name_of_person_2").value;
var name_1 = document.getElementById("name_of_person_3").value;
var name_1 = document.getElementById("name_of_person_4").value;

name_of_person_array.push(name_1);
name_of_person_array.push(name_2);
name_of_person_array.push(name_3);
name_of_person_array.push(name_4);
document.getElementById("display_name").innerHTML = name_of_person_array;
}
function sorting()
{
name_of_person_array.sort();
document.getElementById("display_name").innerHTML = name_of_person_array;
}
