<script>
    const testimonials = [
      {

        text: 'Trustworthy, They has completed my house using morden technology and it became one of the best house in my location. Value for the money 👍',
        name: 'Vimalraj Devan'
      },
      {
 
        text: 'Professionalism, Quality, Responsiveness, Value',
        name: 'Bharath raj'
      },
      // Add more testimonials as needed
    ];
  </script>
  
  
  
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="border-start border-5 border-primary ps-4 mb-5">
            <h6 class="text-body text-uppercase mb-2">Testimonial</h6>
            <h1 class="display-6 mb-0">What Our Happy Clients Say!</h1>
          </div>
          <div class="row g-4">
            <div class="col-sm-6">
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-users fa-2x text-primary flex-shrink-0"></i>
                <h1 class="ms-3 mb-0">20+</h1>
              </div>
              <h5 class="mb-0">Happy Clients</h5>
            </div>
            <div class="col-sm-6">
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-check fa-2x text-primary flex-shrink-0"></i>
                <h1 class="ms-3 mb-0">20+</h1>
              </div>
              <h5 class="mb-0">Projects Done</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
          <div class="owl-carousel testimonial-carousel">
            {#each testimonials as { image, text, name }}
              <div class="testimonial-item">
               
                <p class="fs-5">{text}</p>
                <div class="bg-primary mb-3"></div>
                <h5>{name}</h5>
                <span>Client</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
  