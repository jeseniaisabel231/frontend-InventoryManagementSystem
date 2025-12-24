import { Component } from "@angular/core";

@Component({
	selector: 'table-component',
	standalone: true,
	template:`
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
              <tr class="hover:bg-gray-50 transition-colors">
                <td class="py-4 px-6 text-sm text-gray-700 font-medium">codigo</td>
                <td class="py-4 px-6 text-sm text-gray-600">nombre</td>
                <td class="py-4 px-6 text-sm text-gray-600">categoria</td>
                <td class="py-4 px-6 text-sm text-gray-900 font-semibold">precio</td>
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
              
          </tbody>
        </table>`
})
export class TableComponent {}