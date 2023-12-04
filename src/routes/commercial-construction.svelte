<script>
  import Cta from "../components/Cta.svelte";

    export let serviceDetails = {
      title: "Commercial Construction - Sark Construction",
      description:
        "Building Success with Quality Commercial Construction Services",
      features: [
        "Customized design and planning tailored to your business needs",
        "Experienced construction team dedicated to excellence",
        "High-quality materials and craftsmanship for lasting structures",
        "Commitment to on-time project completion for your business success",
        "Cost-effective options without compromising quality",
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
                  At Sark Construction, we specialize in commercial construction,
                  creating spaces that foster success for businesses. Whether you
                  need a new commercial building, a remodel, or a custom-designed
                  space, our team is dedicated to bringing your vision to reality.
                </p>
                <p>
                  With a focus on quality materials, precise craftsmanship, and a
                  client-centric approach, we stand out as a reliable partner for
                  your commercial construction needs. Our attention to detail,
                  transparent communication, and adherence to timelines make us
                  the preferred choice for businesses in Chennai.
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
              <img class="w-100" src="img/about.jpg" alt="" style="object-fit: cover; min-height: 400px;">
            </div>
            </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="h-100">
              <h6>
                At Sark Construction, we understand the importance of commercial
                spaces for businesses. Our services include new commercial
                construction, remodeling, renovation, and custom-designed
                structures. Whether you're starting a new venture or expanding
                your business, our team is committed to creating spaces that
                contribute to your success.
              </h6>
              <h6 class="mb-4">
                We recognize that commercial construction is an investment in your
                business's future. Our goal is to make the process efficient and
                stress-free. The Sark Construction team is here to address your
                questions and ensure the success of your commercial construction
                project.
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
    
    