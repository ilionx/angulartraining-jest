import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ShoppingCartContainerComponent} from './shopping-cart-container.component';

describe('ShoppingCartContainerComponent', () => {

  let component: ShoppingCartContainerComponent;
  let fixture: ComponentFixture<ShoppingCartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartContainerComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartContainerComponent);
    component = fixture.componentInstance;
  });


});
