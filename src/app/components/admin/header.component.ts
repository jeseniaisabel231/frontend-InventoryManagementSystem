import { Component } from "@angular/core";

@Component({
	selector: 'header-component',
	standalone: true,
	template:`
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
    </header>`
})
export class HeaderComponent {}