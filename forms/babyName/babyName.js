let babyNames = ["Charlie", "Wendy", "Howard", "Annie", "Chris", "Sunny", "Pat", "Wilma", "Jared", "Maggie", "Max", "Sarah", "Kate", "Grace", "James", "John", "Brayden", "Claire", "Abby", "Dono"]
let favBabyNames = []


//populates sel control with baby names:
babyName.onshow=function(){
    for (i = 0; i < babyNames.length; i++)
      selBabyNames.addItem(babyNames[i])
}

//Adds user's choice to fav baby list:
selBabyNames.onclick=function(){
      favBabyNames.push(selBabyNames.text)
}

//Changes to favBabyNames form:
btnSubmit.onclick=function(){
  ChangeForm(favBabyName)
  alert("If you chose more than 5 names.. be aware that only the first 5 names will appear in the next form.")
}
