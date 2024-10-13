export default class Product {
    public id: number;
    public description: string | null;
    public salePrice: number;
    public category: string | null;
    public image: string | null;

    constructor(id: number, description: string | null, salePrice: number, category: string | null, image: string | null) {
        this.id = id;
        this.description = description;
        this.salePrice = salePrice;
        this.category = category;
        this.image = image;
    }
}
