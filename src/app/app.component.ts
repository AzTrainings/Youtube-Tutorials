import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @ViewChild(MatTabGroup) mattabgroup: MatTabGroup;

  changeTab(selectedTabIndex){
    this.mattabgroup.selectedIndex = selectedTabIndex;
  }
}
