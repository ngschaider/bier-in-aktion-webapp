import './components/App.css';

class Product {
    id: number;
    brand: string;
    name: string;
    originalPrice: number;
    discountPrice: number;
    description: string;
    market: any;
    startDate: Date;
    endDate: Date;
    additionalInfo: string;
    
    constructor(obj: any) {
        this.id = obj.id;
        this.brand = obj.brand;
        this.name = obj.name;
        this.originalPrice = obj.originalPrice;
        this.discountPrice = obj.discountPrice;
        this.description = obj.description;
        this.market = obj.market;
        this.startDate = new Date(obj.startDate);
        this.endDate = new Date(obj.endDate);
        this.additionalInfo = obj.additionalInfo;
    }
    
    public get availability() {
        return 'Verfügbar von ' + this.startDate.toDateString() + ' bis ' + this.endDate.toDateString();
    }

    public get discountPercentage() {
        return Math.round((100 - (this.discountPrice / this.originalPrice * 100)) * 100) / 100;
    }

    public get discountColor() {
        if(this.discountPercentage < 10)
            return getComputedStyle(document.querySelector(':root') as Element).getPropertyValue('--light-red');
        else if(this.discountPercentage >= 10 && this.discountPercentage < 25)
            return getComputedStyle(document.querySelector(':root') as Element).getPropertyValue('--medium-orange');
        else if(this.discountPercentage >= 25 && this.discountPercentage < 40)
            return getComputedStyle(document.querySelector(':root') as Element).getPropertyValue('--medium-yellow');
        else if(this.discountPercentage >= 40)
            return getComputedStyle(document.querySelector(':root') as Element).getPropertyValue('--light-green');
        return '#ffffff';
    }
}

export default Product;