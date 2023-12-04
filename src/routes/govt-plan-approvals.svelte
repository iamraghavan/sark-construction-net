<script>
  import Cta from "../components/Cta.svelte";

    export let serviceDetails = {
      title: "Govt Plan Approvals - Sark Construction",
      description:
        "Navigating the Regulatory Landscape for Seamless Government Plan Approvals",
      features: [
        "Expert assistance in obtaining government plan approvals",
        "Comprehensive understanding of local building regulations",
        "Efficient navigation through the regulatory approval process",
        "Transparent communication and guidance at every stage",
        "Dedicated support to ensure timely and hassle-free approvals",
      ]
    };
  </script>
  
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-xl-12 col-lg-12">
          <div class="content-inner-page">
            <div class="border-start border-5 border-primary ps-4 mb-5">
              <h1 class="display-6 mb-0">{serviceDetails.title}</h1>
            </div>
  
            <div class="row">
              <div class="col-md-12">
                <p>{serviceDetails.description}</p>
                <p>
                  At Sark Construction, we specialize in navigating the complex
                  landscape of government plan approvals. Our experienced team
                  provides expert assistance to ensure a seamless process,
                  allowing you to focus on your construction project without the
                  hassle of dealing with regulatory requirements.
                </p>
                <p>
                  With a comprehensive understanding of local building regulations,
                  we efficiently guide you through the approval process. Our
                  commitment to transparent communication and dedicated support
                  sets us apart, ensuring that your project receives timely
                  approvals without unnecessary delays.
                </p>
              </div>
            </div>
  
         
          </div>
          <!-- Content inner end -->
        </div>
      </div>
    </div>
  </div>
  
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">

        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="position-relative overflow-hidden">
            <!-- Replace the image URL with your desired image -->
            <img class="w-100" src="img/govt-approvals.jpg" alt="" style="object-fit: cover; min-height: 400px;">
          </div>
          </div>


    
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="h-100">
            <h6>
              Sark Construction streamlines the process of obtaining
              government plan approvals. Whether you're planning a
              residential or commercial project, our team ensures that
              you meet all regulatory requirements, making your
              construction journey smoother.
            </h6>
            <h6 class="mb-4">
              We work closely with local authorities, providing you with
              insights and guidance to address specific regulatory
              concerns. Trust Sark Construction for a hassle-free
              experience in obtaining government plan approvals.
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