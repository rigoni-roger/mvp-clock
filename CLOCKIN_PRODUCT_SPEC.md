# CLOCKIN – PRODUCT SPECIFICATION DOCUMENT

---

## 1. Product Overview

### Product Name

ClockIn

### Market Focus

Canadian small and medium-sized construction builders.

### Core Purpose

ClockIn is a construction-focused time tracking and billing verification system.

The primary goal is to allow construction company owners to:

- Track hours worked per project
- Track hours per sub-location (e.g., Floor 1, Floor 2)
- Approve time modifications
- Generate reliable billing reports to send to third-party contractors

ClockIn is **not** a generic time tracker.

ClockIn is a billing-proof time management system built specifically for construction operations.

---

## 2. Target Users

### Company Owner

- Buys the software
- Has full access to all data
- Generates reports for billing
- Manages managers

### Manager

- Manages assigned works (projects)
- Approves or rejects clock entries
- Monitors real-time workforce distribution
- Generates work-level reports

### Member (Worker)

- Clocks in and out
- Selects work and sub-location
- Can edit entries (requires approval)
- Can create retroactive entries (requires approval)

---

## 3. Core Concepts

### Company

A construction business using ClockIn.

### Work (Project)

A billable construction project.

Each Work contains:

- Name
- Contractor name
- Address
- Latitude
- Longitude
- Radius (default 500 meters)
- Active status

The Work is the main billing container.

### SubLocation

A named area within a Work.

Examples:

- Floor 1
- Floor 2
- Basement
- Section A

SubLocations exist only for hour separation inside a Work.

### Clock Entry

A time tracking record created by a Member.

Each Clock Entry includes:

- User
- Work
- SubLocation (optional)
- Clock-in time
- Clock-out time
- Status (`APPROVED` / `PENDING` / `REJECTED`)
- Flags:
  - Edited
  - Retroactive
  - OutsideRadius
  - Migration
- Rejection reason (if rejected)

---

## 4. Business Rules

### Rule 1 – Single Active Entry

A user cannot have more than one active clock entry at the same time.

### Rule 2 – Work Selection Required

When clocking in, the user must select:

- A Work
- A SubLocation (if available)

### Rule 3 – GPS Radius Validation

When clocking in:

- The system checks if the user is within the Work radius.
- If inside radius → status = `APPROVED`.
- If outside radius → status = `PENDING` and flagged as `OutsideRadius`.

Clock-in is allowed even if outside radius, but requires manager approval.

### Rule 4 – Time Editing

If a Member edits clock-in or clock-out time:

- The entry becomes `PENDING`.
- Manager approval is required.

### Rule 5 – Retroactive Entry

Members can create clock entries for past days.

Retroactive entries:

- Always `PENDING`
- Require justification
- Require manager approval

### Rule 6 – Migration Between SubLocations

If a Member changes sub-location during an active session:

System behavior:

1. Automatically closes current entry.
2. Creates new entry starting at migration time.
3. Marks entry as `PENDING`.
4. Flags as `Migration`.

Manager must approve.

### Rule 7 – Rejection Flow

If a Manager rejects an entry:

- Rejection reason is required.
- Member sees notification.
- Member can correct and resubmit.

---

## 5. MVP1 Features

### Authentication

- Email and password login
- Company selection if user belongs to multiple companies

### Role-Based Access

Roles:

- Owner
- Manager
- Member

Each role has limited permissions according to hierarchy.

### Work Management

Owner and Manager can:

- Create works
- Define location and radius
- Activate/deactivate works

### SubLocation Management

Managers can:

- Create sublocations inside works

### User Assignment

Managers assign Members to Works.

Assigned Members are considered expected workers for that Work.

### Clock In / Clock Out

Members can:

- Select Work
- Select SubLocation
- Clock In
- Clock Out
- Edit time (creates pending)

### Approval Dashboard

Managers can:

- View all pending entries
- See type of pending:
  - Edited
  - Retroactive
  - Outside Radius
  - Migration
- Approve or reject
- Provide rejection reason

### Real-Time Operational Dashboard

Managers and Owners can see:

- Active clock-ins for today
- Inactive workers
- Workers not clocked in
- Total workers per Work

Map View:

- Each Work appears as a pinned location.
- Green indicator → active workers present.
- Gray → no active workers.
- Clicking a Work shows:
  - Active workers
  - Closed entries today
  - Not clocked in workers

This map uses the Work location, not live GPS tracking.

### Reporting

Per Work:

- Total hours
- Hours per SubLocation
- Hours per Employee

Export:

- CSV export for billing

---

## 6. MVP2 Roadmap

MVP2 expands operational value without becoming full construction management software.

Planned Features:

- PDF report export
- Advanced report filtering (date range, employee, sublocation)
- Bulk approval actions
- Weekly and monthly labor trend dashboard
- Hourly rate input per employee
- Basic labor cost estimation per Work
- Audit log for entry modifications
- Email notifications for approvals
- English and French language support

---

## 7. Non-Functional Requirements

### Performance

- Dashboard refresh every 30–60 seconds (no real-time GPS streaming required)
- System must support multiple works per company

### Security

- Role-based access control
- Data isolation per company
- Encrypted authentication

### Privacy

- No continuous GPS tracking
- Only location validation during clock-in

---

## 8. UX Principles

ClockIn is built for construction workers.

UX must be:

- Simple
- Large buttons
- Minimal steps
- Mobile-first
- Dark mode friendly
- High contrast for outdoor visibility

Clock In button must be highly visible and central.

---

## 9. Positioning Statement

ClockIn is a construction-focused time tracking and billing verification system designed for Canadian builders who need accurate, approval-controlled labor tracking per project and sub-location.

It is not a generic time tracker.

It is not full construction ERP.

It is a focused operational billing tool.
