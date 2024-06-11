container=document.getElementById('container')
table=document.getElementById('table')
para=document.getElementById('para')
button=document.getElementById("button")
speach=document.getElementById('but')
par=document.getElementById('par')
let isSpeaking=false
restartbut=document.getElementById("rebut")

function getrandomnum(){
    return Math.ceil(Math.random() *90)

}
list=[]
rows=9
cols=10
c=0
for(i=1;i<=rows;i++)
    {
        row=document.createElement('tr')
      
        for(j=1;j<=cols;j++)
            {
                cell=document.createElement('td')
                cell.classList.add('dcell');
                c=c+1
               cell.textContent=c
              
               row.appendChild(cell)


}
table.appendChild(row)
}

     
    
  
    function start(){
       
        
        do{
            randomnumber=getrandomnum()
            }while(list.includes(randomnumber))
                list.push(randomnumber)
                console.log(randomnumber)
                console.log(list)
        
      
      
        para.textContent=randomnumber
      
        button.textContent="Next"
        if(!isSpeaking){
            speakNumber()
        }
  
      
       
        pre()
        function pre(){
            pindex=list.indexOf(parseInt(para.textContent))
            par.textContent=list[pindex-1]
            console.log(par.textContent)
        }  
        for( let row of table.rows)
            {
                for(let cell of row.cells){
                    if(cell.textContent==String(randomnumber)){
                      
                       cell.classList.remove('rechange')
                     
                        cell.classList.add('change');
                       
                       
                    }
                }
              
            }
            
          
            
          
            
            // Add event listener to the speech button
                    
           
            
           
           
          
    }
    function toggle() {
        if(!isSpeaking){
            isSpeaking=true
        }
        else{
            isSpeaking=false
        }
       
        if (!isSpeaking) {
            speakNumber();
          
         
        } else {
            cancelSpeech();
          
        }
    }
      // Speak the current number
      function speakNumber() {
        console.log("Speaking number");
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(para.textContent);
        synth.speak(utterance);
       
 
        speach.textContent = "mute";
      
    }
    // Cancel speech synthesis
    function cancelSpeech() {
        console.log("Cancel speech");
        const synth = window.speechSynthesis;
        synth.cancel();
       
     
        speach.textContent = "unmute";
    }
    speach.addEventListener('click', toggle); 
function restart(){
    console.log('tarun')
    list=[]
    para.textContent=''
    par.textContent=''
    for( let row of table.rows)
        {
            for(let cell of row.cells){
                 
                    cell.classList.remove('change');
                   
                   
            
            }
          
        }
        button.textContent="Start"
 
    console.log(list)
}

    restartbut.addEventListener('click',restart)
  
   
    
  
                    
        