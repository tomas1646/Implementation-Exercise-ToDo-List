const urlTODO = "http://localhost:8080/todo";
const urlFOLDER = "http://localhost:8080/folder";

const vista_1 = document.getElementById("vista1-El");
const vista_2 = document.getElementById("vista2-El");
const vista_3 = document.getElementById("vista3-El");

vista1();

function vista1(){
	vista_2.innerHTML = ""
    vista_1.innerHTML="<h3>Folders</h3>";
    fetch(urlFOLDER)
    .then(response => response.json())
    .then(data => {
		data.forEach(folder =>{
			vista_1.innerHTML += `
            <div class="row">
                <div class="col-6">
                    - ${folder.nombre}
                </div>
                <div class="col-4">
                    <p class="cursor" onclick="viewFolder(${folder.id},'${folder.nombre}')">View Items</p>
                </div>
                <div class="col-2">
                    <p class="cursor" onclick="removeFolder(${folder.id},'${folder.nombre}')">Remove</p>
                </div>
            <div class="row">
            `
		})
        vista_1.innerHTML +=`
        <br>
        <div class="input-group">

            <input type="text" class="form-control" placeholder="New Folder" autocomplete="off" id="input1-el">
            <button class="btn btn-secondary" onclick="saveFolder(document.getElementById('input1-el'))">Add</button>

        </div>
        `
    })
    .catch(err => console.log(err))
}

function saveFolder(input){
	
    const folder = {
        nombre: input.value,
        userId: 1
    }
    const options = {
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(folder)
    }


    fetch(urlFOLDER, options);
    
	alert(`Folder "${input.value}" created`);    
	
    input.value = "";
    
    vista1();
    
}
function viewFolder(id, name){
	vista_1.innerHTML = "";
	vista2(name,id);
}

function removeFolder(id){

    const options = {
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        }
    }

    fetch(urlFOLDER + "/" +id, options);
    
    alert(`Folder removed`);  
    
    vista1();
}

function vista2(folderTitulo, folderId){
	vista_3.innerHTML = "";
    vista_2.innerHTML = `<h3 onclick='vista1()' class='cursor'>Folders > ${folderTitulo}</h3>`;
    let url = urlTODO + "/" + folderId;
    fetch(url)
    .then(response => response.json())
    .then(data => {
		data.forEach(todo =>{
			
			let checkbox;
			
			if(todo.isCompleted == 0){
				checkbox =`<input type="checkbox" class="form-check-input" onclick="editTodoCheckbox(this, '${todo.id}')">`
			}else{
				checkbox =`<input type="checkbox" checked="checked" class="form-check-input" onclick="editTodoCheckbox(this, '${todo.id}')">`
			}
						
			vista_2.innerHTML +=`
			<div class="row">
                <div class="col-1">
                	${checkbox}
                </div>
                <div class="col-9">
                    ${todo.description}
                </div>
                <div class="col-2">
                    <p class="cursor" onclick="vista3('${todo.id}','${folderId}','${todo.description}', '${folderTitulo}')">Edit</p>
                </div>
            <div class="row">
        `
        })
        vista_2.innerHTML +=`
        <br>
        <div class="input-group">

            <input type="text" class="form-control" placeholder="New Task" autocomplete="off" id="input2-el">
            <button class="btn btn-secondary" onclick="saveTodo(document.getElementById('input2-el'),'${folderId}','${folderTitulo}')">Add</button>

        </div>
        `
    })
    .catch(err => console.log(err))
}

function saveTodo(input, folderId, folderTitulo){
	
	const todo = {
        description: input.value,
        isCompleted: 0,
        folderId: folderId
    }
    const options = {
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(todo)
    }

    fetch(urlTODO, options);
    
    alert(`New ToDo added to folder "${folderTitulo}"`);
    
    input.value = "";
    
    vista2(folderTitulo,folderId);
}

function vista3(todoId, folderId, tituloToDo, folderTitulo){
	
	vista_2.innerHTML = ''
	vista_3.innerHTML = `<h3>Editing Task "${tituloToDo}"</h3>`
	
	vista_3.innerHTML +=`
		<br>
		<input type="text" class="form-control" placeholder="New Name" autocomplete="off" id="input4-el">
		<br>
		<button class="btn btn-secondary" style="width:30%;"onclick="editTodo('${todoId}',document.getElementById('input4-el'),'${folderId}','${folderTitulo}')">Save</button>
		<button class="btn btn-secondary" style="width:30%;" onclick="vista2('${folderTitulo}','${folderId}')">Cancel</button>
	`
	
}
function editTodoCheckbox(checkbox, id){
	
	const options = {
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        }
    }
	
	let isCompleted;
	
	if(checkbox.checked){
		isCompleted = 1;
	}else{
		isCompleted = 0;
	}
	
	fetch(urlTODO + "/" + id + "/isComplete/" + isCompleted, options);
}


function editTodo(todoId, input, folderId, folderTitulo){
	
    const options = {
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        }
    }

    fetch(urlTODO + "/" + todoId + "/description/" + input.value, options);
    
    alert(`Name changed to ${input.value}`);
    
    input.value = "";
    
    vista2(folderTitulo,folderId);
}