import { Component, effect, inject, input } from "@angular/core";
import type { Product } from "../../interfaces/product.interface";

@Component({
	selector:'display-component',
	template:`
		<span>ID: {{productInput()?.id ?? 0}}</span>
	`
})
export class DisplayComponent{
	public productInput = input<Product | null>()
}