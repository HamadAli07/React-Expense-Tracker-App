import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  font-family: 'Montserrat';
  margin: 10px;
  align-items: center;
  `;

  const BalanceBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    `;

  const AddTransaction = styled.div`
    background: black;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    `;

    const AddTransactionContainer = styled.div `
      width: 100%;
      display: flex;
      flex-direction: column;
      border: 1px solid #e6e8e9;
      gap: 10px;
      padding: 15px 20px;
      margin: 20px;
      & input {
        outline: none;
        padding: 10px 20px;
        border-radius: 4px;
        border: 1px solid #e6e8e9;
      }
    `;

    const RadioBox = styled.div`
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      & input {
        margin: 0 10px;
      }
    `;

const AddTransactionView = (props) => {
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState('EXPENSE');

    const addTransaction = () => {
      props.addTransaction({amount:Number(amount), desc, type, id:Date.now()});
      props.toggleAddTransaction();
    }

    return (
        <AddTransactionContainer>
            <input placeholder='Amount'
            value={amount} 
            type='number'
            onChange={(e) => setAmount(e.target.value)} />
            <input placeholder='Description'
            value={desc}
            onChange={(e) => setDesc(e.target.value)} />
            <RadioBox>
                <input type='radio' 
                id='expense' 
                name='type' 
                value='EXPENSE' 
                checked = {type==='EXPENSE'}
                onChange={(e) => setType(e.target.value)}  />
                <label htmlFor='expense'>Expense</label>
                <input type='radio' 
                id='income' 
                name='type' 
                value='INCOME' 
                checked = {type==='INCOME'}
                onChange={(e) => setType(e.target.value)} />
                <label htmlFor='income'>Income</label>
            </RadioBox>
            <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
        </AddTransactionContainer>
    );
}

const ExpenseContainer = styled.div`
  display:flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
  `;

  const ExpenseBox = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
    padding: 15px 20px;
    width: 135px;
    font-size: 14px;
    & span {
      font-weight: bold;
      font-size: 20px;
      color: ${(props) => (props.isIncome ? 'green' : 'red')};
    }
    `;

const  OverviewComponent= (props) => {
    const [isAddTransactionVisible, toggleAddTransaction] = useState(false);
    
    return (
    <Container>
        <BalanceBox>
            Balance: ${props.income - props.expense}
            <AddTransaction onClick={() => toggleAddTransaction(!isAddTransactionVisible)}>
                {isAddTransactionVisible ? 'Cancel' : 'Add'}
            </AddTransaction>
        </BalanceBox>

        {isAddTransactionVisible && (
          <AddTransactionView toggleAddTransaction = {toggleAddTransaction}
          addTransaction = {props.addTransaction}/>
        )}

        <ExpenseContainer>
          <ExpenseBox isIncome = {false}>
            Expense<span>${props.expense}</span>
          </ExpenseBox>

          <ExpenseBox isIncome = {true}>
            Income<span>${props.income}</span>
          </ExpenseBox>


        </ExpenseContainer>
    </Container>

  )
}

export default OverviewComponent