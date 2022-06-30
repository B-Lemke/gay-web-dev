<template>
  <div id="background-svgs">
    <SvgSprite
      v-for="sprite in sprites"
      :key="sprite.name"
      :symbol="sprite.name"
      :class="{
        'd-none': !sprite.visibleOnMobile,
        'd-md-block': !sprite.visibleOnMobile,
      }"
      size="240"
    />
  </div>
</template>

<script>
import anime from "animejs";

export default {
  mounted() {
    MoveShapes();
  },
  data() {
    return {
      sprites: [
        { name: "zig", visibleOnMobile: true },
        { name: "zag", visibleOnMobile: false },
        { name: "x2", visibleOnMobile: true },
        { name: "x1", visibleOnMobile: true },
        { name: "whoishe", visibleOnMobile: false },
        { name: "triangles", visibleOnMobile: false },
        { name: "tobby1", visibleOnMobile: false },
        { name: "tobby2", visibleOnMobile: false },
        { name: "swoosh", visibleOnMobile: true },
        { name: "stairs", visibleOnMobile: false },
        { name: "stack", visibleOnMobile: false },
        { name: "spiral", visibleOnMobile: false },
        { name: "skinnyboi", visibleOnMobile: true },
        { name: "sitting", visibleOnMobile: false },
        { name: "pyramid", visibleOnMobile: false },
        { name: "pretzel", visibleOnMobile: true },
        { name: "munch", visibleOnMobile: false },
        { name: "hand", visibleOnMobile: false },
        { name: "eyeguy", visibleOnMobile: false },
        { name: "d20", visibleOnMobile: true },
        { name: "curvystack", visibleOnMobile: true },
        { name: "abstract", visibleOnMobile: true },
        { name: "abstract2", visibleOnMobile: true },
      ],
    };
  },
};

function MoveShapes() {
  //shuffle the svgs
  let svgs = document.querySelector("#background-svgs");
  for (i = svgs.children.length; i >= 0; i--) {
    svgs.appendChild(svgs.children[(Math.random() * i) | 0]);
  }

  //Get the divs in their new order
  let shapeEls = document.querySelectorAll(".svg-shape");

  var easings = ["linear"];

  // Utility Function to set keyframes on the fly
  function createKeyframes(value) {
    var keyframes = [];
    for (var i = 0; i < 30; i++) keyframes.push({ value: value });
    return keyframes;
  }

  // function to move each shape, recalled as one finishes
  function animateShape(el) {
    anime
      .timeline({
        targets: el,
        direction: "alternate",
        duration: function () {
          return anime.random(20000, 30000);
        },
        easing: function () {
          return easings[anime.random(0, easings.length - 1)];
        },
        complete: function (anim) {
          animateShape(anim.animatables[0].target);
        },
      })
      .add(
        {
          translateX: createKeyframes(function () {
            return anime.random(-300, 300);
          }),
          translateY: createKeyframes(function () {
            return anime.random(-100, 100);
          }),
          rotate: createKeyframes(function () {
            return anime.random(-180, 180);
          }),
          scale: createKeyframes(function () {
            return anime.random(0.5, 2);
          }),
        },
        0
      );
  }

  let lastX = 0;

  for (var i = 0; i < shapeEls.length; i++) {
    // set random sizes
    let size = anime.random(100, 350) + "px";
    shapeEls[i].style.width = size;
    shapeEls[i].style.height = size;

    // Randomize Shape placement and start the animations
    // Top has a range between 10 and 95. That's 85 percentages, plus 15 to bring it to the range, even split this way
    shapeEls[i].style.top = (85 / shapeEls.length) * i + 15 + "%"; //anime.random(10, 95) + "%";

    let newX = anime.random(-10, 100);
    while (-20 < newX - lastX && newX - lastX < 20) {
      console.log("Relooping", lastX, newX);
      newX = anime.random(-10, 90);
    }
    lastX = newX;
    shapeEls[i].style.left = newX + "%";

    animateShape(shapeEls[i]);
  }
}

export { MoveShapes };
</script>
