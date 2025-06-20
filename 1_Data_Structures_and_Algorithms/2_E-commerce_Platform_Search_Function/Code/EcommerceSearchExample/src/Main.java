public class Main {

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(105, "Smartphone", "Electronics"),
            new Product(110, "T-shirt", "Clothing")
        };

        System.out.println("Linear Search:");

        Product result1 = SearchService.linearSearch(products, 102);
        System.out.println(result1 != null ? result1.productName : "Not found");

        System.out.println("\nBinary Search:");
        Product result2 = SearchService.binarySearch(products, 102);
        System.out.println(result2 != null ? result2.productName : "Not found");
    }
}