let age 
let floor = 'man'
let growth
let weight
let b
function closeM(){
    document.querySelector('.nav-bar').style.display = 'none'
}
function weightadd(m) {
    floor = m
    if(floor == 'man'){
        document.querySelector('.wrapper__buttons_left').style.backgroundColor = 'rgb(219, 88, 28)'
        document.querySelector('.wrapper__buttons_left').style.color = 'white'
        document.querySelector('.wrapper__buttons_right').style.backgroundColor = 'white'
        document.querySelector('.wrapper__buttons_right').style.color = 'black'
    }else{
        document.querySelector('.wrapper__buttons_right').style.backgroundColor = 'rgb(219, 88, 28)'
        document.querySelector('.wrapper__buttons_right').style.color = 'white'
        document.querySelector('.wrapper__buttons_left').style.backgroundColor = 'white'
        document.querySelector('.wrapper__buttons_left').style.color = 'black'
    }
}
function submit(){
    let a = true
    age = document.querySelector('#one').value
    growth = document.querySelector('#two').value
    weight = document.querySelector('#three').value
    if(document.querySelector('#check5').checked){
        b=1.9
    }else{
        if(document.querySelector('#check4').checked){
            b=1.725
        }else{
            if(document.querySelector('#check3').checked){
                b=1.55
            }else{
                if(document.querySelector('#check2').checked){
                    b=1.375
                }else{
                    if(document.querySelector('#check1').checked){
                        b=1.2
                    }
                }
            }
        }
    }
    if(age==''){
        document.querySelector('#one').style.borderColor = 'red'
        a = false
    }else{
        document.querySelector('#one').style.borderColor = 'black'
    }
    if(growth==''){
        document.querySelector('#two').style.borderColor = 'red'
        a = false
    }else{
        document.querySelector('#two').style.borderColor = 'black'
    }
    if(weight==''){
        document.querySelector('#three').style.borderColor = 'red'
        a = false
    }else{
        document.querySelector('#three').style.borderColor = 'black'
    }
    if(b== undefined){
        alert('Выберите Физическую активность')
        a = false
    }
    if(a == true){
        let c
        if(floor=='man'){
            c = Number(b) * ((5.7*Number(age)) + (13.4*Number(weight)) + (4.8*Number(growth)))
            
        }else{
            c = Number(b) * ((5.7*Number(age)) + (13.4*Number(weight)) + (4.8*Number(growth)))
        }
            document.querySelector('#res1').innerHTML = Math.trunc(c)
            document.querySelector('#res2').innerHTML = Math.trunc(c)-150
            document.querySelector('#res3').innerHTML = Math.trunc(c)-500
            document.querySelector('.nav-bar').style.display = 'flex'
    }
}


