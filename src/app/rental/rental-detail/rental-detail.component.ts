import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  rental :Rental
  rentalId: string = "";
constructor(private activatedRoute: ActivatedRoute, private rentalService: RentalService) { }
  
  ngOnInit() {
    this.rentalId = this.activatedRoute.snapshot.params['rentalId'];
    this.getRental(this.rentalId);

  
  }
  getRental(rentalId: string) {
    const rentalObservable = this.rentalService.getRentalById(this.rentalId);

    rentalObservable.subscribe(
      (data: Rental) => {
        this.rental = data;
      },
      (error) => {
        alert(error);
 
      },
      () => {
 
      });
  }
}
