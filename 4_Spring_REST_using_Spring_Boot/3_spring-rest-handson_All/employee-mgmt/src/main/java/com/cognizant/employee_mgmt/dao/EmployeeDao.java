package com.cognizant.employee_mgmt.dao;

import com.cognizant.employee_mgmt.model.Employee;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class EmployeeDao {
    private static List<Employee> EmployeeList;

    public EmployeeDao() {
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        EmployeeList = (List<Employee>) context.getBean("employeeList");
    }

    public List<Employee> getAllEmployees() {
        return EmployeeList;
    }
}
