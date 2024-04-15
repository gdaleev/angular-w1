import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  activeSection: string | null = null;

  toggleShow(section: string) {
    this.activeSection = this.activeSection === section ? null : section;
  }

  isSectionActive(section: string): boolean {
    return this.activeSection === section;
  }
}







// export class AppComponent {
//   activeSection: string | null = null;

//   toggleShow(section: string) {
//     this.activeSection = this.activeSection === section ? null : section;
//   }

//   isSectionActive(section: string): boolean {
//     return this.activeSection === section;
//   }
// }
