import { getAllEmployees } from "../../services/employeeService";
import { useEffect, useState } from "react";
import { User } from "../../users/User";
import "./Employee.css";

export const EmployeeList = () => {
  const [employees, setAllEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeeArray) => {
      setAllEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((userObj) => {
        return <User user={userObj.user} key={userObj.userId} />;
      })}
    </div>
  );
};
