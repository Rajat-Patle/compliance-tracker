package com.complaince.entity;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Task {

          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          private String title;
          private String description;
          private String category;
          private LocalDate dueDate;
          private String status; // Pending / Completed
          private String priority;

          @ManyToOne
          @JoinColumn(name = "client_id")
          private Client client;

          @Transient
          @JsonProperty("overdue")
          public boolean isOverdue() {
                    return this.dueDate != null &&
                                  this.dueDate.isBefore(LocalDate.now()) &&
                                  "Pending".equalsIgnoreCase(this.status);
          }
}