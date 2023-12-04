<script>
  import Cta from "../components/Cta.svelte";

    export let serviceDetails = {
      title: "Budgeting and Costing - Sark Construction",
      description:
        "Providing Transparent and Affordable Solutions for Your Construction Projects",
      features: [
        "Detailed budgeting tailored to your project requirements",
        "Transparent costing with no hidden fees",
        "Affordable options without compromising quality",
        "Professional guidance to optimize costs",
        "Committed to delivering value for your investment",
      ],
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
                  At Sark Construction, we understand the importance of budgeting
                  and costing in your construction projects. We provide
                  transparent and affordable solutions to ensure that your
                  investment is utilized efficiently. Our commitment is to deliver
                  value without compromising on quality.
                </p>
                <p>
                  Whether you're planning a new construction, remodeling, or
                  renovation, our detailed budgeting takes into account your
                  project's unique requirements. We believe in transparency,
                  providing you with clear costing and avoiding any hidden fees.
                  Sark Construction is your reliable partner for budgeting and
                  costing in construction.
                </p>
              </div>
            </div>
  
            <!-- Image Section (if needed) -->
            <!-- <div class="row">
              <div class="col-md-12">
                <img
                  src="your-image-path.jpg"
                  alt="Construction Budgeting and Costing"
                  class="img-fluid"
                />
              </div>
            </div> -->
  
            <!-- Features Section -->
           
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
                <img class="w-100" src="img/buget.jpg" alt="" style="object-fit: cover; min-height: 400px;">
              </div>
              </div>

        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="h-100">
            <h6>
              Sark Construction specializes in providing detailed
              budgeting and transparent costing for your construction
              projects. We prioritize affordability without
              compromising on quality, ensuring that your investment
              yields the best results.
            </h6>
            <div class="border-top mt-4 pt-4">
              <div class="row g-4">
                {#each serviceDetails.features as feature (feature)}
                <div
                  class="col-sm-6 d-flex wow fadeIn"
                  data-wow-delay="0.1s"
                >
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