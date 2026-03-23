package com.complaince.service;

import com.complaince.entity.Client;
import com.complaince.entity.Task;
import com.complaince.repository.ClientRepository;
import com.complaince.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final ClientRepository clientRepository;

    public TaskService(TaskRepository taskRepository, ClientRepository clientRepository) {
        this.taskRepository = taskRepository;
        this.clientRepository = clientRepository;
    }

    // 🔥 UPDATED METHOD (with filtering)
    public List<Task> getTasksByClient(Long clientId, String status, String category) {

        Client client = clientRepository.findById(clientId).orElseThrow();

        List<Task> tasks;

        if (status != null && category != null) {
            tasks = taskRepository.findByClientAndStatusAndCategory(client, status, category);
        } else if (status != null) {
            tasks = taskRepository.findByClientAndStatus(client, status);
        } else if (category != null) {
            tasks = taskRepository.findByClientAndCategory(client, category);
        } else {
            tasks = taskRepository.findByClient(client);
        }
        tasks.sort((a, b) -> Boolean.compare(b.isOverdue(), a.isOverdue()));

        return tasks;
    }

    public Task createTask(Task task, Long clientId) {
        Client client = clientRepository.findById(clientId).orElseThrow();
        task.setClient(client);
        return taskRepository.save(task);
    }

    public Task updateStatus(Long taskId, String status) {
        Task task = taskRepository.findById(taskId).orElseThrow();
        task.setStatus(status);
        return taskRepository.save(task);
    }
}