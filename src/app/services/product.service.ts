import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../environment/environment";
import { HttpClient } from "@angular/common/http";
import type { Product } from "../interfaces/product.interface";
import { tap, type catchError } from "rxjs";

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private urlBackend = environment.urlApi;
	private http = inject(HttpClient)
	public productos = signal<Product[]>([])

	constructor() {
		this.obtenerProductos().subscribe()
	}

	obtenerProductos() {
		return this.http.get(`${this.urlBackend}/api/products`).pipe(tap((respuesta: any) => this.productos.set(respuesta.productos)))
	}

	obtenerProducto(id: number) {
		return this.http.get(`${this.urlBackend}/api/products/${id}`)
	}

	registrarProducto(producto: any) {
		return this.http.post(`${this.urlBackend}/api/products`, producto).pipe(tap((respuesta: any) => this.productos.update((productosAnteriores => [...productosAnteriores, respuesta]))));
	}

	actualizarProducto(id: number, producto: Product) {
		return this.http.put(`${this.urlBackend}/api/products/${id}`, producto).pipe(tap((respuesta: any) => this.productos.update((productosAnteriores) => productosAnteriores.map((producto) => producto.id === id ? respuesta : producto))))
	}

	eliminar(id: number) {
		return this.http.delete(`${this.urlBackend}/api/products/${id}`).pipe(tap(() => this.productos.update((productosAnteriores) => productosAnteriores.filter((producto) => producto.id !== id))))
	}
}
