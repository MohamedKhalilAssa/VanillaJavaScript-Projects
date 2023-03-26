const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://cdn-icons-png.flaticon.com/512/168/168730.png',
      text: 'Helvetica artisan kinfolk thundercats lumbers blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://cdn-icons-png.flaticon.com/512/168/168732.png',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  let img=document.getElementById('img');
  let info=document.querySelector('.info');
  let job=document.getElementById('job');
  let named=document.querySelector('.name');

  let next=document.querySelector('.next-btn');
  let prev=document.querySelector('.prev-btn');
  let random=document.querySelector('.random');

  let curr = 0;
  window.addEventListener('DOMContentLoaded',function(){
     ShowPerson();
  });
  next.addEventListener('click', function(){
    curr++;
    if(curr> reviews.length-1){
        curr=0;
    }
    ShowPerson();
  });
  prev.addEventListener('click', function(){
    curr--;
    if(curr < 0){
        curr= reviews.length-1;
    }
    ShowPerson();
  });
  random.addEventListener('click', function(){
    curr = Math.floor(Math.random()*reviews.length);
   
    ShowPerson();
  });

 let ShowPerson = () => {
    let item=reviews[curr];
     img.src=item.img;
     info.textContent=item.text;
     named.textContent=item.name;
     job.textContent=item.job;
  }