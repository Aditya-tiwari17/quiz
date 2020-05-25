function Student() 
{ 
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value; 
  
    if (password1 != password2) 
    { 
        alert ("\nPasswords did not match: Please try again..."); 
        return false; 
    } 

    else
    { 
        alert ("\nRegistered Successfully"); 

        var rollno = document.getElementById('rollno').value;
        var name = document.getElementById('name').value;
        var dob = document.getElementById('dob').value;
        var course = document.getElementById('course').value;
        var year = document.getElementById('year').value;


        var api = "/Student3_war/webapi/Student/login";
        var text =  {"rollno":rollno,"name":name,"dob":dob,"course":course,
                    "year":year,"password":password1};
        // console.log(text);
        $.ajax
        ({
            type : "POST",
            url : api,
            data : text,
            async: false,
            cache: false,
            statusCode:
            {
                200:    function(response)
                {
                    sessionStorage.setItem("id", JSON.stringify(response[0]));
                    sessionStorage.setItem("rollno", JSON.stringify(response[1]));
                    sessionStorage.setItem("name", JSON.stringify(response[2]));
                    sessionStorage.setItem("dob", JSON.stringify(response[3]));
                    sessionStorage.setItem("course", JSON.stringify(response[4]));
                    sessionStorage.setItem("year", JSON.stringify(response[5]));

                    location.href="http://localhost:8080/Student3_war/HTML/Table.html";

                }
            }
        });
        
        // location.replace("http://localhost:8080/quiz_war/HTML/studentLogin.html");
        return true; 
    } 
} 