# Admin - UI

This project is a React application that demonstrates a pagination table component. It allows users to navigate through a large dataset by displaying a limited number of rows per page and providing pagination controls.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App](#app)
  - [Pagination](#pagination)
  - [TableDisp](#tabledisp)
  - [Footer](#footer)
  - [PopUp](#popup)
- [Data Structure](#data-structure)

## Features

- Pagination: Display data in pages, allowing users to navigate through the dataset.
- Table Display: Present the data in a table format with columns and rows.
- Row Selection: Enable users to select individual rows or all rows using checkboxes.
- Editing: Provide a popup form to edit the data of a selected row.

## Installation

- **Clone** the repository: https://github.com/Shubhdeepdsa/Admin-UI.git


- **Navigate** to the project directory


- **Install** the dependencies: npm install


## Usage

- Start the development server: npm start


- Open your browser and visit `http://localhost:3000` to view the application.

## Components

### App

- **Summary**: The main component that renders the pagination table and handles data management.

### Pagination

- **Summary**: Manages the pagination logic and renders the table and footer components.
- **Functions**:
- `handlePageChange`: Handles the change of the current page number.
- `handleSelectAllRows`: Handles the selection/deselection of all rows.
- `handleRowSelection`: Handles the selection/deselection of an individual row.
- `handleEditItem`: Sets the ID of the item to be edited and opens the editing popup.
- `handleDeleteItem`: Deletes the selected item from the data.

### TableDisp

- **Summary**: Displays the table with rows.
- **Functions**:
- `actionHandler`: Handles actions such as editing and deleting a row.
- `handleSelectAll`: Handles the selection/deselection of all rows.
- `handleRowSelection`: Handles the selection/deselection of an individual row.

### Footer

- **Summary**: Renders the pagination controls and page information.
- **Functions**:
- `handlePrevPage`: Handles navigation to the previous page.
- `handleNextPage`: Handles navigation to the next page.
- `handlePageClick`: Handles navigation to a specific page.

### PopUp

- **Summary**: Shows a form popup for editing row data.
- **Functions**:
- `handleInput`: Updates the corresponding field (name, email, role) in the popup data object.
- `handleSubmit`: Updates the edited data upon form submission.

## Data Structure

The data for the pagination table is structured as an array of objects, where each object represents a row in the table. Each row object contains properties such as `id`, `name`, `email`, and `role`. The data is passed to the `Pagination` component as a prop and is sliced and displayed based on the current page number.
## Demo
![image](https://github.com/Shubhdeepdsa/Admin-UI/assets/90149745/a3adff76-3a74-4bdb-b1aa-9dad0a7ec5a5)
![image](https://github.com/Shubhdeepdsa/Admin-UI/assets/90149745/b3e4b6d6-5a7c-44be-91a4-1753513fbf8b)
![image](https://github.com/Shubhdeepdsa/Admin-UI/assets/90149745/37bd4257-023c-47e1-97e3-7af06a482ee3)
![image](https://github.com/Shubhdeepdsa/Admin-UI/assets/90149745/b1b6e0cb-059b-47f0-8d4e-573ead6edb1c)



