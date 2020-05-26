document.window.onload = function () {
  // Index of current image
  // which is on display
  var imageIndex = 0;

  // Object array of all the
  // images of class test
  var images = document.getElementsByClassName("test");

  // This tells us if mouse if over
  // image or not, We only change
  // image if mouse if over it
  var isMouseOverImage = false;

  // Object of parent element
  // containing all images
  var scrollImages = document.getElementById("scroll-image");

  // Stores the current scoll co-ordinates
  // so that the window don't scroll down
  // while scrolling the images
  var x, y;

  // This function sets the scroll to x, y
  function noScroll() {
    window.scrollTo(x, y);
  }

  // The following event id fired once when
  // We hover mouse over the images
  scrollImages.addEventListener("mouseenter", function () {
    // We store the current page
    // offset to x,y
    x = window.pageXOffset;
    y = window.pageYOffset;
    console.log("x", x, "y", y);
    // We add the following event to
    // window object, so if we scroll
    // down after mouse is over the
    // image we can avoid scrolling
    // the window
    window.addEventListener("scroll", noScroll);

    // We set isMouseOverImage to
    // true, this means Mouse is
    // now over the iamge
    isMouseOverImage = true;
  });

  // The following function is fired
  // when mouse is no longer over
  // the images
  scrollImages.addEventListener("mouseleave", function () {
    // We set isMouseOverImage to
    // false, this means mouse is
    // not over the iamge
    isMouseOverImage = false;

    // We remove the event we previously
    // added because we are no longer
    // over the image, the scroll will
    // now scroll the window
    window.removeEventListener("scroll", noScroll);
  });

  // The following function is called
  // when we move mouse wheel over
  // the images

  scrollImages.addEventListener("wheel", changeBg);

  function changeBg(e) {
    // We check if we are over
    // image or not
    if (isMouseOverImage) {
      var nextImageIndex;

      // The following condition
      // finds the next image
      // index depending if we
      // scroll up or scroll down
      if (e.deltaY > 0) nextImageIndex = (imageIndex + 1) % images.length;
      else nextImageIndex = (imageIndex - 1 + images.length) % images.length;

      // We set the z index of current
      // image to 0
      images[nextImageIndex].classList.toggle("transparent");
      images[imageIndex].style.zIndex = "0";

      // We set the z index of next
      // image to 1, this makes
      // The new image appear on top
      // of old image

      images[nextImageIndex].style.zIndex = "1";
      imageIndex = nextImageIndex;
    }
  }
  console.log("nextImageIndex");
};
