<script>

import { onMount } from 'svelte';
import { Backbone } from 'backbone';
import _ from 'lodash'



const navLinks = [
  { title: 'Home', url: '/', isActive: true },
  { title: 'About Us', url: 'about', isActive: false },
  { title: 'Projects', url: 'service.html', isActive: false },
  {
    title: 'Our Services',
    url: '/',
    isDropdown: true,
    children: [
      { title: 'House Construction', url: 'house-construction', isActive: false },
      { title: 'Commercial Construction', url: 'commercial-construction', isActive: false },
      { title: 'Govt Plan Approvals', url: 'govt-plan-approvals', isActive: false },
      { title: 'Structural Design And Detailing', url: 'structural-design-and-detailing', isActive: false },
      { title: 'Budgeting And Costing', url: 'budgeting-and-costing', isActive: false },
	  { title: 'Construction Consulting Services', url: 'construction-consulting-services', isActive: false },
	  { title: 'Joint Venture', url: 'joint-venture', isActive: false }
    ]
  },
  { title: 'Careers', url: 'service.html', isActive: false },
  { title: 'Contact Us', url: 'contact.html', isActive: false }
];

// Sort the navigation links using Lodash.js
const sortedNavLinks = _.sortBy(navLinks, function (navLink) {
  return navLink.isActive ? -1 : 1;
});



</script>

<style>
	.logo-sk {
	width: 21rem;
	
	  height: auto;
 
}

@media (max-width: 768px) {
  .logo-sk {
    width: auto;
	
	  height: 2.3rem;
  }
}
</style>


<div class="container-fluid bg-light p-0">
  <div class="row gx-0 d-none d-lg-flex">
    <div class="col-lg-7 px-5 text-start">
      <div
        class="h-100 d-inline-flex align-items-center border-start border-end px-3"
      >
        <small class="fa fa-phone-alt me-2"></small>
        <small>+91 97890 57161</small>
      </div>
      <div class="h-100 d-inline-flex align-items-center border-end px-3">
        <small class="far fa-envelope-open me-2"></small>
        <small>info@thesarkconstructions.com</small>
      </div>
      <div class="h-100 d-inline-flex align-items-center border-end px-3">
    
        <small>GSTIN : 33ADEFS4822P1ZQ</small>
      </div>
    </div>
    <div class="col-lg-5 px-5 text-end">
      <div class="h-100 d-inline-flex align-items-center">
        <a class="btn btn-square border-end border-start" href="/"
          ><i class="fab fa-facebook-f"></i></a
        >
        <a class="btn btn-square border-end" href="/"
          ><i class="fab fa-whatsapp"></i></a
        >
        <a class="btn btn-square border-end" href="/"
          ><i class="fab fa-linkedin-in"></i></a
        >
        <a class="btn btn-square border-end" href="/"
          ><i class="fab fa-instagram"></i></a
        >
      </div>
    </div>
  </div>
</div>

<nav
  class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0"
>
  <a href="/" class="navbar-brand d-flex align-items-center">
    <h1 class="m-0">
      <img class="logo-sk" src="img/Sark-black.svg"  alt="" srcset="">
    </h1>
  </a>
  <button
    type="button"
    class="navbar-toggler"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
 
  <div
 
  class="collapse navbar-collapse"
   
  id="navbarCollapse">
  
	  
  <div
   
  class="navbar-nav ms-auto py-3 py-lg-0">
  {#each sortedNavLinks as navLink}
  {#if navLink.isDropdown}
    <div class="nav-item dropdown">
      <a href="{navLink.url}" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
        {navLink.title}
      </a>

      <div class="dropdown-menu bg-light m-0">
        {#each navLink.children as child}
          <a href="{child.url}" class="dropdown-item">{child.title}</a>
        {/each}
      </div>
    </div>
  {:else}
    <a href="{navLink.url}" class="nav-item nav-link {navLink.isActive ? 'active' : ''}">
      {navLink.title}
    </a>
  {/if}
{/each}
	  </div>
	</div>

</nav>
