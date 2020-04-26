import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplyOnlinePage } from './apply-online.page';

describe('ApplyOnlinePage', () => {
  let component: ApplyOnlinePage;
  let fixture: ComponentFixture<ApplyOnlinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyOnlinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplyOnlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
