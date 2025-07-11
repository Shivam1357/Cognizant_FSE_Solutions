package com.cognizant.employee_mgmt.dao;


import com.cognizant.employee_mgmt.model.Department;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DepartmentDao {

    private static List<Department> departmentList;

    public DepartmentDao() {
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        departmentList = (List<Department>) context.getBean("deptList");
    }
    public List<Department> getDepartmentList() {
        return departmentList;
    }
}
