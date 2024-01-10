import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-statement-home',
  templateUrl: './statement-home.component.html',
  styleUrls: ['./statement-home.component.css']
})
export class StatementHomeComponent {

  items!: MenuItem[];
  currentStep = 0;
  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Statement',
    },
    {
      label: 'Payment',
    }
    ];
  }

  // Add logic to move to the next step
  nextStep() {
    if (this.currentStep < this.items.length - 1) {
      this.currentStep++;
    }
  }
  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
