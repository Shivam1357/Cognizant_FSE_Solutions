-- Scenario 2: UpdateEmployeeBonus – Bonus by Department

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_bonus_percent / 100))
    WHERE Department = p_department;

    COMMIT;
END;


-- USAGE

-- BEGIN
--     UpdateEmployeeBonus('IT', 10); 
-- END;