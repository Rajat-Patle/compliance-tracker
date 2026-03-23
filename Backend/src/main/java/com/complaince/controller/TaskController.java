package com.complaince.controller;

import com.complaince.entity.Task;
import com.complaince.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/client/{clientId}")
    public List<Task> getTasksByClient(
            @PathVariable Long clientId,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String category
    ) {
        return taskService.getTasksByClient(clientId, status, category);
    }

    @PostMapping("/client/{clientId}")
    public Task createTask(@RequestBody Task task, @PathVariable Long clientId) {
        return taskService.createTask(task, clientId);
    }

    @PutMapping("/{taskId}/status")
    public Task updateStatus(@PathVariable Long taskId, @RequestParam String status) {
        return taskService.updateStatus(taskId, status);
    }
}