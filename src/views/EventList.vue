<template>
  <div>
    <h1>Events Listing</h1>
    <!-- iterate through each API event, grab key/id, send in each of the events as a prop -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
export default {
  components: {
    EventCard
  },
  // want a reactive property events
  data() {
    return {
      events: []
    };
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  }
};
</script>
