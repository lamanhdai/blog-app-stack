<script setup>
  import star from '../assets/Star.svg'
</script>
<template>
  <div class="card">
    <div class="card__user-bar">
      <img src="" alt="" class="card__user-image">
      <div class="card__user-name">JohnDoe <div class="card__user-puhblished-date">2 hours ago</div></div>
    </div>
    <img src="" alt="" class="card__visual">
    <div class="card__content">
      <div class="card__content-group">
        <div class="card__content-name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="card__content-rating">4<img :src="star" alt="" class="card__content-star"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  border: 1px solid rgba(0,0,0,0.5);
  &__user-bar {
    display: flex;
    padding: 11px 8px;
  }
  &__user-image {

  }
}
</style>