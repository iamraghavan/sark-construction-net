import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, B as validate_each_argument, E as validate_each_keys, v as validate_slots, e as element, t as text, a as space, F as create_component, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, H as claim_component, j as attr_dev, m as add_location, k as src_url_equal, l as set_style, n as insert_hydration_dev, o as append_hydration_dev, I as mount_component, O as set_data_dev, J as update_keyed_each, K as transition_in, L as transition_out, M as destroy_component, N as destroy_block } from './client.df04a182.js';
import { C as Cta } from './Cta.ea6c1661.js';
import 'jquery';

/* src/routes/structural-design-and-detailing.svelte generated by Svelte v3.59.2 */
const file = "src/routes/structural-design-and-detailing.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (71:26) {#each serviceDetails.features as feature (feature)}
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
			add_location(i, file, 72, 28, 3643);
			attr_dev(h6, "class", "mb-0");
			add_location(h6, file, 73, 28, 3737);
			attr_dev(div, "class", "col-sm-6 d-flex wow fadeIn");
			attr_dev(div, "data-wow-delay", "0.1s");
			add_location(div, file, 71, 26, 3552);
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
		source: "(71:26) {#each serviceDetails.features as feature (feature)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div16;
	let div15;
	let div14;
	let div13;
	let div12;
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
	let div11;
	let div10;
	let div9;
	let div4;
	let div3;
	let img;
	let img_src_value;
	let t8;
	let div8;
	let div7;
	let h60;
	let t9;
	let t10;
	let h61;
	let t11;
	let t12;
	let div6;
	let div5;
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
			div15 = element("div");
			div14 = element("div");
			div13 = element("div");
			div12 = element("div");
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
			t4 = text("At Sark Constructions, we bring innovation to structural design\n                  and detailing, ensuring strong foundations and detailed\n                  structures for your projects. Our experienced team combines\n                  expertise in structural analysis with a commitment to delivering\n                  solutions that go beyond expectations.");
			t5 = space();
			p2 = element("p");
			t6 = text("Whether it's creating customized structural designs or providing\n                  detailed analysis and detailing, we strive for excellence. Our\n                  focus on high-quality materials, precision in detailing, and\n                  adherence to timelines makes us a trusted partner for your\n                  construction needs.");
			t7 = space();
			div11 = element("div");
			div10 = element("div");
			div9 = element("div");
			div4 = element("div");
			div3 = element("div");
			img = element("img");
			t8 = space();
			div8 = element("div");
			div7 = element("div");
			h60 = element("h6");
			t9 = text("At Sark Constructions, we specialize in providing innovative\n                        solutions for structural design and detailing. Whether it's\n                        designing strong foundations or ensuring detailed structures,\n                        we bring a wealth of experience to every project.");
			t10 = space();
			h61 = element("h6");
			t11 = text("Our team is dedicated to creating customized structural\n                        designs tailored to your project requirements. We combine\n                        advanced analysis with a keen eye for detailing to deliver\n                        robust and reliable structures.");
			t12 = space();
			div6 = element("div");
			div5 = element("div");

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
			div15 = claim_element(div16_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			div14 = claim_element(div15_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div0 = claim_element(div12_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, t0_value);
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div12_nodes);
			div2 = claim_element(div12_nodes, "DIV", { class: true });
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
			t4 = claim_text(p1_nodes, "At Sark Constructions, we bring innovation to structural design\n                  and detailing, ensuring strong foundations and detailed\n                  structures for your projects. Our experienced team combines\n                  expertise in structural analysis with a commitment to delivering\n                  solutions that go beyond expectations.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "Whether it's creating customized structural designs or providing\n                  detailed analysis and detailing, we strive for excellence. Our\n                  focus on high-quality materials, precision in detailing, and\n                  adherence to timelines makes us a trusted partner for your\n                  construction needs.");
			p2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t7 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div4 = claim_element(div9_nodes, "DIV", { class: true, "data-wow-delay": true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true, style: true });
			var div3_nodes = children(div3);

			img = claim_element(div3_nodes, "IMG", {
				class: true,
				src: true,
				alt: true,
				style: true
			});

			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t8 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true, "data-wow-delay": true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			h60 = claim_element(div7_nodes, "H6", {});
			var h60_nodes = children(h60);
			t9 = claim_text(h60_nodes, "At Sark Constructions, we specialize in providing innovative\n                        solutions for structural design and detailing. Whether it's\n                        designing strong foundations or ensuring detailed structures,\n                        we bring a wealth of experience to every project.");
			h60_nodes.forEach(detach_dev);
			t10 = claim_space(div7_nodes);
			h61 = claim_element(div7_nodes, "H6", { class: true });
			var h61_nodes = children(h61);
			t11 = claim_text(h61_nodes, "Our team is dedicated to creating customized structural\n                        designs tailored to your project requirements. We combine\n                        advanced analysis with a keen eye for detailing to deliver\n                        robust and reliable structures.");
			h61_nodes.forEach(detach_dev);
			t12 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div5_nodes);
			}

			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
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
			add_location(h1, file, 23, 14, 917);
			attr_dev(div0, "class", "border-start border-5 border-primary ps-4 mb-5");
			add_location(div0, file, 22, 12, 842);
			add_location(p0, file, 28, 16, 1078);
			add_location(p1, file, 29, 16, 1130);
			add_location(p2, file, 36, 16, 1545);
			attr_dev(div1, "class", "col-md-12");
			add_location(div1, file, 27, 14, 1038);
			attr_dev(div2, "class", "row");
			add_location(div2, file, 26, 12, 1006);
			attr_dev(img, "class", "position-absolute w-100 h-100");
			if (!src_url_equal(img.src, img_src_value = "img/structural-design-and-detailing.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			set_style(img, "object-fit", "cover");
			add_location(img, file, 51, 22, 2300);
			attr_dev(div3, "class", "position-relative overflow-hidden ps-5 pt-5 h-100");
			set_style(div3, "min-height", "400px");
			add_location(div3, file, 50, 20, 2188);
			attr_dev(div4, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div4, "data-wow-delay", "0.1s");
			add_location(div4, file, 49, 18, 2110);
			add_location(h60, file, 56, 22, 2613);
			attr_dev(h61, "class", "mb-4");
			add_location(h61, file, 62, 22, 2997);
			attr_dev(div5, "class", "row g-4");
			add_location(div5, file, 69, 24, 3425);
			attr_dev(div6, "class", "border-top mt-4 pt-4");
			add_location(div6, file, 68, 22, 3366);
			attr_dev(div7, "class", "h-100");
			add_location(div7, file, 55, 20, 2571);
			attr_dev(div8, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div8, "data-wow-delay", "0.5s");
			add_location(div8, file, 54, 18, 2493);
			attr_dev(div9, "class", "row g-5");
			add_location(div9, file, 48, 16, 2070);
			attr_dev(div10, "class", "container");
			add_location(div10, file, 47, 14, 2030);
			attr_dev(div11, "class", "container-xxl py-5");
			add_location(div11, file, 46, 12, 1983);
			attr_dev(div12, "class", "content-inner-page");
			add_location(div12, file, 21, 10, 797);
			attr_dev(div13, "class", "col-xl-12 col-lg-12");
			add_location(div13, file, 20, 8, 753);
			attr_dev(div14, "class", "row g-5");
			add_location(div14, file, 19, 6, 723);
			attr_dev(div15, "class", "container");
			add_location(div15, file, 18, 4, 693);
			attr_dev(div16, "class", "container-xxl py-5");
			add_location(div16, file, 17, 2, 656);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div16, anchor);
			append_hydration_dev(div16, div15);
			append_hydration_dev(div15, div14);
			append_hydration_dev(div14, div13);
			append_hydration_dev(div13, div12);
			append_hydration_dev(div12, div0);
			append_hydration_dev(div0, h1);
			append_hydration_dev(h1, t0);
			append_hydration_dev(div12, t1);
			append_hydration_dev(div12, div2);
			append_hydration_dev(div2, div1);
			append_hydration_dev(div1, p0);
			append_hydration_dev(p0, t2);
			append_hydration_dev(div1, t3);
			append_hydration_dev(div1, p1);
			append_hydration_dev(p1, t4);
			append_hydration_dev(div1, t5);
			append_hydration_dev(div1, p2);
			append_hydration_dev(p2, t6);
			append_hydration_dev(div12, t7);
			append_hydration_dev(div12, div11);
			append_hydration_dev(div11, div10);
			append_hydration_dev(div10, div9);
			append_hydration_dev(div9, div4);
			append_hydration_dev(div4, div3);
			append_hydration_dev(div3, img);
			append_hydration_dev(div9, t8);
			append_hydration_dev(div9, div8);
			append_hydration_dev(div8, div7);
			append_hydration_dev(div7, h60);
			append_hydration_dev(h60, t9);
			append_hydration_dev(div7, t10);
			append_hydration_dev(div7, h61);
			append_hydration_dev(h61, t11);
			append_hydration_dev(div7, t12);
			append_hydration_dev(div7, div6);
			append_hydration_dev(div6, div5);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div5, null);
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
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div5, destroy_block, create_each_block, null, get_each_context);
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
	validate_slots('Structural_design_and_detailing', slots, []);

	let { serviceDetails = {
		title: "Structural Design And Detailing - Sark Constructions",
		description: "Innovative Solutions for Strong Foundations and Detailed Structures",
		features: [
			"Customized structural design tailored to your project requirements",
			"Experienced team with expertise in detailed structural analysis",
			"High-quality materials and precise detailing for robust structures",
			"Commitment to on-time project completion",
			"Cost-effective solutions without compromising quality"
		]
	} } = $$props;

	const writable_props = ['serviceDetails'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Structural_design_and_detailing> was created with unknown prop '${key}'`);
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

class Structural_design_and_detailing extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { serviceDetails: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Structural_design_and_detailing",
			options,
			id: create_fragment.name
		});
	}

	get serviceDetails() {
		throw new Error("<Structural_design_and_detailing>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set serviceDetails(value) {
		throw new Error("<Structural_design_and_detailing>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Structural_design_and_detailing as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJhbC1kZXNpZ24tYW5kLWRldGFpbGluZy5mYWRiZGU4Yi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9zdHJ1Y3R1cmFsLWRlc2lnbi1hbmQtZGV0YWlsaW5nLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgQ3RhIGZyb20gXCIuLi9jb21wb25lbnRzL0N0YS5zdmVsdGVcIjtcblxuICAgIGV4cG9ydCBsZXQgc2VydmljZURldGFpbHMgPSB7XG4gICAgICB0aXRsZTogXCJTdHJ1Y3R1cmFsIERlc2lnbiBBbmQgRGV0YWlsaW5nIC0gU2FyayBDb25zdHJ1Y3Rpb25zXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJJbm5vdmF0aXZlIFNvbHV0aW9ucyBmb3IgU3Ryb25nIEZvdW5kYXRpb25zIGFuZCBEZXRhaWxlZCBTdHJ1Y3R1cmVzXCIsXG4gICAgICBmZWF0dXJlczogW1xuICAgICAgICBcIkN1c3RvbWl6ZWQgc3RydWN0dXJhbCBkZXNpZ24gdGFpbG9yZWQgdG8geW91ciBwcm9qZWN0IHJlcXVpcmVtZW50c1wiLFxuICAgICAgICBcIkV4cGVyaWVuY2VkIHRlYW0gd2l0aCBleHBlcnRpc2UgaW4gZGV0YWlsZWQgc3RydWN0dXJhbCBhbmFseXNpc1wiLFxuICAgICAgICBcIkhpZ2gtcXVhbGl0eSBtYXRlcmlhbHMgYW5kIHByZWNpc2UgZGV0YWlsaW5nIGZvciByb2J1c3Qgc3RydWN0dXJlc1wiLFxuICAgICAgICBcIkNvbW1pdG1lbnQgdG8gb24tdGltZSBwcm9qZWN0IGNvbXBsZXRpb25cIixcbiAgICAgICAgXCJDb3N0LWVmZmVjdGl2ZSBzb2x1dGlvbnMgd2l0aG91dCBjb21wcm9taXNpbmcgcXVhbGl0eVwiLFxuICAgICAgXSxcbiAgICB9O1xuICA8L3NjcmlwdD5cbiAgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIteHhsIHB5LTVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGctNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWlubmVyLXBhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItc3RhcnQgYm9yZGVyLTUgYm9yZGVyLXByaW1hcnkgcHMtNCBtYi01XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cImRpc3BsYXktNiBtYi0wXCI+e3NlcnZpY2VEZXRhaWxzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICA8cD57c2VydmljZURldGFpbHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgQXQgU2FyayBDb25zdHJ1Y3Rpb25zLCB3ZSBicmluZyBpbm5vdmF0aW9uIHRvIHN0cnVjdHVyYWwgZGVzaWduXG4gICAgICAgICAgICAgICAgICBhbmQgZGV0YWlsaW5nLCBlbnN1cmluZyBzdHJvbmcgZm91bmRhdGlvbnMgYW5kIGRldGFpbGVkXG4gICAgICAgICAgICAgICAgICBzdHJ1Y3R1cmVzIGZvciB5b3VyIHByb2plY3RzLiBPdXIgZXhwZXJpZW5jZWQgdGVhbSBjb21iaW5lc1xuICAgICAgICAgICAgICAgICAgZXhwZXJ0aXNlIGluIHN0cnVjdHVyYWwgYW5hbHlzaXMgd2l0aCBhIGNvbW1pdG1lbnQgdG8gZGVsaXZlcmluZ1xuICAgICAgICAgICAgICAgICAgc29sdXRpb25zIHRoYXQgZ28gYmV5b25kIGV4cGVjdGF0aW9ucy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBXaGV0aGVyIGl0J3MgY3JlYXRpbmcgY3VzdG9taXplZCBzdHJ1Y3R1cmFsIGRlc2lnbnMgb3IgcHJvdmlkaW5nXG4gICAgICAgICAgICAgICAgICBkZXRhaWxlZCBhbmFseXNpcyBhbmQgZGV0YWlsaW5nLCB3ZSBzdHJpdmUgZm9yIGV4Y2VsbGVuY2UuIE91clxuICAgICAgICAgICAgICAgICAgZm9jdXMgb24gaGlnaC1xdWFsaXR5IG1hdGVyaWFscywgcHJlY2lzaW9uIGluIGRldGFpbGluZywgYW5kXG4gICAgICAgICAgICAgICAgICBhZGhlcmVuY2UgdG8gdGltZWxpbmVzIG1ha2VzIHVzIGEgdHJ1c3RlZCBwYXJ0bmVyIGZvciB5b3VyXG4gICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rpb24gbmVlZHMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIteHhsIHB5LTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy01XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTYgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIwLjFzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcHMtNSBwdC01IGgtMTAwXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiA0MDBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBoLTEwMFwiIHNyYz1cImltZy9zdHJ1Y3R1cmFsLWRlc2lnbi1hbmQtZGV0YWlsaW5nLmpwZ1wiIGFsdD1cIlwiIHN0eWxlPVwib2JqZWN0LWZpdDogY292ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImgtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgICAgICAgICAgQXQgU2FyayBDb25zdHJ1Y3Rpb25zLCB3ZSBzcGVjaWFsaXplIGluIHByb3ZpZGluZyBpbm5vdmF0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2x1dGlvbnMgZm9yIHN0cnVjdHVyYWwgZGVzaWduIGFuZCBkZXRhaWxpbmcuIFdoZXRoZXIgaXQnc1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzaWduaW5nIHN0cm9uZyBmb3VuZGF0aW9ucyBvciBlbnN1cmluZyBkZXRhaWxlZCBzdHJ1Y3R1cmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2UgYnJpbmcgYSB3ZWFsdGggb2YgZXhwZXJpZW5jZSB0byBldmVyeSBwcm9qZWN0LlxuICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgT3VyIHRlYW0gaXMgZGVkaWNhdGVkIHRvIGNyZWF0aW5nIGN1c3RvbWl6ZWQgc3RydWN0dXJhbFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzaWducyB0YWlsb3JlZCB0byB5b3VyIHByb2plY3QgcmVxdWlyZW1lbnRzLiBXZSBjb21iaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlZCBhbmFseXNpcyB3aXRoIGEga2VlbiBleWUgZm9yIGRldGFpbGluZyB0byBkZWxpdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2J1c3QgYW5kIHJlbGlhYmxlIHN0cnVjdHVyZXMuXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyLXRvcCBtdC00IHB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsjZWFjaCBzZXJ2aWNlRGV0YWlscy5mZWF0dXJlcyBhcyBmZWF0dXJlIChmZWF0dXJlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGQtZmxleCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZGVsYXk9XCIwLjFzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjayBmYS0yeCB0ZXh0LXByaW1hcnkgZmxleC1zaHJpbmstMCBtZS0zXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTBcIj57ZmVhdHVyZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSBDb250ZW50IGlubmVyIGVuZCAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIFxuICA8Q3RhLz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkF5RThD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
