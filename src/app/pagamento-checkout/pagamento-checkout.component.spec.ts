import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoCheckoutComponent } from './pagamento-checkout.component';

describe('PagamentoCheckoutComponent', () => {
  let component: PagamentoCheckoutComponent;
  let fixture: ComponentFixture<PagamentoCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
