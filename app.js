// Get user data from API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Generate user list
    let userList = document.querySelector('#home .list-group');
    let row = document.createElement('div');
    row.classList.add('row');
    userList.appendChild(row);
    users.forEach(user => {
      let col = document.createElement('div');
      col.classList.add('col-md-6');
      let listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.innerHTML = `
        <h4>${user.name}</h4>
        <h5>${user.username}</h5>
        <p>${user.email}</p>
        <p><b>Address:</b> ${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}</p>
        <p><b>Phone: </b>${user.phone}</p>
        <p><b>Company:</b> ${user.company.name} ${user.company.catchPhrase} ${user.company.bs} </p>
        <a href="${user.website}">${user.website}</a>
      `;
      col.appendChild(listItem);
      row.appendChild(col);
    });
  });

// Get photo data from API
fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(photos => {
    // Generate photo gallery
    let gallery = document.querySelector('#gallery .row');
    photos.slice(0, 100).forEach(photo => {
      let col = document.createElement('div');
      col.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');
      col.innerHTML = `
        <div class="card">
          <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
          <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
          </div>
        </div>
      `;
      gallery.appendChild(col);
    });
  });
