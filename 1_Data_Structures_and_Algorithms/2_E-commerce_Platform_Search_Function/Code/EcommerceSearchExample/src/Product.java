public class Product {
    int productId;
    String productName;
    String category;
    public double price;
    public int quantity;

    public Product(int productId, String productName, String catergory){
        this.productId = productId;
        this.productName = productName;
        this.category = catergory;
    }
}