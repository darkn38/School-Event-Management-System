# Functional Requirements

## 1. Event Creation and Registration
- **Description:** Allow staff and students to create events and enable participants to register through the system.
- **Requirements:**
  - Users must be able to create events with relevant details (name, date, time, location, etc.).
  - Users must be able to register for events they are interested in attending.
  - System should store event and registration data securely.

## 2. Ticketing and Payment
- **Description:** A simulated ticketing system for paid events, where users can select tickets and proceed through a mock payment process. No real transactions will take place.
- **Requirements:**
  - Users should be able to select different types of tickets for events.
  - A mock payment interface should be available for users to simulate ticket purchase.
  - No actual financial transactions will occur; all payments will be simulated.

## 3. Communication and Reminders
- **Description:** Send automated reminders and updates to participants via email and notifications.
- **Requirements:**
  - The system must send confirmation emails upon successful registration.
  - Participants should receive automated reminders before the event (e.g., 1 day prior).
  - Notifications should be sent for any updates or changes related to the events.

## 4. Reporting and Dashboard Analytics
- **Description:** Provide detailed reports on event attendance, ticket sales, and revenue.
- **Requirements:**
  - Admin users must have access to a dashboard displaying attendance statistics and ticket sales.
  - The system should generate reports on overall event performance (e.g., number of attendees, total revenue).
  - Reports should be exportable in formats like CSV or PDF.

## 5. User Roles and Security
- **Description:** Implement role-based access control (RBAC) to ensure users (admin, student) can only access relevant system features.
- **Requirements:**
  - The system must differentiate between admin and regular user roles.
  - Admin users should have access to all functionalities, including user management and reporting.
  - Regular users should only have access to event registration and their own user profile.
  - Implement secure authentication and authorization processes.
