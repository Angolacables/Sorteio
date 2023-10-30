import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatarSorteiroComponent } from './candidatar-sorteiro.component';

describe('CandidatarSorteiroComponent', () => {
  let component: CandidatarSorteiroComponent;
  let fixture: ComponentFixture<CandidatarSorteiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatarSorteiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatarSorteiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
