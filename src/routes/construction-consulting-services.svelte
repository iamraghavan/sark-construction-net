<script>
  import Cta from "../components/Cta.svelte";

    export let serviceDetails = {
      title: "Construction Consulting Services - Sark Construction",
      description:
        "Bringing Expertise to Your Construction Projects with Consultation Services",
      features: [
        "Comprehensive consulting for construction projects",
        "Experienced team with in-depth industry knowledge",
        "Strategic planning and project management",
        "Quality assurance and cost-effective solutions",
        "Transparent communication and adherence to timelines",
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
                  At Sark Construction, our Construction Consulting Services bring expertise and insights to your construction projects. We provide comprehensive consultation, leveraging our experienced team's in-depth industry knowledge. From strategic planning to project management, we ensure quality assurance and cost-effective solutions.
                </p>
                <p>
                  We prioritize transparent communication and adhere to timelines, making Sark Construction the trusted choice for construction consulting services. Whether you're initiating a new project, seeking strategic advice, or ensuring efficient project execution, our consulting services are tailored to meet your needs.
                </p>
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
              <img class="w-100" src="img/construction-consulting.jpg" alt="" style="object-fit: cover; min-height: 400px;">
            </div>
            </div>

          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="h-100">
              <h6>
                Sark Construction specializes in providing Construction Consulting Services to bring expertise and guidance to your construction projects. Our services include strategic planning, project management, and cost-effective solutions to ensure the success of your endeavors.
              </h6>
              <h6 class="mb-4">
                We take pride in our experienced team, transparent communication, and commitment to timelines. Explore our Construction Consulting Services for a seamless construction experience with Sark Construction.
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
  </div>

  
  <Cta/>