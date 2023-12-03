<script context="module">
    import Backbone from 'backbone';
    import _ from 'lodash';
  </script>
  
  <script>


    let services = [
          {
            title: 'House Construction',
            image: 'img/service-1.jpg',
            
          },
          {
            title: 'Commercial Construction',
            image: 'img/service-2.jpg',
            
          },
          {
            title: 'Govt Plan Approvals',
            image: 'img/service-3.jpg',
            
          },
          {
            title: 'Structural Design And Detailing',
            image: 'img/service-4.jpg',
            
          },
          {
            title: 'Budgeting And Costing',
            image: 'img/service-5.jpg',
            
          },
          {
            title: 'Construction Consulting Services',
            image: 'img/service-6.jpg',
            
          },
         
        ];
  </script>

  
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5 align-items-end mb-5">
        <div class="col-lg-6 wow fadeInUp " data-wow-delay="0.1s">
          <div class="border-start border-5 border-primary ps-4">
            <h6 class="text-body text-uppercase mb-2">Our Services</h6>
            <h1 class="display-6 mb-0">
              Construction And Renovation Solutions
            </h1>
          </div>
        </div>
        <div class="col-lg-6 text-lg-end wow fadeInUp " data-wow-delay="0.3s">
          <a class="btn btn-primary py-3 px-5" href="/">More Services</a>
        </div>
      </div>
      <div class="row g-4 justify-content-center">
        {#each services as service, index}
          <div class="col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="{0.1 + 0.2 * index}s">
            <div class="service-item bg-light overflow-hidden h-100">
              <img class="img-fluid" src={service.image} alt="">
              <div class="service-text position-relative text-center h-100 p-4">
                <h5 class="mb-3">{service.title}</h5>
               
                <a class="small" href="/">More Informations<i class="fa fa-arrow-right ms-3"></i></a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  

  