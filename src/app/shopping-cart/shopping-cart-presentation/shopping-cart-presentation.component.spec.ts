import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ShoppingCartPresentationComponent} from './shopping-cart-presentation.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';
import {Book} from '../../books/book';

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

  it('should display the books in the template', () => {
    component.books = of([{title: 'book 1'}, {title: 'book 2'}] as Book[]);
    fixture.detectChanges();
    const nodes = fixture.nativeElement.querySelectorAll('h2');
    expect(nodes.length).toEqual(2);
    expect([...nodes].map((node: HTMLElement) => node.textContent)).toEqual(['book 1', 'book 2']);
  });

  it('should emit an event on click', () => {
    let clicked = false;
    component.clearShoppingCart.subscribe(() => clicked = true);
    const clearShoppingCartLink = fixture.nativeElement.querySelector('#clearShoppingCart');
    clearShoppingCartLink.click();
    expect(clicked).toBe(true);
  });

});
