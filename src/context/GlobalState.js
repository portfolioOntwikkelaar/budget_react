import React, {createContext, useReducer} from 'react';
import incomeTransactions from '../components/IncomeTransactions';
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [
    {id:1,incomeText: "Car sold", incomeAmount: 15000 },
    {id:2,incomeText: "Salary", incomeAmount: 5000 },
    {id:3,incomeText: "Bonus", incomeAmount: 13000 }
  ],
  expenseTransactions: [
    {id:4,incomeText: "Rent", incomeAmount: 1000 },
    {id:5,incomeText: "Bank", incomeAmount: 2000 },
    {id:6,incomeText: "Clothes", incomeAmount: 500 }
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addIncome = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };
  const addExpense = (expenseTransaction) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider 
    value={{
      incomeTransactions: state.incomeTransactions,
      expenseTransactions: state.expenseTransactions,
      addIncome,
      addExpense,
      deleteTransaction,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}