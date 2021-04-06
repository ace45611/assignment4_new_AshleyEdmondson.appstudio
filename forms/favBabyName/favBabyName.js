console.log(favBabyNames)

favBabyName.onshow=function(){
    drpFavName.clear()
    for (i = 0; i < 5; i++)
        drpFavName.addItem(favBabyNames[i])
    imgBaby.hidden = true
}

drpFavName.onclick=function(s){
    if (typeof(s) == "object") {
        return
    } else {
    lblFavName.value = `Your favorite baby name is ${s}.`
    imgBaby.hidden = false
    }
}
