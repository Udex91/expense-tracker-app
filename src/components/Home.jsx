export default function Home(){
    return  <body>
    <h1>Expense Tracker</h1>
    

    <div>
      <input type="text" id="expenseName" placeholder="Expense Name" /> <br/>
      <input type="number" id="expenseAmount" placeholder="Amount" /> <br/>
      <button onclick="">Add Expense</button>
    </div>
    
    
    <ul id="expenseList">  </ul>
    
    
    <div>
      <p>Total Expenses: <span id="totalExpenses">0.00</span></p>
    </div> 
    </body>
    
}