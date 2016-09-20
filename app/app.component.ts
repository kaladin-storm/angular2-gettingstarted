import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';

@Component({
    selector: 'pm-app',
    template: `
                <div> 
                    <img src="https://irisopenspace.co.uk/Content/images/iris_openspace_logo_alpha_350px.png">
                    <h1>{{pageTitle}}</h1>
                    <pm-products></pm-products>
                </div>
                `,
    directives: [ProductListComponent]
})

export class AppComponent {
    pageTitle: string = "Openspace Product Management"
}