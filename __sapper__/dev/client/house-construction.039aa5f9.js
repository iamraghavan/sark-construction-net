import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, B as validate_each_argument, E as validate_each_keys, v as validate_slots, e as element, t as text, a as space, F as create_component, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, H as claim_component, j as attr_dev, m as add_location, k as src_url_equal, l as set_style, n as insert_hydration_dev, o as append_hydration_dev, I as mount_component, O as set_data_dev, J as update_keyed_each, K as transition_in, L as transition_out, M as destroy_component, N as destroy_block } from './client.457f9d61.js';
import { C as Cta } from './Cta.fc420d3b.js';
import 'jquery';

/* src/routes/house-construction.svelte generated by Svelte v3.59.2 */
const file = "src/routes/house-construction.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (92:16) {#each serviceDetails.features as feature (feature)}
function create_each_block(key_1, ctx) {
	let div;
	let i;
	let t0;
	let h6;
	let t1_value = /*feature*/ ctx[1] + "";
	let t1;
	let t2;

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			div = element("div");
			i = element("i");
			t0 = space();
			h6 = element("h6");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, "data-wow-delay": true });
			var div_nodes = children(div);
			i = claim_element(div_nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			t0 = claim_space(div_nodes);
			h6 = claim_element(div_nodes, "H6", { class: true });
			var h6_nodes = children(h6);
			t1 = claim_text(h6_nodes, t1_value);
			h6_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(i, "class", "fa fa-check fa-2x text-primary flex-shrink-0 me-3");
			add_location(i, file, 93, 18, 3619);
			attr_dev(h6, "class", "mb-0");
			add_location(h6, file, 94, 18, 3703);
			attr_dev(div, "class", "col-sm-6 d-flex wow fadeIn");
			attr_dev(div, "data-wow-delay", "0.1s");
			add_location(div, file, 92, 16, 3538);
			this.first = div;
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, i);
			append_hydration_dev(div, t0);
			append_hydration_dev(div, h6);
			append_hydration_dev(h6, t1);
			append_hydration_dev(div, t2);
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*serviceDetails*/ 1 && t1_value !== (t1_value = /*feature*/ ctx[1] + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(92:16) {#each serviceDetails.features as feature (feature)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div7;
	let div6;
	let div5;
	let div4;
	let div3;
	let div0;
	let h1;
	let t0_value = /*serviceDetails*/ ctx[0].title + "";
	let t0;
	let t1;
	let div2;
	let div1;
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
	let div16;
	let div15;
	let div14;
	let div9;
	let div8;
	let img;
	let img_src_value;
	let t8;
	let div13;
	let div12;
	let h60;
	let t9;
	let t10;
	let h61;
	let t11;
	let t12;
	let div11;
	let div10;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t13;
	let cta;
	let current;
	let each_value = /*serviceDetails*/ ctx[0].features;
	validate_each_argument(each_value);
	const get_key = ctx => /*feature*/ ctx[1];
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	cta = new Cta({ $$inline: true });

	const block = {
		c: function create() {
			div7 = element("div");
			div6 = element("div");
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			div2 = element("div");
			div1 = element("div");
			p0 = element("p");
			t2 = text(t2_value);
			t3 = space();
			p1 = element("p");
			t4 = text("At Sark Construction, we believe in turning your dream home vision\n                into a tangible reality. Our dedicated team of professionals is\n                committed to delivering construction services that exceed\n                expectations. Whether you're envisioning a modern masterpiece or a\n                cozy traditional home, we have the expertise to bring your ideas\n                to life.");
			t5 = space();
			p2 = element("p");
			t6 = text("With a focus on quality materials, precise craftsmanship, and a\n                client-centric approach, we stand out as a reliable partner for\n                your home construction needs. Our attention to detail, transparent\n                communication, and adherence to timelines make us the preferred\n                choice for homeowners in Chennai.");
			t7 = space();
			div16 = element("div");
			div15 = element("div");
			div14 = element("div");
			div9 = element("div");
			div8 = element("div");
			img = element("img");
			t8 = space();
			div13 = element("div");
			div12 = element("div");
			h60 = element("h6");
			t9 = text("At Sark Construction, we specialize in turning your dream home vision into a tangible reality. Our residential construction services encompass new home construction, remodeling, renovation, and custom home building. Whether you're embarking on your first home or upgrading to a larger one, our team is dedicated to bringing your vision to life.");
			t10 = space();
			h61 = element("h6");
			t11 = text("We understand the significant investment involved in building a new home. Our goal is to make the process smooth and stress-free. The Sark Construction team is available to answer your questions and address concerns throughout the construction process.");
			t12 = space();
			div11 = element("div");
			div10 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t13 = space();
			create_component(cta.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div7 = claim_element(nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, t0_value);
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p0 = claim_element(div1_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, t2_value);
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "At Sark Construction, we believe in turning your dream home vision\n                into a tangible reality. Our dedicated team of professionals is\n                committed to delivering construction services that exceed\n                expectations. Whether you're envisioning a modern masterpiece or a\n                cozy traditional home, we have the expertise to bring your ideas\n                to life.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "With a focus on quality materials, precise craftsmanship, and a\n                client-centric approach, we stand out as a reliable partner for\n                your home construction needs. Our attention to detail, transparent\n                communication, and adherence to timelines make us the preferred\n                choice for homeowners in Chennai.");
			p2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			div16 = claim_element(nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			div15 = claim_element(div16_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			div14 = claim_element(div15_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div9 = claim_element(div14_nodes, "DIV", { class: true, "data-wow-delay": true });
			var div9_nodes = children(div9);
			div8 = claim_element(div9_nodes, "DIV", { class: true, style: true });
			var div8_nodes = children(div8);

			img = claim_element(div8_nodes, "IMG", {
				class: true,
				src: true,
				alt: true,
				style: true
			});

			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			t8 = claim_space(div14_nodes);
			div13 = claim_element(div14_nodes, "DIV", { class: true, "data-wow-delay": true });
			var div13_nodes = children(div13);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			h60 = claim_element(div12_nodes, "H6", {});
			var h60_nodes = children(h60);
			t9 = claim_text(h60_nodes, "At Sark Construction, we specialize in turning your dream home vision into a tangible reality. Our residential construction services encompass new home construction, remodeling, renovation, and custom home building. Whether you're embarking on your first home or upgrading to a larger one, our team is dedicated to bringing your vision to life.");
			h60_nodes.forEach(detach_dev);
			t10 = claim_space(div12_nodes);
			h61 = claim_element(div12_nodes, "H6", { class: true });
			var h61_nodes = children(h61);
			t11 = claim_text(h61_nodes, "We understand the significant investment involved in building a new home. Our goal is to make the process smooth and stress-free. The Sark Construction team is available to answer your questions and address concerns throughout the construction process.");
			h61_nodes.forEach(detach_dev);
			t12 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div10_nodes);
			}

			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			div15_nodes.forEach(detach_dev);
			div16_nodes.forEach(detach_dev);
			t13 = claim_space(nodes);
			claim_component(cta.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "display-6 mb-0");
			add_location(h1, file, 31, 12, 846);
			attr_dev(div0, "class", "border-start border-5 border-primary ps-4 mb-5");
			add_location(div0, file, 29, 10, 762);
			add_location(p0, file, 38, 14, 1027);
			add_location(p1, file, 39, 14, 1077);
			add_location(p2, file, 47, 14, 1540);
			attr_dev(div1, "class", "col-md-12");
			add_location(div1, file, 37, 12, 989);
			attr_dev(div2, "class", "row");
			add_location(div2, file, 36, 10, 959);
			attr_dev(div3, "class", "content-inner-page");
			add_location(div3, file, 26, 8, 712);
			attr_dev(div4, "class", "col-xl-12 col-lg-12");
			add_location(div4, file, 25, 6, 670);
			attr_dev(div5, "class", "row g-5");
			add_location(div5, file, 24, 4, 642);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 23, 2, 614);
			attr_dev(div7, "class", "container-xxl py-5");
			add_location(div7, file, 21, 0, 577);
			attr_dev(img, "class", "position-absolute w-100 h-100");
			if (!src_url_equal(img.src, img_src_value = "img/about.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			set_style(img, "object-fit", "cover");
			add_location(img, file, 73, 12, 2369);
			attr_dev(div8, "class", "position-relative overflow-hidden ps-5 pt-5 h-100");
			set_style(div8, "min-height", "400px");
			add_location(div8, file, 72, 10, 2267);
			attr_dev(div9, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div9, "data-wow-delay", "0.1s");
			add_location(div9, file, 71, 8, 2199);
			add_location(h60, file, 80, 12, 2626);
			attr_dev(h61, "class", "mb-4");
			add_location(h61, file, 85, 12, 3046);
			attr_dev(div10, "class", "row g-4");
			add_location(div10, file, 90, 14, 3431);
			attr_dev(div11, "class", "border-top mt-4 pt-4");
			add_location(div11, file, 89, 12, 3382);
			attr_dev(div12, "class", "h-100");
			add_location(div12, file, 78, 10, 2583);
			attr_dev(div13, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div13, "data-wow-delay", "0.5s");
			add_location(div13, file, 77, 8, 2515);
			attr_dev(div14, "class", "row g-5");
			add_location(div14, file, 70, 6, 2169);
			attr_dev(div15, "class", "container");
			add_location(div15, file, 69, 4, 2139);
			attr_dev(div16, "class", "container-xxl py-5");
			add_location(div16, file, 68, 2, 2102);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div7, anchor);
			append_hydration_dev(div7, div6);
			append_hydration_dev(div6, div5);
			append_hydration_dev(div5, div4);
			append_hydration_dev(div4, div3);
			append_hydration_dev(div3, div0);
			append_hydration_dev(div0, h1);
			append_hydration_dev(h1, t0);
			append_hydration_dev(div3, t1);
			append_hydration_dev(div3, div2);
			append_hydration_dev(div2, div1);
			append_hydration_dev(div1, p0);
			append_hydration_dev(p0, t2);
			append_hydration_dev(div1, t3);
			append_hydration_dev(div1, p1);
			append_hydration_dev(p1, t4);
			append_hydration_dev(div1, t5);
			append_hydration_dev(div1, p2);
			append_hydration_dev(p2, t6);
			insert_hydration_dev(target, t7, anchor);
			insert_hydration_dev(target, div16, anchor);
			append_hydration_dev(div16, div15);
			append_hydration_dev(div15, div14);
			append_hydration_dev(div14, div9);
			append_hydration_dev(div9, div8);
			append_hydration_dev(div8, img);
			append_hydration_dev(div14, t8);
			append_hydration_dev(div14, div13);
			append_hydration_dev(div13, div12);
			append_hydration_dev(div12, h60);
			append_hydration_dev(h60, t9);
			append_hydration_dev(div12, t10);
			append_hydration_dev(div12, h61);
			append_hydration_dev(h61, t11);
			append_hydration_dev(div12, t12);
			append_hydration_dev(div12, div11);
			append_hydration_dev(div11, div10);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div10, null);
				}
			}

			insert_hydration_dev(target, t13, anchor);
			mount_component(cta, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*serviceDetails*/ 1) && t0_value !== (t0_value = /*serviceDetails*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if ((!current || dirty & /*serviceDetails*/ 1) && t2_value !== (t2_value = /*serviceDetails*/ ctx[0].description + "")) set_data_dev(t2, t2_value);

			if (dirty & /*serviceDetails*/ 1) {
				each_value = /*serviceDetails*/ ctx[0].features;
				validate_each_argument(each_value);
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div10, destroy_block, create_each_block, null, get_each_context);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cta.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cta.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div7);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(div16);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			if (detaching) detach_dev(t13);
			destroy_component(cta, detaching);
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
		title: "Home Construction - Sark Construction",
		description: "Transforming Dreams into Reality with Quality Construction Services",
		features: [
			"Customized design and planning tailored to your preferences",
			"Experienced construction team with a passion for excellence",
			"Premium quality materials and craftsmanship",
			"Committed to on-time project completion",
			"Budget-friendly options without compromising quality"
		]
	} } = $$props;

	const writable_props = ['serviceDetails'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<House_construction> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('serviceDetails' in $$props) $$invalidate(0, serviceDetails = $$props.serviceDetails);
	};

	$$self.$capture_state = () => ({ Cta, serviceDetails });

	$$self.$inject_state = $$props => {
		if ('serviceDetails' in $$props) $$invalidate(0, serviceDetails = $$props.serviceDetails);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91c2UtY29uc3RydWN0aW9uLjAzOWFhNWY5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2hvdXNlLWNvbnN0cnVjdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IEN0YSBmcm9tIFwiLi4vY29tcG9uZW50cy9DdGEuc3ZlbHRlXCI7XG5cblxuICBleHBvcnQgbGV0IHNlcnZpY2VEZXRhaWxzID0ge1xuICAgIHRpdGxlOiBcIkhvbWUgQ29uc3RydWN0aW9uIC0gU2FyayBDb25zdHJ1Y3Rpb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVHJhbnNmb3JtaW5nIERyZWFtcyBpbnRvIFJlYWxpdHkgd2l0aCBRdWFsaXR5IENvbnN0cnVjdGlvbiBTZXJ2aWNlc1wiLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICBcIkN1c3RvbWl6ZWQgZGVzaWduIGFuZCBwbGFubmluZyB0YWlsb3JlZCB0byB5b3VyIHByZWZlcmVuY2VzXCIsXG4gICAgICBcIkV4cGVyaWVuY2VkIGNvbnN0cnVjdGlvbiB0ZWFtIHdpdGggYSBwYXNzaW9uIGZvciBleGNlbGxlbmNlXCIsXG4gICAgICBcIlByZW1pdW0gcXVhbGl0eSBtYXRlcmlhbHMgYW5kIGNyYWZ0c21hbnNoaXBcIixcbiAgICAgIFwiQ29tbWl0dGVkIHRvIG9uLXRpbWUgcHJvamVjdCBjb21wbGV0aW9uXCIsXG4gICAgICBcIkJ1ZGdldC1mcmllbmRseSBvcHRpb25zIHdpdGhvdXQgY29tcHJvbWlzaW5nIHF1YWxpdHlcIixcbiAgICBdXG4gIH1cblxuPC9zY3JpcHQ+XG5cblxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLXh4bCBweS01XCI+XG4gXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGctNVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC0xMiBjb2wtbGctMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtaW5uZXItcGFnZVwiPlxuICAgICBcblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItc3RhcnQgYm9yZGVyLTUgYm9yZGVyLXByaW1hcnkgcHMtNCBtYi01XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJkaXNwbGF5LTYgbWItMFwiPlxuICAgICAgICAgICAgICB7c2VydmljZURldGFpbHMudGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxwPntzZXJ2aWNlRGV0YWlscy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEF0IFNhcmsgQ29uc3RydWN0aW9uLCB3ZSBiZWxpZXZlIGluIHR1cm5pbmcgeW91ciBkcmVhbSBob21lIHZpc2lvblxuICAgICAgICAgICAgICAgIGludG8gYSB0YW5naWJsZSByZWFsaXR5LiBPdXIgZGVkaWNhdGVkIHRlYW0gb2YgcHJvZmVzc2lvbmFscyBpc1xuICAgICAgICAgICAgICAgIGNvbW1pdHRlZCB0byBkZWxpdmVyaW5nIGNvbnN0cnVjdGlvbiBzZXJ2aWNlcyB0aGF0IGV4Y2VlZFxuICAgICAgICAgICAgICAgIGV4cGVjdGF0aW9ucy4gV2hldGhlciB5b3UncmUgZW52aXNpb25pbmcgYSBtb2Rlcm4gbWFzdGVycGllY2Ugb3IgYVxuICAgICAgICAgICAgICAgIGNvenkgdHJhZGl0aW9uYWwgaG9tZSwgd2UgaGF2ZSB0aGUgZXhwZXJ0aXNlIHRvIGJyaW5nIHlvdXIgaWRlYXNcbiAgICAgICAgICAgICAgICB0byBsaWZlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFdpdGggYSBmb2N1cyBvbiBxdWFsaXR5IG1hdGVyaWFscywgcHJlY2lzZSBjcmFmdHNtYW5zaGlwLCBhbmQgYVxuICAgICAgICAgICAgICAgIGNsaWVudC1jZW50cmljIGFwcHJvYWNoLCB3ZSBzdGFuZCBvdXQgYXMgYSByZWxpYWJsZSBwYXJ0bmVyIGZvclxuICAgICAgICAgICAgICAgIHlvdXIgaG9tZSBjb25zdHJ1Y3Rpb24gbmVlZHMuIE91ciBhdHRlbnRpb24gdG8gZGV0YWlsLCB0cmFuc3BhcmVudFxuICAgICAgICAgICAgICAgIGNvbW11bmljYXRpb24sIGFuZCBhZGhlcmVuY2UgdG8gdGltZWxpbmVzIG1ha2UgdXMgdGhlIHByZWZlcnJlZFxuICAgICAgICAgICAgICAgIGNob2ljZSBmb3IgaG9tZW93bmVycyBpbiBDaGVubmFpLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIENvbnRlbnQgaW5uZXIgZW5kIC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXh4bCBweS01XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBnLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWRlbGF5PVwiMC4xc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcHMtNSBwdC01IGgtMTAwXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiA0MDBweFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHctMTAwIGgtMTAwXCIgc3JjPVwiaW1nL2Fib3V0LmpwZ1wiIGFsdD1cIlwiIHN0eWxlPVwib2JqZWN0LWZpdDogY292ZXJcIj5cbiAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTYgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImgtMTAwXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8aDY+XG4gICAgICAgICAgICAgICBBdCBTYXJrIENvbnN0cnVjdGlvbiwgd2Ugc3BlY2lhbGl6ZSBpbiB0dXJuaW5nIHlvdXIgZHJlYW0gaG9tZSB2aXNpb24gaW50byBhIHRhbmdpYmxlIHJlYWxpdHkuIE91ciByZXNpZGVudGlhbCBjb25zdHJ1Y3Rpb24gc2VydmljZXMgZW5jb21wYXNzIG5ldyBob21lIGNvbnN0cnVjdGlvbiwgcmVtb2RlbGluZywgcmVub3ZhdGlvbiwgYW5kIGN1c3RvbSBob21lIGJ1aWxkaW5nLiBXaGV0aGVyIHlvdSdyZSBlbWJhcmtpbmcgb24geW91ciBmaXJzdCBob21lIG9yIHVwZ3JhZGluZyB0byBhIGxhcmdlciBvbmUsIG91ciB0ZWFtIGlzIGRlZGljYXRlZCB0byBicmluZ2luZyB5b3VyIHZpc2lvbiB0byBsaWZlLlxuICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgV2UgdW5kZXJzdGFuZCB0aGUgc2lnbmlmaWNhbnQgaW52ZXN0bWVudCBpbnZvbHZlZCBpbiBidWlsZGluZyBhIG5ldyBob21lLiBPdXIgZ29hbCBpcyB0byBtYWtlIHRoZSBwcm9jZXNzIHNtb290aCBhbmQgc3RyZXNzLWZyZWUuIFRoZSBTYXJrIENvbnN0cnVjdGlvbiB0ZWFtIGlzIGF2YWlsYWJsZSB0byBhbnN3ZXIgeW91ciBxdWVzdGlvbnMgYW5kIGFkZHJlc3MgY29uY2VybnMgdGhyb3VnaG91dCB0aGUgY29uc3RydWN0aW9uIHByb2Nlc3MuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItdG9wIG10LTQgcHQtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGctNFwiPlxuICAgICAgICAgICAgICAgIHsjZWFjaCBzZXJ2aWNlRGV0YWlscy5mZWF0dXJlcyBhcyBmZWF0dXJlIChmZWF0dXJlKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZC1mbGV4IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kZWxheT1cIjAuMXNcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2sgZmEtMnggdGV4dC1wcmltYXJ5IGZsZXgtc2hyaW5rLTAgbWUtM1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTBcIj57ZmVhdHVyZX08L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPEN0YS8+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBOEZvQyxHQUFPLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUYzQixvQkFHTSxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7R0FGSixvQkFBaUUsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUE7O0dBQ2pFLG9CQUErQixDQUFBLEdBQUEsRUFBQSxFQUFB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
