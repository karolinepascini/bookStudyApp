import { Component} from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{
 activeTab;

  constructor() { }
  segmentChange(e){
    this.activeTab = e.target.value;
  }
}
