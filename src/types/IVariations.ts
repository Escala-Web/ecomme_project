export interface IVariationCreate {
    name: string
}

export interface IVariationContent {
    id_variant_attribute: number,
    name: string
}

export interface IVariation {
    success: boolean,
    message: string,
    content: IVariationContent[]
}