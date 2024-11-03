import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from '../interfaces/developer';
import { DeveloperService } from '../services/developer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  developers: Developer[] = [];
  filteredDevelopers: Developer[] = [];
  searchTerm: string = '';
  skills: string[] = ['React', 'UI/UX', 'Hibernate', 'Angular']; // Example skills, adjust as needed
  experiences: string[] = ['5 years of experience in software development','6 years of experience in software development','7 years of experience in software development','8 years of experience in software development','9 years of experience in software development']; // Example experiences, adjust as needed


  constructor(
    private router: Router,
    private developerService: DeveloperService
  ) { }

  ngOnInit(): void {
    this.loadDevelopers();

    // shtova une
    this.developerService.getAllDevelopers().subscribe((data: Developer[]) => {
      this.developers = data;
      this.filteredDevelopers = data;
    });
    // shtuar nga une 
  }

  loadDevelopers(): void {
    this.developerService.getAllDevelopers().subscribe({
        next: (data: Developer[]) => {
          //console.log eshte shtuarnga une
            console.log(data);
            this.developers = data;
            this.filteredDevelopers = [...this.developers]; // Initialize filtered list with all developers
            // this.fetchProjectsForDevelopers(); // Fetch projects for each developer
        },
        // error dhecomplete eshte shtuar nga une.
        error: (error) => {
            console.error('Error loading developers: ', error);
        },
        complete: () => {
            console.log('Developer data loading completed.');
        }
    });
}

  // fetchProjectsForDevelopers(): void {
  //   this.developers.forEach(dev => {
  //     this.developerService.getProjectsByDeveloper(dev.personId).subscribe(
  //       projects => {
  //         dev.projects = projects; // Assign projects to each developer
  //       },
  //       error => {
  //         console.error(`Error fetching projects for developer ${dev.personId}: `, error);
  //       }
  //     );
  //   });
  // }

  showForm(): void {
    this.router.navigate(['new']);
  }

  editDeveloper(id: number): void {
    this.router.navigate(['edit', id]);
  }

  deleteDeveloper(id: number | undefined): void {
    if (id === undefined) {
      console.error('Cannot delete developer: ID is undefined');
      return;
    }

    if (confirm('Are you sure you want to delete this developer?')) {
      this.developerService.deleteDeveloper(id).subscribe(() => {
        // After deletion, reload developers and their projects
        this.loadDevelopers();
      }, error => {
        console.error(`Failed to delete developer with ID ${id}: `, error);
      });
    }
  }

  searchDevelopers(): void {
    if (!this.searchTerm) {
      this.filteredDevelopers = [...this.developers]; // Reset filtered list if search term is empty
      return;
    }

    const lowerCaseSearch = this.searchTerm.toLowerCase();
    this.filteredDevelopers = this.developers.filter(developer =>
      developer.name.toLowerCase().includes(lowerCaseSearch) ||
      developer.skills.some(skill => skill.toLowerCase().includes(lowerCaseSearch))
    );
  }
  // shtuar nga une
  onSkillChange(skill: string) {
    if (skill) {
      this.developerService.getfindBySkill(skill).subscribe((data: Developer[]) => {
        this.filteredDevelopers = data;
      });
    } else {
      this.filteredDevelopers = this.developers;
    }
  }

  onExperienceChange(experience: string) {
    if (experience) {
      this.developerService.getDevelopersByExperience(experience).subscribe((data: Developer[]) => {
        this.filteredDevelopers = data;
      });
    } else {
      this.filteredDevelopers = this.developers;
    }
  }


}
