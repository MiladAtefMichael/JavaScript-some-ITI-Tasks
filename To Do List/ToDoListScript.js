let inputText=document.querySelector('input[type=text]');
let addButton=document.querySelector('#add');
let toDoList=document.querySelector('table');
function createRow(){
    let row=document.createElement('tr');
    let cell1=document.createElement('td');
    let checkedBox=document.createElement('input');
    checkedBox.setAttribute('type','checkbox');
    toDoList.append(row);
    row.append(cell1);
    cell1.append(checkedBox);
    let cell2=document.createElement('td');
    cell2.innerText=document.querySelector('input[type=text]').value;
    row.append(cell2);
    let deleteButton=document.createElement('button');
    deleteButton.innerHTML=`<img src="images/delete.png" width="15" />`;
        deleteButton.onclick=function(){
        deleteButton.parentElement.parentElement.remove();
        };
    let cell3=document.createElement('td');
    cell3.append(deleteButton);
    row.append(cell3); 
    checkedBox.addEventListener('change',function(){
        if(this.checked){
            let insideText=cell2.innerText;
            cell2.innerHTML=`<s>${insideText}</s>`
        }
        else{
            cell2.innerText=cell2.children[0].innerText;
        }
    });
    



}
addButton.onclick=function(){
    createRow();
}