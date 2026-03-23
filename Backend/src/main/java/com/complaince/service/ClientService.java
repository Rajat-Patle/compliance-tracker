package com.complaince.service;

import com.complaince.entity.Client;
import com.complaince.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

          private final ClientRepository clientRepository;

          public ClientService(ClientRepository clientRepository) {
                    this.clientRepository = clientRepository;
          }

          public List<Client> getAllClients() {
                    return clientRepository.findAll();
          }

          public Client saveClient(Client client) {
                    return clientRepository.save(client);
          }

          public List<Client> saveAllClients(List<Client> clients) {
                    return clientRepository.saveAll(clients);
          }
}