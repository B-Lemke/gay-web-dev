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
              musician, artist and improviser in the
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
              <h4>Full-Stack Developer</h4>
              <p class="geek-level">Lv. 42</p>
              <p>
                The computer has been my home since I was 18 months old. I've
                been programming since middle school when I did my mother's web
                devlopment coursework alongside her. Today, I span the front and
                back end with skills focusing in .Net and Vue.Js.
              </p>
              <router-link
                class="w-100 d-flex flex-row-reverse"
                :to="{ name: 'Portfolio' }"
              >
                Portfolio
              </router-link>
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
              <p class="geek-level">Lv. 84</p>
              <p>
                Whether it be performing improvised musicals on stage or playing
                D&D, I can't hide that I'm a giant nerd. I'm the reigning
                pictionary champion on my work team. Ask me about what I've been
                watching/reading, I love to chat about nerdy things!
              </p>
              <router-link
                class="w-100 d-flex flex-row-reverse"
                :to="{ name: 'About' }"
              >
                Learn More About me!
              </router-link>
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
                I bring creativity from years developing UI/UX skills, art and
                music. Happy to talk 'classical' music from Bach through
                Stravinsky but my heart will always lay with Fluxus, Minimalism
                and Electronic music. Always looking to grow my creative skills.
              </p>
              <router-link
                class="w-100 d-flex flex-row-reverse"
                :to="{ name: 'Gallery' }"
              >
                Gallery of Art and Music
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <custom-block-quote
      color="secondary"
      imageName="tobysquare.jpg"
      citation="https://gayweb.dev"
      attribution="Michael Scott"
    >
      "Cage matches? Yeah, they work. How could they not work? If they didn't
      work, everybody would still be in the cage. Thus, Michael Scott sealed his
      own destiny... in a good way, yeah. Me neither, that's a ridiculous
      question, why was she in this building? Why is my office black? Yeah, I
      just moved it an inch every time he went to the bathroom. And that's how I
      spent my entire day that day."
    </custom-block-quote>

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
          <p>In my current position, my work spans</p>
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
      <background-shapes></background-shapes>
    </div>
  </main>
</template>

<script>
//import TitleStyled from "@/components/TitleStyled.vue";
import BackgroundShapes from "@/components/BackgroundShapes.vue";
import CustomBlockQuote from "@/components/CustomBlockQuote.vue";

export default {
  name: "Home",
  data() {
    return {
      parallaxEl: undefined,
    };
  },
  components: { BackgroundShapes, CustomBlockQuote },
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
