import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, B as validate_each_argument, E as validate_each_keys, v as validate_slots, e as element, t as text, a as space, F as create_component, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, H as claim_component, j as attr_dev, m as add_location, k as src_url_equal, l as set_style, n as insert_hydration_dev, o as append_hydration_dev, I as mount_component, O as set_data_dev, J as update_keyed_each, K as transition_in, L as transition_out, M as destroy_component, N as destroy_block } from './client.84daabe3.js';
import { C as Cta } from './Cta.49827a5e.js';
import 'jquery';

/* src/routes/commercial-construction.svelte generated by Svelte v3.59.2 */
const file = "src/routes/commercial-construction.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (87:18) {#each serviceDetails.features as feature (feature)}
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
			add_location(i, file, 88, 20, 3811);
			attr_dev(h6, "class", "mb-0");
			add_location(h6, file, 89, 20, 3897);
			attr_dev(div, "class", "col-sm-6 d-flex wow fadeIn");
			attr_dev(div, "data-wow-delay", "0.1s");
			add_location(div, file, 87, 18, 3728);
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
		source: "(87:18) {#each serviceDetails.features as feature (feature)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div16;
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
	let div15;
	let div14;
	let div13;
	let div8;
	let div7;
	let img;
	let img_src_value;
	let t8;
	let div12;
	let div11;
	let h60;
	let t9;
	let t10;
	let h61;
	let t11;
	let t12;
	let div10;
	let div9;
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
			div16 = element("div");
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
			t4 = text("At Sark Construction, we specialize in commercial construction,\n                  creating spaces that foster success for businesses. Whether you\n                  need a new commercial building, a remodel, or a custom-designed\n                  space, our team is dedicated to bringing your vision to reality.");
			t5 = space();
			p2 = element("p");
			t6 = text("With a focus on quality materials, precise craftsmanship, and a\n                  client-centric approach, we stand out as a reliable partner for\n                  your commercial construction needs. Our attention to detail,\n                  transparent communication, and adherence to timelines make us\n                  the preferred choice for businesses in Chennai.");
			t7 = space();
			div15 = element("div");
			div14 = element("div");
			div13 = element("div");
			div8 = element("div");
			div7 = element("div");
			img = element("img");
			t8 = space();
			div12 = element("div");
			div11 = element("div");
			h60 = element("h6");
			t9 = text("At Sark Construction, we understand the importance of commercial\n                spaces for businesses. Our services include new commercial\n                construction, remodeling, renovation, and custom-designed\n                structures. Whether you're starting a new venture or expanding\n                your business, our team is committed to creating spaces that\n                contribute to your success.");
			t10 = space();
			h61 = element("h6");
			t11 = text("We recognize that commercial construction is an investment in your\n                business's future. Our goal is to make the process efficient and\n                stress-free. The Sark Construction team is here to address your\n                questions and ensure the success of your commercial construction\n                project.");
			t12 = space();
			div10 = element("div");
			div9 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t13 = space();
			create_component(cta.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div16 = claim_element(nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			div6 = claim_element(div16_nodes, "DIV", { class: true });
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
			t4 = claim_text(p1_nodes, "At Sark Construction, we specialize in commercial construction,\n                  creating spaces that foster success for businesses. Whether you\n                  need a new commercial building, a remodel, or a custom-designed\n                  space, our team is dedicated to bringing your vision to reality.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "With a focus on quality materials, precise craftsmanship, and a\n                  client-centric approach, we stand out as a reliable partner for\n                  your commercial construction needs. Our attention to detail,\n                  transparent communication, and adherence to timelines make us\n                  the preferred choice for businesses in Chennai.");
			p2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t7 = claim_space(div16_nodes);
			div15 = claim_element(div16_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			div14 = claim_element(div15_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div8 = claim_element(div13_nodes, "DIV", { class: true, "data-wow-delay": true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true, style: true });
			var div7_nodes = children(div7);

			img = claim_element(div7_nodes, "IMG", {
				class: true,
				src: true,
				alt: true,
				style: true
			});

			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			t8 = claim_space(div13_nodes);
			div12 = claim_element(div13_nodes, "DIV", { class: true, "data-wow-delay": true });
			var div12_nodes = children(div12);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			h60 = claim_element(div11_nodes, "H6", {});
			var h60_nodes = children(h60);
			t9 = claim_text(h60_nodes, "At Sark Construction, we understand the importance of commercial\n                spaces for businesses. Our services include new commercial\n                construction, remodeling, renovation, and custom-designed\n                structures. Whether you're starting a new venture or expanding\n                your business, our team is committed to creating spaces that\n                contribute to your success.");
			h60_nodes.forEach(detach_dev);
			t10 = claim_space(div11_nodes);
			h61 = claim_element(div11_nodes, "H6", { class: true });
			var h61_nodes = children(h61);
			t11 = claim_text(h61_nodes, "We recognize that commercial construction is an investment in your\n                business's future. Our goal is to make the process efficient and\n                stress-free. The Sark Construction team is here to address your\n                questions and ensure the success of your commercial construction\n                project.");
			h61_nodes.forEach(detach_dev);
			t12 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div9_nodes);
			}

			div9_nodes.forEach(detach_dev);
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
			add_location(h1, file, 23, 14, 910);
			attr_dev(div0, "class", "border-start border-5 border-primary ps-4 mb-5");
			add_location(div0, file, 22, 12, 835);
			add_location(p0, file, 28, 16, 1071);
			add_location(p1, file, 29, 16, 1123);
			add_location(p2, file, 35, 16, 1493);
			attr_dev(div1, "class", "col-md-12");
			add_location(div1, file, 27, 14, 1031);
			attr_dev(div2, "class", "row");
			add_location(div2, file, 26, 12, 999);
			attr_dev(div3, "class", "content-inner-page");
			add_location(div3, file, 21, 10, 790);
			attr_dev(div4, "class", "col-xl-12 col-lg-12");
			add_location(div4, file, 20, 8, 746);
			attr_dev(div5, "class", "row g-5");
			add_location(div5, file, 19, 6, 716);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 18, 4, 686);
			attr_dev(img, "class", "position-absolute w-100 h-100");
			if (!src_url_equal(img.src, img_src_value = "img/about.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			set_style(img, "object-fit", "cover");
			add_location(img, file, 59, 14, 2368);
			attr_dev(div7, "class", "position-relative overflow-hidden ps-5 pt-5 h-100");
			set_style(div7, "min-height", "400px");
			add_location(div7, file, 55, 12, 2223);
			attr_dev(div8, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div8, "data-wow-delay", "0.1s");
			add_location(div8, file, 54, 10, 2153);
			add_location(h60, file, 69, 14, 2695);
			attr_dev(h61, "class", "mb-4");
			add_location(h61, file, 77, 14, 3164);
			attr_dev(div9, "class", "row g-4");
			add_location(div9, file, 85, 16, 3617);
			attr_dev(div10, "class", "border-top mt-4 pt-4");
			add_location(div10, file, 84, 14, 3566);
			attr_dev(div11, "class", "h-100");
			add_location(div11, file, 68, 12, 2661);
			attr_dev(div12, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div12, "data-wow-delay", "0.5s");
			add_location(div12, file, 67, 10, 2591);
			attr_dev(div13, "class", "row g-5");
			add_location(div13, file, 53, 8, 2121);
			attr_dev(div14, "class", "container");
			add_location(div14, file, 52, 6, 2089);
			attr_dev(div15, "class", "container-xxl py-5");
			add_location(div15, file, 51, 4, 2050);
			attr_dev(div16, "class", "container-xxl py-5");
			add_location(div16, file, 17, 2, 649);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div16, anchor);
			append_hydration_dev(div16, div6);
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
			append_hydration_dev(div16, t7);
			append_hydration_dev(div16, div15);
			append_hydration_dev(div15, div14);
			append_hydration_dev(div14, div13);
			append_hydration_dev(div13, div8);
			append_hydration_dev(div8, div7);
			append_hydration_dev(div7, img);
			append_hydration_dev(div13, t8);
			append_hydration_dev(div13, div12);
			append_hydration_dev(div12, div11);
			append_hydration_dev(div11, h60);
			append_hydration_dev(h60, t9);
			append_hydration_dev(div11, t10);
			append_hydration_dev(div11, h61);
			append_hydration_dev(h61, t11);
			append_hydration_dev(div11, t12);
			append_hydration_dev(div11, div10);
			append_hydration_dev(div10, div9);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div9, null);
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
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div9, destroy_block, create_each_block, null, get_each_context);
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
	validate_slots('Commercial_construction', slots, []);

	let { serviceDetails = {
		title: "Commercial Construction - Sark Construction",
		description: "Building Success with Quality Commercial Construction Services",
		features: [
			"Customized design and planning tailored to your business needs",
			"Experienced construction team dedicated to excellence",
			"High-quality materials and craftsmanship for lasting structures",
			"Commitment to on-time project completion for your business success",
			"Cost-effective options without compromising quality"
		]
	} } = $$props;

	const writable_props = ['serviceDetails'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Commercial_construction> was created with unknown prop '${key}'`);
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

class Commercial_construction extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { serviceDetails: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Commercial_construction",
			options,
			id: create_fragment.name
		});
	}

	get serviceDetails() {
		throw new Error("<Commercial_construction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set serviceDetails(value) {
		throw new Error("<Commercial_construction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Commercial_construction as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVyY2lhbC1jb25zdHJ1Y3Rpb24uZDUzZTU1MjQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29tbWVyY2lhbC1jb25zdHJ1Y3Rpb24uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBDdGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3RhLnN2ZWx0ZVwiO1xuXG4gICAgZXhwb3J0IGxldCBzZXJ2aWNlRGV0YWlscyA9IHtcbiAgICAgIHRpdGxlOiBcIkNvbW1lcmNpYWwgQ29uc3RydWN0aW9uIC0gU2FyayBDb25zdHJ1Y3Rpb25cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkJ1aWxkaW5nIFN1Y2Nlc3Mgd2l0aCBRdWFsaXR5IENvbW1lcmNpYWwgQ29uc3RydWN0aW9uIFNlcnZpY2VzXCIsXG4gICAgICBmZWF0dXJlczogW1xuICAgICAgICBcIkN1c3RvbWl6ZWQgZGVzaWduIGFuZCBwbGFubmluZyB0YWlsb3JlZCB0byB5b3VyIGJ1c2luZXNzIG5lZWRzXCIsXG4gICAgICAgIFwiRXhwZXJpZW5jZWQgY29uc3RydWN0aW9uIHRlYW0gZGVkaWNhdGVkIHRvIGV4Y2VsbGVuY2VcIixcbiAgICAgICAgXCJIaWdoLXF1YWxpdHkgbWF0ZXJpYWxzIGFuZCBjcmFmdHNtYW5zaGlwIGZvciBsYXN0aW5nIHN0cnVjdHVyZXNcIixcbiAgICAgICAgXCJDb21taXRtZW50IHRvIG9uLXRpbWUgcHJvamVjdCBjb21wbGV0aW9uIGZvciB5b3VyIGJ1c2luZXNzIHN1Y2Nlc3NcIixcbiAgICAgICAgXCJDb3N0LWVmZmVjdGl2ZSBvcHRpb25zIHdpdGhvdXQgY29tcHJvbWlzaW5nIHF1YWxpdHlcIixcbiAgICAgIF0sXG4gICAgfTtcbiAgPC9zY3JpcHQ+XG4gIFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXh4bCBweS01XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBnLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC0xMiBjb2wtbGctMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1pbm5lci1wYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyLXN0YXJ0IGJvcmRlci01IGJvcmRlci1wcmltYXJ5IHBzLTQgbWItNVwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJkaXNwbGF5LTYgbWItMFwiPntzZXJ2aWNlRGV0YWlscy50aXRsZX08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgPHA+e3NlcnZpY2VEZXRhaWxzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEF0IFNhcmsgQ29uc3RydWN0aW9uLCB3ZSBzcGVjaWFsaXplIGluIGNvbW1lcmNpYWwgY29uc3RydWN0aW9uLFxuICAgICAgICAgICAgICAgICAgY3JlYXRpbmcgc3BhY2VzIHRoYXQgZm9zdGVyIHN1Y2Nlc3MgZm9yIGJ1c2luZXNzZXMuIFdoZXRoZXIgeW91XG4gICAgICAgICAgICAgICAgICBuZWVkIGEgbmV3IGNvbW1lcmNpYWwgYnVpbGRpbmcsIGEgcmVtb2RlbCwgb3IgYSBjdXN0b20tZGVzaWduZWRcbiAgICAgICAgICAgICAgICAgIHNwYWNlLCBvdXIgdGVhbSBpcyBkZWRpY2F0ZWQgdG8gYnJpbmdpbmcgeW91ciB2aXNpb24gdG8gcmVhbGl0eS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBXaXRoIGEgZm9jdXMgb24gcXVhbGl0eSBtYXRlcmlhbHMsIHByZWNpc2UgY3JhZnRzbWFuc2hpcCwgYW5kIGFcbiAgICAgICAgICAgICAgICAgIGNsaWVudC1jZW50cmljIGFwcHJvYWNoLCB3ZSBzdGFuZCBvdXQgYXMgYSByZWxpYWJsZSBwYXJ0bmVyIGZvclxuICAgICAgICAgICAgICAgICAgeW91ciBjb21tZXJjaWFsIGNvbnN0cnVjdGlvbiBuZWVkcy4gT3VyIGF0dGVudGlvbiB0byBkZXRhaWwsXG4gICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCBjb21tdW5pY2F0aW9uLCBhbmQgYWRoZXJlbmNlIHRvIHRpbWVsaW5lcyBtYWtlIHVzXG4gICAgICAgICAgICAgICAgICB0aGUgcHJlZmVycmVkIGNob2ljZSBmb3IgYnVzaW5lc3NlcyBpbiBDaGVubmFpLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSBDb250ZW50IGlubmVyIGVuZCAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14eGwgcHktNVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGctNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIjAuMXNcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcHMtNSBwdC01IGgtMTAwXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJtaW4taGVpZ2h0OiA0MDBweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHctMTAwIGgtMTAwXCJcbiAgICAgICAgICAgICAgICBzcmM9XCJpbWcvYWJvdXQuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwib2JqZWN0LWZpdDogY292ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImgtMTAwXCI+XG4gICAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgICBBdCBTYXJrIENvbnN0cnVjdGlvbiwgd2UgdW5kZXJzdGFuZCB0aGUgaW1wb3J0YW5jZSBvZiBjb21tZXJjaWFsXG4gICAgICAgICAgICAgICAgc3BhY2VzIGZvciBidXNpbmVzc2VzLiBPdXIgc2VydmljZXMgaW5jbHVkZSBuZXcgY29tbWVyY2lhbFxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdGlvbiwgcmVtb2RlbGluZywgcmVub3ZhdGlvbiwgYW5kIGN1c3RvbS1kZXNpZ25lZFxuICAgICAgICAgICAgICAgIHN0cnVjdHVyZXMuIFdoZXRoZXIgeW91J3JlIHN0YXJ0aW5nIGEgbmV3IHZlbnR1cmUgb3IgZXhwYW5kaW5nXG4gICAgICAgICAgICAgICAgeW91ciBidXNpbmVzcywgb3VyIHRlYW0gaXMgY29tbWl0dGVkIHRvIGNyZWF0aW5nIHNwYWNlcyB0aGF0XG4gICAgICAgICAgICAgICAgY29udHJpYnV0ZSB0byB5b3VyIHN1Y2Nlc3MuXG4gICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICBXZSByZWNvZ25pemUgdGhhdCBjb21tZXJjaWFsIGNvbnN0cnVjdGlvbiBpcyBhbiBpbnZlc3RtZW50IGluIHlvdXJcbiAgICAgICAgICAgICAgICBidXNpbmVzcydzIGZ1dHVyZS4gT3VyIGdvYWwgaXMgdG8gbWFrZSB0aGUgcHJvY2VzcyBlZmZpY2llbnQgYW5kXG4gICAgICAgICAgICAgICAgc3RyZXNzLWZyZWUuIFRoZSBTYXJrIENvbnN0cnVjdGlvbiB0ZWFtIGlzIGhlcmUgdG8gYWRkcmVzcyB5b3VyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zIGFuZCBlbnN1cmUgdGhlIHN1Y2Nlc3Mgb2YgeW91ciBjb21tZXJjaWFsIGNvbnN0cnVjdGlvblxuICAgICAgICAgICAgICAgIHByb2plY3QuXG4gICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItdG9wIG10LTQgcHQtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy00XCI+XG4gICAgICAgICAgICAgICAgICB7I2VhY2ggc2VydmljZURldGFpbHMuZmVhdHVyZXMgYXMgZmVhdHVyZSAoZmVhdHVyZSl9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZC1mbGV4IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kZWxheT1cIjAuMXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjayBmYS0yeCB0ZXh0LXByaW1hcnkgZmxleC1zaHJpbmstMCBtZS0zXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJtYi0wXCI+e2ZlYXR1cmV9PC9oNj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPEN0YS8+XG4gICAgXG4gICAgIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBeUZzQyxH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
