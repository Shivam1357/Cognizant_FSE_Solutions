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

    public Product(int i, String string, int j, int k) {
        //TODO Auto-generated constructor stub
    }

    public Integer getProductId() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getProductId'");
    }
}