package com.cognizant.employee_mgmt.service;

import com.cognizant.employee_mgmt.dao.EmployeeDao;
import com.cognizant.employee_mgmt.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;

    @Transactional
    public List<Employee> getAllEmployees() {
        return employeeDao.getAllEmployees();
    }
}
