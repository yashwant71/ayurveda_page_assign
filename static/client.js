console.log("hello")

// var strImg=document.getElementById('strImg');
var graybgStr=document.getElementById('graybgStr');
var graybgMob=document.getElementById('graybgMob');
var graybgDri=document.getElementById('graybgDri');

var strength=document.getElementById('strength')
var mobility=document.getElementById('mobility')
var drill=document.getElementById('drill')

graybgStr.addEventListener('mouseover',()=>{
    // console.log('over')
    strength.style.width='40vw';
    mobility.style.width='25vw';
    drill.style.width='25vw';
    document.getElementById('rightStr').classList.add('fa-circle-chevron-right')
})
graybgStr.addEventListener('mouseleave',()=>{
    strength.style.width='30vw';
    mobility.style.width='30vw';
    drill.style.width='30vw';
    document.getElementById('rightStr').classList.remove('fa-circle-chevron-right')
})
graybgMob.addEventListener('mouseover',()=>{
    strength.style.width='25vw';
    mobility.style.width='40vw';
    drill.style.width='25vw';
    document.getElementById('rightMob').classList.add('fa-circle-chevron-right')
})
graybgMob.addEventListener('mouseleave',()=>{
    strength.style.width='30vw';
    mobility.style.width='30vw';
    drill.style.width='30vw';
    document.getElementById('rightMob').classList.remove('fa-circle-chevron-right')
})
graybgDri.addEventListener('mouseover',()=>{
    strength.style.width='25vw';
    mobility.style.width='25vw';
    drill.style.width='40vw';
    document.getElementById('rightDri').classList.add('fa-circle-chevron-right')
    
})
graybgDri.addEventListener('mouseleave',()=>{
    strength.style.width='30vw';
    mobility.style.width='30vw';
    drill.style.width='30vw';
    document.getElementById('rightDri').classList.remove('fa-circle-chevron-right')
})