<template>
  <div>

    <input v-model="newContact" placeholder="Name" type="text" />
    <button class="list-button" @click="addContact">Add Contact</button>
    <button class="list-button" @click="sortContacts">Sort</button>

    <transition-group name="slide-up" tag="ul" appear>
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </transition-group>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        newContact: "",
        contacts: [
          "Beau Thabeast",
          "Cindy Rella",
          "Alice Wunderlind"
        ]
      }
    },
    methods: {
      addContact() {
        this.contacts.push(this.newContact)
        this.newContact = ""
      },
      sortContacts() {
        this.contacts.sort();
      }
    }
  }
</script>

<style>
.list-button {
  width: auto !important;
}

ul {
  text-decoration: none;
  list-style: none;
}
</style>
