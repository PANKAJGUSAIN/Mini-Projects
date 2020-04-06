var box = document.getElementById('box');
var click_Count = document.getElementById('click_count');
var mouse_Over1= document.getElementById('mouse_over');
var mouse_Out1= document.getElementById('mouse_out');
var inputt=document.getElementById('inputt');
var count=0;
var mouse_Outt=0;
var mouse_Overr=0;

function count_it(){
    count++;
    click_Count.innerText =count +" ";
};

function mouse_Out(){
    mouse_Outt++;
    mouse_Out1.innerText =mouse_Outt ;
    console.log('mouse_Out');
};

function mouse_Over(){
    mouse_Overr++;
    mouse_Over1.innerText =mouse_Overr ;
    console.log('mouse_Over');
};
box.addEventListener('click',count_it);
box.addEventListener('mouseout',mouse_Out);
box.addEventListener('mouseover',mouse_Over);
document.addEventListener('keypress',function(event){
    console.log('key Press',event.keyCode);
});