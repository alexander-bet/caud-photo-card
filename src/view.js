document.addEventListener('DOMContentLoaded', function () {
   const photoCards = document.querySelectorAll('.caudena-photo-card');

   photoCards.forEach(photoCard => {
      const frontImage = photoCard.querySelector('.front img');
      const back = photoCard.querySelector('.back');
      const front = photoCard.querySelector('.front');

      function adjustCardWidth() {
         if (frontImage && back) {
            const imageWidth = frontImage.clientWidth;
            back.style.width = `${imageWidth}px`;
            front.style.width = `${imageWidth}px`;
            photoCard.style.width = `${imageWidth}px`;
         }
      }
      // Adjust width on initial load
      adjustCardWidth();

      // Adjust width on window resize
      window.addEventListener('resize', adjustCardWidth);
   });
});