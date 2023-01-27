<template>
  <footer class="bg-dark text-light row w-100 py-5 px-4 mx-0">
    <div
      class="col-12 col-lg-2 d-flex flex-column justify-content-between px-1 mb-4"
    >
      <fa icon="heart" size="lg" fixed-width class="footer-heart" />
      <div>
        <small
          >&copy; Broderick Lemke <span>{{ currentYear }}</span></small
        >
      </div>
    </div>
    <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-4">
      <ul class="m-0 list-unstyled">
        <li><a href="#">About Me</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Portfolio</a></li>
      </ul>
    </div>
    <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-4">
      <ul class="m-0 list-unstyled">
        <li>
          <a href="https://github.com/B-Lemke"
            ><fa :icon="['fab', 'github']" class="mr-2 text-info" />Github</a
          >
        </li>
        <li>
          <a href="https://twitter.com/LemkeBroderick"
            ><fa :icon="['fab', 'twitter']" class="mr-2 text-info" />Twitter</a
          >
        </li>
        <li>
          <a href="https://www.linkedin.com/in/broderick-lemke/"
            ><fa
              :icon="['fab', 'linkedin-in']"
              class="mr-2 text-info"
            />LinkedIn</a
          >
        </li>
      </ul>
    </div>

    <div class="col-lg-3 d-flex flex-column justify-content-center mb-4">
      <p class="my-0">
        The only way to deal with an unfree world is to become so absolutely
        free that your very existence is an act of rebellion. <br />&mdash;
        Albert Camus
      </p>
    </div>
    <div class="col-lg-3 d-flex flex-column justify-content-center">
      <div>
        <p class="m-0"><strong>Like What You See?</strong></p>
        <p class="mb-1">
          I'm always happy to talk with potential clients, employers, and
          colleagues. Please reach out to me at:
        </p>
        <p class="m-0">
          <fa icon="envelope" class="mr-2 text-primary" />
          admin@gayweb.dev
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
