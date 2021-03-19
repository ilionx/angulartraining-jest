import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ShoppingCartContainerComponent} from './shopping-cart-container.component';
import {ShoppingCartPresentationComponent} from '../shopping-cart-presentation/shopping-cart-presentation.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ShoppingCartService} from '../shopping-cart.service';
import {of} from 'rxjs';
import {Book} from '../../books/book';

describe('ShoppingCartContainerComponent', () => {

  const shoppingCartServiceStub = {
    getShoppingCart: jest.fn()
  };

  let component: ShoppingCartContainerComponent;
  let fixture: ComponentFixture<ShoppingCartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartContainerComponent, ShoppingCartPresentationComponent],
      providers: [{provide: ShoppingCartService, useValue: shoppingCartServiceStub}],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartContainerComponent);
    component = fixture.componentInstance;
  });

  it('should call the ShoppingCartService on init', () => {
    const testData = of([{title: 'selected book'}] as Book[]);
    shoppingCartServiceStub.getShoppingCart.mockReturnValue(testData);
    fixture.detectChanges();
    expect(component.books).toEqual(testData);
    expect(shoppingCartServiceStub.getShoppingCart.mock.calls).toEqual([[]]);
  });

});
