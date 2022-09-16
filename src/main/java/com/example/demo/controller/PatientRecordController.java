package com.example.demo.controller;

import com.example.demo.model.PatientRecord;
import com.example.demo.repository.PatientRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class PatientRecordController {
    @Autowired
    PatientRecordRepository patientRecordRepository;

    @GetMapping
    public String getWelcomeMessage(){
        return "<h1> Welcome to Patient Management System!!</h1>";
    }

    @GetMapping("/listPatients")
    public List<PatientRecord> getAllPatients() {
        return patientRecordRepository.findAll();
    }

    @GetMapping("/patient/{id}")
    public PatientRecord getStudent(@PathVariable Long id) {
        return patientRecordRepository.findById(id).get();
    }

    @DeleteMapping("/patient/{id}")
    public List<PatientRecord> deletePatient(@PathVariable Long id) {
        patientRecordRepository.delete(patientRecordRepository.findById(id).get());
        return patientRecordRepository.findAll();
    }

    @PostMapping("/patient")
    public List<PatientRecord> addPatient(@RequestBody PatientRecord patientRecord) {
        patientRecordRepository.save(patientRecord);
        return patientRecordRepository.findAll();
    }

    @PutMapping("/patient/{id}")
    public List<PatientRecord> updateStudent(@RequestBody PatientRecord patientRecord, @PathVariable Long id) {
        PatientRecord patientRecord1Obj = patientRecordRepository.findById(id).get();
        patientRecord1Obj.setName(patientRecord.getName());
        patientRecord1Obj.setAddress(patientRecord.getAddress());
        patientRecordRepository.save(patientRecord1Obj);
        return patientRecordRepository.findAll();
    }

}
