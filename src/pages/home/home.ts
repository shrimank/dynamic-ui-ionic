import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Page }  from '../../models/pages.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page:Page=new Page();

  constructor(public navCtrl: NavController,private http:HttpClient) {
    
  }

  ionViewWillLoad(){
    console.log("ionViewWillLoad start");
    
    this.onLoadPageFields();
    console.log("ionViewWillLoad  end");
  }

  async onLoadPageFields(){
    console.log("loading  page");
    return await this.http.get('assets/sample/page-fields.json').subscribe((res:Page)=>{
      console.log("Response:",res);
      this.page=res;
      console.log(this.page.productTitle);
      
      
    },(err)=>{
      console.log("Error:",err);
      
    });
    
  }

  goBack(){
    
  }

}
