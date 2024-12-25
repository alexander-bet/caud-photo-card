document.addEventListener('DOMContentLoaded', function () {
   const photoCard = document.querySelector('.caudena-photo-card');
   const frontImage = photoCard.querySelector('.front img');
   const back = photoCard.querySelector('.back');
   const front = photoCard.querySelector('.front');

   function adjustCardWidth() {
      if (frontImage && back) {
         const imageWidth = frontImage.clientWidth;
         back.style.width = `${imageWidth}px`;
         front.style.width = `${imageWidth}px`;
         back.style.left = '50%';
         front.style.left = '50%';
         back.style.transform = 'translateX(-50%)';
         front.style.transform = 'translateX(-50%)';
      }
   }

   // Adjust width on initial load
   adjustCardWidth();

   // Adjust width on window resize
   window.addEventListener('resize', adjustCardWidth);
});