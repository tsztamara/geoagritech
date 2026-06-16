import { Component } from '@angular/core';
import {
  Sprout,
  MapPin,
  Zap,
  Drone,
  LucideAngularModule,
  ChartColumn,
  Target,
  Gauge,
  Trees,
  ScanSearch,
} from 'lucide-angular';

@Component({
  selector: 'app-services',
  imports: [LucideAngularModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly ChartColumn = ChartColumn;
  readonly ScanSearch = ScanSearch;
  readonly Target = Target;
  readonly Drone = Drone;
  readonly Gauge = Gauge;
  readonly Trees = Trees;
}
