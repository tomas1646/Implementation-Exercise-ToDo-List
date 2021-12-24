package com.tomas.servicios;

import java.util.ArrayList;
import java.util.Optional;

import com.tomas.entidades.Folder;
import com.tomas.entidades.ToDo;
import com.tomas.repositorios.FolderRepository;
import com.tomas.repositorios.ToDoRespository;
import com.tomas.requestBody.ToDoRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToDoService {
    
    @Autowired
    ToDoRespository todoRespository;
    
    @Autowired
    FolderRepository folderRepository ;

    public ArrayList<ToDo> getToDo(){
        return (ArrayList<ToDo>) todoRespository.findAll();
    }

    public ToDo saveToDo(ToDoRequest request){
    	
    	ToDo tarea = new ToDo();
    	tarea.setDescription(request.getDescription());
    	tarea.setIsCompleted(request.getIsCompleted());
    	
    	Folder folder = folderRepository.findById(request.getFolderId()).get();
    	tarea.setFolder(folder);
    	
    	if(request.getTodoId()!=null) {
    		tarea.setId(request.getTodoId());
    	}
    	
        return todoRespository.save(tarea);
    }
    
    public ArrayList<ToDo> getToDobyFolder(Long folderId){
    	
    	Folder folder = folderRepository.findById(folderId).get();
    	
    	return (ArrayList<ToDo>) todoRespository.findByFolder(folder);
    }

}
