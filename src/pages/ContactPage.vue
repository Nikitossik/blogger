<template>
  <section class="pt-48 pb-12">
    <div class="max-w-[1084px] mx-auto px-4 bg-primary-300 p-12 rounded-xl flex gap-6">
      <div class="text-text-neutral flex-1">
        <h1 class="text-4xl mb-4">Get in Touch with Us</h1>
        <p class="mb-4">We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to drop us a message. </p>
        <p>Your thoughts and ideas help us grow and create content that truly resonates with our community. Simply fill out the form, and we’ll get back to you as soon as possible. </p>
      </div>

      <div class="flex-1 flex flex-col gap-4">
        <div class="flex gap-4">
          <input
            v-model="firstName"
            type="text"
            placeholder="First Name"
            class="flex-1 p-4 bg-primary-100 rounded-t-sm border-b-2 border-primary-800 text-text-neutral transition focus:outline-2 focus:outline-primary-700"
          />
          <input
            v-model="lastName"
            type="text"
            placeholder="Last Name"
            class="flex-1 p-4 bg-primary-100 rounded-t-sm border-b-2 border-primary-800 text-text-neutral transition focus:outline-2 focus:outline-primary-700"
          />
        </div>
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-4 bg-primary-100 rounded-t-sm border-b-2 border-primary-800 text-text-neutral transition focus:outline-2 focus:outline-primary-700"
        />
        <textarea
          v-model="message"
          placeholder="Message"
          rows="5"
          class="w-full p-4 bg-primary-100 rounded-t-sm border-b-2 border-primary-800 text-text-neutral transition focus:outline-2 focus:outline-primary-700"
        ></textarea>
        <button
          @click="sendMessage"
          class="self-start bg-primary-700 cursor-pointer text-neutral py-2.5 px-6 rounded-[14px] text-sm/relaxed transition hover:bg-primary-600 focus:ring-primary-700 focus:ring-2 focus:ring-offset-4"
        >
          Send
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>