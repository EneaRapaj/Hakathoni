Developer Management System
Overview
This project is a developer management system built with a Spring Boot backend and an Angular CLI frontend. It enables administrators to manage developer profiles, search for developers by various criteria, view project history, and export profiles for further use. The project is structured into multiple epics, each focusing on specific features and user stories.

Epics and User Stories
Epic 1: Profile Management
Manage developer profiles with functionalities to add, remove, edit, and view.

User Story 1.1: Add Developer Profiles

Goal: As an admin, I want to add developer profiles so that new developers can be included in the system.
Tasks:
Design a profile addition form with fields like name, skills, experience, and profile photo.
Implement an API to submit new profile data to the backend database.
Add validations for the input fields to ensure data integrity.
User Story 1.2: Edit Developer Profiles

Goal: As an admin, I want to edit developer profiles to update their information as needed.
Tasks:
Design an edit profile form pre-populated with existing data.
Implement an API to update profile data in the database.
Ensure input fields are validated similarly to the profile addition form.
User Story 1.3: Remove Developer Profiles

Goal: As an admin, I want to remove developer profiles to delete profiles that are no longer needed.
Tasks:
Add a delete option in the UI with a confirmation dialog to prevent accidental deletions.
Implement an API to remove profile data from the database.
User Story 1.4: View Developer Profiles

Goal: As an admin, I want to view a list of all developer profiles to oversee all available developers.
Tasks:
Design and implement a UI to list developer profiles.
Implement pagination to handle large numbers of profiles.
Epic 2: Search Functionality
Provides the ability to search and filter developers by name, skills, and experience.

User Story 2.1: Search Developers by Name

Goal: As an admin, I want to search for developers by name to quickly find specific individuals.
Tasks:
Design and implement a search bar in the UI.
Implement an API to fetch data based on search criteria.
User Story 2.2: Filter Developers by Skills and Experience

Goal: As an admin, I want to filter developers by their skills and experience to find suitable candidates for specific projects.
Tasks:
Design and implement advanced filters for skills and experience in the UI.
Implement an API to fetch filtered data based on selected criteria.
Epic 3: Project History
Maintains a history of projects each developer has worked on.

User Story 3.1: Add Project History to Profiles
Goal: As an admin, I want to add project history to developer profiles to reflect the projects each developer has worked on.
Tasks:
Update the profile data model to include project history.
Design UI components to display and add project history within profiles.
Implement an API to handle adding and updating project history.
Epic 4: Bonus Features
Provides extra functionality to enhance usability, such as exporting profiles.

User Story 4.1: Export Developer Profiles to CSV
Goal: As an admin, I want to export developer profiles to a CSV file to use them in other applications.
Tasks:
Add a feature in the UI to export profiles.
Develop backend functionality to generate and download CSV files.
Implementation Highlights
Frontend: Built with Angular CLI and Angular Material components for a responsive and dynamic UI.

Components:
Profile Management forms (add, edit, delete).
Search bar and filters for developers.
Project history display and input fields.
Features:
Real-time search and filter functionalities.
Dynamic forms with input validation.
Export button to download profiles in CSV format.
Backend: Developed with Spring Boot for managing business logic and data persistence.

Services and APIs:
Profile management API for adding, updating, viewing, and deleting profiles.
Search and filter API for quick lookup of developers.
Project history API to manage developer project records.
CSV export API for generating downloadable files.
Progress
The following functionalities have been successfully implemented:

Basic profile management (add, edit, delete).
Search and filtering by name, skills, and experience.
Basic UI and backend integration for project history.
Minor fixes to improve the edit functionality.
Future Enhancements
Role-based access control to manage different levels of access.
Detailed analytics and reporting for better insights into developer skill distribution and project history.
Enhanced filtering options with more granular criteria, such as location or availability.
Installation
Backend:

Navigate to the backend directory.
Run the Spring Boot application.
Frontend:

Navigate to the frontend directory.
Install dependencies using npm install.
Start the application with ng serve.
Usage
Admins can log in to access the dashboard, where they can add, edit, delete, and search for developers.
Advanced filters and project history provide a more detailed view of each developer's experience and skills.
The export functionality allows admins to download developer profiles in CSV format for external use.
This setup ensures easy management of developer profiles and project history, aiding administrators in efficiently handling large teams and complex projects.
