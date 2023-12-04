import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, B as validate_each_argument, E as validate_each_keys, v as validate_slots, e as element, t as text, a as space, F as create_component, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, H as claim_component, j as attr_dev, m as add_location, k as src_url_equal, l as set_style, n as insert_hydration_dev, o as append_hydration_dev, I as mount_component, O as set_data_dev, J as update_keyed_each, K as transition_in, L as transition_out, M as destroy_component, N as destroy_block } from './client.7a681a28.js';
import { C as Cta } from './Cta.49cb3586.js';
import 'jquery';

/* src/routes/govt-plan-approvals.svelte generated by Svelte v3.59.2 */
const file = "src/routes/govt-plan-approvals.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (72:26) {#each serviceDetails.features as feature (feature)}
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
			add_location(i, file, 73, 28, 3686);
			attr_dev(h6, "class", "mb-0");
			add_location(h6, file, 74, 28, 3780);
			attr_dev(div, "class", "col-sm-6 d-flex wow fadeIn");
			attr_dev(div, "data-wow-delay", "0.1s");
			add_location(div, file, 72, 26, 3595);
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
		source: "(72:26) {#each serviceDetails.features as feature (feature)}",
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
			t4 = text("At Sark Construction, we specialize in navigating the complex\n                  landscape of government plan approvals. Our experienced team\n                  provides expert assistance to ensure a seamless process,\n                  allowing you to focus on your construction project without the\n                  hassle of dealing with regulatory requirements.");
			t5 = space();
			p2 = element("p");
			t6 = text("With a comprehensive understanding of local building regulations,\n                  we efficiently guide you through the approval process. Our\n                  commitment to transparent communication and dedicated support\n                  sets us apart, ensuring that your project receives timely\n                  approvals without unnecessary delays.");
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
			t9 = text("Sark Construction streamlines the process of obtaining\n                        government plan approvals. Whether you're planning a\n                        residential or commercial project, our team ensures that\n                        you meet all regulatory requirements, making your\n                        construction journey smoother.");
			t10 = space();
			h61 = element("h6");
			t11 = text("We work closely with local authorities, providing you with\n                        insights and guidance to address specific regulatory\n                        concerns. Trust Sark Construction for a hassle-free\n                        experience in obtaining government plan approvals.");
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
			t4 = claim_text(p1_nodes, "At Sark Construction, we specialize in navigating the complex\n                  landscape of government plan approvals. Our experienced team\n                  provides expert assistance to ensure a seamless process,\n                  allowing you to focus on your construction project without the\n                  hassle of dealing with regulatory requirements.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "With a comprehensive understanding of local building regulations,\n                  we efficiently guide you through the approval process. Our\n                  commitment to transparent communication and dedicated support\n                  sets us apart, ensuring that your project receives timely\n                  approvals without unnecessary delays.");
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
			t9 = claim_text(h60_nodes, "Sark Construction streamlines the process of obtaining\n                        government plan approvals. Whether you're planning a\n                        residential or commercial project, our team ensures that\n                        you meet all regulatory requirements, making your\n                        construction journey smoother.");
			h60_nodes.forEach(detach_dev);
			t10 = claim_space(div7_nodes);
			h61 = claim_element(div7_nodes, "H6", { class: true });
			var h61_nodes = children(h61);
			t11 = claim_text(h61_nodes, "We work closely with local authorities, providing you with\n                        insights and guidance to address specific regulatory\n                        concerns. Trust Sark Construction for a hassle-free\n                        experience in obtaining government plan approvals.");
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
			add_location(h1, file, 23, 14, 908);
			attr_dev(div0, "class", "border-start border-5 border-primary ps-4 mb-5");
			add_location(div0, file, 22, 12, 833);
			add_location(p0, file, 28, 16, 1069);
			add_location(p1, file, 29, 16, 1121);
			add_location(p2, file, 36, 16, 1543);
			attr_dev(div1, "class", "col-md-12");
			add_location(div1, file, 27, 14, 1029);
			attr_dev(div2, "class", "row");
			add_location(div2, file, 26, 12, 997);
			attr_dev(img, "class", "position-absolute w-100 h-100");
			if (!src_url_equal(img.src, img_src_value = "img/govt-approvals.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			set_style(img, "object-fit", "cover");
			add_location(img, file, 51, 22, 2313);
			attr_dev(div3, "class", "position-relative overflow-hidden ps-5 pt-5 h-100");
			set_style(div3, "min-height", "400px");
			add_location(div3, file, 50, 20, 2201);
			attr_dev(div4, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div4, "data-wow-delay", "0.1s");
			add_location(div4, file, 49, 18, 2123);
			add_location(h60, file, 56, 22, 2609);
			attr_dev(h61, "class", "mb-4");
			add_location(h61, file, 63, 22, 3030);
			attr_dev(div5, "class", "row g-4");
			add_location(div5, file, 70, 24, 3468);
			attr_dev(div6, "class", "border-top mt-4 pt-4");
			add_location(div6, file, 69, 22, 3409);
			attr_dev(div7, "class", "h-100");
			add_location(div7, file, 55, 20, 2567);
			attr_dev(div8, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div8, "data-wow-delay", "0.5s");
			add_location(div8, file, 54, 18, 2489);
			attr_dev(div9, "class", "row g-5");
			add_location(div9, file, 48, 16, 2083);
			attr_dev(div10, "class", "container");
			add_location(div10, file, 47, 14, 2043);
			attr_dev(div11, "class", "container-xxl py-5");
			add_location(div11, file, 46, 12, 1996);
			attr_dev(div12, "class", "content-inner-page");
			add_location(div12, file, 21, 10, 788);
			attr_dev(div13, "class", "col-xl-12 col-lg-12");
			add_location(div13, file, 20, 8, 744);
			attr_dev(div14, "class", "row g-5");
			add_location(div14, file, 19, 6, 714);
			attr_dev(div15, "class", "container");
			add_location(div15, file, 18, 4, 684);
			attr_dev(div16, "class", "container-xxl py-5");
			add_location(div16, file, 17, 2, 647);
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
	validate_slots('Govt_plan_approvals', slots, []);

	let { serviceDetails = {
		title: "Govt Plan Approvals - Sark Construction",
		description: "Navigating the Regulatory Landscape for Seamless Government Plan Approvals",
		features: [
			"Expert assistance in obtaining government plan approvals",
			"Comprehensive understanding of local building regulations",
			"Efficient navigation through the regulatory approval process",
			"Transparent communication and guidance at every stage",
			"Dedicated support to ensure timely and hassle-free approvals"
		]
	} } = $$props;

	const writable_props = ['serviceDetails'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Govt_plan_approvals> was created with unknown prop '${key}'`);
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

class Govt_plan_approvals extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { serviceDetails: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Govt_plan_approvals",
			options,
			id: create_fragment.name
		});
	}

	get serviceDetails() {
		throw new Error("<Govt_plan_approvals>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set serviceDetails(value) {
		throw new Error("<Govt_plan_approvals>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Govt_plan_approvals as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ292dC1wbGFuLWFwcHJvdmFscy42ZTRiNzgzNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9nb3Z0LXBsYW4tYXBwcm92YWxzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgQ3RhIGZyb20gXCIuLi9jb21wb25lbnRzL0N0YS5zdmVsdGVcIjtcblxuICAgIGV4cG9ydCBsZXQgc2VydmljZURldGFpbHMgPSB7XG4gICAgICB0aXRsZTogXCJHb3Z0IFBsYW4gQXBwcm92YWxzIC0gU2FyayBDb25zdHJ1Y3Rpb25cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIk5hdmlnYXRpbmcgdGhlIFJlZ3VsYXRvcnkgTGFuZHNjYXBlIGZvciBTZWFtbGVzcyBHb3Zlcm5tZW50IFBsYW4gQXBwcm92YWxzXCIsXG4gICAgICBmZWF0dXJlczogW1xuICAgICAgICBcIkV4cGVydCBhc3Npc3RhbmNlIGluIG9idGFpbmluZyBnb3Zlcm5tZW50IHBsYW4gYXBwcm92YWxzXCIsXG4gICAgICAgIFwiQ29tcHJlaGVuc2l2ZSB1bmRlcnN0YW5kaW5nIG9mIGxvY2FsIGJ1aWxkaW5nIHJlZ3VsYXRpb25zXCIsXG4gICAgICAgIFwiRWZmaWNpZW50IG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgcmVndWxhdG9yeSBhcHByb3ZhbCBwcm9jZXNzXCIsXG4gICAgICAgIFwiVHJhbnNwYXJlbnQgY29tbXVuaWNhdGlvbiBhbmQgZ3VpZGFuY2UgYXQgZXZlcnkgc3RhZ2VcIixcbiAgICAgICAgXCJEZWRpY2F0ZWQgc3VwcG9ydCB0byBlbnN1cmUgdGltZWx5IGFuZCBoYXNzbGUtZnJlZSBhcHByb3ZhbHNcIixcbiAgICAgIF1cbiAgICB9O1xuICA8L3NjcmlwdD5cbiAgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIteHhsIHB5LTVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGctNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWlubmVyLXBhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItc3RhcnQgYm9yZGVyLTUgYm9yZGVyLXByaW1hcnkgcHMtNCBtYi01XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cImRpc3BsYXktNiBtYi0wXCI+e3NlcnZpY2VEZXRhaWxzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICA8cD57c2VydmljZURldGFpbHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgQXQgU2FyayBDb25zdHJ1Y3Rpb24sIHdlIHNwZWNpYWxpemUgaW4gbmF2aWdhdGluZyB0aGUgY29tcGxleFxuICAgICAgICAgICAgICAgICAgbGFuZHNjYXBlIG9mIGdvdmVybm1lbnQgcGxhbiBhcHByb3ZhbHMuIE91ciBleHBlcmllbmNlZCB0ZWFtXG4gICAgICAgICAgICAgICAgICBwcm92aWRlcyBleHBlcnQgYXNzaXN0YW5jZSB0byBlbnN1cmUgYSBzZWFtbGVzcyBwcm9jZXNzLFxuICAgICAgICAgICAgICAgICAgYWxsb3dpbmcgeW91IHRvIGZvY3VzIG9uIHlvdXIgY29uc3RydWN0aW9uIHByb2plY3Qgd2l0aG91dCB0aGVcbiAgICAgICAgICAgICAgICAgIGhhc3NsZSBvZiBkZWFsaW5nIHdpdGggcmVndWxhdG9yeSByZXF1aXJlbWVudHMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgV2l0aCBhIGNvbXByZWhlbnNpdmUgdW5kZXJzdGFuZGluZyBvZiBsb2NhbCBidWlsZGluZyByZWd1bGF0aW9ucyxcbiAgICAgICAgICAgICAgICAgIHdlIGVmZmljaWVudGx5IGd1aWRlIHlvdSB0aHJvdWdoIHRoZSBhcHByb3ZhbCBwcm9jZXNzLiBPdXJcbiAgICAgICAgICAgICAgICAgIGNvbW1pdG1lbnQgdG8gdHJhbnNwYXJlbnQgY29tbXVuaWNhdGlvbiBhbmQgZGVkaWNhdGVkIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAgIHNldHMgdXMgYXBhcnQsIGVuc3VyaW5nIHRoYXQgeW91ciBwcm9qZWN0IHJlY2VpdmVzIHRpbWVseVxuICAgICAgICAgICAgICAgICAgYXBwcm92YWxzIHdpdGhvdXQgdW5uZWNlc3NhcnkgZGVsYXlzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXh4bCBweS01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGctNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWRlbGF5PVwiMC4xc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHBzLTUgcHQtNSBoLTEwMFwiIHN0eWxlPVwibWluLWhlaWdodDogNDAwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdy0xMDAgaC0xMDBcIiBzcmM9XCJpbWcvZ292dC1hcHByb3ZhbHMuanBnXCIgYWx0PVwiXCIgc3R5bGU9XCJvYmplY3QtZml0OiBjb3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDY+XG4gICAgICAgICAgICAgICAgICAgICAgICBTYXJrIENvbnN0cnVjdGlvbiBzdHJlYW1saW5lcyB0aGUgcHJvY2VzcyBvZiBvYnRhaW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvdmVybm1lbnQgcGxhbiBhcHByb3ZhbHMuIFdoZXRoZXIgeW91J3JlIHBsYW5uaW5nIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2lkZW50aWFsIG9yIGNvbW1lcmNpYWwgcHJvamVjdCwgb3VyIHRlYW0gZW5zdXJlcyB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICB5b3UgbWVldCBhbGwgcmVndWxhdG9yeSByZXF1aXJlbWVudHMsIG1ha2luZyB5b3VyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rpb24gam91cm5leSBzbW9vdGhlci5cbiAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIHdvcmsgY2xvc2VseSB3aXRoIGxvY2FsIGF1dGhvcml0aWVzLCBwcm92aWRpbmcgeW91IHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2lnaHRzIGFuZCBndWlkYW5jZSB0byBhZGRyZXNzIHNwZWNpZmljIHJlZ3VsYXRvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmNlcm5zLiBUcnVzdCBTYXJrIENvbnN0cnVjdGlvbiBmb3IgYSBoYXNzbGUtZnJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZSBpbiBvYnRhaW5pbmcgZ292ZXJubWVudCBwbGFuIGFwcHJvdmFscy5cbiAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItdG9wIG10LTQgcHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBnLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyNlYWNoIHNlcnZpY2VEZXRhaWxzLmZlYXR1cmVzIGFzIGZlYXR1cmUgKGZlYXR1cmUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZC1mbGV4IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kZWxheT1cIjAuMXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrIGZhLTJ4IHRleHQtcHJpbWFyeSBmbGV4LXNocmluay0wIG1lLTNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibWItMFwiPntmZWF0dXJlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIENvbnRlbnQgaW5uZXIgZW5kIC0tPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgXG5cbiAgPEN0YS8+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7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
