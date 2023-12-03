<!-- ContactForm.svelte -->

<script context="module">


    import Backbone from 'backbone';
    import { onMount } from 'svelte';

  </script>
  
  
  <script>
    const formData = new Backbone.Model({
      guardianName: '',
      guardianEmail: '',
      childName: '',
      childMobile: '',
      serviceType: '',
      message: ''
    });
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
    };

    onMount(() => {
    // Load reCAPTCHA script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    document.body.appendChild(script);
  });
  </script>
  
  <style>
    .premium-contact-form {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    /* Add more premium styles as needed */
  </style>
  
  <div class="container-fluid appointment my-5 py-5 premium-contact-form">
    <div class="container py-5">
      <div class="row g-5">
        <!-- Left Section -->
        <div class="col-lg-5 col-md-6">
          <div class="border-start border-5 border-primary ps-4 mb-5">
            <h6 class="text-white text-uppercase mb-2">Appointment / Contact Our Team</h6>
            <h1 class="display-6 text-white mb-0">
              A Company Involved In Service And Maintenance
            </h1>
          </div>
        
        </div>
        <!-- Right Section -->
        <div class="col-lg-7 col-md-6">
          <!-- Form -->
          <form on:submit={handleSubmit}>
            <!-- Form Fields -->
            <div class="row g-3">
              <div class="col-sm-6">
                <div class="form-floating">
                  <input type="text" class="form-control bg-dark border-0" bind:value={formData.guardianName} id="gname" placeholder="Guardian Name">
                  <label for="gname">Name</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-floating">
                  <input type="email" class="form-control bg-dark border-0" bind:value={formData.guardianEmail} id="gmail" placeholder="Guardian Email">
                  <label for="gmail">Email</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-floating">
                  <input type="text" class="form-control bg-dark border-0" bind:value={formData.childName} id="cname" placeholder="Child Name">
                  <label for="cname">Contact Number</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-floating">
                  <select class="form-select bg-dark border-0" bind:value={formData.serviceType} id="serviceType">
                    <option value="" disabled selected>Select Service Type</option>
                    <option value="houseConstruction">House Construction</option>
                    <option value="commercialConstruction">Commercial Construction</option>
                    <option value="govtPlanApprovals">Govt Plan Approvals</option>
                    <option value="structuralDesign">Structural Design And Detailing</option>
                    <option value="budgetingAndCosting">Budgeting And Costing</option>
                    <option value="constructionConsulting">Construction Consulting Services</option>
                    <option value="jointVenture">Joint Venture</option>
                  </select>
                  <label for="serviceType">Service Type</label>
                </div>
              </div>
              
              <div class="col-12">
                <div class="form-floating">
                  <textarea class="form-control bg-dark border-0" bind:value={formData.message} placeholder="Leave a message here" id="message" style="height: 100px"></textarea>
                  <label for="message">Message</label>
                </div>
              </div>
            </div>
            <!-- reCAPTCHA -->
            <div class="g-recaptcha" data-sitekey="6LdB5E0lAAAAANIE_iX6D9IKk1ZLKTePnabRv0ZK"></div>
            <!-- Submit Button -->
            <div class="col-12 mt-3">
              <button class="btn btn-primary w-100 py-3" type="submit">
                Get Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
