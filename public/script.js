// Fetch data from Express server and populate the table
fetch('http://localhost:3000/coins')
  .then(response => response.json())
  .then(coins => {
    console.log(coins);
    const coinsBody = document.querySelector('#coins-body');

    // Loop through each coin and add a row to the table
    Object.keys(coins).forEach((symbol, index) => {
      const coin = coins[symbol];

      const row = document.createElement('div');
      row.classList.add('coins-row');

      // Add the S.No. column
      const snoCell = document.createElement('div');
      snoCell.classList.add('coins-cell');
      snoCell.innerHTML = index + 1;
      row.appendChild(snoCell);

      // Add the Platform column
      const titleCell = document.createElement('div');
      titleCell.classList.add('coins-cell');
      titleCell.innerHTML = coin.name;
      row.appendChild(titleCell);

      // Add the Last Traded Price column
      const lastCell = document.createElement('div');
      lastCell.classList.add('coins-cell');
      lastCell.innerHTML = coin.last;
      row.appendChild(lastCell);

      // Add the Buy/Sell Price column
      const buySellCell = document.createElement('div');
      buySellCell.classList.add('coins-cell');
      buySellCell.innerHTML = `${coin.buy}/${coin.sell}`;
      row.appendChild(buySellCell);

      // Add the Difference column
      const difference = document.createElement('div');
      difference.classList.add('coins-cell');
      difference.innerHTML = `${((coin.sell - coin.buy) / coin.buy * 100).toFixed(2)}%`;
      row.appendChild(difference);

      // Add the Savings column
      const savings = document.createElement('div');
      savings.classList.add('coins-cell');
      savings.innerHTML = (coin.sell - coin.buy).toFixed(2);
      row.appendChild(savings);

      // Append the row to the coins body
      coinsBody.appendChild(row);
    });
  })
  .catch(error => console.error(error));
