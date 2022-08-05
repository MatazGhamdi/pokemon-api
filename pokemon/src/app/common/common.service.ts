import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  private loadingBar = new BehaviorSubject<boolean>(false);
  loadingBarObserver = this.loadingBar.asObservable();

  constructor(private http: HttpClient) {
  }

  private showLoading = false;

  showLoadingOverlay() {
    this.showLoading = true;
    this.loadingBar.next(this.showLoading)
  }

  hideLoadingOverlay() {
    this.showLoading = false;
    this.loadingBar.next(this.showLoading)
  }

}
