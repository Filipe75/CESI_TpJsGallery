$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "./liste.xml",
    dataType: "xml",

    error: function(e) {
      alert("An error occurred while processing XML file");
      console.log("XML reading Failed: ", e);
    },

    success: function(response) {
      var images = [];
      $(response)
        .find("image")
        .each(function() {
          images.push(
            $(this)
              .find("src")
              .text()
          );
        });

      let i = 0;
      while (images.length > 0) {
        let index = Math.round(Math.random() * (images.length - 1));

        $("#image-container").append(
          '<a href="#' + i + '"><img src="' + images[index] + '"/></a>'
        );

        $("body").append(
          '<a href="#all" class="lightbox" id="' +
            i +
            '"><div><img src="' +
            images[index] +
            '"/></div></a>'
        );

        images.splice(index, 1);
        i++;
      }
    }
  });
});
