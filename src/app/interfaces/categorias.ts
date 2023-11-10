import { Producto } from "./productos"

export interface Categoria{
Nombre:string
id:number
ingUrl:string
productos:Producto[]
}