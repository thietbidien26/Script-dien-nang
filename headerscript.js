  <script>
    document.addEventListener("DOMContentLoaded", function() {
      var linkElements = document.getElementsByTagName("link");
      for (var i = 0; i < linkElements.length; i++) {
        var linkElement = linkElements[i];
        var relAttribute = linkElement.getAttribute("rel");
        var hrefAttribute = linkElement.getAttribute("href");
        if (relAttribute === "canonical" && (hrefAttribute === "https://diennangdongnai.com:443/" || hrefAttribute === "https://diennangdongnai.com/")) {
          linkElement.parentNode.removeChild(linkElement);
        }
      }
    });
  </script>
