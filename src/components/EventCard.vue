<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <!-- wrap in div to contain multiple root elements -->
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>
      <!-- <span>{{ event.attendees.length }} attending</span> -->
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: Object
  }
  // data() {
  //   return {
  //     event: {
  //       id: 1,
  //       title: "Beach Cleanup",
  //       date: "Wed Aug 19, 2019",
  //       time: "6:00 a.m.",
  //       attendees: [
  //         {
  //           id: 123,
  //           name: "Jess McGee"
  //         },
  //         {
  //           id: 456,
  //           name: "Meghan Markle"
  //         },
  //         {
  //           id: 789,
  //           name: "Tamitha Lebroux"
  //         }
  //       ]
  //     }
  //   };
  // }
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
