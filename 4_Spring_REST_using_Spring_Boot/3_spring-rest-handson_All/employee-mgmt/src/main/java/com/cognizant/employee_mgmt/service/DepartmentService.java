package com.cognizant.employee_mgmt.service;

import com.cognizant.employee_mgmt.dao.DepartmentDao;
import com.cognizant.employee_mgmt.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentDao departmentDao;

    @Transactional
    public List<Department> getAllDepartments() {
        return departmentDao.getDepartmentList();
    }
}
