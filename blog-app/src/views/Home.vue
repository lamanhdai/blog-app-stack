<script setup></script>
<template>
  <div class="blog">
    <div class="blog__filter-group">
      <button type="button" class="blog__filter-all-post">All Posts</button>
      <button type="button" class="blog__filter-my-post">My Posts</button>
    </div>
  </div>
</template>

<style lang="scss">
.blog {
  &__filter-group {
    margin-top: 25px;
    display: flex;
    background: #fff;
    padding: 15px 20px;
    column-gap: 8px;
  }
  &__filter-all-post {
    padding: 8px;
    background: #FFE600;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
    width: 190px;
  }
  &__filter-my-post {
    padding: 8px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
    width: 190px;
  }
}
</style>