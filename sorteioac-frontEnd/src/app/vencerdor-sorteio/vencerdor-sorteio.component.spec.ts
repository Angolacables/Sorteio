import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VencerdorSorteioComponent } from './vencerdor-sorteio.component';

describe('VencerdorSorteioComponent', () => {
  let component: VencerdorSorteioComponent;
  let fixture: ComponentFixture<VencerdorSorteioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VencerdorSorteioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VencerdorSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
