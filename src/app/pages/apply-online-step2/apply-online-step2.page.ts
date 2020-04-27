import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-apply-online-step2',
  templateUrl: './apply-online-step2.page.html',
  styleUrls: ['./apply-online-step2.page.scss'],
})
export class ApplyOnlineStep2Page implements OnInit {
 id:any;
 name:any;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    console.log(this.name);
  }

  showref:boolean=false;
  refusal(event){
    let val=event.detail.value;
    if(val=='yes'){
       this.showref=true;
    }else if(val=='no'){
      this.showref=false;
    }
  }

  

}
