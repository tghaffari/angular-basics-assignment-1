import { Component } from "@angular/core";

@Component({
    selector: 'successMessage',
    template: `<p> Action completed successfully! </p>`,
    styles: [`
    p {
        color: green;
    }
    `]
})

export class SuccessMessageComponent {
    
}