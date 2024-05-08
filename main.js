const teclaQ = document.getElementById("teclaQ")
const teclaW = document.getElementById("teclaW")
const teclaT = document.getElementById("teclaT")
const teclaO = document.getElementById("teclaO")
const teclaU = document.getElementById("teclaU")
const teclaB = document.getElementById("teclaB")
const teclaM = document.getElementById("teclaM")
const teclaN = document.getElementById("teclaN")
const teclaL = document.getElementById("teclaL")
const teclaX = document.getElementById("teclaX")
const teclaY = document.getElementById("teclaY")
const teclaZ = document.getElementById("teclaZ")
const teclaC = document.getElementById("teclaC")
const teclaR = document.getElementById("teclaR")
const tecla3 = document.getElementById("tecla3")
const tecla5 = document.getElementById("tecla5")
const tecla2 = document.getElementById("tecla2")
const tecla7 = document.getElementById("tecla7")
const tecla1 = document.getElementById("tecla1")
const tecla4 = document.getElementById("tecla4")
const tecla9 = document.getElementById("tecla9")
const tecla8 = document.getElementById("tecla8")
const tecla6 = document.getElementById("tecla6")
const teclañ = document.getElementById("teclañ")
const teclaA = document.getElementById("teclaA")
const teclaF = document.getElementById("teclaF")
const teclaJ = document.getElementById("teclaJ")




let arrayColores = [
    "rgba(67, 237, 48, 0.5)",
    "rgba(13,63,247,0.5)",
    "rgba(156,43,255,0.5)",
] 

let nombreSonidos = ["sound/A2.mp3",
" sound/B3.mp3",
 "sound/C4.mp3",
 "sound/D5.mp3",
 "sound/E6.mp3",
 "sound/F6.mp3",
 "sound/G5.mp3",
"sound/A2.mp3",
"sound/B3.mp3",
"sound/C4.mp3",
"sound/D5.mp3",
"sound/E6.mp3",
"sound/F6.mp3",
"sound/G5.mp3"
]

let sonidos= []

for( let i =0; i < nombreSonidos.length ;i++){
    let audio = new Audio(nombreSonidos[i])
    console.log(audio)
    sonidos.push(audio)
}
document.addEventListener('keydown', function(event){
    let azar= Math.floor(Math.random() * arrayColores.length)

    
    function asignarcolor(elemento){
        console.log(azar)
        elemento.style.boxShadow = `10px 10px 5px 0px ${arrayColores[azar]}`
        elemento.style.backgroundColor =`${arrayColores[azar]}`
        setTimeout(()=> {
            elemento.style.boxShadow = `0 0 0 0 rgba(13,63,247,0)`
            elemento.style.backgroundColor =` rgba(13,63,247,0)`
        }, 1000)
       
    }
    
    function asignarcolorN(elemento){

        if(elemento !== null) {

        console.log(azar)
        elemento.style.boxShadow = `10px 10px 5px 0px ${arrayColores[azar]}`
        elemento.style.backgroundColor =`${arrayColores[azar]}`
        setTimeout(()=> {
            elemento.style.boxShadow = `0 0 0 0 rgba(13,63,247,0)`
            elemento.style.backgroundColor =` rgba(0,0,0,1)`
        }, 1000)
       }
    }

console.log(event.key)
  switch(event.key){

    case "q":
        asignarcolor(teclaQ)
        
        sonidos[2].currentTime =0
        sonidos[2].play()
        break
    case "w":
        asignarcolor(teclaW)
        sonidos[3].currentTime =0
        sonidos[3].play()
        break
    case "t":
        asignarcolor(teclaT)
        sonidos[4].currentTime =0
        sonidos[4].play()
        break
    case "b":
        asignarcolor(teclaB)
        sonidos[5].currentTime = 0
        sonidos[5].play()
        break
    case "u":
        asignarcolor(teclaU)
        sonidos[6].currentTime =0
        sonidos[6].play()
        break
    case "o":
        asignarcolor(teclaO)
        sonidos[0].currentTime =0
        sonidos[0].play()
        break
    case "m":
        asignarcolor(teclaM)
        sonidos[1].currentTime =0
        sonidos[1].play()
        break
    case "n":
        asignarcolor(teclaN)
        sonidos[2].currentTime =0
        sonidos[2].play()
        break
    case "l":
        asignarcolor(teclaL)
        sonidos[3].currentTime =0
        sonidos[3].play()
        break
    case "r":
        asignarcolor(teclaR)
        sonidos[4].currentTime =0
        sonidos[4].play()
        break
    case "x":
        asignarcolor(teclaX)
        sonidos[0].currentTime =0 
        sonidos[0].play()
        break
    case "y":
        asignarcolor(teclaY)
        sonidos[5].currentTime =0
        sonidos[5].play()
        break
    case "z":
        asignarcolor(teclaZ)
        sonidos[1].currentTime =0
        sonidos[1].play()
        break
    case "c":
        asignarcolor(teclaC)
        sonidos[6].currentTime =0
        sonidos[6].play()
        break  
    case "3":
        asignarcolorN(tecla3)
        sonidos[2].currentTime =0
        sonidos[2].play      
        break
    case"5":
        asignarcolorN(tecla5)  
        sonidos[3].currentTime=0
        sonidos[3].play
    break
    case"2":
        asignarcolorN(tecla2)
        sonidos[4].currentTime = 0
        sonidos[4].play
        break
    case"7":
           asignarcolorN(tecla7)
           sonidos[5].currentTime =0
           sonidos[5].play
           break
    case"1":       
        asignarcolorN(tecla1)
        sonidos[6].currentTime =0
        sonidos[6].play
        break
    case"4":
    asignarcolorN(tecla4)
    sonidos[0].currentTime =0
    sonidos[0].play
break
case"9":
    asignarcolorN(tecla9)
    sonidos[1].currentTime =0
    sonidos[1].play
    break
    case"8":
    asignarcolorN(tecla8)
    sonidos[2].currentTime =0
    sonidos[2].play
    break
    case"6":
    asignarcolorN(tecla6)
    sonidos[3].currentTime =0
    sonidos[3].play
    break
    case"a":
    asignarcolorN(teclaA)
    sonidos[5].currentTime=0
    sonidos[5].play
    break
    case"f":
    asignarcolorN(teclaF)
    sonidos[6].currentTime=0
    sonidos[6].play
    break
    case"j":
    asignarcolorN(teclaJ)
    sonidos[0].currentTime=0
    sonidos[0].play
    break
    case"ñ":
    asignarcolorN(teclañ)
    sonidos[4].currentTime=0
    sonidos[4].play
    break
    }
    
})
