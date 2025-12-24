import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "../../services/product.service";
import type { Product } from "../../interfaces/product.interface";



@Component({
	selector: 'form-product-component',
	imports:[ReactiveFormsModule],
	template: `<form (ngSubmit)="onSubmit()" [formGroup]="formulario">
		<input type="text" placeholder="Codigo" formControlName="code">
		<input type="text" placeholder="Nombre" formControlName="name">
		<input type="number" placeholder="Precio" formControlName="price">
		<input type="text" placeholder="Descripcion" formControlName="description" >
		<input type="number" placeholder="Stock" formControlName="stock">
		<input type="text" placeholder="Marca" formControlName="trademark">
		<input type="text" placeholder="Subcategoria" formControlName="subcategory">
		<input type="text" placeholder="Proveedor" formControlName="supplier">
		<button class="bg-yellow-100">Crear producto</button>
	</form>
	`
})
export class FormProductComponent {
	public productService = inject(ProductService)
	public formulario = new FormGroup({
		code:new FormControl('1234'),
		name:new FormControl('forro de volante'),
		price:new FormControl('12'),
		description:new FormControl('El forro es grande e impermeable de todo el caso'),
		stock:new FormControl('12'),
		trademark:new FormControl('Sparco'),
		subcategory:new FormControl('sparco'),
		supplier:new FormControl('sparcooji')
	})

	onSubmit(){
		this.productService.registrarProducto(this.formulario.value).subscribe()
	}
}