import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }


slideOptsOne = {
 initialSlide: 0,
 slidesPerView: 1,
 autoplay:true
};

applystep1url(){
	this.router.navigate(['/apply-online']);
}

}
