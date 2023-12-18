// Testimonial data containing image sources, names, and quotes
const testimonials = [
    {
      imageSrc: 'assets/img/speakers/jack%20ma.jpg',
      name: 'Jack Ma',
      quote: "If you're never tried, how will you ever know if there's any chance?"
    },
    {
      imageSrc: 'assets/img/speakers/shiv%20khera.png',
      name: 'Shiv Kera',
      quote: 'Your positive action combined with positive thinking results in success.'
    },
    {
      imageSrc: 'assets/img/team/steveJobs.jpg',
      name: 'Steve Jobs',
      quote: 'The only way to do great work is to love what you do.'
    },
    {
        imageSrc: 'assets/img/team/steveJobs.jpg',
        name: 'Steve Jobs',
        quote: 'The only way to do great work is to love what you do.'
      },
      {
        imageSrc: 'assets/img/team/2.jpg',
        name: 'Steve Jobs',
        quote: 'The only way to do great work is to love what you do.'
      },
    
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
    const shuffledTestimonials = shuffleTestimonials([...testimonials]); // Shuffle the testimonials
    const testimonialsRow = document.getElementById('testimonialsRow');
  
    shuffledTestimonials.forEach((testimonial) => {
      const testimonialDiv = document.createElement('div');
      testimonialDiv.classList.add('col-sm-4');
  
      testimonialDiv.innerHTML = `
        <div class="text-center">
          <img class="rounded-circle" id="small-image" src="${testimonial.imageSrc}" alt="${testimonial.name}">
          <h4>${testimonial.name}</h4>
          <p class="text-muted">${testimonial.quote}</p>
        </div>
      `;
  
      testimonialsRow.appendChild(testimonialDiv);
    });
  }
  
  // Call the function to display shuffled testimonials on page load
  displayTestimonials();
  