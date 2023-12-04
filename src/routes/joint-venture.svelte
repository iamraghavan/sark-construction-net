<script>
  import Cta from "../components/Cta.svelte";

    export let serviceDetails = {
      title: "Joint Venture - Sark Constructions",
      description:
        "Building Together for a Shared Vision of Excellence",
      features: [
        "Collaborative design and planning for shared goals",
        "Experienced joint venture team committed to excellence",
        "Integration of expertise and resources for premium quality projects",
        "Dedicated to on-time project completion through mutual efforts",
        "Cost-effective solutions achieved through shared resources",
      ]
    }
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
                  At Sark Constructions, our joint venture projects are a testament to collaborative success. We believe in building together for a shared vision of excellence. Our experienced joint venture team is committed to delivering projects that exceed expectations through the integration of expertise and resources.
                </p>
                <p>
                  Whether it's a large-scale development or a specialized project, we work closely with our partners to achieve on-time project completion. Our commitment to excellence and cost-effective solutions makes Sark Constructions the preferred choice for joint ventures.
                </p>
              </div>
            </div>
          </div>
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
              <img class="w-100" src="img/joint-venture.jpg" alt="" style="object-fit: cover; min-height: 400px;">
            </div>
            </div>

     
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="h-100">
            <h6>
              Sark Constructions specializes in joint ventures that bring visions to life. Our services encompass collaborative design and planning, ensuring shared goals and successful project outcomes.
            </h6>
            <h6 class="mb-4">
              Partner with us for a joint venture experience that integrates expertise, resources, and a commitment to excellence. Explore the benefits of building together with Sark Constructions.
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