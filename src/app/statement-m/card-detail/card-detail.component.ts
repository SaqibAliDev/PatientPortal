import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaymentService } from 'src/app/core/services/payment.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Output() onNext = new EventEmitter<void>();
  @Output() onPrev = new EventEmitter<void>();
  paymentInformation: any;
  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentInformation = this.paymentService.patientPaymentDetail.paymentInformation;
  }

  nextPage() {
    if (this.paymentInformation.cardholderName && this.paymentInformation.cardholderNumber && this.paymentInformation.date && this.paymentInformation.cvv) {
      this.paymentService.patientPaymentDetail.paymentInformation = this.paymentInformation;
      this.onNext.emit();
    }
  }
  prevPage() {
    this.onPrev.emit();
  }

}
