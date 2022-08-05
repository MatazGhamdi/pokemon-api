import { Component, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent {
  @Input() showLoading = false;

  constructor(private commonService: CommonService) {
    this.commonService.loadingBarObserver.subscribe(val =>{
      this.showLoading = val;
    })
   }

}
