import { auth, db, storage } from './firebase-config.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js';
import { ref, set } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js';
import { ref as sRef, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js';

const form = document.getElementById("register-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const password = form.password.value;
  const emergencyPhone = form.emergencyPhone.value;
  const emergencyEmail = form.emergencyEmail.value;
  const pincode = form.pincode.value;
  const gender = form.gender.value;
  const address = form.address.value;
  const file = form.profilePic.files[0];

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;

    const fileRef = sRef(storage, 'users/' + userId + '/profile.jpg');
    await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    await set(ref(db, 'users/' + userId), {
      name,
      email,
      phone,
      emergencyPhone,
      emergencyEmail,
      pincode,
      gender,
      address,
      photoURL,
    });

    alert("Registration successful!");
    window.location.href = "login.html";
  } catch (err) {
    alert("Error: " + err.message);
  }
});
