package com.tomas.controladores;

import java.util.ArrayList;
import java.util.Optional;

import com.tomas.entidades.ToDo;
import com.tomas.requestBody.ToDoRequest;
import com.tomas.servicios.ToDoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todo")
public class ToDoController {

    @Autowired
    ToDoService taskService;

    @GetMapping()
    public ArrayList<ToDo> getToDo(){
        return taskService.getToDo();
    }
    
    @GetMapping(path = "/{id}")
    public ArrayList<ToDo> getToDobyFolder(@PathVariable("id")Long id){
    	
    	return taskService.getToDobyFolder(id);
    }
    
    @PostMapping
    public ToDo saveTask(@RequestBody ToDoRequest request){
    	
        return taskService.saveToDo(request);
    }

}
