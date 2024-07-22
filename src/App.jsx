import { useState } from "react";
import axios from "axios";
import CustomerTable from "./Components/CustomerTable";
import TransactionGraph from "./Components/TransactionGraph";
import route from "../src/Assets/Images/route.jpeg";

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
    <div className="customer-transactions my-3 p-3">
      <div className="route">
        <div className="image-route">
          <img className="w-100" src={route} alt="" />
        </div>
      </div>
      <h1 className="text-center my-3">Customer Transactions</h1>
      <CustomerTable onSelectCustomer={handleSelectCustomer} />

    

    </div>
  );
};

export default App;
