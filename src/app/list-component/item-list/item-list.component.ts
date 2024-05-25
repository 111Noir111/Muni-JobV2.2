import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  datauser: any;
  constructor(
    public api: ApiService
  ) {}

  ngOnInit() {
    this.getDataUser();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  async getDataUser(){
    await this.api.getDataUser()
    .subscribe(res =>{
      this.datauser = res.results;
    console.log(this.datauser);
    },err =>{
      console.log(err);
    })
  }

  handleItemClick(data: any) {
    console.log('Item clicked:', data);
    // Aquí puedes agregar cualquier otra lógica que necesites
  }
}
