import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-apply-online-step2',
  templateUrl: './apply-online-step2.page.html',
  styleUrls: ['./apply-online-step2.page.scss'],
})

export class ApplyOnlineStep2Page implements OnInit {
	
 snoid:string;
 branch_name:string;
 appointment_date:string;
 time_select:string;
 refusals:string;
 refusalscountry:string;
 semail:string;
 marital_status:string;
 gender:string;
 svisa:string;
 scountry:string;
 ssource:string;
 squalification:string;
 spassing:string;
 last_percentage:string;
 sielts:string;
 stest:string;
 sieltsband:string;
 sieltsbandnot:string;
 spteband:string;
 sptebandnot:string;
 p_stest:string;
 api:any;
 
  constructor(	
	private http: HttpClient,
	private router: Router,
    private activatedRoute: ActivatedRoute,
	public loadingController: LoadingController,
    public alertController: AlertController
	) { 
		// this.api="http://localhost/api/apply_online2.php";
		this.api="http://essglobal.online/ess_crm/wwwApp/apply_online2.php";
	}

  public items_date: Array<{ from_date:string}> = [];
  public items_time: Array<{ from_time:string}> = [];
  ngOnInit() {
    this.snoid = this.activatedRoute.snapshot.paramMap.get('snoid');
    // console.log(this.snoid);
	
	let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), };
    // this.http.get('http://localhost/api/get_value.php?tag=get_appointment_date', httpOptions).subscribe((data: any) => {
    this.http.get('http://essglobal.online/ess_crm/wwwApp/get_value.php?tag=get_appointment_date', httpOptions).subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
       
        this.items_date.push({
          from_date: data[i].from_date          
        });
      }
    });
	
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
      id:'apply-online-step2'
    });
    return await loading.present();
    const { role, data } = await loading.onDidDismiss();

    // console.log('Loading dismissed!');
  }  
   
 
  dateAppointment(event) {
	let date_val = event.detail.value;
	this.presentLoadingWithOptions();
	let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), };
	// this.http.post("http://localhost/api/get_value.php?tag=get_appointment_time", { "appointment_date": date_val}, httpOptions).subscribe((data: any) => {
	this.http.post("http://essglobal.online/ess_crm/wwwApp/get_value.php?tag=get_appointment_time", { "appointment_date": date_val}, httpOptions).subscribe((data: any) => {
      this.items_time=[];
	  for (let i = 0; i < data.length; i++) {
        this.items_time.push({
          from_time: data[i].total_time          
        });
      }
    });
  }
  
  step2query() {
	let idno = this.snoid;
	
    // console.log(idno);
    // console.log(branch_name);
	
    this.presentLoadingWithOptions();
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), };   
    this.http.post(this.api, { "snoid": idno, "branch": this.branch_name, "appointment_date": this.appointment_date, "time_select": this.time_select, "refusals": this.refusals, "refusalscountry": this.refusalscountry, "semail": this.semail, "marital_status": this.marital_status, "gender": this.gender, "svisa": this.svisa, "scountry": this.scountry, "ssource": this.ssource, "squalification": this.squalification, "spassing": this.spassing, "last_percentage": this.last_percentage, "sielts": this.sielts, "stest": this.stest, "sieltsband": this.sieltsband, "sieltsbandnot": this.sieltsbandnot, "spteband": this.spteband, "sptebandnot": this.sptebandnot, "p_stest": this.p_stest}, httpOptions).subscribe((data: any) => {
      // console.log(data);
      if (data['status'] == 500) {
		  let msg=data['msg'];
		  this.Step2Alert(msg);
      } else {
		let snoid = data['status'];
		this.loadingController.dismiss('apply-online');  
		this.loadingController.dismiss('apply-online-step2');  
        this.router.navigate(['/counselor-list',{"snoid":snoid}]);
      }
    });
  }
  
  
  

}
