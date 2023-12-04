import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, B as validate_each_argument, E as validate_each_keys, v as validate_slots, e as element, t as text, a as space, F as create_component, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, H as claim_component, j as attr_dev, m as add_location, k as src_url_equal, l as set_style, n as insert_hydration_dev, o as append_hydration_dev, I as mount_component, O as set_data_dev, J as update_keyed_each, K as transition_in, L as transition_out, M as destroy_component, N as destroy_block } from './client.7c44cb0a.js';
import { C as Cta } from './Cta.5a7ca5b8.js';
import 'jquery';

/* src/routes/construction-consulting-services.svelte generated by Svelte v3.59.2 */
const file = "src/routes/construction-consulting-services.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (62:18) {#each serviceDetails.features as feature (feature)}
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
			add_location(i, file, 63, 20, 3455);
			attr_dev(h6, "class", "mb-0");
			add_location(h6, file, 64, 20, 3541);
			attr_dev(div, "class", "col-sm-6 d-flex wow fadeIn");
			attr_dev(div, "data-wow-delay", "0.1s");
			add_location(div, file, 62, 18, 3372);
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
		source: "(62:18) {#each serviceDetails.features as feature (feature)}",
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
			t4 = text("At Sark Construction, our Construction Consulting Services bring expertise and insights to your construction projects. We provide comprehensive consultation, leveraging our experienced team's in-depth industry knowledge. From strategic planning to project management, we ensure quality assurance and cost-effective solutions.");
			t5 = space();
			p2 = element("p");
			t6 = text("We prioritize transparent communication and adhere to timelines, making Sark Construction the trusted choice for construction consulting services. Whether you're initiating a new project, seeking strategic advice, or ensuring efficient project execution, our consulting services are tailored to meet your needs.");
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
			t9 = text("Sark Construction specializes in providing Construction Consulting Services to bring expertise and guidance to your construction projects. Our services include strategic planning, project management, and cost-effective solutions to ensure the success of your endeavors.");
			t10 = space();
			h61 = element("h6");
			t11 = text("We take pride in our experienced team, transparent communication, and commitment to timelines. Explore our Construction Consulting Services for a seamless construction experience with Sark Construction.");
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
			t4 = claim_text(p1_nodes, "At Sark Construction, our Construction Consulting Services bring expertise and insights to your construction projects. We provide comprehensive consultation, leveraging our experienced team's in-depth industry knowledge. From strategic planning to project management, we ensure quality assurance and cost-effective solutions.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "We prioritize transparent communication and adhere to timelines, making Sark Construction the trusted choice for construction consulting services. Whether you're initiating a new project, seeking strategic advice, or ensuring efficient project execution, our consulting services are tailored to meet your needs.");
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
			t9 = claim_text(h60_nodes, "Sark Construction specializes in providing Construction Consulting Services to bring expertise and guidance to your construction projects. Our services include strategic planning, project management, and cost-effective solutions to ensure the success of your endeavors.");
			h60_nodes.forEach(detach_dev);
			t10 = claim_space(div11_nodes);
			h61 = claim_element(div11_nodes, "H6", { class: true });
			var h61_nodes = children(h61);
			t11 = claim_text(h61_nodes, "We take pride in our experienced team, transparent communication, and commitment to timelines. Explore our Construction Consulting Services for a seamless construction experience with Sark Construction.");
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
			add_location(h1, file, 23, 14, 873);
			attr_dev(div0, "class", "border-start border-5 border-primary ps-4 mb-5");
			add_location(div0, file, 22, 12, 798);
			add_location(p0, file, 27, 16, 1031);
			add_location(p1, file, 28, 16, 1083);
			add_location(p2, file, 31, 16, 1468);
			attr_dev(div1, "class", "col-md-12");
			add_location(div1, file, 26, 14, 991);
			attr_dev(div2, "class", "row");
			add_location(div2, file, 25, 12, 959);
			attr_dev(div3, "class", "content-inner-page");
			add_location(div3, file, 21, 10, 753);
			attr_dev(div4, "class", "col-xl-12 col-lg-12");
			add_location(div4, file, 20, 8, 709);
			attr_dev(div5, "class", "row g-5");
			add_location(div5, file, 19, 6, 679);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 18, 4, 649);
			attr_dev(img, "class", "position-absolute w-100 h-100");
			if (!src_url_equal(img.src, img_src_value = "img/construction-consulting.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			set_style(img, "object-fit", "cover");
			add_location(img, file, 48, 14, 2349);
			attr_dev(div7, "class", "position-relative overflow-hidden ps-5 pt-5 h-100");
			set_style(div7, "min-height", "400px");
			add_location(div7, file, 46, 12, 2136);
			attr_dev(div8, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div8, "data-wow-delay", "0.1s");
			add_location(div8, file, 45, 10, 2066);
			add_location(h60, file, 53, 14, 2614);
			attr_dev(h61, "class", "mb-4");
			add_location(h61, file, 56, 14, 2939);
			attr_dev(div9, "class", "row g-4");
			add_location(div9, file, 60, 16, 3261);
			attr_dev(div10, "class", "border-top mt-4 pt-4");
			add_location(div10, file, 59, 14, 3210);
			attr_dev(div11, "class", "h-100");
			add_location(div11, file, 52, 12, 2580);
			attr_dev(div12, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div12, "data-wow-delay", "0.5s");
			add_location(div12, file, 51, 10, 2510);
			attr_dev(div13, "class", "row g-5");
			add_location(div13, file, 44, 8, 2034);
			attr_dev(div14, "class", "container");
			add_location(div14, file, 43, 6, 2002);
			attr_dev(div15, "class", "container-xxl py-5");
			add_location(div15, file, 42, 4, 1963);
			attr_dev(div16, "class", "container-xxl py-5");
			add_location(div16, file, 17, 2, 612);
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
	validate_slots('Construction_consulting_services', slots, []);

	let { serviceDetails = {
		title: "Construction Consulting Services - Sark Construction",
		description: "Bringing Expertise to Your Construction Projects with Consultation Services",
		features: [
			"Comprehensive consulting for construction projects",
			"Experienced team with in-depth industry knowledge",
			"Strategic planning and project management",
			"Quality assurance and cost-effective solutions",
			"Transparent communication and adherence to timelines"
		]
	} } = $$props;

	const writable_props = ['serviceDetails'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Construction_consulting_services> was created with unknown prop '${key}'`);
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

class Construction_consulting_services extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { serviceDetails: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Construction_consulting_services",
			options,
			id: create_fragment.name
		});
	}

	get serviceDetails() {
		throw new Error("<Construction_consulting_services>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set serviceDetails(value) {
		throw new Error("<Construction_consulting_services>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Construction_consulting_services as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0aW9uLWNvbnN1bHRpbmctc2VydmljZXMuYThmY2E5NjAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29uc3RydWN0aW9uLWNvbnN1bHRpbmctc2VydmljZXMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBDdGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3RhLnN2ZWx0ZVwiO1xuXG4gICAgZXhwb3J0IGxldCBzZXJ2aWNlRGV0YWlscyA9IHtcbiAgICAgIHRpdGxlOiBcIkNvbnN0cnVjdGlvbiBDb25zdWx0aW5nIFNlcnZpY2VzIC0gU2FyayBDb25zdHJ1Y3Rpb25cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkJyaW5naW5nIEV4cGVydGlzZSB0byBZb3VyIENvbnN0cnVjdGlvbiBQcm9qZWN0cyB3aXRoIENvbnN1bHRhdGlvbiBTZXJ2aWNlc1wiLFxuICAgICAgZmVhdHVyZXM6IFtcbiAgICAgICAgXCJDb21wcmVoZW5zaXZlIGNvbnN1bHRpbmcgZm9yIGNvbnN0cnVjdGlvbiBwcm9qZWN0c1wiLFxuICAgICAgICBcIkV4cGVyaWVuY2VkIHRlYW0gd2l0aCBpbi1kZXB0aCBpbmR1c3RyeSBrbm93bGVkZ2VcIixcbiAgICAgICAgXCJTdHJhdGVnaWMgcGxhbm5pbmcgYW5kIHByb2plY3QgbWFuYWdlbWVudFwiLFxuICAgICAgICBcIlF1YWxpdHkgYXNzdXJhbmNlIGFuZCBjb3N0LWVmZmVjdGl2ZSBzb2x1dGlvbnNcIixcbiAgICAgICAgXCJUcmFuc3BhcmVudCBjb21tdW5pY2F0aW9uIGFuZCBhZGhlcmVuY2UgdG8gdGltZWxpbmVzXCIsXG4gICAgICBdXG4gICAgfVxuICA8L3NjcmlwdD5cbiAgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIteHhsIHB5LTVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGctNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWlubmVyLXBhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItc3RhcnQgYm9yZGVyLTUgYm9yZGVyLXByaW1hcnkgcHMtNCBtYi01XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cImRpc3BsYXktNiBtYi0wXCI+e3NlcnZpY2VEZXRhaWxzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgIDxwPntzZXJ2aWNlRGV0YWlscy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBBdCBTYXJrIENvbnN0cnVjdGlvbiwgb3VyIENvbnN0cnVjdGlvbiBDb25zdWx0aW5nIFNlcnZpY2VzIGJyaW5nIGV4cGVydGlzZSBhbmQgaW5zaWdodHMgdG8geW91ciBjb25zdHJ1Y3Rpb24gcHJvamVjdHMuIFdlIHByb3ZpZGUgY29tcHJlaGVuc2l2ZSBjb25zdWx0YXRpb24sIGxldmVyYWdpbmcgb3VyIGV4cGVyaWVuY2VkIHRlYW0ncyBpbi1kZXB0aCBpbmR1c3RyeSBrbm93bGVkZ2UuIEZyb20gc3RyYXRlZ2ljIHBsYW5uaW5nIHRvIHByb2plY3QgbWFuYWdlbWVudCwgd2UgZW5zdXJlIHF1YWxpdHkgYXNzdXJhbmNlIGFuZCBjb3N0LWVmZmVjdGl2ZSBzb2x1dGlvbnMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgV2UgcHJpb3JpdGl6ZSB0cmFuc3BhcmVudCBjb21tdW5pY2F0aW9uIGFuZCBhZGhlcmUgdG8gdGltZWxpbmVzLCBtYWtpbmcgU2FyayBDb25zdHJ1Y3Rpb24gdGhlIHRydXN0ZWQgY2hvaWNlIGZvciBjb25zdHJ1Y3Rpb24gY29uc3VsdGluZyBzZXJ2aWNlcy4gV2hldGhlciB5b3UncmUgaW5pdGlhdGluZyBhIG5ldyBwcm9qZWN0LCBzZWVraW5nIHN0cmF0ZWdpYyBhZHZpY2UsIG9yIGVuc3VyaW5nIGVmZmljaWVudCBwcm9qZWN0IGV4ZWN1dGlvbiwgb3VyIGNvbnN1bHRpbmcgc2VydmljZXMgYXJlIHRhaWxvcmVkIHRvIG1lZXQgeW91ciBuZWVkcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSBDb250ZW50IGlubmVyIGVuZCAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14eGwgcHktNVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGctNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIjAuMXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcHMtNSBwdC01IGgtMTAwXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiA0MDBweFwiPlxuICAgICAgICAgICAgICA8IS0tIFJlcGxhY2UgdGhlIGltYWdlIHNvdXJjZSB3aXRoIHRoZSByZWxldmFudCBpbWFnZSBmb3IgQ29uc3RydWN0aW9uIENvbnN1bHRpbmcgU2VydmljZXMgLS0+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBoLTEwMFwiIHNyYz1cImltZy9jb25zdHJ1Y3Rpb24tY29uc3VsdGluZy5qcGdcIiBhbHQ9XCJcIiBzdHlsZT1cIm9iamVjdC1maXQ6IGNvdmVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTYgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIwLjVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC0xMDBcIj5cbiAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgIFNhcmsgQ29uc3RydWN0aW9uIHNwZWNpYWxpemVzIGluIHByb3ZpZGluZyBDb25zdHJ1Y3Rpb24gQ29uc3VsdGluZyBTZXJ2aWNlcyB0byBicmluZyBleHBlcnRpc2UgYW5kIGd1aWRhbmNlIHRvIHlvdXIgY29uc3RydWN0aW9uIHByb2plY3RzLiBPdXIgc2VydmljZXMgaW5jbHVkZSBzdHJhdGVnaWMgcGxhbm5pbmcsIHByb2plY3QgbWFuYWdlbWVudCwgYW5kIGNvc3QtZWZmZWN0aXZlIHNvbHV0aW9ucyB0byBlbnN1cmUgdGhlIHN1Y2Nlc3Mgb2YgeW91ciBlbmRlYXZvcnMuXG4gICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICBXZSB0YWtlIHByaWRlIGluIG91ciBleHBlcmllbmNlZCB0ZWFtLCB0cmFuc3BhcmVudCBjb21tdW5pY2F0aW9uLCBhbmQgY29tbWl0bWVudCB0byB0aW1lbGluZXMuIEV4cGxvcmUgb3VyIENvbnN0cnVjdGlvbiBDb25zdWx0aW5nIFNlcnZpY2VzIGZvciBhIHNlYW1sZXNzIGNvbnN0cnVjdGlvbiBleHBlcmllbmNlIHdpdGggU2FyayBDb25zdHJ1Y3Rpb24uXG4gICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItdG9wIG10LTQgcHQtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy00XCI+XG4gICAgICAgICAgICAgICAgICB7I2VhY2ggc2VydmljZURldGFpbHMuZmVhdHVyZXMgYXMgZmVhdHVyZSAoZmVhdHVyZSl9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZC1mbGV4IHdvdyBmYWRlSW5cIiBkYXRhLXdvdy1kZWxheT1cIjAuMXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjayBmYS0yeCB0ZXh0LXByaW1hcnkgZmxleC1zaHJpbmstMCBtZS0zXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJtYi0wXCI+e2ZlYXR1cmV9PC9oNj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICBcbiAgPEN0YS8+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBZ0VzQyxHQUFPLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUYzQixvQkFHTSxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7R0FGSixvQkFBaUUsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUE7O0dBQ2pFLG9CQUErQixDQUFBLEdBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTs7Ozs7OzRFQUFiLEdBQU8sQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxZQUFBLENBQUEsRUFBQSxFQUFBLFFBQUEsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpDSCxDQUFBLElBQUEsUUFBQSxzQkFBQSxHQUFjLElBQUMsS0FBSyxHQUFB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
