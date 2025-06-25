-- Scenario 1: ProcessMonthlyInterest, 1% Interest for Savings Accounts

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    FOR rec IN (
        SELECT AccountID, Balance
        FROM Accounts
        WHERE AccountType = 'Savings'
    ) LOOP
        UPDATE Accounts
        SET Balance = Balance + (rec.Balance * 0.01),
            LastModified = SYSDATE
        WHERE AccountID = rec.AccountID;
    END LOOP;

    COMMIT;
END;


-- USAGE

-- BEGIN
--     ProcessMonthlyInterest;
-- END;