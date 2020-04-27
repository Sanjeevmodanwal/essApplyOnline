import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-apply-online-step2',
  templateUrl: './apply-online-step2.page.html',
  styleUrls: ['./apply-online-step2.page.scss'],
})

export class ApplyOnlineStep2Page implements OnInit {
	
 snoid:any;
 api:any;
 
  constructor(
	private router: Router,
    private activatedRoute: ActivatedRoute,	
	private http: HttpClient,
	public loadingController: LoadingController,
    public alertController: AlertController
	) { 
		this.api="http://localhost/api/apply_online.php?tag=checkingStep2";
	}

  ngOnInit() {
    this.snoid = this.activatedRoute.snapshot.paramMap.get('snoid');
    console.log(this.snoid);
  }

  showref:boolean=false;
  refusal(event){
    let val1=event.detail.value;
    if(val1=='yes'){
       this.showref=true;
    }else if(val1=='no'){
      this.showref=false;
    }
  }
	
  showvisatype:boolean=false;
  svisa2(event){
    let val2=event.detail.value;
    if(val2=='Student'){
       this.showvisatype=true;
    }else{
      this.showvisatype=false;
    }
  }
  
  showstest:boolean=false;
  showp_stest:boolean=false;
  yesIelts:boolean=false;
  yesPte:boolean=false;
  sielts2(event){
    let val3=event.detail.value;
    if(val3=='Yes'){
       this.showstest=true;
       this.showp_stest=false;
	   
	   this.yesIelts=false;
       this.yesPte=false;
	   
    }else if(val3=='No'){
      this.showstest=false;
      this.showp_stest=false;
	  
	  this.yesIelts=false;
      this.yesPte=false;
	  
    }else if(val3=='Pursuing'){
      this.showp_stest=true;
	  this.showstest=false;
	  
	  this.yesIelts=false;
      this.yesPte=false;
    }
  }
  
  
  yesIelts:boolean=false;
  yesPte:boolean=false;
  stest2(event){
    let val4=event.detail.value;
    if(val4=='ielts'){
       this.yesIelts=true;
       this.yesPte=false;
    }else if(val4=='pte'){
      this.yesIelts=false;
      this.yesPte=true;
    }
  }
  
  async Step2Alert(msg) {
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
  
  step2query(snoid) {
    // this.router.navigate(['/apply-online-step2',{"id":1,"name":"anshu"}]);
    console.log("me");
    console.log(this.snoid);
    this.presentLoadingWithOptions();
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), };   
    this.http.post(this.api, { "snoid": snoid}, httpOptions).subscribe((data: any) => {
      console.log(data);
      // if (data['0']['checkRslt'] == 500) {
		  // let msg='Please Complete All Fields';
		  // this.Step2Alert(msg);
      // } else {
		// let snoid = data['0']['checkRslt'];
		// this.loadingController.dismiss('apply-online');  
        // this.router.navigate(['/apply-online-step2',{"snoid":snoid}]);
      // }
    });
  }
  
  
  

}
