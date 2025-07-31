let btnobj=document.getElementsByClassName('btn')

let resetbtn=document.querySelector(".resetbtn")

let paraelem=document.querySelector("#paragraph")

let winmsgpara=document.querySelector("#winmsg")



let arrbtn=[...btnobj]
console.log(arrbtn)
let winarr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
paraelem.textContent="X's turn"
let x=1;
arrbtn.forEach(element => {
    element.addEventListener(("click"),(evt)=>{
      if(x==1){
        if(!evt.target.textContent){
        evt.target.textContent="X"
        x=0;
        paraelem.textContent="O's turn"
        checkwin()
        isDraw()
        }
      }else{
        if(!evt.target.textContent){

        element.textContent="O"
        x=1;
         paraelem.textContent="X's turn"
        checkwin()
        isDraw()
      }}
    })
});

resetbtn.addEventListener('click',()=>{
  reset()
})

function reset(){
  arrbtn.forEach(valuebtn=>{
    valuebtn.textContent=""
    paraelem.textContent="X's turn"
    x=1;
   setTimeout(()=>{
    winmsgpara.textContent=""
    
   },1000)
  })
}

function checkwin(){
  
  for(let i of winarr){
  let first=i[0]
  let second=i[1]
  let third=i[2]
    if(arrbtn[first].textContent!="" && arrbtn[second].textContent!="" && arrbtn[third].textContent!="" && arrbtn[first].textContent===arrbtn[second].textContent && arrbtn[second].textContent===arrbtn[third].textContent){
    winmsgpara.textContent=`${arrbtn[first].textContent} won the match` 
      reset()
    }
    
  }
}



function isDraw(){
  let j=0;
  for(let i of arrbtn){
    if(i.textContent){
      j++;
      if(j==9){
        winmsgpara.textContent="game is drawn!"
        reset()
      }
    }
  }
}