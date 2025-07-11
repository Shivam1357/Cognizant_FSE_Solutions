package com.cognizant.employee_mgmt.controller;

import com.cognizant.employee_mgmt.model.Department;
import com.cognizant.employee_mgmt.service.DepartmentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DepartmentController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DepartmentController.class);

    @Autowired
    private DepartmentService departmentService;

    @GetMapping("/departments")
    public List<Department> getAllDepartments() {
        LOGGER.info("Start - getAllDepartments()....");
        List<Department> dept = departmentService.getAllDepartments();
        LOGGER.info("Department list Size: " + dept.size());
        LOGGER.info("End - getAllDepartments()....");
        return dept;
    }


}
