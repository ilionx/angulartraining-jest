import {ShoppingCartService} from './shopping-cart.service';
import {Book} from '../books/book';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ShoppingCartService', () => {

  let service: ShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShoppingCartService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ShoppingCartService);
  });

  it('should calculate a total amount of 0 in case it is empty', () => {
    expect(service.totalAmount()).toBe(0);
  });

  it('should calculate a total amount which is the sum of all book prices if it is not empty', () => {
    service.books = [
      {price: 12},
      {price: 13},
    ] as Book[];
    expect(service.totalAmount()).toBe(25);
  });

  it('should get the shopping cart items from the backend when getShoppingCart is called', done => {
    const expectedResult = [{}, {}, {}] as Book[];
    const httpMock = TestBed.inject(HttpTestingController);
    service.getShoppingCart().subscribe(
      returnValue => {
        expect(returnValue.length).toBe(3);
        done();
      }
    );
    const req = httpMock.expectOne('/shopping-cart');
    req.flush(expectedResult);
  });

});
