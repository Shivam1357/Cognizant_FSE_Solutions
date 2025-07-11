package com.cognizant.employee_mgmt.model;

import java.util.List;

public class Employee {
    private int id;
    private String name;
    private double salary;
    private boolean permanent;
    private Department department;
    private List<Skill> skills;

    public Employee(){}

    public void setId(int id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setSalary(double salary) {
        this.salary = salary;
    }
    public void setPermanent(boolean permanent) {
        this.permanent = permanent;
    }
    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public double getSalary() {
        return salary;
    }
    public boolean isPermanent() {
        return permanent;
    }
    public Department getDepartment() {
        return department;
    }
    public void setDepartment(Department department) {
        this.department = department;
    }
    public List<Skill> getSkills() {
        return skills;
    }
    public void setSkills(List<Skill> skills) {
        this.skills = skills;
    }
}
