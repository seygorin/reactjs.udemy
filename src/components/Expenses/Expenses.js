import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
	const [filterYear, setFilterYear] = useState('2021');
	const changeFilterYear = (newYear) => {
		setFilterYear(newYear);
	};
	const filteredExpenses = props.items.filter((element) => {
		return element.date.getFullYear().toString() === filterYear;
	});

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filterYear}
				onChangeFilterYear={changeFilterYear}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}

export default Expenses;
