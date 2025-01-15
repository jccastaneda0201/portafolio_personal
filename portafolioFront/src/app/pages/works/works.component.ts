import { Component, inject } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { LaboralService } from '../../services/laboral.service';
import Laboral from '../../interfaces/laboral.interface';

@Component({
  selector: 'app-works',
  imports: [FontAwesomeModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  userService = inject(LaboralService)
  usuario: Laboral[] = []

  async ngOnInit() {

  }

  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faGithub
    );
  }
}
