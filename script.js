function check() {
    var data  = new Date()
    var year  = data.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res   = document.querySelector('div#res')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('[ERROR] Check data and try again')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gender = 'Man'
            if (age >= 00 && age < 3) {
                //Baby 
                img.setAttribute('src', 'images/baby.png')

            } else if (age >= 3 && age < 16) {
                //Boy
                img.setAttribute('src', 'images/boy.png')  
                
            } else if (age >= 16 && age < 30) {
                //Manyoung
                img.setAttribute('src', 'images/manyoung.png')
            
            } else if (age >= 30 && age < 55) {
                //Manyoung
                img.setAttribute('src', 'images/man.png')

            } else {
                //OldMan
                img.setAttribute('src', 'images/oldman.png')

            } 

        } else if (fsex[1].checked) {
            gender = 'Woman'
            if (age >= 00 && age < 3) {
                //Baby 
                img.setAttribute('src', 'images/baby.png')
            } else if (age >= 3 && age < 15) {
                //Girl
                img.setAttribute('src', 'images/girl.png')
            } else if (age >= 15 && age < 55) {
                //Woman
                img.setAttribute('src', 'images/woman.png')
            } else {
                //OldWoman
                img.setAttribute('src', 'images/oldwoman.png')

            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detect a ${gender} with ${age} years`
        res.appendChild(img)
    }

}