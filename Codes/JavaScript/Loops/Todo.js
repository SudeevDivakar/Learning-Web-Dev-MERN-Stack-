let toDoList = [];
while(true){
    let choice = prompt('What would you like to do?');
    if(choice === 'quit') break;
    else if(choice === 'new'){
        let newToDo = prompt('Enter new To-do');
        toDoList.push(newToDo);
        console.log(`${newToDo} added to list`);
    }
    else if(choice === 'list'){
        console.log("*************");
        for(let i in toDoList){
            console.log(`${i}: ${toDoList[i]}`);
        }
        console.log("*************");
    }
    else if(choice === 'delete'){
        let del = prompt('Enter index of to-do to delete');
        while(parseInt(del) > toDoList.length-1 || parseInt(del) < 0 || Number.isNaN(parseInt(del))){
            del = prompt('Please Enter a valid index');
        }
        toDoList.splice(parseInt(del),1);
    }
}