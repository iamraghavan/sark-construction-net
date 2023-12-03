<script>
    const footerInfo = {
      company: {
        name: "Sark Construction",
        description: "Sark Construction: Transforming Visions into Reality, Excellence in Building Solutions.",
        socialLinks: [
          { icon: "fab fa-instagram", href: "#" },
          { icon: "fab fa-facebook-f", href: "#" },
          { icon: "fab fa-youtube", href: "#" },
          { icon: "fab fa-whatsapp", href: "#" }
        ]
      },
      contact: {
        address: "No 149, GNT Road, Redhills, Chennai - 600052 (Opp to Axis Bank)",
        phone: "+91 97890 57161",
        email: "info@sarkconstructions.com",
      },
      quickLinks: [
        { text: "About Us", href: "#" },
        { text: "Contact Us", href: "#" },
        { text: "Our Services", href: "#" },
        { text: "Terms & Condition", href: "#" },
        { text: "Support", href: "#" }
      ],
      servicesLink: [
        { text: "House Construction", href: "#" },
        { text: "Commercial Construction", href: "#" },
        { text: "Govt Plan Approvals", href: "#" },
        { text: "Structural Design And Detailing", href: "#" },
        { text: "Budgeting And Costing", href: "#" },
        { text: "Construction Consulting Services", href: "#" },
        { text: "Joint Venture", href: "#" }
      ]
    };
  </script>









<!-- logo-sk-ft -->

<style>
	.logo-sk-ft {
	width: 18rem;
	
	  height: auto;
 
}


</style>

  
  
  <div class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="row g-5">
        <!-- Company Info -->
        <div class="col-lg-3 col-md-6">
            <img class="logo-sk-ft" src="img/Sark-white.svg"  alt="" srcset="">
          <p class="mt-4">{footerInfo.company.description}</p>
          <!-- Social Media Links -->
          <div class="d-flex pt-2">
            {#each footerInfo.company.socialLinks as { icon, href }}
              <a class="btn btn-square btn-outline-primary me-1" href={href}><i class={icon}></i></a>
            {/each}
          </div>
        </div>
  
        <!-- Contact Info -->
        <div class="col-lg-3 col-md-6">
          <h4 class="text-light mb-4">Address</h4>
          <p><i class="fa fa-map-marker-alt me-3"></i>{footerInfo.contact.address}</p>
          <p><i class="fa fa-phone-alt me-3"></i>{footerInfo.contact.phone}</p>
          <p><i class="fa fa-envelope me-3"></i>{footerInfo.contact.email}</p>
        </div>
  
        <!-- Quick Links -->
        <div class="col-lg-3 col-md-6">
          <h4 class="text-light mb-4">Quick Links</h4>
          {#each footerInfo.quickLinks as { text, href }}
            <a class="btn btn-link" href={href}>{text}</a>
          {/each}
        </div>
  
        <!-- Newsletter -->
        <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Our Services</h4>
            {#each footerInfo.servicesLink as { text, href }}
              <a class="btn btn-link" href={href}>{text}</a>
            {/each}
        </div>
      </div>
    </div>
  
    <!-- Copyright Section -->
    <div class="container-fluid copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a href="/">{footerInfo.company.name}</a>, All Right Reserved.
          </div>
          <div class="col-md-6 text-center text-md-end">
            Designed By <a href="https://jsraghavan.me">J S Raghavan</a>
            <br>Distributed By:
            <a href="https://bumblebees.co.in" target="_blank">Bumble Bees IT Solutions</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  