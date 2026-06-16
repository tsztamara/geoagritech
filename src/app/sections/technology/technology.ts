import { Component } from '@angular/core';
import { Sprout, LucideAngularModule, Route, Gauge, Droplets, Crosshair } from 'lucide-angular';

@Component({
  selector: 'app-technology',
  imports: [LucideAngularModule],
  templateUrl: './technology.html',
  styleUrl: './technology.scss',
})
export class Technology {
  readonly Sprout = Sprout;
  readonly Gauge = Gauge;
  readonly Droplets = Droplets;
  readonly Crosshair = Crosshair;
  readonly Route = Route;
}
