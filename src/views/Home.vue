<template>
  <main class="home-page">
    <div class="hero-header">
      <div id="parallax" class="above-shapes">
        <div id="hero-image-background"></div>
        <div id="hero-image-content">
          <div>
            <h2>Hello!</h2>
          </div>
          <div>
            <p>
              My name is <strong>Broderick</strong> and I'm a programmer,
              musician, artist and blogger in the
              <strong>Greater Chicago Area</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 multi-class">
      <div class="max-width above-shapes">
        <div class="title-container">
          <h2 class="title title-bars title-mono">
            Multi-Classed Creative Geek
          </h2>
        </div>

        <div class="row p-2">
          <div class="col-md-4 geek-item">
            <img
              src="@/assets/images/homepage/computer.png"
              alt=""
              class="geek-images"
            />
            <div class="geek-blurb">
              <h4>Programmer</h4>
              <p class="geek-level">Lv. 12</p>
              <p>
                This is text explaining how I am a programmer. I need a bit more
                room. I think three sentences is nice.
              </p>
              <a href="#" class="w-100 d-flex flex-row-reverse"
                ><p>This is a link to a relative page!</p></a
              >
            </div>
          </div>

          <div class="col-md-4 geek-item">
            <img
              src="@/assets/images/homepage/charity.png"
              alt=""
              class="geek-images"
            />
            <div class="geek-blurb">
              <h4>Nerd</h4>
              <p class="geek-level">Lv. 12</p>
              <p>
                This is text explaining how I am a programmer. I need a bit more
                room. I think three sentences is nice.
              </p>
              <a href="#" class="w-100 d-flex flex-row-reverse"
                ><p>This is a link to a relative page!</p></a
              >
            </div>
          </div>

          <div class="col-md-4 geek-item">
            <img
              src="@/assets/images/homepage/destijl.png"
              alt=""
              class="geek-images"
            />
            <div class="geek-blurb">
              <h4>Musician & Artist</h4>
              <p class="geek-level">Lv. 12</p>
              <p>
                This is text explaining how I am a programmer. I need a bit more
                room. I think three sentences is nice.
              </p>
              <a href="#" class="w-100 d-flex flex-row-reverse"
                ><p>This is a link to a relative page!</p></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="blockquote blockquote-secondary above-shapes"
        cite="b-lemke.github.io"
      >
        <div class="blockquote-content">
          <div class="blockquote-image">
            <img src="@/assets/images/tobysquare.jpg" />
          </div>
          <div class="blockquote-quote">
            <div class="blockquote-text">
              "Cage matches? Yeah, they work. How could they not work? If they
              didn't work, everybody would still be in the cage. Thus, Michael
              Scott sealed his own destiny... in a good way, yeah. Me neither,
              that's a ridiculous question, why was she in this building? Why is
              my office black? Yeah, I just moved it an inch every time he went
              to the bathroom. And that's how I spent my entire day that day."
            </div>
            <div class="blockquote-attribution">&mdash; Michael Scott</div>
          </div>
        </div>
      </div>
    </div>

    <div class="what-do-i-do">
      <div class="max-width row flex-row-reverse above-shapes">
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <img
            src="@/assets/images/homepage/tobbysit.jpg"
            alt=""
            class="spotlight-image"
          />
        </div>
        <div class="col-md-6">
          <div class="title title-stacked title-mono">
            What Kind of Work Do I Do?
          </div>
          <p>
            Use justify-content utilities on flexbox containers to change the
            alignment of flex items on the main axis (the x-axis to start,
            y-axis if flex-direction: column). Choose from start (browser
            default), end, center, between, or around.
          </p>
          <p class="d-flex flex-row-reverse">
            <a href="#" class="btn btn-primary">Learn More</a>
          </p>

          <div class="image-gallery row">
            <div class="col-md-6">
              <a href="#"
                ><img src="@/assets/images/tobysquare.jpg" alt=""
              /></a>
            </div>
            <div class="col-md-6">
              <a href="#"
                ><img src="@/assets/images/tobysquare.jpg" alt=""
              /></a>
            </div>
            <div class="col-md-6">
              <a href="#"
                ><img src="@/assets/images/tobysquare.jpg" alt=""
              /></a>
            </div>
            <div class="col-md-6">
              <a href="#"
                ><img src="@/assets/images/tobysquare.jpg" alt=""
              /></a>
            </div>
            <div class="col-md-6">
              <a href="#"
                ><img src="@/assets/images/tobysquare.jpg" alt=""
              /></a>
            </div>
            <div class="col-md-6">
              <a href="#"
                ><img src="@/assets/images/tobysquare.jpg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="background-svgs">
      <SvgSprite class="svg-shape" symbol="abstract" size="24" />
    </div>
  </main>
</template>

<script>
//import TitleStyled from "@/components/TitleStyled.vue";
import { SvgSprite } from "vue-svg-sprite";

export default {
  name: "Home",
  data() {
    return {
      parallaxEl: undefined,
    };
  },
  components: { SvgSprite },
  mounted() {
    this.parallaxEl = document.getElementById("parallax");
    window.addEventListener("scroll", this.scroll);
  },
  methods: {
    scroll: function () {
      let offset = window.pageYOffset;
      if (offset > 70) {
        this.parallaxEl.style.backgroundPositionY = offset * 0.7 - 70 + "px";
      } else {
        this.parallaxEl.style.backgroundPositionY = offset * 0.7 + "px";
      }

      this.parallaxEl.style.backgroundPositionX = offset * 0.3 * -1 + "px";
    },
  },
};
</script>

<script></script>

<style>
.under-construction {
  width: 90%;
  margin: 20px auto;
  max-width: 1200px;
  height: auto;
}
</style>
