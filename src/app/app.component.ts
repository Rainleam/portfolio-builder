import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-builder';

  nm = '';
  em = '';
  ph = '';
  add = '';
  submitted: boolean = false;
  qualifications = [{school: '', degree: '', year: ''}];

  addQualification() {
    this.qualifications.push({school: '', degree: '', year: ''});
  }

  submit() {
    this.submitted = true;
  }

  edit() {
    this.submitted = false;
  }
}
