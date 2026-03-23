package com.complaince.repository;

import com.complaince.entity.Client;
import com.complaince.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

          List<Task> findByClient(Client client);

          List<Task> findByClientAndStatus(Client client, String status);

          List<Task> findByClientAndCategory(Client client, String category);

          List<Task> findByClientAndStatusAndCategory(Client client, String status, String category);
}