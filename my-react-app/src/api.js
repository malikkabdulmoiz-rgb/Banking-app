const API_URL = "http://localhost:5000";

export const getCustomers = async () => {
  const response = await fetch(`${API_URL}/customers`);
  return response.json();
};

export const getEmployees = async () => {
  const response = await fetch(`${API_URL}/employees`);
  return response.json();
};

export const getLoans = async () => {
  const response = await fetch(`${API_URL}/loans`);
  return response.json();
};

export const getTransactions = async () => {
  const response = await fetch(`${API_URL}/transactions`);
  return response.json();
};