if(document.querySelector('.heroSwiper'))new Swiper('.heroSwiper',{loop:true,speed:700,autoplay:{delay:6000,disableOnInteraction:false},pagination:{el:'.swiper-pagination',clickable:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},a11y:true});
document.getElementById('yr').textContent=new Date().getFullYear();
document.querySelectorAll('.needs-validation').forEach(f=>f.addEventListener('submit',e=>{if(!f.checkValidity()){e.preventDefault();e.stopPropagation()}f.classList.add('was-validated')}));

(function(){var box=document.getElementById('filters');if(!box)return;
var btns=box.querySelectorAll('.filter-btn'),groups=document.querySelectorAll('.cat-group'),st=document.getElementById('filter-status');
function apply(f,push){var ok=false;btns.forEach(function(b){if(b.dataset.filter===f)ok=true});if(!ok)f='all';
groups.forEach(function(g){g.hidden=!(f==='all'||g.dataset.cat===f)});
btns.forEach(function(b){var on=b.dataset.filter===f;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)});
st.textContent='Showing '+(f==='all'?'all categories':f);
if(push&&history.replaceState)history.replaceState(null,'',f==='all'?location.pathname:'?cat='+f)}
btns.forEach(function(b){b.addEventListener('click',function(){apply(b.dataset.filter,true)})});
apply(new URLSearchParams(location.search).get('cat')||'all',false)})();
