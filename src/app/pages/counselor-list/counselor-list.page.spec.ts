import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CounselorListPage } from './counselor-list.page';

describe('CounselorListPage', () => {
  let component: CounselorListPage;
  let fixture: ComponentFixture<CounselorListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselorListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CounselorListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
