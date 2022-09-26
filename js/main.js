const okabe = document.querySelector('#okabeRintaro')
const mayuri = document.querySelector('#mayuriShiina')
const itaru = document.querySelector('#itaruHashida')
const makise = document.querySelector('#makiseKurisu')
const moeka = document.querySelector('#moekaKiryu')
const luka = document.querySelector('#lukaUrushibara')
const akiha = document.querySelector('#akihaRumiho')
const suzuha = document.querySelector('#suzuhaAmane')

document.querySelector('.okabeImg').addEventListener('click', selectOkabe)
document.querySelector('.mayuriImg').addEventListener('click', selectMayuri)
document.querySelector('.itaruImg').addEventListener('click', selectItaru)
document.querySelector('.makiseImg').addEventListener('click', selectMakise)
document.querySelector('.moekaImg').addEventListener('click', selectMoeka)
document.querySelector('.lukaImg').addEventListener('click', selectLuka)
document.querySelector('.akihaImg').addEventListener('click', selectAkiha)
document.querySelector('.suzuhaImg').addEventListener('click', selectSuzuha)

function selectOkabe(){
	okabe.classList.toggle('hidden')
	mayuri.classList.add('hidden')
	itaru.classList.add('hidden')
    makise.classList.add('hidden')
    moeka.classList.add('hidden')
    luka.classList.add('hidden')
    akiha.classList.add('hidden')
    suzuha.classList.add('hidden')
}

function selectMayuri(){
	okabe.classList.add('hidden')
	mayuri.classList.toggle('hidden')
	itaru.classList.add('hidden')
    makise.classList.add('hidden')
    moeka.classList.add('hidden')
    luka.classList.add('hidden')
    akiha.classList.add('hidden')
    suzuha.classList.add('hidden')
}

function selectItaru(){
	okabe.classList.add('hidden')
	mayuri.classList.add('hidden')
	itaru.classList.toggle('hidden')
    makise.classList.add('hidden')
    moeka.classList.add('hidden')
    luka.classList.add('hidden')
    akiha.classList.add('hidden')
    suzuha.classList.add('hidden')
}

function selectMakise(){
	okabe.classList.add('hidden')
	mayuri.classList.add('hidden')
	itaru.classList.add('hidden')
    makise.classList.toggle('hidden')
    moeka.classList.add('hidden')
    luka.classList.add('hidden')
    akiha.classList.add('hidden')
    suzuha.classList.add('hidden')
}

function selectMoeka(){
	okabe.classList.add('hidden')
	mayuri.classList.add('hidden')
	itaru.classList.add('hidden')
    makise.classList.add('hidden')
    moeka.classList.toggle('hidden')
    luka.classList.add('hidden')
    akiha.classList.add('hidden')
    suzuha.classList.add('hidden')
}

function selectLuka(){
	okabe.classList.add('hidden')
	mayuri.classList.add('hidden')
	itaru.classList.add('hidden')
    makise.classList.add('hidden')
    moeka.classList.add('hidden')
    luka.classList.toggle('hidden')
    akiha.classList.add('hidden')
    suzuha.classList.add('hidden')
}

function selectAkiha(){
	okabe.classList.add('hidden')
	mayuri.classList.add('hidden')
	itaru.classList.add('hidden')
    makise.classList.add('hidden')
    moeka.classList.add('hidden')
    luka.classList.add('hidden')
    akiha.classList.toggle('hidden')
    suzuha.classList.add('hidden')
}

function selectSuzuha(){
	okabe.classList.add('hidden')
	mayuri.classList.add('hidden')
	itaru.classList.add('hidden')
    makise.classList.add('hidden')
    moeka.classList.add('hidden')
    luka.classList.add('hidden')
    akiha.classList.add('hidden')
    suzuha.classList.toggle('hidden')
}
