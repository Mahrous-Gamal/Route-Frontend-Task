import { useState } from "react";
import axios from "axios";
import CustomerTable from "./Components/CustomerTable";
import TransactionGraph from "./Components/TransactionGraph";

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const handleSelectCustomer = async (customerId) => {
    const response = await axios.get("http://localhost:5000/transactions");
    const customerTransactions = response.data.filter(
      (transaction) => transaction.customer_id === customerId
    );
    setTransactions(customerTransactions);
    setSelectedCustomer(customerId);
  };

  return (
    <div className="customer-transactions my-5 p-3">
      <h1 className="text-center mb-3">Customer Transactions</h1>
      <CustomerTable onSelectCustomer={handleSelectCustomer} />
      {selectedCustomer && <TransactionGraph transactions={transactions} />}

    </div>
  );
};

export default App;
