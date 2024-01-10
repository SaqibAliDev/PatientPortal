import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaymentService } from 'src/app/core/services/payment.service';

@Component({
  selector: 'app-statement-detail',
  templateUrl: './statement-detail.component.html',
  styleUrls: ['./statement-detail.component.css']
})
export class StatementDetailComponent implements OnInit {
  @Output() onNext = new EventEmitter<void>();

  personalInformation: any;
  submitted: boolean = false;
  months: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor(private paymentService: PaymentService) {
  }

  ngOnInit(): void {
    this.personalInformation = this.paymentService.getStatementInformation().statmentInformation;
  }

  nextPage() {
    if (this.personalInformation.statement && this.personalInformation.month && this.personalInformation.month && this.personalInformation.day && this.personalInformation.year) {
      this.paymentService.patientPaymentDetail.statmentInformation = this.personalInformation;
      this.onNext.emit();
      console.log(this.personalInformation)
      return;
    }
    this.submitted = true;
  }
}
