import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-balance-574-lead-1629237862.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-balance-574-lead-1629237862.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-balance-574-lead-1629237862.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
  ];

  constructor(config: NgbCarouselConfig) {
    config.keyboard = true;
    config.pauseOnFocus = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

}