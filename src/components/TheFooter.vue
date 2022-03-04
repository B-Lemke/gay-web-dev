<template>
  <footer class="bg-dark text-light row w-100 py-5 px-4 mx-0">
    <div
      class="col-12 col-lg-2 d-flex flex-column justify-content-between px-1 mb-4"
    >
      <fa icon="heart" size="lg" fixed-width class="footer-heart" />
      <div>
        <small
          >&copy; Broderick Lemke
          <span class="current-year-replace">2020</span></small
        >
      </div>
    </div>
    <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-4">
      <ul class="m-0 list-unstyled">
        <li><a href="#">About Me</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
    <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-4">
      <ul class="m-0 list-unstyled">
        <li>
          <a href="#"
            ><fa :icon="['fab', 'github']" class="mr-2 text-info" />Github</a
          >
        </li>
        <li>
          <a href="#"
            ><fa :icon="['fab', 'twitter']" class="mr-2 text-info" />Twitter</a
          >
        </li>
        <li>
          <a href="#"
            ><fa
              :icon="['fab', 'linkedin-in']"
              class="mr-2 text-info"
            />LinkedIn</a
          >
        </li>
      </ul>
    </div>
    <div class="col-lg-3 d-flex flex-column justify-content-center mb-4">
      <label for="subscribeToBlog">Subscribe to my blog</label>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control footer-email-dark font-italic replace-placeholder-email"
          placeholder="mscott@dminfinity.net"
          aria-label="Subscribe to my blog"
          aria-describedby="footerSubscribeToBlog"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-light footer-email-button"
            type="button"
            id="footerSubscribeToBlog"
          >
            Ok!
          </button>
        </div>
      </div>
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
          website-email@email.com
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {},
};
</script>
