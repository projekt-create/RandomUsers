// API
const api = "https://randomuser.me/api/";

// Dom elemnts
const Users = document.querySelector(".users");
const Loading = document.querySelector(".loading");
const LoadMoreBtn = document.querySelector("#btn");
const body = document.querySelector("body");

// Fetch Users
async function fetchUsers() {
    try {
        Loading.style.display = "block";
        const response = await fetch(`${api}?results=12`);
        const data = await response.json();
        displayUsers(data.results);
        setTimeout(() => {
            Loading.style.display = "none";
        }, 500);
    } catch (error) {
        console.error("Error fetching users:", error);
        setTimeout(() => {
            Loading.style.display = "none";
        }, 500);
    }
}

// Display Users
function displayUsers(users) {
    Users.innerHTML += users
        .map(
            (user) => `
        <div class="user-card">
      <div class="box">
        <img src=${user.picture.large} alt="User 1" />
        <div class="div">
            <h3>John ${user.name.first}</h3>
            <p>Age: ${user.dob.age}</p>
        </div>
      </div>
      <p>Gender: ${user.gender}</p>
      <p>Occupation: ${user.location.city}</p>
      <p>Location: ${user.location.country}</p>
      <p>Phone Number: ${user.phone}</p>
      <p>Email: ${user.email}</p>
    </div>
    `
        )
        .join("");
}

// Initial Fetch
fetchUsers();

// Load More Button Event Listener
LoadMoreBtn.addEventListener("click", fetchUsers);
