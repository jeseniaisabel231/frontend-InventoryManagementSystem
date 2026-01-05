import { Component, inject, input } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "../../services/product.service";
import type { Product } from "../../interfaces/product.interface";


export type Actions = 'Crear' | 'Actualizar' | 'Visualizar';
@Component({
	selector: 'form-product-component',
	imports: [ReactiveFormsModule],
	template: `<dialog #modal class="min-h-screen flex bg-gray-50 p-8 justify-center items-start">
  <div class="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-gray-100">
    
    <div class="p-6 border-b border-gray-100">
      <h2 class="text-2xl font-bold text-gray-800">{{ actions() }}  Producto</h2>
      <p class="text-sm text-gray-500 italic">Complete la información técnica del producto.</p>
    </div>

    <form (ngSubmit)="onSubmit()" [formGroup]="formulario" class="p-6 space-y-6">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Código</label>
          <input type="text" formControlName="code" placeholder="Ej: PROD-1234"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nombre del Producto</label>
          <input type="text" formControlName="name" placeholder="Ej: Forro de volante"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Precio ($)</label>
          <input type="number" formControlName="price" placeholder="0.00"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Stock Inicial</label>
          <input type="number" formControlName="stock" placeholder="Cantidad"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Marca</label>
          <input type="text" formControlName="trademark" placeholder="Ej: Sparco"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Proveedor</label>
          <input type="text" formControlName="supplierId" placeholder="Seleccionar proveedor"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all">
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Subcategoría</label>
        <input type="text" formControlName="subcategoryId" placeholder="Buscar categoría..."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all">
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
        <textarea formControlName="description" rows="3" placeholder="Detalles del producto..."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all resize-none"></textarea>
      </div>

      <div class="flex items-center justify-end space-x-4 pt-4 border-t border-gray-100">
        <button type="button" class="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors">
          Cancelar
        </button>
        <button type="submit" 
          class="bg-[#6322bc] hover:bg-[#4f1a96] text-white px-8 py-2 rounded-lg font-semibold shadow-md transition-all active:scale-95">
          Crear producto
        </button>
      </div>
    </form>
  </div>
</dialog>
	`
})
export class FormProductComponent {
	public actions = input.required<Actions>();
	public productService = inject(ProductService)
	public formulario = new FormGroup({
		code: new FormControl('PROD-1234'),
		name: new FormControl('forro de volante'),
		price: new FormControl('12'),
		description: new FormControl('El forro es grande e impermeable de todo el caso'),
		stock: new FormControl('12'),
		trademark: new FormControl('Sparco'),
		subcategoryId: new FormControl('1'),
		supplierId: new FormControl('1')
	})

	onSubmit() {
		this.productService.registrarProducto(this.formulario.value).subscribe()
	}
}