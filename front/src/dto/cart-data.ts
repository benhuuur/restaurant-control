import { ProductData } from "./product-data"

export interface CartData {
    product : ProductData
    quantity : number,
    total : number
}