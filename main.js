function submit() {

    var display_guest_array = [];
    for (var j = 1; j <= 4; j++);

    {
        console.log("samridhi");
        var name_of_the_guest = document.getElementById("name_of_the_guest_"+j).value;
        console.log(name_of_the_guest);
        name_of_the_guest_array.push(name_of_the_guest);
    }
    console.log(name_of_the_guest_array);

    var leg_of_name_of_the_guest = name_of_the_guest_array.length
    console.log(log_of_name_of_the_guest_array);

    for (var k = 0; k < leg_of_name_of_the_guest_array; k++) 
    {
        display_guest_array.push("<h4>NAME - " + name_of_the_guest_array[k] + "<h4>");
        console.log(display_guest_array);


        console.log(display_guest_array);
        document.getElementById("display_guest_with_comma").innerHTML = display_student_array;

        
        document.getElementById("submit_button").style.display = none;
    }
}