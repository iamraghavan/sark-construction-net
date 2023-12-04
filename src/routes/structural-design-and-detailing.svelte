<script>
  import Cta from "../components/Cta.svelte";

    export let serviceDetails = {
      title: "Structural Design And Detailing - Sark Constructions",
      description:
        "Innovative Solutions for Strong Foundations and Detailed Structures",
      features: [
        "Customized structural design tailored to your project requirements",
        "Experienced team with expertise in detailed structural analysis",
        "High-quality materials and precise detailing for robust structures",
        "Commitment to on-time project completion",
        "Cost-effective solutions without compromising quality",
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
                  At Sark Constructions, we bring innovation to structural design
                  and detailing, ensuring strong foundations and detailed
                  structures for your projects. Our experienced team combines
                  expertise in structural analysis with a commitment to delivering
                  solutions that go beyond expectations.
                </p>
                <p>
                  Whether it's creating customized structural designs or providing
                  detailed analysis and detailing, we strive for excellence. Our
                  focus on high-quality materials, precision in detailing, and
                  adherence to timelines makes us a trusted partner for your
                  construction needs.
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
              <img class="w-100" src="img/structural-design-and-detailing.jpg" alt="" style="object-fit: cover; min-height: 400px;">
            </div>
          </div>
     
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="h-100">
            <h6>
              At Sark Constructions, we specialize in providing innovative
              solutions for structural design and detailing. Whether it's
              designing strong foundations or ensuring detailed structures,
              we bring a wealth of experience to every project.
            </h6>
            <h6 class="mb-4">
              Our team is dedicated to creating customized structural
              designs tailored to your project requirements. We combine
              advanced analysis with a keen eye for detailing to deliver
              robust and reliable structures.
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