import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-counselor-list',
  templateUrl: './counselor-list.page.html',
  styleUrls: ['./counselor-list.page.scss'],
})
export class CounselorListPage implements OnInit {
	
	snoid:string;
	api:any;

  constructor(
	private http: HttpClient,
	private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  public appointLists: Array<{ branch_name:string,online_appointed_date: string, online_apointed_time:string}> = [];
  ngOnInit() {
		this.snoid = this.activatedRoute.snapshot.paramMap.get('snoid');
		let seminar_id = this.snoid;
		let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), };
		// this.http.post('http://localhost/api/get_value.php?tag=fixed_appointment', {"seminar_id": seminar_id}, httpOptions).subscribe((data: any) => {
		this.http.post('http://essglobal.online/ess_crm/wwwApp/get_value.php?tag=fixed_appointment', {"seminar_id": seminar_id}, httpOptions).subscribe((data: any) => {
			for (let i = 0; i < data.length; i++) {
				this.appointLists.push({
				  branch_name: data[i].branch_name,
				  online_appointed_date: data[i].online_appointed_date,       
				  online_apointed_time: data[i].online_apointed_time     
				});
			}
		});
	
  }

}
