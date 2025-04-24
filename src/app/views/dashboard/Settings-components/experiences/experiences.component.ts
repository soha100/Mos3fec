import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperienceComponent {
  experienceForm: FormGroup;
  experiences: any[] = [];

  constructor(private fb: FormBuilder) {
    this.experienceForm = this.fb.group({
      hospitalName: [''],
      address: [''],
      duration: [''],
      description: [''],
      startDate: [''],
      endDate: [''],
      workType: [''],
    });
  }

  addExperience() {
    this.experiences.push(this.experienceForm.value);
    this.experienceForm.reset();
  }

  deleteExperience(index: number) {
    this.experiences.splice(index, 1);
  }

  editExperience(index: number) {
    this.experienceForm.setValue(this.experiences[index]);
    this.experiences.splice(index, 1);
  }
}
