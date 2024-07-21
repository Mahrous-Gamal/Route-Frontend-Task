import { useState, useEffect } from "react";
import axios from "axios";

const CustomerTable = ({ onSelectCustomer }) => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [filter, setFilter] = useState({ name: "", amount: "" });



  function take(id) {

    let customerTransactions = transactions.map((t) => t.customer_id == id)
    console.log(customerTransactions);
    return customerTransactions.amount;

  }
  useEffect(() => {
    const fetchData = async () => {
      const customerResponse = await axios.get(
        "http://localhost:5000/customers"
      );
      const transactionResponse = await axios.get(
        "http://localhost:5000/transactions"
      );
      setCustomers(customerResponse.data);
      setTransactions(transactionResponse.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredCustomers(
      customers.filter((customer) =>
        customer.name.toLowerCase().includes(filter.name.toLowerCase())
      )
    );
  }, [filter.name, customers]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-md-12 mt-3">
          <input
            className="w-100 rounded-3 form-control "
            type="text"
            name="name"
            placeholder="Filter by customer name"
            value={filter.name}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-md-12 my-3">
          <input
            className="w-100 rounded-3 form-control "
            type="number"
            name="amount"
            placeholder="Filter by transaction amount"
            value={filter.amount}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <table className="w-100 table table-striped table-hover ">
        <thead >
          <tr className="d-flex justify-content-between text-center" >
            <th className="text-center w-50 text-success">Customer Name</th>
            <th className="text-center w-50 text-danger">Transaction Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr
              className="d-flex justify-content-between text-center"
              key={customer.id}
              onClick={() => onSelectCustomer(customer.id)}
            >
              <td className="text-center w-50">{customer.name}</td>
              <td className="text-center w-50">
                {/* {transactions
                  .filter((t) => t.customer_id === customer.id)
                  .reduce((sum, t) => sum + t.amount, 5000)
                } */}
                {/* {take(customer.id)} */}
              </td>
              <td className="text-center w-50">{customer.id}</td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
