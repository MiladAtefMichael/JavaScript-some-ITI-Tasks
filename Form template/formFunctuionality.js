var namesHistory=[];
function captlizeString(inputString){
    let stringArr=inputString.split(' ');
    for(let i=0;i<stringArr.length;i++){
        stringArr[i]=stringArr[i].charAt(0).toUpperCase()+stringArr[i].slice(1,stringArr[i].length);
    }
    return stringArr.join(' ');
}
function checkUnique(inputName){
    for(let i=0;i<namesHistory.length;i++){
        if(inputName==namesHistory[i]) return false;
    }
    return true;
}
window.addEventListener('load',function(){
    let nameInput=this.document.querySelector('input[name=studentName]');
    let degreeInput=this.document.querySelector('input[name=studentGrade]');
    let addButton=this.document.querySelector('input[type=button]');
    let resultTable=this.document.createElement('table');
    let dropdownMenu=this.document.querySelector('select');
    this.document.body.append(resultTable);
    
    addButton.onclick=function(){
        if(nameInput.value!=''){
            if(checkUnique(nameInput.value)){
                if(!isNaN(degreeInput.value)){
                    if(degreeInput.value>0&&degreeInput.value<=100){
                        let resultRow=document.createElement('tr');
                        namesHistory.push(nameInput.value);
                        resultRow.classList.add(document.querySelector('input[type=radio]:checked').value);
                        resultTable.append(resultRow);
                        
                        let cell_1=document.createElement('td');
                        cell_1.innerText=captlizeString(nameInput.value);
                        resultRow.append(cell_1);
                        let cell_2=document.createElement('td');
                        cell_2.innerText=degreeInput.value;
                        resultRow.append(cell_2);
                        let deleteButton=document.createElement('button');
                        deleteButton.innerHTML=`<img src="images/delete.png" width="15" />`;
                            deleteButton.onclick=function(){
                            deleteButton.parentElement.parentElement.remove();
                            };
                        let cell_3=document.createElement('td');
                        cell_3.append(deleteButton);
                        resultRow.append(cell_3); 
                    }
                    else{
                        document.querySelector('#rangeError').style.display='inline';
                    }
                }
                else{
                    document.querySelector('#gradeError').style.display='inline';
                }
        }
        else{
            document.querySelector('#uniqueError').style.display='inline';
        }    
                
    }
    else{
        document.querySelector('#nameError').style.display='inline';
    }      
    }

    dropdownMenu.onchange=function(){
        let selectedItem=document.querySelector('select').selectedOptions[0].value;
        if(selectedItem=='success')
        {
            for(let i=0;i<resultTable.children.length;i++){
                    let currentCell=resultTable.children[i].children[1].innerText;
                    if(currentCell<60){
                        resultTable.children[i].style.display='none';
                    } 
                    else{
                        resultTable.children[i].style.display='inline-block';
                    } 
             }
        }
        else if(selectedItem=='fail')
        {
            for(let i=0;i<resultTable.children.length;i++){
                    let currentCell=resultTable.children[i].children[1].innerText;
                    if(currentCell<60){
                        resultTable.children[i].style.display='none';
                    }  
                    else{
                        resultTable.children[i].style.display='inline-block';
                    }
             }
             
         }
    }

});
