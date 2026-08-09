function CustomerDashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h2>Banking App</h2>

        <button>Dashboard</button>
        <button>Transactions</button>
        <button>Loans</button>
        <button>Deposit</button>
        <button>Withdraw</button>
      </aside>

      <main className="content">

        <h1>Customer Dashboard</h1>

        <div className="welcome">
          <h2>Welcome, Ahmed Khan</h2>
          <p>Account Status: Active</p>
        </div>

        <div className="cards">

          <div className="card">
            <h3>Current Balance</h3>
            <h2>Rs. 250,000</h2>
          </div>

          <div className="card">
            <h3>Pending Transactions</h3>
            <h2>2</h2>
          </div>

          <div className="card">
            <h3>Active Loans</h3>
            <h2>1</h2>
          </div>

        </div>

        <div className="section">
          <h2>Quick Actions</h2>

          <div className="actions">
            <button>Request Loan</button>
            <button>Deposit Request</button>
            <button>Withdraw Request</button>
          </div>
        </div>

        <div className="section">
          <h2>Recent Transactions</h2>

          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Deposit</td>
                <td>Rs. 50,000</td>
                <td>Approved</td>
                <td>20 Feb 2026</td>
              </tr>

              <tr>
                <td>Withdraw</td>
                <td>Rs. 20,000</td>
                <td>Pending</td>
                <td>21 Feb 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}

export default CustomerDashboard;