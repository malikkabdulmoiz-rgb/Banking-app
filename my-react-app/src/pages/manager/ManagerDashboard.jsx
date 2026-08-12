import LogoutButton from "../../components/LogoutButton";

function ManagerDashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h2>Banking App</h2>
        
        <button>Dashboard</button>
        <button>Customers</button>
        <button>Employees</button>
        <button>Loan Requests</button>
        <button>Transactions</button>
        <button
  onClick={() => {
    localStorage.removeItem("userRole");
    window.location.href = "/";}}>Logout</button>
      </aside>

      <main className="content">

        <h1>Manager Dashboard</h1>

        <div className="welcome">
          <h2>Welcome, Usman Malik</h2>
          <p>Role: Manager</p>
        </div>

        <div className="cards">

          <div className="card">
            <h3>Total Bank Balance</h3>
            <h2>Rs. 15,000,000</h2>
          </div>

          <div className="card">
            <h3>Total Loans Issued</h3>
            <h2>Rs. 6,500,000</h2>
          </div>

          <div className="card">
            <h3>Active Customers</h3>
            <h2>125</h2>
          </div>

          <div className="card">
            <h3>Employees</h3>
            <h2>15</h2>
          </div>

        </div>

        <div className="section">
          <h2>High Value Loan Requests</h2>

          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Amount</th>
                <th>Purpose</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ahmed Khan</td>
                <td>Rs. 1,500,000</td>
                <td>Property Purchase</td>
                <td>24 Months</td>
                <td>
                  <button className="approve-btn">
                    Approve
                  </button>

                  <button className="reject-btn">
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section">
          <h2>Employee Management</h2>

          <button className="add-btn">
            + Add Employee
          </button>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ali Raza</td>
                <td>ali@bank.com</td>
                <td>Employee</td>
                <td>Rs. 60,000</td>
                <td>
                  <button className="small-btn">
                    Edit
                  </button>

                  <button className="reject-btn">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
  
}
<LogoutButton />

export default ManagerDashboard;