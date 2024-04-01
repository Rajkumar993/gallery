const modal=document.createElement('div');
modal.id='modal'
const container =document.querySelector('.container')
container.appendChild(modal)
const images=document.querySelectorAll('.img');

images.forEach(image=>{
  image.addEventListener('click',()=>{
    modal.classList.add('active')
   const img=document.createElement('img')
   img.className='img';
   img.src=image.src
    while(modal.firstChild){
      modal.removeChild(modal.firstChild)
    }
   modal.append(img);

  })
})

modal.addEventListener('click',()=>{
  modal.classList.remove('active')
})