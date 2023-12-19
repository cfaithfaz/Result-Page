// Testimonial data containing image sources, names, and quotes
const testimonials = [
    {
      imageSrc: 'assets/img/speakers/jack%20ma.jpg',
      name: 'Jack Ma',
      quote: "If you're never tried, how will you <br/>  ever know if there's any chance?"
    },
    {
      imageSrc: 'assets/img/speakers/shiv%20khera.png',
      name: 'Shiv Kera',
      quote: 'Your positive action combined with <br/> positive thinking results in success.'
    },
    {
      imageSrc: 'assets/img/speakers/steveJobs.jpg',
      name: 'Steve Jobs',
      quote: 'The only way to do great work <br/>  is to love what you do.'
    },
    {
        imageSrc: 'assets/img/speakers/Confucius.jpg',
        name: 'Confucius',
        quote: 'Choose a job you love, and you will <br/>  never have to work a day in your life.'
      },
      {
        imageSrc: 'assets/img/speakers/oprah.jpg',
        name: 'Oprah Winfrey',
        quote: 'Passion is energy. Feel the power that <br/>  comes from focusing on what excites you. '
      },
      {

        imageSrc: 'assets/img/speakers/pele.jpg',
        name: ' Pele',
        quote: 'Success is no accident. It is hard work,<br/>  perseverance, learning, studying, sacrifice,<br/>  and most of all,  love of what you are doing or learning to do.'
        
      
      }
   
  ];
  
  // Function to shuffle the testimonials array randomly
  function shuffleTestimonials(testimonials) {
    for (let i = testimonials.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [testimonials[i], testimonials[j]] = [testimonials[j], testimonials[i]];
    }
    return testimonials;
  }
  
  function displayTestimonials() {
    const shuffledTestimonials = shuffleTestimonials([...testimonials]).slice(0, 3); // Limit to first 3 shuffled testimonials
    const testimonialsRow = document.getElementById('testimonialsRow');
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
  
    shuffledTestimonials.forEach(testimonial => {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-sm-4');
  
      colDiv.innerHTML = `
        <div class="text-center">
          <img class="rounded-circle" id="small-image" src="${testimonial.imageSrc}" alt="${testimonial.name}">
          <h4 class="speaker">${testimonial.name}</h4>
          <p class="text-muted quote-text">${testimonial.quote}</p>
        </div>
      `;
  
      rowDiv.appendChild(colDiv);
    });
  
    testimonialsRow.appendChild(rowDiv);
  }
  // Call the function to display shuffled testimonials on page load
  document.addEventListener('DOMContentLoaded', function() {
    displayTestimonials();
  });  