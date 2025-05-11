const updateTable = () => {
  const tbody = document.getElementById('multiplication-table');
  tbody.innerHTML = '';
  const multiplying = Number(document.getElementById('multiplying').value);
  for (let i = 0; i < 11; i++) {
    const tr = document.createElement('tr');
    tr.id = `multiplication-row-${i}`;
    for (let a = 0; a < 3; a++) {
      const td = document.createElement('td');
      td.id = `multiplication-data-${a}`;
      if (a === 0) {
        td.textContent = multiplying;
      } else if (a === 1) {
        td.textContent = i;
      } else {
        td.textContent = multiplying * i;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
};

updateTable();
