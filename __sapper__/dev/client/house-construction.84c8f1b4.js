import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, r as onMount, e as element, t as text, a as space, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, j as attr_dev, m as add_location, k as src_url_equal, n as insert_hydration_dev, o as append_hydration_dev, O as set_data_dev, p as noop } from './client.15bdf6a1.js';
import 'jquery';

/* src/routes/house-construction.svelte generated by Svelte v3.59.2 */
const file = "src/routes/house-construction.svelte";

function create_fragment(ctx) {
	let div23;
	let div22;
	let div21;
	let div20;
	let div19;
	let h2;
	let t0_value = /*serviceDetails*/ ctx[0].title + "";
	let t0;
	let t1;
	let div1;
	let div0;
	let p0;
	let t2_value = /*serviceDetails*/ ctx[0].description + "";
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let p2;
	let t6;
	let t7;
	let div2;
	let t8;
	let div7;
	let div6;
	let div5;
	let div3;
	let img0;
	let img0_src_value;
	let t9;
	let div4;
	let img1;
	let img1_src_value;
	let t10;
	let div8;
	let t11;
	let div10;
	let div9;
	let h30;
	let t12;
	let t13;
	let p3;
	let t14;
	let t15;
	let div11;
	let t16;
	let div14;
	let div12;
	let h31;
	let t17;
	let t18;
	let div13;
	let h32;
	let t19;
	let t20;
	let div15;
	let t21;
	let div18;
	let div17;
	let div16;

	const block = {
		c: function create() {
			div23 = element("div");
			div22 = element("div");
			div21 = element("div");
			div20 = element("div");
			div19 = element("div");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			div1 = element("div");
			div0 = element("div");
			p0 = element("p");
			t2 = text(t2_value);
			t3 = space();
			p1 = element("p");
			t4 = text("At Sark Construction, we believe in turning your dream home vision\n                into a tangible reality. Our dedicated team of professionals is\n                committed to delivering construction services that exceed\n                expectations. Whether you're envisioning a modern masterpiece or a\n                cozy traditional home, we have the expertise to bring your ideas\n                to life.");
			t5 = space();
			p2 = element("p");
			t6 = text("With a focus on quality materials, precise craftsmanship, and a\n                client-centric approach, we stand out as a reliable partner for\n                your home construction needs. Our attention to detail, transparent\n                communication, and adherence to timelines make us the preferred\n                choice for homeowners in Chennai.");
			t7 = space();
			div2 = element("div");
			t8 = space();
			div7 = element("div");
			div6 = element("div");
			div5 = element("div");
			div3 = element("div");
			img0 = element("img");
			t9 = space();
			div4 = element("div");
			img1 = element("img");
			t10 = space();
			div8 = element("div");
			t11 = space();
			div10 = element("div");
			div9 = element("div");
			h30 = element("h3");
			t12 = text("More Information");
			t13 = space();
			p3 = element("p");
			t14 = text("Here you can add additional information about Sark Construction.\n                Feel free to include details about your past projects, client\n                testimonials, or any other relevant information.");
			t15 = space();
			div11 = element("div");
			t16 = space();
			div14 = element("div");
			div12 = element("div");
			h31 = element("h3");
			t17 = text("What Sets Us Apart");
			t18 = space();
			div13 = element("div");
			h32 = element("h3");
			t19 = text("Key Considerations");
			t20 = space();
			div15 = element("div");
			t21 = space();
			div18 = element("div");
			div17 = element("div");
			div16 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div23 = claim_element(nodes, "DIV", { class: true });
			var div23_nodes = children(div23);
			div22 = claim_element(div23_nodes, "DIV", { class: true });
			var div22_nodes = children(div22);
			div21 = claim_element(div22_nodes, "DIV", { class: true });
			var div21_nodes = children(div21);
			div20 = claim_element(div21_nodes, "DIV", { class: true });
			var div20_nodes = children(div20);
			div19 = claim_element(div20_nodes, "DIV", { class: true });
			var div19_nodes = children(div19);
			h2 = claim_element(div19_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div19_nodes);
			div1 = claim_element(div19_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, t2_value);
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "At Sark Construction, we believe in turning your dream home vision\n                into a tangible reality. Our dedicated team of professionals is\n                committed to delivering construction services that exceed\n                expectations. Whether you're envisioning a modern masterpiece or a\n                cozy traditional home, we have the expertise to bring your ideas\n                to life.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "With a focus on quality materials, precise craftsmanship, and a\n                client-centric approach, we stand out as a reliable partner for\n                your home construction needs. Our attention to detail, transparent\n                communication, and adherence to timelines make us the preferred\n                choice for homeowners in Chennai.");
			p2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div19_nodes);
			div2 = claim_element(div19_nodes, "DIV", { class: true });
			children(div2).forEach(detach_dev);
			t8 = claim_space(div19_nodes);
			div7 = claim_element(div19_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { id: true, class: true });
			var div5_nodes = children(div5);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			img0 = claim_element(div3_nodes, "IMG", { src: true, alt: true, class: true });
			div3_nodes.forEach(detach_dev);
			t9 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			img1 = claim_element(div4_nodes, "IMG", { src: true, alt: true, class: true });
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			t10 = claim_space(div19_nodes);
			div8 = claim_element(div19_nodes, "DIV", { class: true });
			children(div8).forEach(detach_dev);
			t11 = claim_space(div19_nodes);
			div10 = claim_element(div19_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			h30 = claim_element(div9_nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t12 = claim_text(h30_nodes, "More Information");
			h30_nodes.forEach(detach_dev);
			t13 = claim_space(div9_nodes);
			p3 = claim_element(div9_nodes, "P", {});
			var p3_nodes = children(p3);
			t14 = claim_text(p3_nodes, "Here you can add additional information about Sark Construction.\n                Feel free to include details about your past projects, client\n                testimonials, or any other relevant information.");
			p3_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			t15 = claim_space(div19_nodes);
			div11 = claim_element(div19_nodes, "DIV", { class: true });
			children(div11).forEach(detach_dev);
			t16 = claim_space(div19_nodes);
			div14 = claim_element(div19_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div12 = claim_element(div14_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			h31 = claim_element(div12_nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t17 = claim_text(h31_nodes, "What Sets Us Apart");
			h31_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			t18 = claim_space(div14_nodes);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			h32 = claim_element(div13_nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			t19 = claim_text(h32_nodes, "Key Considerations");
			h32_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			t20 = claim_space(div19_nodes);
			div15 = claim_element(div19_nodes, "DIV", { class: true });
			children(div15).forEach(detach_dev);
			t21 = claim_space(div19_nodes);
			div18 = claim_element(div19_nodes, "DIV", { class: true });
			var div18_nodes = children(div18);
			div17 = claim_element(div18_nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			div16 = claim_element(div17_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			div16_nodes.forEach(detach_dev);
			div17_nodes.forEach(detach_dev);
			div18_nodes.forEach(detach_dev);
			div19_nodes.forEach(detach_dev);
			div20_nodes.forEach(detach_dev);
			div21_nodes.forEach(detach_dev);
			div22_nodes.forEach(detach_dev);
			div23_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "column-title mrt-0");
			add_location(h2, file, 44, 10, 1147);
			add_location(p0, file, 48, 14, 1287);
			add_location(p1, file, 49, 14, 1337);
			add_location(p2, file, 57, 14, 1800);
			attr_dev(div0, "class", "col-md-12");
			add_location(div0, file, 47, 12, 1249);
			attr_dev(div1, "class", "row");
			add_location(div1, file, 46, 10, 1219);
			attr_dev(div2, "class", "gap-40");
			add_location(div2, file, 67, 10, 2245);
			if (!src_url_equal(img0.src, img0_src_value = "img/carousel-1.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "");
			attr_dev(img0, "class", "img-fluid");
			add_location(img0, file, 73, 34, 2484);
			attr_dev(div3, "class", "item");
			add_location(div3, file, 73, 16, 2466);
			if (!src_url_equal(img1.src, img1_src_value = "img/carousel-2.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "");
			attr_dev(img1, "class", "img-fluid");
			add_location(img1, file, 74, 34, 2582);
			attr_dev(div4, "class", "item");
			add_location(div4, file, 74, 16, 2564);
			attr_dev(div5, "id", "page-slider");
			attr_dev(div5, "class", "owl-carousel");
			add_location(div5, file, 71, 14, 2353);
			attr_dev(div6, "class", "col-md-12");
			add_location(div6, file, 70, 12, 2315);
			attr_dev(div7, "class", "row");
			add_location(div7, file, 69, 10, 2285);
			attr_dev(div8, "class", "gap-40");
			add_location(div8, file, 80, 10, 2774);
			attr_dev(h30, "class", "column-title-small");
			add_location(h30, file, 85, 14, 2932);
			add_location(p3, file, 86, 14, 2999);
			attr_dev(div9, "class", "col-md-12");
			add_location(div9, file, 84, 12, 2894);
			attr_dev(div10, "class", "row");
			add_location(div10, file, 83, 10, 2864);
			attr_dev(div11, "class", "gap-40");
			add_location(div11, file, 95, 10, 3349);
			attr_dev(h31, "class", "column-title-small");
			add_location(h31, file, 100, 14, 3496);
			attr_dev(div12, "class", "col-md-6");
			add_location(div12, file, 99, 12, 3459);
			attr_dev(h32, "class", "column-title-small");
			add_location(h32, file, 105, 14, 3691);
			attr_dev(div13, "class", "col-md-6 mt-5 mt-md-0");
			add_location(div13, file, 104, 12, 3641);
			attr_dev(div14, "class", "row");
			add_location(div14, file, 98, 10, 3429);
			attr_dev(div15, "class", "gap-40");
			add_location(div15, file, 111, 10, 3901);
			attr_dev(div16, "class", "call-to-action classic");
			add_location(div16, file, 116, 14, 4051);
			attr_dev(div17, "class", "col-md-12");
			add_location(div17, file, 115, 12, 4013);
			attr_dev(div18, "class", "row");
			add_location(div18, file, 114, 10, 3983);
			attr_dev(div19, "class", "content-inner-page");
			add_location(div19, file, 43, 8, 1104);
			attr_dev(div20, "class", "col-xl-12 col-lg-12");
			add_location(div20, file, 42, 6, 1062);
			attr_dev(div21, "class", "row g-5");
			add_location(div21, file, 41, 4, 1034);
			attr_dev(div22, "class", "container");
			add_location(div22, file, 40, 2, 1006);
			attr_dev(div23, "class", "container-xxl py-5");
			add_location(div23, file, 38, 0, 969);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div23, anchor);
			append_hydration_dev(div23, div22);
			append_hydration_dev(div22, div21);
			append_hydration_dev(div21, div20);
			append_hydration_dev(div20, div19);
			append_hydration_dev(div19, h2);
			append_hydration_dev(h2, t0);
			append_hydration_dev(div19, t1);
			append_hydration_dev(div19, div1);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, p0);
			append_hydration_dev(p0, t2);
			append_hydration_dev(div0, t3);
			append_hydration_dev(div0, p1);
			append_hydration_dev(p1, t4);
			append_hydration_dev(div0, t5);
			append_hydration_dev(div0, p2);
			append_hydration_dev(p2, t6);
			append_hydration_dev(div19, t7);
			append_hydration_dev(div19, div2);
			append_hydration_dev(div19, t8);
			append_hydration_dev(div19, div7);
			append_hydration_dev(div7, div6);
			append_hydration_dev(div6, div5);
			append_hydration_dev(div5, div3);
			append_hydration_dev(div3, img0);
			append_hydration_dev(div5, t9);
			append_hydration_dev(div5, div4);
			append_hydration_dev(div4, img1);
			append_hydration_dev(div19, t10);
			append_hydration_dev(div19, div8);
			append_hydration_dev(div19, t11);
			append_hydration_dev(div19, div10);
			append_hydration_dev(div10, div9);
			append_hydration_dev(div9, h30);
			append_hydration_dev(h30, t12);
			append_hydration_dev(div9, t13);
			append_hydration_dev(div9, p3);
			append_hydration_dev(p3, t14);
			append_hydration_dev(div19, t15);
			append_hydration_dev(div19, div11);
			append_hydration_dev(div19, t16);
			append_hydration_dev(div19, div14);
			append_hydration_dev(div14, div12);
			append_hydration_dev(div12, h31);
			append_hydration_dev(h31, t17);
			append_hydration_dev(div14, t18);
			append_hydration_dev(div14, div13);
			append_hydration_dev(div13, h32);
			append_hydration_dev(h32, t19);
			append_hydration_dev(div19, t20);
			append_hydration_dev(div19, div15);
			append_hydration_dev(div19, t21);
			append_hydration_dev(div19, div18);
			append_hydration_dev(div18, div17);
			append_hydration_dev(div17, div16);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*serviceDetails*/ 1 && t0_value !== (t0_value = /*serviceDetails*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*serviceDetails*/ 1 && t2_value !== (t2_value = /*serviceDetails*/ ctx[0].description + "")) set_data_dev(t2, t2_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div23);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('House_construction', slots, []);

	let { serviceDetails = {
		title: "Home Construction - Sark Construction, Chennai",
		description: "Transforming Dreams into Reality with Quality Construction Services",
		features: [
			"Customized design and planning tailored to your preferences",
			"Experienced construction team with a passion for excellence",
			"Premium quality materials and craftsmanship",
			"Committed to on-time project completion",
			"Budget-friendly options without compromising quality"
		]
	} } = $$props;

	let pageSlider;

	onMount(() => {
		pageSlider = document.querySelector('#page-slider');

		if (pageSlider) {
			initializeSlider();
		}
	});

	function initializeSlider() {
		pageSlider.owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			autoplay: true,
			autoplayTimeout: 5000, // Adjust the timeout as needed
			autoplayHoverPause: true
		});
	}

	const writable_props = ['serviceDetails'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<House_construction> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('serviceDetails' in $$props) $$invalidate(0, serviceDetails = $$props.serviceDetails);
	};

	$$self.$capture_state = () => ({
		onMount,
		serviceDetails,
		pageSlider,
		initializeSlider
	});

	$$self.$inject_state = $$props => {
		if ('serviceDetails' in $$props) $$invalidate(0, serviceDetails = $$props.serviceDetails);
		if ('pageSlider' in $$props) pageSlider = $$props.pageSlider;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [serviceDetails];
}

class House_construction extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { serviceDetails: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "House_construction",
			options,
			id: create_fragment.name
		});
	}

	get serviceDetails() {
		throw new Error("<House_construction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set serviceDetails(value) {
		throw new Error("<House_construction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { House_construction as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91c2UtY29uc3RydWN0aW9uLjg0YzhmMWI0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2hvdXNlLWNvbnN0cnVjdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cbiAgZXhwb3J0IGxldCBzZXJ2aWNlRGV0YWlscyA9IHtcbiAgICB0aXRsZTogXCJIb21lIENvbnN0cnVjdGlvbiAtIFNhcmsgQ29uc3RydWN0aW9uLCBDaGVubmFpXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRyYW5zZm9ybWluZyBEcmVhbXMgaW50byBSZWFsaXR5IHdpdGggUXVhbGl0eSBDb25zdHJ1Y3Rpb24gU2VydmljZXNcIixcbiAgICBmZWF0dXJlczogW1xuICAgICAgXCJDdXN0b21pemVkIGRlc2lnbiBhbmQgcGxhbm5pbmcgdGFpbG9yZWQgdG8geW91ciBwcmVmZXJlbmNlc1wiLFxuICAgICAgXCJFeHBlcmllbmNlZCBjb25zdHJ1Y3Rpb24gdGVhbSB3aXRoIGEgcGFzc2lvbiBmb3IgZXhjZWxsZW5jZVwiLFxuICAgICAgXCJQcmVtaXVtIHF1YWxpdHkgbWF0ZXJpYWxzIGFuZCBjcmFmdHNtYW5zaGlwXCIsXG4gICAgICBcIkNvbW1pdHRlZCB0byBvbi10aW1lIHByb2plY3QgY29tcGxldGlvblwiLFxuICAgICAgXCJCdWRnZXQtZnJpZW5kbHkgb3B0aW9ucyB3aXRob3V0IGNvbXByb21pc2luZyBxdWFsaXR5XCIsXG4gICAgXVxuICB9XG5cbiAgbGV0IHBhZ2VTbGlkZXI7XG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIHBhZ2VTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS1zbGlkZXInKTtcblxuICAgIGlmIChwYWdlU2xpZGVyKSB7XG4gICAgICBpbml0aWFsaXplU2xpZGVyKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplU2xpZGVyKCkge1xuICAgIHBhZ2VTbGlkZXIub3dsQ2Fyb3VzZWwoe1xuICAgICAgaXRlbXM6IDEsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLCAvLyBBZGp1c3QgdGhlIHRpbWVvdXQgYXMgbmVlZGVkXG4gICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gICAgfSk7XG4gIH1cbjwvc2NyaXB0PlxuXG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXIteHhsIHB5LTVcIj5cbiBcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZy01XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1pbm5lci1wYWdlXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwiY29sdW1uLXRpdGxlIG1ydC0wXCI+e3NlcnZpY2VEZXRhaWxzLnRpdGxlfTwvaDI+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPHA+e3NlcnZpY2VEZXRhaWxzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQXQgU2FyayBDb25zdHJ1Y3Rpb24sIHdlIGJlbGlldmUgaW4gdHVybmluZyB5b3VyIGRyZWFtIGhvbWUgdmlzaW9uXG4gICAgICAgICAgICAgICAgaW50byBhIHRhbmdpYmxlIHJlYWxpdHkuIE91ciBkZWRpY2F0ZWQgdGVhbSBvZiBwcm9mZXNzaW9uYWxzIGlzXG4gICAgICAgICAgICAgICAgY29tbWl0dGVkIHRvIGRlbGl2ZXJpbmcgY29uc3RydWN0aW9uIHNlcnZpY2VzIHRoYXQgZXhjZWVkXG4gICAgICAgICAgICAgICAgZXhwZWN0YXRpb25zLiBXaGV0aGVyIHlvdSdyZSBlbnZpc2lvbmluZyBhIG1vZGVybiBtYXN0ZXJwaWVjZSBvciBhXG4gICAgICAgICAgICAgICAgY296eSB0cmFkaXRpb25hbCBob21lLCB3ZSBoYXZlIHRoZSBleHBlcnRpc2UgdG8gYnJpbmcgeW91ciBpZGVhc1xuICAgICAgICAgICAgICAgIHRvIGxpZmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgV2l0aCBhIGZvY3VzIG9uIHF1YWxpdHkgbWF0ZXJpYWxzLCBwcmVjaXNlIGNyYWZ0c21hbnNoaXAsIGFuZCBhXG4gICAgICAgICAgICAgICAgY2xpZW50LWNlbnRyaWMgYXBwcm9hY2gsIHdlIHN0YW5kIG91dCBhcyBhIHJlbGlhYmxlIHBhcnRuZXIgZm9yXG4gICAgICAgICAgICAgICAgeW91ciBob21lIGNvbnN0cnVjdGlvbiBuZWVkcy4gT3VyIGF0dGVudGlvbiB0byBkZXRhaWwsIHRyYW5zcGFyZW50XG4gICAgICAgICAgICAgICAgY29tbXVuaWNhdGlvbiwgYW5kIGFkaGVyZW5jZSB0byB0aW1lbGluZXMgbWFrZSB1cyB0aGUgcHJlZmVycmVkXG4gICAgICAgICAgICAgICAgY2hvaWNlIGZvciBob21lb3duZXJzIGluIENoZW5uYWkuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLTQwXCI+PC9kaXY+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2Utc2xpZGVyXCIgY2xhc3M9XCJvd2wtY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgICA8IS0tIEFkZCB5b3VyIHNsaWRlciBpbWFnZXMgaGVyZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPjxpbWcgc3JjPVwiaW1nL2Nhcm91c2VsLTEuanBnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+PGltZyBzcmM9XCJpbWcvY2Fyb3VzZWwtMi5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cImltZy1mbHVpZFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBBZGQgbW9yZSBzbGlkZXIgaW1hZ2VzIGFzIG5lZWRlZCAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdhcC00MFwiPjwvZGl2PlxuICBcbiAgICAgICAgICA8IS0tIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gU2VjdGlvbiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbHVtbi10aXRsZS1zbWFsbFwiPk1vcmUgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBIZXJlIHlvdSBjYW4gYWRkIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgU2FyayBDb25zdHJ1Y3Rpb24uXG4gICAgICAgICAgICAgICAgRmVlbCBmcmVlIHRvIGluY2x1ZGUgZGV0YWlscyBhYm91dCB5b3VyIHBhc3QgcHJvamVjdHMsIGNsaWVudFxuICAgICAgICAgICAgICAgIHRlc3RpbW9uaWFscywgb3IgYW55IG90aGVyIHJlbGV2YW50IGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gU2VjdGlvbiBlbmQgLS0+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtNDBcIj48L2Rpdj5cbiAgXG4gICAgICAgICAgPCEtLSBLZXkgRmVhdHVyZXMgU2VjdGlvbiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY29sdW1uLXRpdGxlLXNtYWxsXCI+V2hhdCBTZXRzIFVzIEFwYXJ0PC9oMz5cbiAgICAgICAgICAgICAgPCEtLSBFeGlzdGluZyBLZXkgRmVhdHVyZXMgY29udGVudC4uLiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBtdC01IG10LW1kLTBcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY29sdW1uLXRpdGxlLXNtYWxsXCI+S2V5IENvbnNpZGVyYXRpb25zPC9oMz5cbiAgICAgICAgICAgICAgPCEtLSBFeGlzdGluZyBLZXkgQ29uc2lkZXJhdGlvbnMgY29udGVudC4uLiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gS2V5IEZlYXR1cmVzIFNlY3Rpb24gZW5kIC0tPlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLTQwXCI+PC9kaXY+XG4gIFxuICAgICAgICAgIDwhLS0gQ2FsbC10by1BY3Rpb24gU2VjdGlvbiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxsLXRvLWFjdGlvbiBjbGFzc2ljXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBFeGlzdGluZyBDYWxsLXRvLUFjdGlvbiBjb250ZW50Li4uIC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gQ2FsbC10by1BY3Rpb24gU2VjdGlvbiBlbmQgLS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIENvbnRlbnQgaW5uZXIgZW5kIC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcblxuPC9kaXY+XG5cblxuPHN0eWxlPlxuICAvKiBBZGRpdGlvbmFsIHN0eWxpbmcgaWYgbmVlZGVkICovXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUE0QzBDLENBQUEsSUFBQSxRQUFBLHNCQUFBLEdBQWMsSUFBQyxLQUFLLEdBQUEsRUFBQSxDQUFBOzs7Ozs7QUFJNUMsQ0FBQSxJQUFBLFFBQUEsc0JBQUEsR0FBYyxJQUFDLFdBQVcsR0FBQSxFQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBQzNCLGdhQU9ILENBQUEsQ0FBQTs7O2FBQ0csMFdBTUgsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FzQitCLGtCQUFnQixDQUFBLENBQUE7OztjQUM1QyxtTkFJSCxDQUFBLENBQUE7Ozs7Ozs7Y0FVK0Isb0JBQWtCLENBQUEsQ0FBQTs7OztjQUtsQixvQkFBa0IsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBeEQ5QyxnYUFPSCxDQUFBLENBQUE7Ozs7OzZCQUNHLDBXQU1ILENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQXNCK0Isa0JBQWdCLENBQUEsQ0FBQTs7Ozs7OEJBQzVDLG1OQUlILENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7K0JBVStCLG9CQUFrQixDQUFBLENBQUE7Ozs7Ozs7OytCQUtsQixvQkFBa0IsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
