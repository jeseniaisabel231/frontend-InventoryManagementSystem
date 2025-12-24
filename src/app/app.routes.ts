import { Routes } from '@angular/router';
import { ProductPage } from './pages/product.page';

export const routes: Routes = [
	{
		path: 'products',
		component: ProductPage
	},
	{
		path: '**',
		redirectTo: 'products',
		pathMatch: 'full'
	},
];
