import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, B as validate_each_argument, E as validate_each_keys, v as validate_slots, e as element, t as text, a as space, F as create_component, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, H as claim_component, j as attr_dev, m as add_location, k as src_url_equal, l as set_style, n as insert_hydration_dev, o as append_hydration_dev, I as mount_component, O as set_data_dev, J as update_keyed_each, K as transition_in, L as transition_out, M as destroy_component, N as destroy_block } from './client.8d5c0ce9.js';
import { C as Cta } from './Cta.5668c573.js';
import 'jquery';

/* src/routes/budgeting-and-costing.svelte generated by Svelte v3.59.2 */
const file = "src/routes/budgeting-and-costing.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (90:16) {#each serviceDetails.features as feature (feature)}
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
			add_location(i, file, 94, 18, 3666);
			attr_dev(h6, "class", "mb-0");
			add_location(h6, file, 95, 18, 3750);
			attr_dev(div, "class", "col-sm-6 d-flex wow fadeIn");
			attr_dev(div, "data-wow-delay", "0.1s");
			add_location(div, file, 90, 16, 3532);
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
		source: "(90:16) {#each serviceDetails.features as feature (feature)}",
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
	let h6;
	let t9;
	let t10;
	let div11;
	let div10;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t11;
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
			t4 = text("At Sark Construction, we understand the importance of budgeting\n                  and costing in your construction projects. We provide\n                  transparent and affordable solutions to ensure that your\n                  investment is utilized efficiently. Our commitment is to deliver\n                  value without compromising on quality.");
			t5 = space();
			p2 = element("p");
			t6 = text("Whether you're planning a new construction, remodeling, or\n                  renovation, our detailed budgeting takes into account your\n                  project's unique requirements. We believe in transparency,\n                  providing you with clear costing and avoiding any hidden fees.\n                  Sark Construction is your reliable partner for budgeting and\n                  costing in construction.");
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
			h6 = element("h6");
			t9 = text("Sark Construction specializes in providing detailed\n              budgeting and transparent costing for your construction\n              projects. We prioritize affordability without\n              compromising on quality, ensuring that your investment\n              yields the best results.");
			t10 = space();
			div11 = element("div");
			div10 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t11 = space();
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
			t4 = claim_text(p1_nodes, "At Sark Construction, we understand the importance of budgeting\n                  and costing in your construction projects. We provide\n                  transparent and affordable solutions to ensure that your\n                  investment is utilized efficiently. Our commitment is to deliver\n                  value without compromising on quality.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "Whether you're planning a new construction, remodeling, or\n                  renovation, our detailed budgeting takes into account your\n                  project's unique requirements. We believe in transparency,\n                  providing you with clear costing and avoiding any hidden fees.\n                  Sark Construction is your reliable partner for budgeting and\n                  costing in construction.");
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
			div8 = claim_element(div9_nodes, "DIV", { class: true });
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
			h6 = claim_element(div12_nodes, "H6", {});
			var h6_nodes = children(h6);
			t9 = claim_text(h6_nodes, "Sark Construction specializes in providing detailed\n              budgeting and transparent costing for your construction\n              projects. We prioritize affordability without\n              compromising on quality, ensuring that your investment\n              yields the best results.");
			h6_nodes.forEach(detach_dev);
			t10 = claim_space(div12_nodes);
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
			t11 = claim_space(nodes);
			claim_component(cta.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "display-6 mb-0");
			add_location(h1, file, 23, 14, 858);
			attr_dev(div0, "class", "border-start border-5 border-primary ps-4 mb-5");
			add_location(div0, file, 22, 12, 783);
			add_location(p0, file, 28, 16, 1019);
			add_location(p1, file, 29, 16, 1071);
			add_location(p2, file, 36, 16, 1481);
			attr_dev(div1, "class", "col-md-12");
			add_location(div1, file, 27, 14, 979);
			attr_dev(div2, "class", "row");
			add_location(div2, file, 26, 12, 947);
			attr_dev(div3, "class", "content-inner-page");
			add_location(div3, file, 21, 10, 738);
			attr_dev(div4, "class", "col-xl-12 col-lg-12");
			add_location(div4, file, 20, 8, 694);
			attr_dev(div5, "class", "row g-5");
			add_location(div5, file, 19, 6, 664);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 18, 4, 634);
			attr_dev(div7, "class", "container-xxl py-5");
			add_location(div7, file, 17, 2, 597);
			attr_dev(img, "class", "w-100");
			if (!src_url_equal(img.src, img_src_value = "img/buget.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			set_style(img, "object-fit", "cover");
			set_style(img, "min-height", "400px");
			add_location(img, file, 74, 16, 2793);
			attr_dev(div8, "class", "position-relative overflow-hidden");
			add_location(div8, file, 72, 14, 2658);
			attr_dev(div9, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div9, "data-wow-delay", "0.1s");
			add_location(div9, file, 71, 10, 2586);
			add_location(h6, file, 80, 12, 3037);
			attr_dev(div10, "class", "row g-4");
			add_location(div10, file, 88, 14, 3425);
			attr_dev(div11, "class", "border-top mt-4 pt-4");
			add_location(div11, file, 87, 12, 3376);
			attr_dev(div12, "class", "h-100");
			add_location(div12, file, 79, 10, 3005);
			attr_dev(div13, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div13, "data-wow-delay", "0.5s");
			add_location(div13, file, 78, 8, 2937);
			attr_dev(div14, "class", "row g-5");
			add_location(div14, file, 69, 6, 2553);
			attr_dev(div15, "class", "container");
			add_location(div15, file, 68, 4, 2523);
			attr_dev(div16, "class", "container-xxl py-5");
			add_location(div16, file, 67, 2, 2486);
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
			append_hydration_dev(div12, h6);
			append_hydration_dev(h6, t9);
			append_hydration_dev(div12, t10);
			append_hydration_dev(div12, div11);
			append_hydration_dev(div11, div10);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div10, null);
				}
			}

			insert_hydration_dev(target, t11, anchor);
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

			if (detaching) detach_dev(t11);
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
	validate_slots('Budgeting_and_costing', slots, []);

	let { serviceDetails = {
		title: "Budgeting and Costing - Sark Construction",
		description: "Providing Transparent and Affordable Solutions for Your Construction Projects",
		features: [
			"Detailed budgeting tailored to your project requirements",
			"Transparent costing with no hidden fees",
			"Affordable options without compromising quality",
			"Professional guidance to optimize costs",
			"Committed to delivering value for your investment"
		]
	} } = $$props;

	const writable_props = ['serviceDetails'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Budgeting_and_costing> was created with unknown prop '${key}'`);
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

class Budgeting_and_costing extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { serviceDetails: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Budgeting_and_costing",
			options,
			id: create_fragment.name
		});
	}

	get serviceDetails() {
		throw new Error("<Budgeting_and_costing>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set serviceDetails(value) {
		throw new Error("<Budgeting_and_costing>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Budgeting_and_costing as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0aW5nLWFuZC1jb3N0aW5nLmExMWU4Y2JjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2J1ZGdldGluZy1hbmQtY29zdGluZy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IEN0YSBmcm9tIFwiLi4vY29tcG9uZW50cy9DdGEuc3ZlbHRlXCI7XG5cbiAgICBleHBvcnQgbGV0IHNlcnZpY2VEZXRhaWxzID0ge1xuICAgICAgdGl0bGU6IFwiQnVkZ2V0aW5nIGFuZCBDb3N0aW5nIC0gU2FyayBDb25zdHJ1Y3Rpb25cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIlByb3ZpZGluZyBUcmFuc3BhcmVudCBhbmQgQWZmb3JkYWJsZSBTb2x1dGlvbnMgZm9yIFlvdXIgQ29uc3RydWN0aW9uIFByb2plY3RzXCIsXG4gICAgICBmZWF0dXJlczogW1xuICAgICAgICBcIkRldGFpbGVkIGJ1ZGdldGluZyB0YWlsb3JlZCB0byB5b3VyIHByb2plY3QgcmVxdWlyZW1lbnRzXCIsXG4gICAgICAgIFwiVHJhbnNwYXJlbnQgY29zdGluZyB3aXRoIG5vIGhpZGRlbiBmZWVzXCIsXG4gICAgICAgIFwiQWZmb3JkYWJsZSBvcHRpb25zIHdpdGhvdXQgY29tcHJvbWlzaW5nIHF1YWxpdHlcIixcbiAgICAgICAgXCJQcm9mZXNzaW9uYWwgZ3VpZGFuY2UgdG8gb3B0aW1pemUgY29zdHNcIixcbiAgICAgICAgXCJDb21taXR0ZWQgdG8gZGVsaXZlcmluZyB2YWx1ZSBmb3IgeW91ciBpbnZlc3RtZW50XCIsXG4gICAgICBdLFxuICAgIH07XG4gIDwvc2NyaXB0PlxuICBcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14eGwgcHktNVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy01XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMTIgY29sLWxnLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtaW5uZXItcGFnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlci1zdGFydCBib3JkZXItNSBib3JkZXItcHJpbWFyeSBwcy00IG1iLTVcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZGlzcGxheS02IG1iLTBcIj57c2VydmljZURldGFpbHMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgIDxwPntzZXJ2aWNlRGV0YWlscy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBBdCBTYXJrIENvbnN0cnVjdGlvbiwgd2UgdW5kZXJzdGFuZCB0aGUgaW1wb3J0YW5jZSBvZiBidWRnZXRpbmdcbiAgICAgICAgICAgICAgICAgIGFuZCBjb3N0aW5nIGluIHlvdXIgY29uc3RydWN0aW9uIHByb2plY3RzLiBXZSBwcm92aWRlXG4gICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCBhbmQgYWZmb3JkYWJsZSBzb2x1dGlvbnMgdG8gZW5zdXJlIHRoYXQgeW91clxuICAgICAgICAgICAgICAgICAgaW52ZXN0bWVudCBpcyB1dGlsaXplZCBlZmZpY2llbnRseS4gT3VyIGNvbW1pdG1lbnQgaXMgdG8gZGVsaXZlclxuICAgICAgICAgICAgICAgICAgdmFsdWUgd2l0aG91dCBjb21wcm9taXNpbmcgb24gcXVhbGl0eS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBXaGV0aGVyIHlvdSdyZSBwbGFubmluZyBhIG5ldyBjb25zdHJ1Y3Rpb24sIHJlbW9kZWxpbmcsIG9yXG4gICAgICAgICAgICAgICAgICByZW5vdmF0aW9uLCBvdXIgZGV0YWlsZWQgYnVkZ2V0aW5nIHRha2VzIGludG8gYWNjb3VudCB5b3VyXG4gICAgICAgICAgICAgICAgICBwcm9qZWN0J3MgdW5pcXVlIHJlcXVpcmVtZW50cy4gV2UgYmVsaWV2ZSBpbiB0cmFuc3BhcmVuY3ksXG4gICAgICAgICAgICAgICAgICBwcm92aWRpbmcgeW91IHdpdGggY2xlYXIgY29zdGluZyBhbmQgYXZvaWRpbmcgYW55IGhpZGRlbiBmZWVzLlxuICAgICAgICAgICAgICAgICAgU2FyayBDb25zdHJ1Y3Rpb24gaXMgeW91ciByZWxpYWJsZSBwYXJ0bmVyIGZvciBidWRnZXRpbmcgYW5kXG4gICAgICAgICAgICAgICAgICBjb3N0aW5nIGluIGNvbnN0cnVjdGlvbi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgICAgPCEtLSBJbWFnZSBTZWN0aW9uIChpZiBuZWVkZWQpIC0tPlxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCJ5b3VyLWltYWdlLXBhdGguanBnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbnN0cnVjdGlvbiBCdWRnZXRpbmcgYW5kIENvc3RpbmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+IC0tPlxuICBcbiAgICAgICAgICAgIDwhLS0gRmVhdHVyZXMgU2VjdGlvbiAtLT5cbiAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSBDb250ZW50IGlubmVyIGVuZCAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXh4bCBweS01XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBnLTVcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIjAuMXNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDwhLS0gUmVwbGFjZSB0aGUgaW1hZ2UgVVJMIHdpdGggeW91ciBkZXNpcmVkIGltYWdlIC0tPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LTEwMFwiIHNyYz1cImltZy9idWdldC5qcGdcIiBhbHQ9XCJcIiBzdHlsZT1cIm9iamVjdC1maXQ6IGNvdmVyOyBtaW4taGVpZ2h0OiA0MDBweDtcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC0xMDBcIj5cbiAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgU2FyayBDb25zdHJ1Y3Rpb24gc3BlY2lhbGl6ZXMgaW4gcHJvdmlkaW5nIGRldGFpbGVkXG4gICAgICAgICAgICAgIGJ1ZGdldGluZyBhbmQgdHJhbnNwYXJlbnQgY29zdGluZyBmb3IgeW91ciBjb25zdHJ1Y3Rpb25cbiAgICAgICAgICAgICAgcHJvamVjdHMuIFdlIHByaW9yaXRpemUgYWZmb3JkYWJpbGl0eSB3aXRob3V0XG4gICAgICAgICAgICAgIGNvbXByb21pc2luZyBvbiBxdWFsaXR5LCBlbnN1cmluZyB0aGF0IHlvdXIgaW52ZXN0bWVudFxuICAgICAgICAgICAgICB5aWVsZHMgdGhlIGJlc3QgcmVzdWx0cy5cbiAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyLXRvcCBtdC00IHB0LTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBnLTRcIj5cbiAgICAgICAgICAgICAgICB7I2VhY2ggc2VydmljZURldGFpbHMuZmVhdHVyZXMgYXMgZmVhdHVyZSAoZmVhdHVyZSl9XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtc20tNiBkLWZsZXggd293IGZhZGVJblwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT1cIjAuMXNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2sgZmEtMnggdGV4dC1wcmltYXJ5IGZsZXgtc2hyaW5rLTAgbWUtM1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTBcIj57ZmVhdHVyZX08L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48Q3RhLz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkErRm9DLEdBQU8sQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBTDNCLG9CQU1NLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTtHQUZKLG9CQUFpRSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQTs7R0FDakUsb0JBQStC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
