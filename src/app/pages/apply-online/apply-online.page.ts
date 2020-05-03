import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-apply-online',
  templateUrl: './apply-online.page.html',
  styleUrls: ['./apply-online.page.scss'],
})
export class ApplyOnlinePage implements OnInit {
  
  sname: string;
  smobile: string;
  scity: string;
  api:any;
  
  constructor(
	private http: HttpClient, 
    private router: Router,
	public loadingController: LoadingController,
    public alertController: AlertController
  ) {
	this.api="http://localhost/api/apply_online.php";
	// this.api="http://essglobal.online/ess_crm/wwwApp/apply_online.php";
	}

  ngOnInit() {
  }
  
  async Step1Alert(msg) {
    const alert = await this.alertController.create({
      message:msg,
      buttons: ['OK']
    });

    await alert.present();
  }
  
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 1000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      id:'apply-online'
    });
    return await loading.present();
    const { role, data } = await loading.onDidDismiss();

    // console.log('Loading dismissed!');
  }
  
  
  step1query() {
    // this.router.navigate(['/apply-online-step2',{"id":1,"name":"anshu"}]);
    // console.log("me");
    this.presentLoadingWithOptions();
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), };   
    this.http.post(this.api, { "sname": this.sname, "smobile": this.smobile, "scity": this.scity }, httpOptions).subscribe((data: any) => {
      // console.log(data);
      if (data['status'] == 500) {
		  let msg=data['msg'];
		  this.Step1Alert(msg);
      } else {
		let snoid = data['status'];
		this.loadingController.dismiss('apply-online');  
        this.router.navigate(['/apply-online-step2',{"snoid":snoid}]);
      }
    });
  }

}
