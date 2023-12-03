<script>
  import About from "../components/About.svelte";
  import Contact from "../components/Contact.svelte";
  import Services from "../components/Services.svelte";
  import Testimonials from "../components/Testimonials.svelte";
  

  const teamMembers = [
    { name: 'Raghavan', role: 'Engineer', image: 'img/team-1.jpg' },
    { name: 'Sam Vishal', role: 'Engineer', image: 'img/team-2.jpg' },
    { name: 'Mugesh', role: 'Engineer', image: 'img/team-3.jpg' },
	{ name: 'Mani Kandan', role: 'Engineer', image: 'img/team-1.jpg' },
  ];

 
</script>
<svelte:head>
	<title>The Sark Construction welcome you</title>
</svelte:head>


		<div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
			<div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
			  <div class="carousel-inner">
				<div class="carousel-item active">
				  <img class="w-100" src="img/carousel-1.jpg" alt="">
				  <div class="carousel-caption">
					<div class="container">
					  <div class="row justify-content-center">
						<div class="col-12 col-lg-10">
						  <h5 class="text-light text-uppercase mb-3 animated slideInDown">
							
                            Crafting Exceptional Homes with Passion and Expertise
                        
							
						  </h5>
						  <h1 class="display-2 text-light mb-3 animated slideInDown">
							We Build Your Dream
						  </h1>
						
						  <!-- <a href="/" class="btn btn-primary py-3 px-5">More Details</a> -->
						</div>
					  </div>
					</div>
				  </div>
				</div>
				<div class="carousel-item">
				  <img class="w-100" src="img/carousel-2.jpg" alt="">
				  <div class="carousel-caption">
					<div class="container">
					  <div class="row justify-content-center">
						<div class="col-12 col-lg-10">
						  <h5 class="text-light text-uppercase mb-3 animated slideInDown">
							Transforming your vision into tangible spaces, one dream home at a time
						  </h5>
						  <h1 class="display-2 text-light mb-3 animated slideInDown">
							Dream-Building Experts
						  </h1>
<!-- 						
						  <a href="/" class="btn btn-primary py-3 px-5">More Details</a> -->
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			  <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			  </button>
			  <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			  </button>
			</div>
		  </div>

		  <About/>
		  <Services/>
		  <Contact/>

	  <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5 align-items-end mb-5">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
            <div class="border-start border-5 border-primary ps-4">
              <h6 class="text-body text-uppercase mb-2">Our Team</h6>
              <h1 class="display-6 mb-0">Our Expert Worker</h1>
            </div>
          </div>
         
        </div>
        <div class="row g-4">
			{#each teamMembers as member (member.name)}
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
            <div class="team-item position-relative">
				<img class="img-fluid" src={member.image} alt={member.name}>
              <div class="team-text bg-white p-4">
				<h5>{member.name}</h5>
				<span>{member.role}</span>
              </div>
            </div>
          </div>
		  {/each}
        </div>
      </div>
    </div>
		  
	<Testimonials/>