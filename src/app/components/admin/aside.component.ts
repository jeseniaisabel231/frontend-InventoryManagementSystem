import { Component } from "@angular/core";

@Component({
	selector: 'aside-component',
	standalone: true,
	template:`
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
	`
})
export class AsideComponent {}