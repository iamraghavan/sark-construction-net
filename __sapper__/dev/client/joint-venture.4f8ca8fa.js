import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, B as validate_each_argument, E as validate_each_keys, v as validate_slots, e as element, t as text, a as space, F as create_component, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, H as claim_component, j as attr_dev, m as add_location, k as src_url_equal, l as set_style, n as insert_hydration_dev, o as append_hydration_dev, I as mount_component, O as set_data_dev, J as update_keyed_each, K as transition_in, L as transition_out, M as destroy_component, N as destroy_block } from './client.f3442238.js';
import { C as Cta } from './Cta.c07b185e.js';
import 'jquery';

/* src/routes/joint-venture.svelte generated by Svelte v3.59.2 */
const file = "src/routes/joint-venture.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (63:16) {#each serviceDetails.features as feature (feature)}
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
			add_location(i, file, 64, 18, 3198);
			attr_dev(h6, "class", "mb-0");
			add_location(h6, file, 65, 18, 3282);
			attr_dev(div, "class", "col-sm-6 d-flex wow fadeIn");
			attr_dev(div, "data-wow-delay", "0.1s");
			add_location(div, file, 63, 16, 3117);
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
		source: "(63:16) {#each serviceDetails.features as feature (feature)}",
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
			t4 = text("At Sark Constructions, our joint venture projects are a testament to collaborative success. We believe in building together for a shared vision of excellence. Our experienced joint venture team is committed to delivering projects that exceed expectations through the integration of expertise and resources.");
			t5 = space();
			p2 = element("p");
			t6 = text("Whether it's a large-scale development or a specialized project, we work closely with our partners to achieve on-time project completion. Our commitment to excellence and cost-effective solutions makes Sark Constructions the preferred choice for joint ventures.");
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
			t9 = text("Sark Constructions specializes in joint ventures that bring visions to life. Our services encompass collaborative design and planning, ensuring shared goals and successful project outcomes.");
			t10 = space();
			h61 = element("h6");
			t11 = text("Partner with us for a joint venture experience that integrates expertise, resources, and a commitment to excellence. Explore the benefits of building together with Sark Constructions.");
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
			t4 = claim_text(p1_nodes, "At Sark Constructions, our joint venture projects are a testament to collaborative success. We believe in building together for a shared vision of excellence. Our experienced joint venture team is committed to delivering projects that exceed expectations through the integration of expertise and resources.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "Whether it's a large-scale development or a specialized project, we work closely with our partners to achieve on-time project completion. Our commitment to excellence and cost-effective solutions makes Sark Constructions the preferred choice for joint ventures.");
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
			t9 = claim_text(h60_nodes, "Sark Constructions specializes in joint ventures that bring visions to life. Our services encompass collaborative design and planning, ensuring shared goals and successful project outcomes.");
			h60_nodes.forEach(detach_dev);
			t10 = claim_space(div12_nodes);
			h61 = claim_element(div12_nodes, "H6", { class: true });
			var h61_nodes = children(h61);
			t11 = claim_text(h61_nodes, "Partner with us for a joint venture experience that integrates expertise, resources, and a commitment to excellence. Explore the benefits of building together with Sark Constructions.");
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
			add_location(h1, file, 23, 14, 884);
			attr_dev(div0, "class", "border-start border-5 border-primary ps-4 mb-5");
			add_location(div0, file, 22, 12, 809);
			add_location(p0, file, 28, 16, 1047);
			add_location(p1, file, 29, 16, 1099);
			add_location(p2, file, 32, 16, 1465);
			attr_dev(div1, "class", "col-md-12");
			add_location(div1, file, 27, 14, 1007);
			attr_dev(div2, "class", "row");
			add_location(div2, file, 26, 12, 975);
			attr_dev(div3, "class", "content-inner-page");
			add_location(div3, file, 21, 10, 764);
			attr_dev(div4, "class", "col-xl-12 col-lg-12");
			add_location(div4, file, 20, 8, 720);
			attr_dev(div5, "class", "row g-5");
			add_location(div5, file, 19, 6, 690);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 18, 4, 660);
			attr_dev(div7, "class", "container-xxl py-5");
			add_location(div7, file, 17, 2, 623);
			attr_dev(img, "class", "position-absolute w-100 h-100");
			if (!src_url_equal(img.src, img_src_value = "img/joint-venture.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			set_style(img, "object-fit", "cover");
			add_location(img, file, 49, 12, 2231);
			attr_dev(div8, "class", "position-relative overflow-hidden ps-5 pt-5 h-100");
			set_style(div8, "min-height", "400px");
			add_location(div8, file, 47, 10, 2045);
			attr_dev(div9, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div9, "data-wow-delay", "0.1s");
			add_location(div9, file, 46, 8, 1977);
			add_location(h60, file, 54, 12, 2476);
			attr_dev(h61, "class", "mb-4");
			add_location(h61, file, 57, 12, 2715);
			attr_dev(div10, "class", "row g-4");
			add_location(div10, file, 61, 14, 3010);
			attr_dev(div11, "class", "border-top mt-4 pt-4");
			add_location(div11, file, 60, 12, 2961);
			attr_dev(div12, "class", "h-100");
			add_location(div12, file, 53, 10, 2444);
			attr_dev(div13, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div13, "data-wow-delay", "0.5s");
			add_location(div13, file, 52, 8, 2376);
			attr_dev(div14, "class", "row g-5");
			add_location(div14, file, 45, 6, 1947);
			attr_dev(div15, "class", "container");
			add_location(div15, file, 44, 4, 1917);
			attr_dev(div16, "class", "container-xxl py-5");
			add_location(div16, file, 43, 2, 1880);
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
	validate_slots('Joint_venture', slots, []);

	let { serviceDetails = {
		title: "Joint Venture - Sark Constructions",
		description: "Building Together for a Shared Vision of Excellence",
		features: [
			"Collaborative design and planning for shared goals",
			"Experienced joint venture team committed to excellence",
			"Integration of expertise and resources for premium quality projects",
			"Dedicated to on-time project completion through mutual efforts",
			"Cost-effective solutions achieved through shared resources"
		]
	} } = $$props;

	const writable_props = ['serviceDetails'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Joint_venture> was created with unknown prop '${key}'`);
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

class Joint_venture extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { serviceDetails: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Joint_venture",
			options,
			id: create_fragment.name
		});
	}

	get serviceDetails() {
		throw new Error("<Joint_venture>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set serviceDetails(value) {
		throw new Error("<Joint_venture>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Joint_venture as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbnQtdmVudHVyZS40ZjhjYThmYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9qb2ludC12ZW50dXJlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgQ3RhIGZyb20gXCIuLi9jb21wb25lbnRzL0N0YS5zdmVsdGVcIjtcblxuICAgIGV4cG9ydCBsZXQgc2VydmljZURldGFpbHMgPSB7XG4gICAgICB0aXRsZTogXCJKb2ludCBWZW50dXJlIC0gU2FyayBDb25zdHJ1Y3Rpb25zXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJCdWlsZGluZyBUb2dldGhlciBmb3IgYSBTaGFyZWQgVmlzaW9uIG9mIEV4Y2VsbGVuY2VcIixcbiAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgIFwiQ29sbGFib3JhdGl2ZSBkZXNpZ24gYW5kIHBsYW5uaW5nIGZvciBzaGFyZWQgZ29hbHNcIixcbiAgICAgICAgXCJFeHBlcmllbmNlZCBqb2ludCB2ZW50dXJlIHRlYW0gY29tbWl0dGVkIHRvIGV4Y2VsbGVuY2VcIixcbiAgICAgICAgXCJJbnRlZ3JhdGlvbiBvZiBleHBlcnRpc2UgYW5kIHJlc291cmNlcyBmb3IgcHJlbWl1bSBxdWFsaXR5IHByb2plY3RzXCIsXG4gICAgICAgIFwiRGVkaWNhdGVkIHRvIG9uLXRpbWUgcHJvamVjdCBjb21wbGV0aW9uIHRocm91Z2ggbXV0dWFsIGVmZm9ydHNcIixcbiAgICAgICAgXCJDb3N0LWVmZmVjdGl2ZSBzb2x1dGlvbnMgYWNoaWV2ZWQgdGhyb3VnaCBzaGFyZWQgcmVzb3VyY2VzXCIsXG4gICAgICBdXG4gICAgfVxuICA8L3NjcmlwdD5cbiAgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIteHhsIHB5LTVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGctNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWlubmVyLXBhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItc3RhcnQgYm9yZGVyLTUgYm9yZGVyLXByaW1hcnkgcHMtNCBtYi01XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cImRpc3BsYXktNiBtYi0wXCI+e3NlcnZpY2VEZXRhaWxzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgIDxwPntzZXJ2aWNlRGV0YWlscy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBBdCBTYXJrIENvbnN0cnVjdGlvbnMsIG91ciBqb2ludCB2ZW50dXJlIHByb2plY3RzIGFyZSBhIHRlc3RhbWVudCB0byBjb2xsYWJvcmF0aXZlIHN1Y2Nlc3MuIFdlIGJlbGlldmUgaW4gYnVpbGRpbmcgdG9nZXRoZXIgZm9yIGEgc2hhcmVkIHZpc2lvbiBvZiBleGNlbGxlbmNlLiBPdXIgZXhwZXJpZW5jZWQgam9pbnQgdmVudHVyZSB0ZWFtIGlzIGNvbW1pdHRlZCB0byBkZWxpdmVyaW5nIHByb2plY3RzIHRoYXQgZXhjZWVkIGV4cGVjdGF0aW9ucyB0aHJvdWdoIHRoZSBpbnRlZ3JhdGlvbiBvZiBleHBlcnRpc2UgYW5kIHJlc291cmNlcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBXaGV0aGVyIGl0J3MgYSBsYXJnZS1zY2FsZSBkZXZlbG9wbWVudCBvciBhIHNwZWNpYWxpemVkIHByb2plY3QsIHdlIHdvcmsgY2xvc2VseSB3aXRoIG91ciBwYXJ0bmVycyB0byBhY2hpZXZlIG9uLXRpbWUgcHJvamVjdCBjb21wbGV0aW9uLiBPdXIgY29tbWl0bWVudCB0byBleGNlbGxlbmNlIGFuZCBjb3N0LWVmZmVjdGl2ZSBzb2x1dGlvbnMgbWFrZXMgU2FyayBDb25zdHJ1Y3Rpb25zIHRoZSBwcmVmZXJyZWQgY2hvaWNlIGZvciBqb2ludCB2ZW50dXJlcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14eGwgcHktNVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy01XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIjAuMXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHBzLTUgcHQtNSBoLTEwMFwiIHN0eWxlPVwibWluLWhlaWdodDogNDAwcHhcIj5cbiAgICAgICAgICAgIDwhLS0gWW91IGNhbiByZXBsYWNlIHRoZSBpbWFnZSBzb3VyY2Ugd2l0aCB5b3VyIGpvaW50IHZlbnR1cmUgaW1hZ2UgLS0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdy0xMDAgaC0xMDBcIiBzcmM9XCJpbWcvam9pbnQtdmVudHVyZS5qcGdcIiBhbHQ9XCJcIiBzdHlsZT1cIm9iamVjdC1maXQ6IGNvdmVyXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTYgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImgtMTAwXCI+XG4gICAgICAgICAgICA8aDY+XG4gICAgICAgICAgICAgIFNhcmsgQ29uc3RydWN0aW9ucyBzcGVjaWFsaXplcyBpbiBqb2ludCB2ZW50dXJlcyB0aGF0IGJyaW5nIHZpc2lvbnMgdG8gbGlmZS4gT3VyIHNlcnZpY2VzIGVuY29tcGFzcyBjb2xsYWJvcmF0aXZlIGRlc2lnbiBhbmQgcGxhbm5pbmcsIGVuc3VyaW5nIHNoYXJlZCBnb2FscyBhbmQgc3VjY2Vzc2Z1bCBwcm9qZWN0IG91dGNvbWVzLlxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgUGFydG5lciB3aXRoIHVzIGZvciBhIGpvaW50IHZlbnR1cmUgZXhwZXJpZW5jZSB0aGF0IGludGVncmF0ZXMgZXhwZXJ0aXNlLCByZXNvdXJjZXMsIGFuZCBhIGNvbW1pdG1lbnQgdG8gZXhjZWxsZW5jZS4gRXhwbG9yZSB0aGUgYmVuZWZpdHMgb2YgYnVpbGRpbmcgdG9nZXRoZXIgd2l0aCBTYXJrIENvbnN0cnVjdGlvbnMuXG4gICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlci10b3AgbXQtNCBwdC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy00XCI+XG4gICAgICAgICAgICAgICAgeyNlYWNoIHNlcnZpY2VEZXRhaWxzLmZlYXR1cmVzIGFzIGZlYXR1cmUgKGZlYXR1cmUpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBkLWZsZXggd293IGZhZGVJblwiIGRhdGEtd293LWRlbGF5PVwiMC4xc1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjayBmYS0yeCB0ZXh0LXByaW1hcnkgZmxleC1zaHJpbmstMCBtZS0zXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibWItMFwiPntmZWF0dXJlfTwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8Q3RhLz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFpRW9DLEdBQU8sQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBRjNCLG9CQUdNLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTtHQUZKLG9CQUFpRSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQTs7R0FDakUsb0JBQStCLENBQUEsR0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBOzs7Ozs7NEVBQWIsR0FBTyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLFlBQUEsQ0FBQSxFQUFBLEVBQUEsUUFBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUNELENBQUEsSUFBQSxRQUFBLHNCQUFBLEdBQWMsSUFBQyxLQUFLLEdBQUEsRUFBQSxDQUFBOzs7Ozs7QUFLMUMsQ0FBQSxJQUFBLFFBQUEsc0JBQUEsR0FBYyxJQUFDLFdBQVcsR0FBQSxFQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0N2QixDQUFBLElBQUEsVUFBQSxzQkFBQSxHQUFjLElBQUMsUUFBUSxDQUFBOztvQ0FBYSxHQUFPLENBQUEsQ0FBQSxDQUFBLENBQUE7OztnQ0FBaEQsTUFBSSxFQUFBLENBQUEsSUFBQSxDQUFBLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFqQ0gsb1RBRUgsQ0FBQSxDQUFBOzs7YUFDRyx1UUFFSCxDQUFBLENBQUE7Ozs7Ozs7Ozs7OzthQW9CQSwrTEFFSixDQUFBLENBQUE7Oztj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
