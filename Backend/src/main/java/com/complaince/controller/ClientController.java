package com.complaince.controller;

import com.complaince.entity.Client;
import com.complaince.service.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
@CrossOrigin
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    // Get all clients
    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    // Add single client
    @PostMapping
    public Client addClient(@RequestBody Client client) {
        return clientService.saveClient(client);
    }


    @PostMapping("/bulk")
    public List<Client> addClients(@RequestBody List<Client> clients) {
        return clientService.saveAllClients(clients);
    }
}