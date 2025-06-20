public class FinancialForecast {

    public static double predictFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }

        return predictFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double stVal = 1000.0;     
        double growthRate = 0.10;    
        int forecastYears = 5;             

        double futureValueRecursive = predictFutureValue(stVal, growthRate, forecastYears);
        System.out.printf("Future Value after %d years: ₹%.2f%n", forecastYears, futureValueRecursive);

    }
}
