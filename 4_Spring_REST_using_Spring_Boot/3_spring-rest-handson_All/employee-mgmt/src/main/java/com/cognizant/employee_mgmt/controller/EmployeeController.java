package com.cognizant.employee_mgmt.controller;

import com.cognizant.employee_mgmt.model.Employee;
import com.cognizant.employee_mgmt.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        return employeeService.getAllEmployees();
    }
}
