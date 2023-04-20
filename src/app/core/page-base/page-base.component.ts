import { Component } from '@angular/core';
import {NaveMenu} from '../../model/type-def'

@Component({
  selector: 'app-page-base',
  templateUrl: './page-base.component.html',
  styleUrls: ['./page-base.component.scss']
})
export class PageBaseComponent {
  menuList:NaveMenu[]=[{menuName:'Fast Food centre',url:'fast-food-centre'},{
    menuName: "Operators", url:'operators'
  }];
}
