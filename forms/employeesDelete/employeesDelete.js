// button populates employee select control:
btnEmployees.onclick=function(){
    selEmployeeNames.clear()
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ace45611&pass=" + pw + "&database=ace45611&query=" + query)

    if (req.status == 200) {       
        results = JSON.parse(req.responseText)
        if (results.length == 0)
           lblMessage2.textContent = "There are no employees in the database."
        else {     
            let message = ""
            for (i = 0; i < results.length; i++)
                selEmployeeNames.addItem(message + results[i][1] + "\n")
     }
  } else
        lblMessage2.textContent = "Error code: " + req.status
}


// Writes the code for deleting the employee based on what was clicked.
selEmployeeNames.onchange=function(s){
    let employeeNameDel = selEmployeeNames.value
    
    let found = false
    for (i = 0; i < results.length; i++) {
        if (employeeNameDel == results[i][1]){
            found = true
            break
        }
    }
    if (found == false) 
       lblMessage2.textContent = "That employee is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = '" + employeeNameDel + "'"
      alert(query)
      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=ace45611&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)
                lblMessage2.textContent = `You have successfully deleted the employee named ${employeeNameDel}`
            else
                lblMessage2.textContent = `There was a problem deleting ${employeeNameDel} from the database.`
      else  // transit error
        lblMessage2.textContent = `Error: ${req.status}`
    }
}


btnReset.onclick=function(){
  employeesDelete.reset()
  lblMessage2.textContent = ""
}
