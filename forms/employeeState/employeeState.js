let query = ""
let req = {}
let results = []
let netID = "ace45611"
let pw = "Bi@375B"


//Populates dropdown with states from customer array:
employeeState.onshow=function(){
    drpState.clear()
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ace45611&pass=" + pw + "&database=ace45611&query=" + query)

    if (req.status == 200) {       
        results = JSON.parse(req.responseText)
        if (results.length == 0)
           lblMessage.textContent = "There are no employees in the database."
        else {     
            let message = ""
            for (i = 0; i < results.length; i++)
                drpState.addItem(message + results[i][4] + "\n")
     }
  } else
        lblMessage.textContent = "Error code: " + req.status
}

//Returns employees in state selected from dropdown in a listgroup control:
drpState.onclick=function(s){
    if (typeof(s) == "object")   
      return                    
    else {
        drpState.value = s
        
    let state = drpState.value
    query = "SELECT * from customer WHERE state =" + '"' + state + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ace45611&pass=" + pw + "&database=ace45611&query=" + query)

    if (req.status == 200) {    
        results = JSON.parse(req.responseText)
        if (results.length == 0)
           lblMessage1.textContent = "There are no employees in the database."
        else {     
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
                lstgEmployeeNames.addItem(message)
     }
  } else
        lblMessage1.textContent = "Error code: " + req.status
}
}








