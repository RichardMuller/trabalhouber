import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CMeraPage } from '../c-mera/c-mera';
import { ImagensPage } from '../imagens/imagens';
import { OpEsPage } from '../op-es/op-es';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CMeraPage;
  tab2Root: any = ImagensPage;
  tab3Root: any = OpEsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
