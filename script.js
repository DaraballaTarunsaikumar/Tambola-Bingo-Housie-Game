container=document.getElementById('container')
table=document.getElementById('table')
para=document.getElementById('para')
button=document.getElementById("button")
speach=document.getElementById('but')
par=document.getElementById('par')
let isspeack=false

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
for(i=1;i<=90;i++)
{      
   
}

         
    
  
    function start(){
       
        
        do{
            randomnumber=getrandomnum()
            }while(list.includes(randomnumber))
                list.push(randomnumber)
                console.log(randomnumber)
        
      
      
        para.textContent=randomnumber
      
        button.textContent="Next"
        speak()
       
        pre()
        function pre(){
            pindex=list.indexOf(parseInt(para.textContent))
            par.textContent=list[pindex-1]
            console.log(list[pindex-1])
        }  
        for( let row of table.rows)
            {
                for(let cell of row.cells){
                    if(cell.textContent==String(randomnumber)){
                     
                        cell.classList.add('change');
                       
                       
                    }
                }
              
            }
            function toggle(){
                if(!isspeack)
                    {
                       speak() 
                    }
                    else{
                        cancelspeak()
                    }
            }
        
            function speak()
            {
             
                console.log("tarun")
                const sync=window.speechSynthesis
                const utterence=new SpeechSynthesisUtterance(para.textContent)
                sync.speak(utterence)
                isspeack=true
                speach.textContenta="mute"
                
                
               
            }
            function cancelspeak()
            {
                console.log("sai")
                const sync=window.speechSynthesis
                sync.cancel()
                isspeack=false
                speach.textContent="unmute"
           
            }
            speach.addEventListener('click', toggle);
            
           
            
           
           
          
    }
  
   
    
  
                    
        