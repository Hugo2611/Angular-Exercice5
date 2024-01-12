import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  cars: any[] = [
    { id: 0, marque: 'Peugeot', modele: '208' },
    { id: 1, marque: 'Ford', modele: 'Transit Custom' },
    { id: 2, marque: 'Nissan', modele: 'Skyline R34' },
  ];

  selectedCar: any = this.cars[0];
  showDetailsCard = false;

  showDetails(car: any): void {
    this.selectedCar = car;
    this.showDetailsCard = true;
  }

  hideDetailsCard(): void {
    this.showDetailsCard = false;
  }
}