export class IProductModel {
    name?: string;
    category?: string;
    quntity?: number;
    price?: number;
    matufacture_date?: Date;
    expiry_date?: Date;
    lot_no?: number;
}

export enum categoryType {
    LIQUID = 'Liquid',
    SOLID = 'Solid',
    GAS = 'Gas'
}