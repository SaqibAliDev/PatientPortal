import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentComplete = new Subject<any>();
  paymentComplete$ = this.paymentComplete.asObservable();
  patientPaymentDetail = {
    statmentInformation: {
      statement: '',
      month: null,
      day: null,
      year: null
    },
    paymentInformation: {
      cardholderName: '',
      cardholderNumber: '',
      date: '',
      cvv: '',
      remember: false
    }
  }

  constructor() { }

  getStatementInformation() {
    return this.patientPaymentDetail;
  }
  setStatementInformation(patientPaymentDetail: any) {
    this.patientPaymentDetail = patientPaymentDetail;
  }

  complete() {
    this.paymentComplete.next(this.patientPaymentDetail.statmentInformation);
  }
}
