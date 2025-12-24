import { Component, effect, inject, signal } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Product } from "../interfaces/product.interface";
import { FormProductComponent } from "../components/admin/formProduct.component";

@Component({
  template: `<div class="flex h-screen bg-[#F5F6FA] font-sans text-gray-800">
  
  <aside class="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0 transition-all duration-300 ">

    <div class="h-16 flex items-center px-6 border-b border-gray-100">
			<svg xmlns="http://www.w3.org/2000/svg" width="28"  viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h14M5 12h14M5 7h14" /></svg>
      <span class="w-8 h-8 bg-black rounded-full mr-2 ml-4"></span> <span class="text-xl font-bold tracking-tight">AutosKing</span>
    </div>

    <nav class="flex-1 overflow-y-auto py-4 ">
      <ul class="space-y-1 px-3">
        <li>
          <a href="#" class="flex items-center gap-5 px-3 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors group ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"/></svg> <span class="font-medium">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="#" class="flex items-center gap-5 px-3 py-2.5 bg-gray-100 text-gray-900 rounded-lg" aria-current="page">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.47 2.152a1 1 0 0 1 1.06 0l6.904 4.315L12 10.84L4.566 6.467zM3.008 7.871A1 1 0 0 0 3 8v8a1 1 0 0 0 .47.848L11 21.554v-8.982L3.008 7.87zM13 21.554l7.53-4.706A1 1 0 0 0 21 16V8q0-.065-.008-.129L13 12.571z" clip-rule="evenodd"/></svg> <span class="font-medium">Productos</span>
          </a>
        </li>

        <li>
          <a href="#" class="flex items-center gap-5 px-3 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118M112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48s-21.49-48-48-48"/></svg>
            <span class="font-medium">Categorías</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-5 px-3 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M704 192h160v736H160V192h160v64h384zM288 512h448v-64H288zm0 256h448v-64H288zm96-576V96h256v96z"/></svg>
            <span class="font-medium">Subcategorías</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-5 px-3 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 16"><path fill="currentColor" d="M12 12.041v-.825c1.102-.621 2-2.168 2-3.716C14 5.015 14 3 11 3S8 5.015 8 7.5c0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959"/><path fill="currentColor" d="M5.112 12.427c.864-.565 1.939-.994 3.122-1.256a5.7 5.7 0 0 1-.633-.922a5.7 5.7 0 0 1-.726-2.748c0-1.344 0-2.614.478-3.653c.464-1.008 1.299-1.633 2.488-1.867C9.577.786 8.873.001 7 .001c-3 0-3 2.015-3 4.5c0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h4.359q.34-.303.753-.573z"/></svg>
            <span class="font-medium">Proveedores</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>

  <div class="flex-1 flex flex-col overflow-hidden">

    <header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
      <div class="relative w-96">
				<svg class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48M38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74"/></svg>
        <input 
          type="search" 
          placeholder="Buscar" 
          class="w-full bg-gray-100 text-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm"
        >
      </div>

      <div class="flex items-center gap-6">
        
        <button class="text-gray-500 hover:text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/></svg></button>
        <button class="text-gray-500 hover:text-gray-700 relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
          <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div class="flex items-center gap-3 pl-6 border-l border-gray-200">
          <div class="text-right hidden md:block">
            <div class="text-sm font-bold text-gray-900">Isabel Pazto</div>
            <div class="text-xs text-gray-500">Admin</div>
          </div>
          <div class="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Isabel+Pazto&background=random" alt="Avatar" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto p-8">
      
      <h1 class="text-2xl font-bold text-gray-900 mb-6">Productos</h1>

      <section class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6" aria-label="Herramientas de tabla">
        
        <div class="flex items-center gap-3 flex-wrap">
          <span class="text-sm font-medium text-gray-500">Filtrar por:</span>
          
          <div class="relative">
            <select class="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:border-purple-500 cursor-pointer">
              <option>Categorías</option>
            </select>
            <span class="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.308L8.192 10.5h7.616z"/></svg></span>
          </div>

          <div class="relative">
            <select class="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:border-purple-500 cursor-pointer">
              <option>Subcategorías</option>
            </select>
            <span class="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.308L8.192 10.5h7.616z"/></svg></span>
          </div>

          <div class="relative">
             <select class="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:border-purple-500 cursor-pointer">
              <option>Precio</option>
            </select>
            <span class="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.308L8.192 10.5h7.616z"/></svg></span>
          </div>
        </div>

        <div class="flex items-center gap-3 w-full md:w-auto">
          <div class="relative flex-1 md:flex-none bg-yellow-100">

						<svg class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48M38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74" /></svg>
            <input
              type="text"
              placeholder="Buscar por nombre..."
              class="w-full md:w-64 border border-gray-300 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-purple-500"
            >
          </div>
          
          <button class="bg-[#6200EE] hover:bg-[#5000c9] text-white text-sm font-medium py-2 px-4 rounded-lg shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap">
            <span>+</span> Crear producto
          </button>
        </div>
      </section>

      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-white border-b border-gray-100">
              <th scope="col" class="py-4 px-6 text-sm font-semibold text-gray-900  ">Código</th>
              <th scope="col" class="py-4 px-6 text-sm font-semibold text-gray-900  ">Producto</th>
              <th scope="col" class="py-4 px-6 text-sm font-semibold text-gray-900  ">Categoría</th>
              <th scope="col" class="py-4 px-6 text-sm font-semibold text-gray-900  ">Precio</th>
              <th scope="col" class="py-4 px-6 text-sm font-semibold text-gray-900  ">Estado</th>
              <th scope="col" class="py-4 px-6 text-sm font-semibold text-gray-900  ">Acciones</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            
            @for (producto of productService.productos(); track $index) {
                <tr class="hover:bg-gray-50 transition-colors">
                  <td class="py-4 px-6 text-sm text-gray-700 font-medium">{{producto.code}}</td>
                  <td class="py-4 px-6 text-sm text-gray-600">{{producto.name}}</td>
                  <td class="py-4 px-6 text-sm text-gray-600">{{producto.description}}</td>
                  <td class="py-4 px-6 text-sm text-gray-900 font-semibold">{{producto.price}}</td>
                  <td class="py-4 px-6 text-sm">
                    <span 
                      class="px-3 py-1 rounded-full text-xs font-medium"
                      >
                      estado
                    </span>
                  </td>
                  <td class="py-4 px-6 text-sm">
                     <div class="flex items-center gap-2">
                       <button class="px-3 py-1 border border-gray-200 text-gray-600 rounded text-xs hover:bg-gray-50 hover:border-gray-300">Ver</button>
                       <button class="px-3 py-1 border border-gray-200 text-gray-600 rounded text-xs hover:bg-gray-50 hover:border-gray-300">Actualizar</button>
                       <button class="px-3 py-1 border border-red-100 text-red-600 bg-red-50 rounded text-xs hover:bg-red-100">Eliminar</button>
                     </div>
                  </td>
                </tr>

              }
              
          </tbody>
        </table>
        <form-product-component></form-product-component>
      </div>

    </main>
  </div>
</div>`,
  imports: [FormProductComponent],
})
export class ProductPage {
  public productService = inject(ProductService)
  public producto = signal<Product>({} as Product)
  public id = signal<number>(0)

  constructor() {
    effect(() => {
      const id = this.id()

      this.productService.obtenerProducto(id).subscribe({
        next: (respuesta: any) => {
          this.producto.set(respuesta)
        }
      })
    })
  }
}