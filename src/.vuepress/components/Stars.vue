<template >
  <div class="">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <h3>Puntaje: </h3>
    <div v-html="items" class="">

  </div>

  </div>

</template>

<script>
export default {
  name: 'Stars',
  data: () => ({
    max: 5,
    items: null,
  }),
  props: [
    'amount',
  ],
  created() {
    this.items = '';
    for (var i = 1; i <= this.max; i++) {
      if (i <= this.amount) {
        this.items += '<span class="fa fa-star fa-2x fa-fw checked" style="color: orange;"></span>';
      } else {
        this.items += '<span class="fa fa-star fa-2x fa-fw"></span>';
      }
    }
  },
};
</script>
