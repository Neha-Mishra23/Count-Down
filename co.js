let hrs=document.getElementById('hr');
let mins=document.getElementById('min');
let secs=document.getElementById('sec');

setInterval(function(){
    let current=new Date();
    hrs.innerHTML=(current.getHours()+0<10?"0":"")+current.getHours();
    mins.innerHTML=(current.getMinutes()+0<10?"0":"")+current.getMinutes();
    secs.innerHTML=(current.getSeconds()+0<10?"0":"")+current.getSeconds();
})

let quotesIndex=["“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.”"
]
let quots=document.getElementById('quote');
let current=0;
function slider(){
    quots.innerHTML=quotesIndex[current];
    current=(current+1)%quotesIndex.length;
}
setInterval(slider,1000);