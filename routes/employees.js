const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample in-memory employee data
let employees = [
  { id: 1, empid: 'E001', name: 'Jack', psTeam: 'Team A', memberType: 'Full-time', attendance: 95, salary: 85 },
  { id: 2, empid: 'E002', name: 'Rose', psTeam: 'Team B', memberType: 'Contract', attendance: 90, salary: 80 }
];

// -------------------- ROUTES ----------------------

// 1. GET all employees
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

// 2. GET a specific employee by ID
app.get('/api/employees/:id', (req, res) => {
  const employee = employees.find(emp => emp.id == req.params.id);
  if (!employee) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  res.json(employee);
});

// 3. POST a new employee (Create)
app.post('/api/employees', (req, res) => {
  const newEmployee = {
    id: employees.length + 1,  // Increment ID for new employee
    empid: req.body.empid,
    name: req.body.name,
    psTeam: req.body.psTeam,
    memberType: req.body.memberType,
    attendance: req.body.attendance,
    salary: req.body.salary
  };

  employees.push(newEmployee);
  res.status(201).json(newEmployee);  // 201 Created
});

// 4. PUT (Update) an employee by ID
app.put('/api/employees/:id', (req, res) => {
  const employee = employees.find(emp => emp.id == req.params.id);
  if (!employee) {
    return res.status(404).json({ message: 'Employee not found' });
  }

  // Update employee details
  employee.empid = req.body.empid || employee.empid;
  employee.name = req.body.name || employee.name;
  employee.psTeam = req.body.psTeam || employee.psTeam;
  employee.memberType = req.body.memberType || employee.memberType;
  employee.attendance = req.body.attendance || employee.attendance;
  employee.salary = req.body.salary || employee.salary;

  res.json(employee);  // Send the updated employee
});

// 5. DELETE an employee by ID
app.delete('/api/employees/:id', (req, res) => {
  const employeeIndex = employees.findIndex(emp => emp.id == req.params.id);
  if (employeeIndex === -1) {
    return res.status(404).json({ message: 'Employee not found' });
  }

  employees.splice(employeeIndex, 1);  // Remove employee from array
  res.status(204).send();  // 204 No Content
});

// -------------------- SERVER ----------------------

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
