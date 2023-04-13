const form = document.querySelector('.form');
const input = document.querySelector('.input');
const ul = document.querySelector('.ul');
const tasks = JSON.parse(localStorage.tasks) || [];
console.log(tasks);
if (tasks) {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task;
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const button = document.createElement('button');
    button.textContent = 'X';
    li.append(button);
    li.prepend(checkbox);
    checkbox.addEventListener('click', (event) => {
      if (checkbox.checked) {
        li.style.textDecoration = 'line-through';
        ul.append(li);
      } else {
        li.style.textDecoration = 'none';
        ul.prepend(li);
      }
    });
    button.addEventListener('click', (event) => {
      li.remove();
    });
    ul.appendChild(li);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const li = document.createElement('li');
  li.textContent = input.value;
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  const button = document.createElement('button');
  button.textContent = 'X';
  li.append(button);
  li.prepend(checkbox);
  checkbox.addEventListener('click', (event) => {
    if (checkbox.checked) {
      li.style.textDecoration = 'line-through';
      ul.append(li);
    } else {
      li.style.textDecoration = 'none';
      ul.prepend(li);
    }
  });
  button.addEventListener('click', (event) => {
    li.remove();
  });
  ul.appendChild(li);
  tasks.push(input.value);
  localStorage.tasks = JSON.stringify(tasks);
  input.value = '';
});
