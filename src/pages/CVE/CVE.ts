import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CVEService } from '../../app/services/CVE.services';
import { Http } from '@angular/http';




@Component({
  selector: 'CVE',
  templateUrl: 'CVE.html'
})
export class CVEPage {
  posts: any=[];
  CVES:any;
  // API call
  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('http://www.cvedetails.com/json-feed.php?numrows=10&vendor_id=0&product_id=0&version_id=0&hasexp=1&opec=1&opov=1&opcsrf=1&opfileinc=1&opgpriv=1&opsqli=1&opxss=1&opdirt=1&opmemc=1&ophttprs=1&opbyp=1&opginf=1&opdos=1&orderby=2').map(res => res.json()).subscribe(data => { 
    this.CVES= data; 
    
  
      
  });



  }

  }
