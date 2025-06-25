-- Scenario 3: Reminders for Loans Due in Next 30 Days

DECLARE
    v_due_date DATE := SYSDATE + 30;
BEGIN
    FOR rec IN (
        SELECT l.LoanID, l.EndDate, c.Name
        FROM Loans l
        JOIN Customers c ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND v_due_date
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.LoanID ||
                             ' for customer ' || rec.Name ||
                             ' is due on ' || TO_CHAR(rec.EndDate, 'DD-Mon-YYYY'));
    END LOOP;
END;