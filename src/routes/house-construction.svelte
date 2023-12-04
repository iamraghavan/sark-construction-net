<script>
  import Cta from "../components/Cta.svelte";


  export let serviceDetails = {
    title: "Home Construction - Sark Construction",
    description:
      "Transforming Dreams into Reality with Quality Construction Services",
    features: [
      "Customized design and planning tailored to your preferences",
      "Experienced construction team with a passion for excellence",
      "Premium quality materials and craftsmanship",
      "Committed to on-time project completion",
      "Budget-friendly options without compromising quality",
    ]
  }

</script>



<div class="container-xxl py-5">
 
  <div class="container">
    <div class="row g-5">
      <div class="col-xl-12 col-lg-12">
        <div class="content-inner-page">
     

          <div class="border-start border-5 border-primary ps-4 mb-5">
          
            <h1 class="display-6 mb-0">
              {serviceDetails.title}
            </h1>
          </div>
  
          <div class="row">
            <div class="col-md-12">
              <p>{serviceDetails.description}</p>
              <p>
                At Sark Construction, we believe in turning your dream home vision
                into a tangible reality. Our dedicated team of professionals is
                committed to delivering construction services that exceed
                expectations. Whether you're envisioning a modern masterpiece or a
                cozy traditional home, we have the expertise to bring your ideas
                to life.
              </p>
              <p>
                With a focus on quality materials, precise craftsmanship, and a
                client-centric approach, we stand out as a reliable partner for
                your home construction needs. Our attention to detail, transparent
                communication, and adherence to timelines make us the preferred
                choice for homeowners in Chennai.
              </p>
            </div>
          </div>
  
        
          
          </div>

        </div>
        <!-- Content inner end -->
      </div>
    </div>
  </div>
  

  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        

        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="position-relative overflow-hidden">
            <!-- Replace the image URL with your desired image -->
            <img class="w-100" src="img/about.jpg" alt="" style="object-fit: cover; min-height: 400px;">
          </div>
          </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="h-100">
          
            <h6>
               At Sark Construction, we specialize in turning your dream home vision into a tangible reality. Our residential construction services encompass new home construction, remodeling, renovation, and custom home building. Whether you're embarking on your first home or upgrading to a larger one, our team is dedicated to bringing your vision to life.
           
            
            </h6>
            <h6 class="mb-4">
              We understand the significant investment involved in building a new home. Our goal is to make the process smooth and stress-free. The Sark Construction team is available to answer your questions and address concerns throughout the construction process.
                    
            </h6>
            <div class="border-top mt-4 pt-4">
              <div class="row g-4">
                {#each serviceDetails.features as feature (feature)}
                <div class="col-sm-6 d-flex wow fadeIn" data-wow-delay="0.1s">
                  <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                  <h6 class="mb-0">{feature}</h6>
                </div>
                {/each}
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Cta/>