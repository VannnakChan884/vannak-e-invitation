<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const name = ref("");
const email = ref("");
const attending = ref("");
const guests = ref("");

const sendRSVP = (event) => {
  event.preventDefault(); // Prevent default form submission

  if (!attending.value) {
    alert("សូមជ្រើសរើសថាតើអ្នកនឹងចូលរួមឬអត់!");
    return;
  }

  const templateParams = {
    name: name.value,
    email: email.value,
    attending: attending.value,
    guests: guests.value,
  };

  emailjs
    .send(
      "e-invitation",  // Replace with EmailJS Service ID
      "e-invitation", // Replace with EmailJS Template ID
      templateParams,
      "C36o8eMJ0mZJezG-s"   // Replace with EmailJS Public Key
    )
    .then(() => {
      alert("លោកអ្នកបានឆ្លើយតប! 🎉");
      name.value = "";
      email.value = "";
      attending.value = "";
      guests.value = "";
    })
    .catch((error) => {
      console.error("Failed to send RSVP:", error);
      alert("ការឆ្លើយតបមិនបានជោគជ័យ, សូមព្យាយាមម្ដងទៀត!");
    });
};
</script>

<template>
  <div class="rsvp-form">
    <h2 class="mb-4 text-center">💌 សូមឆ្លើយតប</h2>
    <form class="row g-3" @submit.prevent="sendRSVP">
      <div class="col-lg-12 col-md-12 col-sm-12 mb-3">
        <label for="name" class="form-label">ឈ្មោះរបស់អ្នក</label>
        <input type="text" class="form-control" id="name" v-model="name" placeholder="ឈ្មោះរបស់អ្នក" required />
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 mb-3">
        <label for="email" class="form-label">អ៊ីម៉ែលរបស់អ្នក</label>
        <input type="email" class="form-control" id="email" v-model="email" placeholder="name@gmail.com" required />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 mb-3">
        <label for="attending" class="form-label">បញ្ជាក់</label>
        <select v-model="attending" id="attending" class="form-select" required>
          <option value="" disabled>តើអ្នកនឹងចូលរួមទេ?</option>
          <option value="Yes">ចូលរួម</option>
          <option value="No">មិនបានចូលរួម</option>
        </select>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 mb-3">
        <label for="guests" class="form-label">ចំនួនភ្ញៀវចូលរួម</label>
        <input type="number" class="form-control" id="guests" v-model="guests" placeholder="0" required />
      </div>
      <div class="col-12 mb-5">
        <button type="submit" class="btn btn-primary">បញ្ចូនការឆ្លើយតប</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.rsvp-form {
  font-family: "Kantumruy Pro";
}
</style>