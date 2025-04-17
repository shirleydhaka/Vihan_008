import { auth, db } from './firebase-config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js';
import { ref, get } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js';

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const snapshot = await get(ref(db, 'users/' + user.uid));
    const data = snapshot.val();
    const container = document.getElementById("profile-data");

    container.innerHTML = `
      <img src="${data.photoURL}" />
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Emergency Phone:</strong> ${data.emergencyPhone}</p>
      <p><strong>Emergency Email:</strong> ${data.emergencyEmail}</p>
      <p><strong>Pincode:</strong> ${data.pincode}</p>
      <p><strong>Gender:</strong> ${data.gender}</p>
      <p><strong>Address:</strong> ${data.address}</p>
    `;
  } else {
    window.location.href = "login.html";
  }
});

window.logout = () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};
