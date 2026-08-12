import { useEffect, useState } from "react";
import {
  getCustomers,
  getLoans
} from "../../api";
import LogoutButton from "../../components/LogoutButton";
function EmployeeDashboard() {

  const [customers, setCustomers] = useState([]);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const customerData = await getCustomers();
      const loanData = await getLoans();

      setCustomers(customerData);
      setLoans(loanData);
    } catch (error) {
      console.log("Error loading data:", error);
    }
  };

  const pendingLoans = loans.filter(
    (loan) => loan.status === "pending"
  );

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Banking App</h2>

        <button>Dashboard</button>
        <button>Customers</button>
        <button>Create Customer</button>
        <button>Loan Requests</button>
        <button>Transactions</button>
      </aside>


      {/* Main Content */}
      <main className="content">

        <h1>Employee Dashboard</h1>

        <div className="welcome">
          <h2>Welcome, Ali Raza</h2>
          <p>Role: Employee</p>
        </div>


        {/* Dashboard Cards */}
        <div className="cards">

          <div className="card">
            <h3>Total Customers</h3>
            <h2>{customers.length}</h2>
          </div>

          <div className="card">
            <h3>Pending Loans</h3>
            <h2>{pendingLoans.length}</h2>
          </div>

          <div className="card">
            <h3>Pending Transactions</h3>
            <h2>12</h2>
          </div>

        </div>


        {/* Customers */}
        <div className="section">

          <h2>Customer List</h2>

          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Account No.</th>
                <th>Balance</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {customers.map((customer) => (

                <tr key={customer.id}>

                  <td>
                    {customer.name}
                  </td>

                  <td>
                    {customer.accountNumber}
                  </td>

                  <td>
                    Rs. {customer.balance.toLocaleString()}
                  </td>

                  <td>
                    {customer.status}
                  </td>

                  <td>
                    <button className="small-btn">
                      View Details
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* Loan Requests */}
        <div className="section">

          <h2>Pending Loan Requests</h2>

          <table>

            <thead>
              <tr>
                <th>Customer</th>
                <th>Amount</th>
                <th>Purpose</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {pendingLoans.map((loan) => (

                <tr key={loan.id}>

                  <td>
                    {loan.customerId}
                  </td>

                  <td>
                    Rs. {loan.amount.toLocaleString()}
                  </td>

                  <td>
                    {loan.purpose}
                  </td>

                  <td>
                    {loan.status}
                  </td>

                  <td>

                    {loan.amount <= 1000000 ? (

                      <>
                        <button className="approve-btn">
                          Approve
                        </button>

                        <button className="reject-btn">
                          Reject
                        </button>
                      </>

                    ) : (

                      <span>
                        Manager Approval
                      </span>

                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );

}
<LogoutButton />
export default EmployeeDashboard;