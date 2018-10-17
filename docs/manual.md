# Manual for MyE-Leave (TimeOff.Management Modified for IUMW)

## Table of Contents

 1. [Requirements (Server)](#requirements-server)
 2. [Requirements (Client)](#requirements-client)
 3. [Installation](#installation)
 4. [Running for the first time](#running-for-the-first-time)
 5. [Logging in](#logging-in)
 6. [Booking Leave](#booking-leave)
 7. [Calendar View](#calendar-view)
 8. [Team View](#team-view)
 9. [Viewing And Approving Leave Requests](#viewing-and-approving-leave-requests)
 10. [Adding Staff Members](#adding-staff-members)
 11. [Settings](#settings)
 12. [Feeds](#feeds)
 13. [Edit Contact Info](#edit-contact-info)
 14. [Logout](#logout)

## Requirements (Server)

<table>
  <tr>
    <td>Minimum</td>
    <td>Recommended</td>
  </tr>
  <tr>
    <td>Windows/Linux/MacOS<br>
NodeJS v6+<br>
Git<br>
100MByte RAM<br>
150MBytes Hard Drive Space</td>
	<td>Windows/Linux/MacOS<br>
NodeJS v8.x<br>
Git<br>
2GBytes RAM<br>
4 GBytes Hard Drive Space</td>
  </tr>
</table>

## Requirements (Client)
1. A network connection to the server, either via Local Area Network or via the Internet.

2. A modern web browser such as:

 - Google Chrome
 - Mozilla Firefox
 - Internet Explorer 10 or above
 - Microsoft Edge
 - Opera
 - Safari (Mac and iOS only)

## Installation

1. On the operating system of your choice, install Node.JS according to the instructions on the Node.JS website. 

2. Install Git: https://git-scm.com/downloads

3. In command prompt/shell, type in `git clone https://github.com/wulfboy-95/myE-Leave.git` then press Enter. Wait for the repository to download.

4. Type in `cd application` then press Enter.

5. Type in `npm install` then press Enter to install all required libraries.

## Running for the first time

1. Type in `npm start` then press enter.

2. Using a PC on the same network, open any compatible web browser and type in the server’s IP address with port number 3000 into the search bar. For example: `192.168.0.2:3000`.

3. Wait for the page to load.

4. When the page loads, click on Register new company.

5. Fill in the information required, then click on the "Create" button to register the company and admin account into the system.

6. The admin account will be logged in and the browser will be redirected to the "Calendar" page.

7. After registering the company and admin account, terminate the server using `Ctrl+C` in the command prompt/shell it is running in.

8. Navigate to the `config` folder and edit the `app.json` file. Change `"allow_create_new_accounts"` to `false`. You may configure other settings such as Email notifications in this file.

9. Return to the main folder and type in `npm start` to start the server again.

## Logging In

1. To log in, type in your email address and password, then click on the "Login" button.

2. Logging in will redirect the browser to the Calendar page.

## Booking Leave

1. Click on the "New absence" button.

2. Select the leave types and leave dates.

3. If your are creating a new absence for another user, select the user’s name in the "For employee:" field.

4. Optionally you may add a file attachment or duty replacement.

5. If the "Other" leave type is selected. An optional comment input labeled as “Please specify:” will appear. You may add a comment using this field.

6. Click on the "Create" button to create the leave.

7. If you want to cancel the leave click on the "cancel" link.

## Calendar View

The calendar view displays a statistics, a calendar and a list of leave requests the current user has requested.
The statistics section shows a breakdown of the user's allowances, leaves taken, number of days available and other details.
The calendar section displays a calendar with the leave dates marked for when the user has requested/been granted leave.

## Team View

Team view displays the availability members of their department to the user if the setting to allow this is enabled. 

## Viewing And Approving Leave Requests

1. Navigate to the "requests" page by clicking on "Me" on the top right of the page, then click on "requests." This page will display the leave requests of employees under the current user's management.

2. Click on the "Approve" button to approve the leave request or click on "Reject" to reject the leave request.

### Downloading Leave Request Attachments

Leave request attachments may be downloaded by clicking on the `📥 Download` button. Leave requests with the button disabled do not have an attachment.

## Adding Staff Members

### Add Single Employee

1. Navigate to the "Employees" page, click on the drop-down labeled “Add new employee” then select the “Add single employee” option.

2. Fill in all related details for the new employee.

3. Click on the "Add new employee" button to register the new employee.

### Employee Bulk Import

1. In the "Employees" page, click on the drop-down labeled “Add new employee” then select the “Import employees” option.

2. Then, upload the *.csv file containing the employee details by clicking on the "Browse" button in step 3, selecting the file, and pressing the “Open” button.

3. Click on the "Import employees" button to upload the selected file.

## Editing An Employee's Details

To edit employee details, navigate to the "Employees" page, then click on the employee's name. This will lead to a menu for editing the employee's details.

## Editing Your Contact Info

Click on "Me" then click on "Edit contact info" to navigate to the page for editing one's own contact information. 

## Settings

### General Settings

This page can accessed by clicking the "⚙️" drop down menu then selecting the “General” option in the menu. This page provides settings for setting company information, work week schedules, leave types, public holidays, and backup downloading. Also in this page is an option to delete the company account.

#### Company Settings

This section allows the setting of company information such as company name, country, date format, time zone and week schedule. This section also contains a button for downloading a backup of employee leaves data.

#### Bank Holidays

This section provides settings to add or removal of bank holidays (public holidays). 

#### Leave Types

This section provides settings to add or remove leave types.

#### 💣 Danger Zone

This section provides the option to delete the company account.

### Departments

This page can be accessed by clicking "⚙️" then clicking the “departments” option. This page provides settings for configuring departments and department managers.

#### Adding Departments

To add a department:

1. Click on add new department

2. Input the required details for the new department.

3. Click on the "Create" button.

#### Editing Departments

To edit a department:

1. Click on the department that requires editing.

2. Change whichever value that needs to be changed.

3. Click on the "Save" button.

#### Deleting Departments

To delete a department:

1. Click on the department that is to be deleted.

2. Click on the "Delete" button.

### LDAP Configuration

This menu allows the admin to enable and configure LDAP settings so that employees may be able to log in using their LDAP username and password. 

### Emails Audit

This menu displays all emails sent by the app to all users. Emails may be filtered by date, employee or both.

#### To filter emails by employee:

Click on the drop down menu labeled `Employee to filter by` then click on the employee's name.

#### To filter emails by start/end date:

Click on the `start date` or `end date` input, then select or type in the date.

### Reports

This menu contains a report generator that generates a report of leave allowance usage by all users. The user may filter the leave report by department, date range or both.

## Feeds

To add a calendar/team view feed to any Calendar app:

1. Click on "Me" followed by "Feeds."

2. Right click on either "My calendar feed" or "Team view feed" then click on copy link address.

### For Google Calendar:

3. In Google Calendar, click on the "+" sign next to "Add a friends calendar" then click on "From URL"

4. Paste the URL then click on "Add Calendar."

### For [insert calendar app name here]:

[Todo: iCloud, Outlook and 30boxes tutorial]

## Edit Contact Info

This menu allows the user to edit their own contact information.

## Logout

To logout:

1. Click on "Me"

2. Click on "Logout"

## Updating

To update MyE-Leave, navigate to the E-Leave folder location with the command prompt or console, then type in `git pull`. Restart the server application.

## External Scripts, Tools and Applications

Updates that require database changes will be supplied with scripts or tools for migrating data to the new update. For example, the update for changing password hashing from MD5 to SHA256 comes supplied with a Python script for re-hashing passwords.

### Scripts written in JavaScript
Scripts and tools written in JavaScript have the `*.js` file extension. They do not require any programs other than the software requirements listed in [Requirements (Server)](#requirements-server).

### Scripts that require Python
Scripts and tools written in Python have the `*.py` file extension. These require the installation of [Python 3.6](https://www.python.org/downloads/release/python-366/).  Other versions may be compatible with the supplied scripts or tools.

### Recommended external applications
- [DB Browser for SQLite](https://sqlitebrowser.org/) for modifying the database manually.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwMjk1ODg3NTEsMjIwNjc4MzQ0LC0yMT
Y5OTUxODYsOTk0NzA1NDQwLC00NjA2MjMxNzYsMjA5Nzg0Mjc2
NCwtMjc5NjUzODcyLDE3MDQxNjkxMzksLTkwMjcyNjMyMyw4Nz
M4NzU2MjUsMjI1NjcyMzEzLDcxODgxOTY1NywtMjA3MDE2MzIx
LDEzMDU2MDE1ODAsMTExMjM3OTg0NSwxODA3MDc1ODU3LDk1OT
Q2NzY4Niw2NzcyMjIzNTUsLTg3ODk4Mzk5OSwtODg4MzEzMTgx
XX0=
-->