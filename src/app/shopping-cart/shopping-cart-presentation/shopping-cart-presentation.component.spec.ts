import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ShoppingCartPresentationComponent} from './shopping-cart-presentation.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ShoppingCartPresentationComponent', () => {

  let component: ShoppingCartPresentationComponent;
  let fixture: ComponentFixture<ShoppingCartPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartPresentationComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
