
var toDoList = [
    {id:1 , name:"Doing homework", isDoes:false},
    {id:2 , name:"Playing Piano", isDoes:false},
    {id:3 , name:"Workeout", isDoes:true},
    {id:4 , name:"Whatching learning movies", isDoes:false}
];


function showToDoList(){
    console.log(
        "your todo list is: \n" 
    )
    toDoList.forEach(function(item){
        console.log(item.id +". "+ item.name + "   is Does?" + item.isDoes)
    })
}

var userChoise = +prompt(
    "please choose one of this options: \n\n\n" + 
    "1. Add a New Todo Item \n" +
    "2. Delete a Todo Item \n" + 
    "3. turn status of a Todo Item"
    )
while(isNaN.userChoise === true){
    alert("please insert a valid number!");
    userChoise = +prompt(
        "please choose one of this options: \n\n\n" + 
        "1. Add a New Todo Item \n" +
        "2. Delete a Todo Item \n" + 
        "3. Change status of Todo item"
        )
}    


switch(userChoise){
    case 1: {
        var newItem = prompt("Enter new ToDo item")
        var newTodo = {id: toDoList.length+1, name: newItem, isDoes:false}
        
        toDoList.push(newTodo)
    }
    break;
    case 2: {
        var deleteTodoItem = +prompt(
            "which Todo list Item should be deleted? \n" +
            "just insert a number"
        )

        if(deleteTodoItem === 1){
            toDoList.splice(0,1)
        }else if(deleteTodoItem === 2){
            toDoList.splice(1,1)
        }else if(deleteTodoItem === 3){
            toDoList.splice(2,1)
        }else if(deleteTodoItem === 4){
            toDoList.splice(3,1)
        }
        break;
    }

    case 3: {
        
            function checkCorrectChoice (item){
                var checkValue = false;
                for(var i = 1 ; i<= toDoList.length ; i++){
                    if(item === i){
                        checkValue = true;
                    }
            }
            return checkValue;
        }

            var DoingJob = +prompt(
                "which Todo list Item should be deleted? \n" +
                "just insert a number"
                )
                while(checkCorrectChoice(DoingJob) === false){
                    DoingJob = +prompt(
                        "Enter a valid number!"
                        )   
                checkCorrectChoice(DoingJob);        
                }

            
                var ToDoIndex = toDoList.findIndex(function(item){
                    return item.id === DoingJob;
                })

                toDoList[ToDoIndex].isDoes = !toDoList[ToDoIndex].isDoes;
        break;
    }
}
    
console.log(showToDoList());