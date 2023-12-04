import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, r as onMount, e as element, a as space, t as text, G as head_selector, c as claim_element, b as children, h as detach_dev, f as claim_space, g as claim_text, k as src_url_equal, j as attr_dev, m as add_location, o as append_hydration_dev, n as insert_hydration_dev, O as set_data_dev, p as noop, P as globals } from './client.3cea1aee.js';
import 'jquery';

/* src/routes/house-construction.svelte generated by Svelte v3.59.2 */

const { document: document_1 } = globals;
const file = "src/routes/house-construction.svelte";

function create_fragment(ctx) {
	let script0;
	let script0_src_value;
	let script1;
	let script1_src_value;
	let link0;
	let link1;
	let t0;
	let div23;
	let div22;
	let div21;
	let div20;
	let div19;
	let h2;
	let t1_value = /*serviceDetails*/ ctx[0].title + "";
	let t1;
	let t2;
	let div1;
	let div0;
	let p0;
	let t3_value = /*serviceDetails*/ ctx[0].description + "";
	let t3;
	let t4;
	let p1;
	let t5;
	let t6;
	let p2;
	let t7;
	let t8;
	let div2;
	let t9;
	let div7;
	let div6;
	let div5;
	let div3;
	let img0;
	let img0_src_value;
	let t10;
	let div4;
	let img1;
	let img1_src_value;
	let t11;
	let div8;
	let t12;
	let div10;
	let div9;
	let h30;
	let t13;
	let t14;
	let p3;
	let t15;
	let t16;
	let div11;
	let t17;
	let div14;
	let div12;
	let h31;
	let t18;
	let t19;
	let div13;
	let h32;
	let t20;
	let t21;
	let div15;
	let t22;
	let div18;
	let div17;
	let div16;

	const block = {
		c: function create() {
			script0 = element("script");
			script1 = element("script");
			link0 = element("link");
			link1 = element("link");
			t0 = space();
			div23 = element("div");
			div22 = element("div");
			div21 = element("div");
			div20 = element("div");
			div19 = element("div");
			h2 = element("h2");
			t1 = text(t1_value);
			t2 = space();
			div1 = element("div");
			div0 = element("div");
			p0 = element("p");
			t3 = text(t3_value);
			t4 = space();
			p1 = element("p");
			t5 = text("At Sark Construction, we believe in turning your dream home vision\n                into a tangible reality. Our dedicated team of professionals is\n                committed to delivering construction services that exceed\n                expectations. Whether you're envisioning a modern masterpiece or a\n                cozy traditional home, we have the expertise to bring your ideas\n                to life.");
			t6 = space();
			p2 = element("p");
			t7 = text("With a focus on quality materials, precise craftsmanship, and a\n                client-centric approach, we stand out as a reliable partner for\n                your home construction needs. Our attention to detail, transparent\n                communication, and adherence to timelines make us the preferred\n                choice for homeowners in Chennai.");
			t8 = space();
			div2 = element("div");
			t9 = space();
			div7 = element("div");
			div6 = element("div");
			div5 = element("div");
			div3 = element("div");
			img0 = element("img");
			t10 = space();
			div4 = element("div");
			img1 = element("img");
			t11 = space();
			div8 = element("div");
			t12 = space();
			div10 = element("div");
			div9 = element("div");
			h30 = element("h3");
			t13 = text("More Information");
			t14 = space();
			p3 = element("p");
			t15 = text("Here you can add additional information about Sark Construction.\n                Feel free to include details about your past projects, client\n                testimonials, or any other relevant information.");
			t16 = space();
			div11 = element("div");
			t17 = space();
			div14 = element("div");
			div12 = element("div");
			h31 = element("h3");
			t18 = text("What Sets Us Apart");
			t19 = space();
			div13 = element("div");
			h32 = element("h3");
			t20 = text("Key Considerations");
			t21 = space();
			div15 = element("div");
			t22 = space();
			div18 = element("div");
			div17 = element("div");
			div16 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = head_selector('svelte-1uzg6cd', document_1.head);
			script0 = claim_element(head_nodes, "SCRIPT", { src: true });
			var script0_nodes = children(script0);
			script0_nodes.forEach(detach_dev);
			script1 = claim_element(head_nodes, "SCRIPT", { src: true });
			var script1_nodes = children(script1);
			script1_nodes.forEach(detach_dev);
			link0 = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
			link1 = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
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
			t1 = claim_text(h2_nodes, t1_value);
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(div19_nodes);
			div1 = claim_element(div19_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, t3_value);
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "At Sark Construction, we believe in turning your dream home vision\n                into a tangible reality. Our dedicated team of professionals is\n                committed to delivering construction services that exceed\n                expectations. Whether you're envisioning a modern masterpiece or a\n                cozy traditional home, we have the expertise to bring your ideas\n                to life.");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", {});
			var p2_nodes = children(p2);
			t7 = claim_text(p2_nodes, "With a focus on quality materials, precise craftsmanship, and a\n                client-centric approach, we stand out as a reliable partner for\n                your home construction needs. Our attention to detail, transparent\n                communication, and adherence to timelines make us the preferred\n                choice for homeowners in Chennai.");
			p2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t8 = claim_space(div19_nodes);
			div2 = claim_element(div19_nodes, "DIV", { class: true });
			children(div2).forEach(detach_dev);
			t9 = claim_space(div19_nodes);
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
			t10 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			img1 = claim_element(div4_nodes, "IMG", { src: true, alt: true, class: true });
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			t11 = claim_space(div19_nodes);
			div8 = claim_element(div19_nodes, "DIV", { class: true });
			children(div8).forEach(detach_dev);
			t12 = claim_space(div19_nodes);
			div10 = claim_element(div19_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			h30 = claim_element(div9_nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t13 = claim_text(h30_nodes, "More Information");
			h30_nodes.forEach(detach_dev);
			t14 = claim_space(div9_nodes);
			p3 = claim_element(div9_nodes, "P", {});
			var p3_nodes = children(p3);
			t15 = claim_text(p3_nodes, "Here you can add additional information about Sark Construction.\n                Feel free to include details about your past projects, client\n                testimonials, or any other relevant information.");
			p3_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			t16 = claim_space(div19_nodes);
			div11 = claim_element(div19_nodes, "DIV", { class: true });
			children(div11).forEach(detach_dev);
			t17 = claim_space(div19_nodes);
			div14 = claim_element(div19_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div12 = claim_element(div14_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			h31 = claim_element(div12_nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t18 = claim_text(h31_nodes, "What Sets Us Apart");
			h31_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			t19 = claim_space(div14_nodes);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			h32 = claim_element(div13_nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			t20 = claim_text(h32_nodes, "Key Considerations");
			h32_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			t21 = claim_space(div19_nodes);
			div15 = claim_element(div19_nodes, "DIV", { class: true });
			children(div15).forEach(detach_dev);
			t22 = claim_space(div19_nodes);
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
			if (!src_url_equal(script0.src, script0_src_value = "https://code.jquery.com/jquery-3.6.0.min.js")) attr_dev(script0, "src", script0_src_value);
			add_location(script0, file, 1, 2, 16);
			if (!src_url_equal(script1.src, script1_src_value = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js")) attr_dev(script1, "src", script1_src_value);
			add_location(script1, file, 2, 2, 86);
			attr_dev(link0, "rel", "stylesheet");
			attr_dev(link0, "type", "text/css");
			attr_dev(link0, "href", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css");
			add_location(link0, file, 3, 2, 185);
			attr_dev(link1, "rel", "stylesheet");
			attr_dev(link1, "type", "text/css");
			attr_dev(link1, "href", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css");
			add_location(link1, file, 4, 2, 305);
			attr_dev(h2, "class", "column-title mrt-0");
			add_location(h2, file, 52, 10, 1530);
			add_location(p0, file, 56, 14, 1670);
			add_location(p1, file, 57, 14, 1720);
			add_location(p2, file, 65, 14, 2183);
			attr_dev(div0, "class", "col-md-12");
			add_location(div0, file, 55, 12, 1632);
			attr_dev(div1, "class", "row");
			add_location(div1, file, 54, 10, 1602);
			attr_dev(div2, "class", "gap-40");
			add_location(div2, file, 75, 10, 2628);
			if (!src_url_equal(img0.src, img0_src_value = "img/carousel-1.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "");
			attr_dev(img0, "class", "img-fluid");
			add_location(img0, file, 83, 18, 2932);
			attr_dev(div3, "class", "slick-slide");
			add_location(div3, file, 82, 16, 2888);
			if (!src_url_equal(img1.src, img1_src_value = "img/carousel-2.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "");
			attr_dev(img1, "class", "img-fluid");
			add_location(img1, file, 86, 18, 3073);
			attr_dev(div4, "class", "slick-slide");
			add_location(div4, file, 85, 16, 3029);
			attr_dev(div5, "id", "page-slider");
			attr_dev(div5, "class", "page-slider");
			add_location(div5, file, 80, 14, 2776);
			attr_dev(div6, "class", "col-md-12");
			add_location(div6, file, 79, 12, 2738);
			attr_dev(div7, "class", "row");
			add_location(div7, file, 78, 10, 2708);
			attr_dev(div8, "class", "gap-40");
			add_location(div8, file, 94, 10, 3326);
			attr_dev(h30, "class", "column-title-small");
			add_location(h30, file, 99, 14, 3484);
			add_location(p3, file, 100, 14, 3551);
			attr_dev(div9, "class", "col-md-12");
			add_location(div9, file, 98, 12, 3446);
			attr_dev(div10, "class", "row");
			add_location(div10, file, 97, 10, 3416);
			attr_dev(div11, "class", "gap-40");
			add_location(div11, file, 109, 10, 3901);
			attr_dev(h31, "class", "column-title-small");
			add_location(h31, file, 114, 14, 4048);
			attr_dev(div12, "class", "col-md-6");
			add_location(div12, file, 113, 12, 4011);
			attr_dev(h32, "class", "column-title-small");
			add_location(h32, file, 119, 14, 4243);
			attr_dev(div13, "class", "col-md-6 mt-5 mt-md-0");
			add_location(div13, file, 118, 12, 4193);
			attr_dev(div14, "class", "row");
			add_location(div14, file, 112, 10, 3981);
			attr_dev(div15, "class", "gap-40");
			add_location(div15, file, 125, 10, 4453);
			attr_dev(div16, "class", "call-to-action classic");
			add_location(div16, file, 130, 14, 4603);
			attr_dev(div17, "class", "col-md-12");
			add_location(div17, file, 129, 12, 4565);
			attr_dev(div18, "class", "row");
			add_location(div18, file, 128, 10, 4535);
			attr_dev(div19, "class", "content-inner-page");
			add_location(div19, file, 51, 8, 1487);
			attr_dev(div20, "class", "col-xl-12 col-lg-12");
			add_location(div20, file, 50, 6, 1445);
			attr_dev(div21, "class", "row g-5");
			add_location(div21, file, 49, 4, 1417);
			attr_dev(div22, "class", "container");
			add_location(div22, file, 48, 2, 1389);
			attr_dev(div23, "class", "container-xxl py-5");
			add_location(div23, file, 46, 0, 1352);
		},
		m: function mount(target, anchor) {
			append_hydration_dev(document_1.head, script0);
			append_hydration_dev(document_1.head, script1);
			append_hydration_dev(document_1.head, link0);
			append_hydration_dev(document_1.head, link1);
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div23, anchor);
			append_hydration_dev(div23, div22);
			append_hydration_dev(div22, div21);
			append_hydration_dev(div21, div20);
			append_hydration_dev(div20, div19);
			append_hydration_dev(div19, h2);
			append_hydration_dev(h2, t1);
			append_hydration_dev(div19, t2);
			append_hydration_dev(div19, div1);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, p0);
			append_hydration_dev(p0, t3);
			append_hydration_dev(div0, t4);
			append_hydration_dev(div0, p1);
			append_hydration_dev(p1, t5);
			append_hydration_dev(div0, t6);
			append_hydration_dev(div0, p2);
			append_hydration_dev(p2, t7);
			append_hydration_dev(div19, t8);
			append_hydration_dev(div19, div2);
			append_hydration_dev(div19, t9);
			append_hydration_dev(div19, div7);
			append_hydration_dev(div7, div6);
			append_hydration_dev(div6, div5);
			append_hydration_dev(div5, div3);
			append_hydration_dev(div3, img0);
			append_hydration_dev(div5, t10);
			append_hydration_dev(div5, div4);
			append_hydration_dev(div4, img1);
			append_hydration_dev(div19, t11);
			append_hydration_dev(div19, div8);
			append_hydration_dev(div19, t12);
			append_hydration_dev(div19, div10);
			append_hydration_dev(div10, div9);
			append_hydration_dev(div9, h30);
			append_hydration_dev(h30, t13);
			append_hydration_dev(div9, t14);
			append_hydration_dev(div9, p3);
			append_hydration_dev(p3, t15);
			append_hydration_dev(div19, t16);
			append_hydration_dev(div19, div11);
			append_hydration_dev(div19, t17);
			append_hydration_dev(div19, div14);
			append_hydration_dev(div14, div12);
			append_hydration_dev(div12, h31);
			append_hydration_dev(h31, t18);
			append_hydration_dev(div14, t19);
			append_hydration_dev(div14, div13);
			append_hydration_dev(div13, h32);
			append_hydration_dev(h32, t20);
			append_hydration_dev(div19, t21);
			append_hydration_dev(div19, div15);
			append_hydration_dev(div19, t22);
			append_hydration_dev(div19, div18);
			append_hydration_dev(div18, div17);
			append_hydration_dev(div17, div16);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*serviceDetails*/ 1 && t1_value !== (t1_value = /*serviceDetails*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*serviceDetails*/ 1 && t3_value !== (t3_value = /*serviceDetails*/ ctx[0].description + "")) set_data_dev(t3, t3_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(script0);
			detach_dev(script1);
			detach_dev(link0);
			detach_dev(link1);
			if (detaching) detach_dev(t0);
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
		pageSlider.slick({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91c2UtY29uc3RydWN0aW9uLmRmYWU3M2FiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2hvdXNlLWNvbnN0cnVjdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjYuMC5taW4uanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjguMS9zbGljay5taW4uanNcIj48L3NjcmlwdD5cbiAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjguMS9zbGljay5jc3NcIi8+XG4gIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS44LjEvc2xpY2stdGhlbWUuY3NzXCIvPlxuPC9zdmVsdGU6aGVhZD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cbiAgZXhwb3J0IGxldCBzZXJ2aWNlRGV0YWlscyA9IHtcbiAgICB0aXRsZTogXCJIb21lIENvbnN0cnVjdGlvbiAtIFNhcmsgQ29uc3RydWN0aW9uLCBDaGVubmFpXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRyYW5zZm9ybWluZyBEcmVhbXMgaW50byBSZWFsaXR5IHdpdGggUXVhbGl0eSBDb25zdHJ1Y3Rpb24gU2VydmljZXNcIixcbiAgICBmZWF0dXJlczogW1xuICAgICAgXCJDdXN0b21pemVkIGRlc2lnbiBhbmQgcGxhbm5pbmcgdGFpbG9yZWQgdG8geW91ciBwcmVmZXJlbmNlc1wiLFxuICAgICAgXCJFeHBlcmllbmNlZCBjb25zdHJ1Y3Rpb24gdGVhbSB3aXRoIGEgcGFzc2lvbiBmb3IgZXhjZWxsZW5jZVwiLFxuICAgICAgXCJQcmVtaXVtIHF1YWxpdHkgbWF0ZXJpYWxzIGFuZCBjcmFmdHNtYW5zaGlwXCIsXG4gICAgICBcIkNvbW1pdHRlZCB0byBvbi10aW1lIHByb2plY3QgY29tcGxldGlvblwiLFxuICAgICAgXCJCdWRnZXQtZnJpZW5kbHkgb3B0aW9ucyB3aXRob3V0IGNvbXByb21pc2luZyBxdWFsaXR5XCIsXG4gICAgXVxuICB9XG5cbiAgbGV0IHBhZ2VTbGlkZXI7XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgcGFnZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLXNsaWRlcicpO1xuICAgIFxuICAgIGlmIChwYWdlU2xpZGVyKSB7XG4gICAgICBpbml0aWFsaXplU2xpZGVyKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplU2xpZGVyKCkge1xuICAgIHBhZ2VTbGlkZXIuc2xpY2soe1xuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgfSk7XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci14eGwgcHktNVwiPlxuIFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBnLTVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMTIgY29sLWxnLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWlubmVyLXBhZ2VcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJjb2x1bW4tdGl0bGUgbXJ0LTBcIj57c2VydmljZURldGFpbHMudGl0bGV9PC9oMj5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICA8cD57c2VydmljZURldGFpbHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBdCBTYXJrIENvbnN0cnVjdGlvbiwgd2UgYmVsaWV2ZSBpbiB0dXJuaW5nIHlvdXIgZHJlYW0gaG9tZSB2aXNpb25cbiAgICAgICAgICAgICAgICBpbnRvIGEgdGFuZ2libGUgcmVhbGl0eS4gT3VyIGRlZGljYXRlZCB0ZWFtIG9mIHByb2Zlc3Npb25hbHMgaXNcbiAgICAgICAgICAgICAgICBjb21taXR0ZWQgdG8gZGVsaXZlcmluZyBjb25zdHJ1Y3Rpb24gc2VydmljZXMgdGhhdCBleGNlZWRcbiAgICAgICAgICAgICAgICBleHBlY3RhdGlvbnMuIFdoZXRoZXIgeW91J3JlIGVudmlzaW9uaW5nIGEgbW9kZXJuIG1hc3RlcnBpZWNlIG9yIGFcbiAgICAgICAgICAgICAgICBjb3p5IHRyYWRpdGlvbmFsIGhvbWUsIHdlIGhhdmUgdGhlIGV4cGVydGlzZSB0byBicmluZyB5b3VyIGlkZWFzXG4gICAgICAgICAgICAgICAgdG8gbGlmZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBXaXRoIGEgZm9jdXMgb24gcXVhbGl0eSBtYXRlcmlhbHMsIHByZWNpc2UgY3JhZnRzbWFuc2hpcCwgYW5kIGFcbiAgICAgICAgICAgICAgICBjbGllbnQtY2VudHJpYyBhcHByb2FjaCwgd2Ugc3RhbmQgb3V0IGFzIGEgcmVsaWFibGUgcGFydG5lciBmb3JcbiAgICAgICAgICAgICAgICB5b3VyIGhvbWUgY29uc3RydWN0aW9uIG5lZWRzLiBPdXIgYXR0ZW50aW9uIHRvIGRldGFpbCwgdHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgICBjb21tdW5pY2F0aW9uLCBhbmQgYWRoZXJlbmNlIHRvIHRpbWVsaW5lcyBtYWtlIHVzIHRoZSBwcmVmZXJyZWRcbiAgICAgICAgICAgICAgICBjaG9pY2UgZm9yIGhvbWVvd25lcnMgaW4gQ2hlbm5haS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtNDBcIj48L2Rpdj5cbiAgXG4gICAgICAgICAgPCEtLSBJbWFnZSBTbGlkZXIgU2VjdGlvbiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlLXNsaWRlclwiIGNsYXNzPVwicGFnZS1zbGlkZXJcIj5cbiAgICAgICAgICAgICAgICA8IS0tIEFkZCB5b3VyIHNsaWRlciBpbWFnZXMgaGVyZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpY2stc2xpZGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Nhcm91c2VsLTEuanBnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGljay1zbGlkZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvY2Fyb3VzZWwtMi5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBBZGQgbW9yZSBzbGlkZXIgaW1hZ2VzIGFzIG5lZWRlZCAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIEltYWdlIFNsaWRlciBTZWN0aW9uIGVuZCAtLT5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdhcC00MFwiPjwvZGl2PlxuICBcbiAgICAgICAgICA8IS0tIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gU2VjdGlvbiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbHVtbi10aXRsZS1zbWFsbFwiPk1vcmUgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBIZXJlIHlvdSBjYW4gYWRkIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgU2FyayBDb25zdHJ1Y3Rpb24uXG4gICAgICAgICAgICAgICAgRmVlbCBmcmVlIHRvIGluY2x1ZGUgZGV0YWlscyBhYm91dCB5b3VyIHBhc3QgcHJvamVjdHMsIGNsaWVudFxuICAgICAgICAgICAgICAgIHRlc3RpbW9uaWFscywgb3IgYW55IG90aGVyIHJlbGV2YW50IGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gU2VjdGlvbiBlbmQgLS0+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtNDBcIj48L2Rpdj5cbiAgXG4gICAgICAgICAgPCEtLSBLZXkgRmVhdHVyZXMgU2VjdGlvbiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY29sdW1uLXRpdGxlLXNtYWxsXCI+V2hhdCBTZXRzIFVzIEFwYXJ0PC9oMz5cbiAgICAgICAgICAgICAgPCEtLSBFeGlzdGluZyBLZXkgRmVhdHVyZXMgY29udGVudC4uLiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBtdC01IG10LW1kLTBcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY29sdW1uLXRpdGxlLXNtYWxsXCI+S2V5IENvbnNpZGVyYXRpb25zPC9oMz5cbiAgICAgICAgICAgICAgPCEtLSBFeGlzdGluZyBLZXkgQ29uc2lkZXJhdGlvbnMgY29udGVudC4uLiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gS2V5IEZlYXR1cmVzIFNlY3Rpb24gZW5kIC0tPlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLTQwXCI+PC9kaXY+XG4gIFxuICAgICAgICAgIDwhLS0gQ2FsbC10by1BY3Rpb24gU2VjdGlvbiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxsLXRvLWFjdGlvbiBjbGFzc2ljXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBFeGlzdGluZyBDYWxsLXRvLUFjdGlvbiBjb250ZW50Li4uIC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gQ2FsbC10by1BY3Rpb24gU2VjdGlvbiBlbmQgLS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIENvbnRlbnQgaW5uZXIgZW5kIC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcblxuPC9kaXY+XG5cblxuPHN0eWxlPlxuICAvKiBBZGRpdGlvbmFsIHN0eWxpbmcgaWYgbmVlZGVkICovXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRDBDLENBQUEsSUFBQSxR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
