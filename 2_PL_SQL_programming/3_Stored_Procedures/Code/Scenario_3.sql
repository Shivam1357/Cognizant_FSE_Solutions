-- Scenario 3: TransferFunds – Between Accounts with Balance Check

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account_id IN NUMBER,
    p_to_account_id IN NUMBER,
    p_amount IN NUMBER
) IS
    v_from_balance NUMBER;
BEGIN
    -- Get source account balance
    SELECT Balance INTO v_from_balance
    FROM Accounts
    WHERE AccountID = p_from_account_id
    FOR UPDATE;

    -- Check for sufficient balance
    IF v_from_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
    END IF;

    -- Deduct from source
    UPDATE Accounts
    SET Balance = Balance - p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_from_account_id;

    -- Add to destination
    UPDATE Accounts
    SET Balance = Balance + p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_to_account_id;

    -- Commit the transaction
    COMMIT;
END;




-- USAGE

-- BEGIN
--     TransferFunds(1, 2, 200);
-- END;