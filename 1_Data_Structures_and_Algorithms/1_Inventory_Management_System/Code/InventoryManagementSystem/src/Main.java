public class Main {
    public static void main(String[] args) {
        Inventory inventory = new Inventory();

        inventory.addProduct(new Product(101, "Laptop", 10, 55000));
        inventory.addProduct(new Product(102, "Keyboard", 25, 1200));
        inventory.displayInventory();

        inventory.updateProduct(102, 30, 1100);
        inventory.deleteProduct(101);
        inventory.displayInventory();
    }
}
