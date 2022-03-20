import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";

@Injectable()
export class RentalService {
private rentals: Rental[] = [{
    id:"1",
    title: "nizna",
    city:"nizna",
    street: "nizna", 
    img: "https://via.placeholder.com/350x250",
    bedrooms: 3
  },
  {
    id:"2",
    title: "trencin",
    city:"trencin",
    street: "soblahovska", 
    img: "https://via.placeholder.com/350x250",
    bedrooms: 3
  },
  {
    id:"3",
    title: "Bratislaa",
    city:"Bratislava",
    street: "Zaporozska", 
    img: "https://via.placeholder.com/350x250",
    bedrooms: 3
  },
  {
    id:"4",
    title: "Bangkok",
    city:"Bangkok",
    street: "Khao San", 
    img: "https://via.placeholder.com/350x250",
    bedrooms: 3
  }]

  public getRentalById(rentalId): Observable<Rental>{
    const rentalObservable: Observable<Rental> = new Observable((observer)=>{
      setTimeout (() =>{
        observer.next(this.rentals[rentalId])
      },1000),
      setTimeout (() =>{
        observer.error("this is an error")
      },2000),
      setTimeout (() =>{
        observer.complete()
      },2000)
    })
      return rentalObservable;
  }
  public getRentals(): Observable<Rental[]> {
    const rentalObservable: Observable<Rental[]> = new Observable((observer)=>{
      setTimeout (() =>{
        observer.next(this.rentals)
      },1000),
      setTimeout (() =>{
        observer.error("this is an error")
      },2000),
      setTimeout (() =>{
        observer.complete()
      },2000)
    })
      return rentalObservable;
  }
}