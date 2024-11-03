import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Developer } from '../interfaces/developer';
import { Projects } from '../interfaces/projects'; // Adjust import path as per your project structure
import { DeveloperService } from '../services/developer.service';

@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.scss']
})
export class AddDeveloperComponent implements OnInit {
  developerForm!: FormGroup;
  id: number | undefined;
  editMode = false;
  projects: Projects[] = [];
  selectedPersonId!: number  // Adjust the type if necessary
    selectedProjectId!: number   // Add this if it's also missing


  constructor(
    private devService: DeveloperService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

   ngOnInit(): void {
    this.developerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      skills: [''],
      experience: [''],
      projects: [[]] 
    });

    this.fetchProjects(); // Fetch projects from backend
  }

  fetchProjects(): void {
    // Fetch available projects from backend
    this.devService.getProjects().subscribe((data) => {
      this.projects = data;
      
    });
  }




  onSubmit(): void {
    if (this.developerForm.valid) {
      const personData = {
        ...this.developerForm.value,
        skills: this.developerForm.value.skills
          ? this.developerForm.value.skills.split(',').map((skill: string) => skill.trim())
          : [],
        projects: this.developerForm.value.projects.map((id: number) => ({ projectId: id }))
      };
      
      
      console.log('Person data being submitted:', JSON.stringify(personData, null, 2));
      
      this.devService.createPerson(personData).subscribe({
        next: (response) => {
          console.log('Person created:', response);
          this.onClose();  // Redirect upon successful creation
        },
        error: (err) => console.error('Error creating person:', err)
      });
    }
  }



  onClose() {
    this.router.navigate(['/dashboard']);
  }


}
