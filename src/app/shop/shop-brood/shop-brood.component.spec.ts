import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBroodComponent } from './shop-brood.component';

describe('ShopBroodComponent', () => {
  let component: ShopBroodComponent;
  let fixture: ComponentFixture<ShopBroodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopBroodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBroodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
