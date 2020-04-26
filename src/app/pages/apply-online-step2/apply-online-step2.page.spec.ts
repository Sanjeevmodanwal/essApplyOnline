import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplyOnlineStep2Page } from './apply-online-step2.page';

describe('ApplyOnlineStep2Page', () => {
  let component: ApplyOnlineStep2Page;
  let fixture: ComponentFixture<ApplyOnlineStep2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyOnlineStep2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplyOnlineStep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
