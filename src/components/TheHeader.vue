<template>
  <header class="above-shapes">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between"
    >
      <a class="navbar-brand gwd-logo" href="#" @click="goHome">
        <div id="logo-g">G</div>
        <div id="logo-a" class="invis-at-first">A</div>
        <div id="logo-y" class="invis-at-first">Y</div>
        <div id="logo-w">W</div>
        <div id="logo-e" class="invis-at-first">E</div>
        <div id="logo-b" class="invis-at-first">B</div>
        <div id="logo-d">D</div>
        <div id="logo-e2" class="invis-at-first">E</div>
        <div id="logo-v" class="invis-at-first">V</div>
        <p>Broderick Lemke</p>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-3 text-light text-center">
            <router-link class="nav-link styled-link" to="/about"
              >About</router-link
            >
          </li>
          <!--<li class="nav-item mr-3 text-center">
            <a class="nav-link styled-link" href="www.google.com">Blog</a>
          </li>-->
          <li class="nav-item mr-3 text-center">
            <router-link class="nav-link styled-link" to="/portfolio"
              >Programming</router-link
            >
          </li>
          <li class="nav-item mr-3 text-center">
            <router-link class="nav-link styled-link" to="/performance"
              >Performance</router-link
            >
          </li>
          <li class="nav-item mr-3 text-center">
            <router-link class="nav-link styled-link" to="/gallery"
              >Art & Music</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

let router = useRouter();

function goHome() {
  router.push("/");
}
</script>
