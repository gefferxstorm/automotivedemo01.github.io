if(document.querySelector('.heroSwiper'))new Swiper('.heroSwiper',{loop:true,speed:700,autoplay:{delay:6000,disableOnInteraction:false},pagination:{el:'.swiper-pagination',clickable:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},a11y:true});
document.getElementById('yr').textContent=new Date().getFullYear();
document.querySelectorAll('.needs-validation').forEach(f=>f.addEventListener('submit',e=>{if(!f.checkValidity()){e.preventDefault();e.stopPropagation()}f.classList.add('was-validated')}));
