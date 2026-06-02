import { Component } from '@angular/core';
import { Sprout, MapPin, Zap, Drone, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-services',
  imports: [LucideAngularModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly Sprout = Sprout;
  readonly MapPin = MapPin;
  readonly Zap = Zap;
  readonly Drone = Drone;
}
