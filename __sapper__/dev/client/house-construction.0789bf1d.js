import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, B as validate_each_argument, E as validate_each_keys, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, j as attr_dev, m as add_location, n as insert_hydration_dev, o as append_hydration_dev, O as set_data_dev, J as update_keyed_each, p as noop, l as set_style, N as destroy_block } from './client.ee1efe38.js';
import 'jquery';

/* src/routes/house-construction.svelte generated by Svelte v3.59.2 */

const file = "src/routes/house-construction.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (69:16) {#each serviceDetails.features as feature (feature)}
function create_each_block(key_1, ctx) {
	let div;
	let i;
	let t0;
	let p;
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
			p = element("p");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {
				class: true,
				"data-wow-delay": true,
				style: true
			});

			var div_nodes = children(div);
			i = claim_element(div_nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			t0 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", { class: true });
			var p_nodes = children(p);
			t1 = claim_text(p_nodes, t1_value);
			p_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(i, "class", "fa fa-check fa-lg text-primary flex-shrink-0 me-3");
			add_location(i, file, 74, 18, 2853);
			attr_dev(p, "class", "mb-0");
			add_location(p, file, 75, 18, 2937);
			attr_dev(div, "class", "d-flex wow fadeIn");
			attr_dev(div, "data-wow-delay", "0.1s");
			set_style(div, "visibility", "visible");
			set_style(div, "animation-delay", "0.1s");
			set_style(div, "animation-name", "fadeIn");
			add_location(div, file, 69, 16, 2634);
			this.first = div;
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, i);
			append_hydration_dev(div, t0);
			append_hydration_dev(div, p);
			append_hydration_dev(p, t1);
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
		source: "(69:16) {#each serviceDetails.features as feature (feature)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div24;
	let div23;
	let div22;
	let div21;
	let div20;
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
	let div5;
	let div4;
	let div3;
	let t9;
	let div6;
	let t10;
	let div10;
	let div7;
	let h30;
	let t11;
	let t12;
	let p3;
	let t13;
	let t14;
	let ul;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t15;
	let div9;
	let h31;
	let t16;
	let t17;
	let div8;
	let t18;
	let div11;
	let t19;
	let div19;
	let div18;
	let div17;
	let div16;
	let div13;
	let div12;
	let h32;
	let t20;
	let t21;
	let div15;
	let div14;
	let a;
	let t22;
	let each_value = /*serviceDetails*/ ctx[0].features;
	validate_each_argument(each_value);
	const get_key = ctx => /*feature*/ ctx[1];
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			div24 = element("div");
			div23 = element("div");
			div22 = element("div");
			div21 = element("div");
			div20 = element("div");
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
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");
			t9 = space();
			div6 = element("div");
			t10 = space();
			div10 = element("div");
			div7 = element("div");
			h30 = element("h3");
			t11 = text("What Sets Us Apart");
			t12 = space();
			p3 = element("p");
			t13 = text("Choosing Sark Construction means choosing excellence. Here's what\n                sets us apart from the rest:");
			t14 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t15 = space();
			div9 = element("div");
			h31 = element("h3");
			t16 = text("Key Considerations");
			t17 = space();
			div8 = element("div");
			t18 = space();
			div11 = element("div");
			t19 = space();
			div19 = element("div");
			div18 = element("div");
			div17 = element("div");
			div16 = element("div");
			div13 = element("div");
			div12 = element("div");
			h32 = element("h3");
			t20 = text("Ready to turn your dream home into reality?");
			t21 = space();
			div15 = element("div");
			div14 = element("div");
			a = element("a");
			t22 = text("Get a Quote");
			this.h();
		},
		l: function claim(nodes) {
			div24 = claim_element(nodes, "DIV", { class: true });
			var div24_nodes = children(div24);
			div23 = claim_element(div24_nodes, "DIV", { class: true });
			var div23_nodes = children(div23);
			div22 = claim_element(div23_nodes, "DIV", { class: true });
			var div22_nodes = children(div22);
			div21 = claim_element(div22_nodes, "DIV", { class: true });
			var div21_nodes = children(div21);
			div20 = claim_element(div21_nodes, "DIV", { class: true });
			var div20_nodes = children(div20);
			h2 = claim_element(div20_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div20_nodes);
			div1 = claim_element(div20_nodes, "DIV", { class: true });
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
			t7 = claim_space(div20_nodes);
			div2 = claim_element(div20_nodes, "DIV", { class: true });
			children(div2).forEach(detach_dev);
			t8 = claim_space(div20_nodes);
			div5 = claim_element(div20_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { id: true, class: true });
			children(div3).forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t9 = claim_space(div20_nodes);
			div6 = claim_element(div20_nodes, "DIV", { class: true });
			children(div6).forEach(detach_dev);
			t10 = claim_space(div20_nodes);
			div10 = claim_element(div20_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div7 = claim_element(div10_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			h30 = claim_element(div7_nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t11 = claim_text(h30_nodes, "What Sets Us Apart");
			h30_nodes.forEach(detach_dev);
			t12 = claim_space(div7_nodes);
			p3 = claim_element(div7_nodes, "P", {});
			var p3_nodes = children(p3);
			t13 = claim_text(p3_nodes, "Choosing Sark Construction means choosing excellence. Here's what\n                sets us apart from the rest:");
			p3_nodes.forEach(detach_dev);
			t14 = claim_space(div7_nodes);
			ul = claim_element(div7_nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			t15 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			h31 = claim_element(div9_nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t16 = claim_text(h31_nodes, "Key Considerations");
			h31_nodes.forEach(detach_dev);
			t17 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true, id: true });
			children(div8).forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			t18 = claim_space(div20_nodes);
			div11 = claim_element(div20_nodes, "DIV", { class: true });
			children(div11).forEach(detach_dev);
			t19 = claim_space(div20_nodes);
			div19 = claim_element(div20_nodes, "DIV", { class: true });
			var div19_nodes = children(div19);
			div18 = claim_element(div19_nodes, "DIV", { class: true });
			var div18_nodes = children(div18);
			div17 = claim_element(div18_nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			div16 = claim_element(div17_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			div13 = claim_element(div16_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			h32 = claim_element(div12_nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			t20 = claim_text(h32_nodes, "Ready to turn your dream home into reality?");
			h32_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			t21 = claim_space(div16_nodes);
			div15 = claim_element(div16_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			div14 = claim_element(div15_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			a = claim_element(div14_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t22 = claim_text(a_nodes, "Get a Quote");
			a_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			div15_nodes.forEach(detach_dev);
			div16_nodes.forEach(detach_dev);
			div17_nodes.forEach(detach_dev);
			div18_nodes.forEach(detach_dev);
			div19_nodes.forEach(detach_dev);
			div20_nodes.forEach(detach_dev);
			div21_nodes.forEach(detach_dev);
			div22_nodes.forEach(detach_dev);
			div23_nodes.forEach(detach_dev);
			div24_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "column-title mrt-0");
			add_location(h2, file, 23, 10, 800);
			add_location(p0, file, 27, 14, 940);
			add_location(p1, file, 28, 14, 990);
			add_location(p2, file, 36, 14, 1453);
			attr_dev(div0, "class", "col-md-12");
			add_location(div0, file, 26, 12, 902);
			attr_dev(div1, "class", "row");
			add_location(div1, file, 25, 10, 872);
			attr_dev(div2, "class", "gap-40");
			add_location(div2, file, 46, 10, 1898);
			attr_dev(div3, "id", "page-slider");
			attr_dev(div3, "class", "page-slider slick-initialized slick-slider");
			add_location(div3, file, 50, 14, 2006);
			attr_dev(div4, "class", "col-md-12");
			add_location(div4, file, 49, 12, 1968);
			attr_dev(div5, "class", "row");
			add_location(div5, file, 48, 10, 1938);
			attr_dev(div6, "class", "gap-40");
			add_location(div6, file, 57, 10, 2182);
			attr_dev(h30, "class", "column-title-small");
			add_location(h30, file, 61, 14, 2289);
			add_location(p3, file, 63, 14, 2361);
			attr_dev(ul, "class", "list-arrow");
			add_location(ul, file, 67, 14, 2525);
			attr_dev(div7, "class", "col-md-6");
			add_location(div7, file, 60, 12, 2252);
			attr_dev(h31, "class", "column-title-small");
			add_location(h31, file, 82, 14, 3118);
			attr_dev(div8, "class", "accordion accordion-group accordion-classic");
			attr_dev(div8, "id", "construction-accordion");
			add_location(div8, file, 84, 14, 3190);
			attr_dev(div9, "class", "col-md-6 mt-5 mt-md-0");
			add_location(div9, file, 81, 12, 3068);
			attr_dev(div10, "class", "row");
			add_location(div10, file, 59, 10, 2222);
			attr_dev(div11, "class", "gap-40");
			add_location(div11, file, 91, 10, 3378);
			attr_dev(h32, "class", "action-title");
			add_location(h32, file, 100, 22, 3760);
			attr_dev(div12, "class", "call-to-action-text");
			add_location(div12, file, 99, 20, 3704);
			attr_dev(div13, "class", "col-md-8 text-center text-md-left");
			add_location(div13, file, 98, 18, 3636);
			attr_dev(a, "class", "btn btn-primary");
			attr_dev(a, "href", "/");
			add_location(a, file, 108, 22, 4124);
			attr_dev(div14, "class", "call-to-action-btn");
			add_location(div14, file, 107, 20, 4069);
			attr_dev(div15, "class", "col-md-4 text-center text-md-right mt-3 mt-md-0");
			add_location(div15, file, 106, 18, 3987);
			attr_dev(div16, "class", "row align-items-center");
			add_location(div16, file, 97, 16, 3581);
			attr_dev(div17, "class", "call-to-action classic");
			add_location(div17, file, 96, 14, 3528);
			attr_dev(div18, "class", "col-md-12");
			add_location(div18, file, 95, 12, 3490);
			attr_dev(div19, "class", "row");
			add_location(div19, file, 94, 10, 3460);
			attr_dev(div20, "class", "content-inner-page");
			add_location(div20, file, 22, 8, 757);
			attr_dev(div21, "class", "col-xl-12 col-lg-12");
			add_location(div21, file, 21, 6, 715);
			attr_dev(div22, "class", "row g-5");
			add_location(div22, file, 20, 4, 687);
			attr_dev(div23, "class", "container");
			add_location(div23, file, 19, 2, 659);
			attr_dev(div24, "class", "container-xxl py-5");
			add_location(div24, file, 17, 0, 622);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div24, anchor);
			append_hydration_dev(div24, div23);
			append_hydration_dev(div23, div22);
			append_hydration_dev(div22, div21);
			append_hydration_dev(div21, div20);
			append_hydration_dev(div20, h2);
			append_hydration_dev(h2, t0);
			append_hydration_dev(div20, t1);
			append_hydration_dev(div20, div1);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, p0);
			append_hydration_dev(p0, t2);
			append_hydration_dev(div0, t3);
			append_hydration_dev(div0, p1);
			append_hydration_dev(p1, t4);
			append_hydration_dev(div0, t5);
			append_hydration_dev(div0, p2);
			append_hydration_dev(p2, t6);
			append_hydration_dev(div20, t7);
			append_hydration_dev(div20, div2);
			append_hydration_dev(div20, t8);
			append_hydration_dev(div20, div5);
			append_hydration_dev(div5, div4);
			append_hydration_dev(div4, div3);
			append_hydration_dev(div20, t9);
			append_hydration_dev(div20, div6);
			append_hydration_dev(div20, t10);
			append_hydration_dev(div20, div10);
			append_hydration_dev(div10, div7);
			append_hydration_dev(div7, h30);
			append_hydration_dev(h30, t11);
			append_hydration_dev(div7, t12);
			append_hydration_dev(div7, p3);
			append_hydration_dev(p3, t13);
			append_hydration_dev(div7, t14);
			append_hydration_dev(div7, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(ul, null);
				}
			}

			append_hydration_dev(div10, t15);
			append_hydration_dev(div10, div9);
			append_hydration_dev(div9, h31);
			append_hydration_dev(h31, t16);
			append_hydration_dev(div9, t17);
			append_hydration_dev(div9, div8);
			append_hydration_dev(div20, t18);
			append_hydration_dev(div20, div11);
			append_hydration_dev(div20, t19);
			append_hydration_dev(div20, div19);
			append_hydration_dev(div19, div18);
			append_hydration_dev(div18, div17);
			append_hydration_dev(div17, div16);
			append_hydration_dev(div16, div13);
			append_hydration_dev(div13, div12);
			append_hydration_dev(div12, h32);
			append_hydration_dev(h32, t20);
			append_hydration_dev(div16, t21);
			append_hydration_dev(div16, div15);
			append_hydration_dev(div15, div14);
			append_hydration_dev(div14, a);
			append_hydration_dev(a, t22);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*serviceDetails*/ 1 && t0_value !== (t0_value = /*serviceDetails*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*serviceDetails*/ 1 && t2_value !== (t2_value = /*serviceDetails*/ ctx[0].description + "")) set_data_dev(t2, t2_value);

			if (dirty & /*serviceDetails*/ 1) {
				each_value = /*serviceDetails*/ ctx[0].features;
				validate_each_argument(each_value);
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, ul, destroy_block, create_each_block, null, get_each_context);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div24);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
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

	const writable_props = ['serviceDetails'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<House_construction> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('serviceDetails' in $$props) $$invalidate(0, serviceDetails = $$props.serviceDetails);
	};

	$$self.$capture_state = () => ({ serviceDetails });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91c2UtY29uc3RydWN0aW9uLjA3ODliZjFkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2hvdXNlLWNvbnN0cnVjdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBzcmMvcm91dGVzL291ci1zZXJ2aWNlcy9ob21lLWNvbnN0cnVjdGlvbi1zYXJrLWNvbnN0cnVjdGlvbi1jaGVubmFpLnN2ZWx0ZSAtLT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBzZXJ2aWNlRGV0YWlscyA9IHtcbiAgICB0aXRsZTogXCJIb21lIENvbnN0cnVjdGlvbiAtIFNhcmsgQ29uc3RydWN0aW9uLCBDaGVubmFpXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRyYW5zZm9ybWluZyBEcmVhbXMgaW50byBSZWFsaXR5IHdpdGggUXVhbGl0eSBDb25zdHJ1Y3Rpb24gU2VydmljZXNcIixcbiAgICBmZWF0dXJlczogW1xuICAgICAgXCJDdXN0b21pemVkIGRlc2lnbiBhbmQgcGxhbm5pbmcgdGFpbG9yZWQgdG8geW91ciBwcmVmZXJlbmNlc1wiLFxuICAgICAgXCJFeHBlcmllbmNlZCBjb25zdHJ1Y3Rpb24gdGVhbSB3aXRoIGEgcGFzc2lvbiBmb3IgZXhjZWxsZW5jZVwiLFxuICAgICAgXCJQcmVtaXVtIHF1YWxpdHkgbWF0ZXJpYWxzIGFuZCBjcmFmdHNtYW5zaGlwXCIsXG4gICAgICBcIkNvbW1pdHRlZCB0byBvbi10aW1lIHByb2plY3QgY29tcGxldGlvblwiLFxuICAgICAgXCJCdWRnZXQtZnJpZW5kbHkgb3B0aW9ucyB3aXRob3V0IGNvbXByb21pc2luZyBxdWFsaXR5XCIsXG4gICAgXSxcbiAgfTtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLXh4bCBweS01XCI+XG4gXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGctNVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC0xMiBjb2wtbGctMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtaW5uZXItcGFnZVwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cImNvbHVtbi10aXRsZSBtcnQtMFwiPntzZXJ2aWNlRGV0YWlscy50aXRsZX08L2gyPlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxwPntzZXJ2aWNlRGV0YWlscy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEF0IFNhcmsgQ29uc3RydWN0aW9uLCB3ZSBiZWxpZXZlIGluIHR1cm5pbmcgeW91ciBkcmVhbSBob21lIHZpc2lvblxuICAgICAgICAgICAgICAgIGludG8gYSB0YW5naWJsZSByZWFsaXR5LiBPdXIgZGVkaWNhdGVkIHRlYW0gb2YgcHJvZmVzc2lvbmFscyBpc1xuICAgICAgICAgICAgICAgIGNvbW1pdHRlZCB0byBkZWxpdmVyaW5nIGNvbnN0cnVjdGlvbiBzZXJ2aWNlcyB0aGF0IGV4Y2VlZFxuICAgICAgICAgICAgICAgIGV4cGVjdGF0aW9ucy4gV2hldGhlciB5b3UncmUgZW52aXNpb25pbmcgYSBtb2Rlcm4gbWFzdGVycGllY2Ugb3IgYVxuICAgICAgICAgICAgICAgIGNvenkgdHJhZGl0aW9uYWwgaG9tZSwgd2UgaGF2ZSB0aGUgZXhwZXJ0aXNlIHRvIGJyaW5nIHlvdXIgaWRlYXNcbiAgICAgICAgICAgICAgICB0byBsaWZlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFdpdGggYSBmb2N1cyBvbiBxdWFsaXR5IG1hdGVyaWFscywgcHJlY2lzZSBjcmFmdHNtYW5zaGlwLCBhbmQgYVxuICAgICAgICAgICAgICAgIGNsaWVudC1jZW50cmljIGFwcHJvYWNoLCB3ZSBzdGFuZCBvdXQgYXMgYSByZWxpYWJsZSBwYXJ0bmVyIGZvclxuICAgICAgICAgICAgICAgIHlvdXIgaG9tZSBjb25zdHJ1Y3Rpb24gbmVlZHMuIE91ciBhdHRlbnRpb24gdG8gZGV0YWlsLCB0cmFuc3BhcmVudFxuICAgICAgICAgICAgICAgIGNvbW11bmljYXRpb24sIGFuZCBhZGhlcmVuY2UgdG8gdGltZWxpbmVzIG1ha2UgdXMgdGhlIHByZWZlcnJlZFxuICAgICAgICAgICAgICAgIGNob2ljZSBmb3IgaG9tZW93bmVycyBpbiBDaGVubmFpLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdhcC00MFwiPjwvZGl2PlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBpZD1cInBhZ2Utc2xpZGVyXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBhZ2Utc2xpZGVyIHNsaWNrLWluaXRpYWxpemVkIHNsaWNrLXNsaWRlclwiXG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLTQwXCI+PC9kaXY+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjb2x1bW4tdGl0bGUtc21hbGxcIj5XaGF0IFNldHMgVXMgQXBhcnQ8L2gzPlxuICBcbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQ2hvb3NpbmcgU2FyayBDb25zdHJ1Y3Rpb24gbWVhbnMgY2hvb3NpbmcgZXhjZWxsZW5jZS4gSGVyZSdzIHdoYXRcbiAgICAgICAgICAgICAgICBzZXRzIHVzIGFwYXJ0IGZyb20gdGhlIHJlc3Q6XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1hcnJvd1wiPlxuICAgICAgICAgICAgICAgIHsjZWFjaCBzZXJ2aWNlRGV0YWlscy5mZWF0dXJlcyBhcyBmZWF0dXJlIChmZWF0dXJlKX1cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCB3b3cgZmFkZUluXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiMC4xc1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cInZpc2liaWxpdHk6IHZpc2libGU7IGFuaW1hdGlvbi1kZWxheTogMC4xczsgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2sgZmEtbGcgdGV4dC1wcmltYXJ5IGZsZXgtc2hyaW5rLTAgbWUtM1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMFwiPntmZWF0dXJlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgbXQtNSBtdC1tZC0wXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbHVtbi10aXRsZS1zbWFsbFwiPktleSBDb25zaWRlcmF0aW9uczwvaDM+XG4gIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhY2NvcmRpb24gYWNjb3JkaW9uLWdyb3VwIGFjY29yZGlvbi1jbGFzc2ljXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnN0cnVjdGlvbi1hY2NvcmRpb25cIlxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdhcC00MFwiPjwvZGl2PlxuICBcbiAgICAgICAgICA8IS0tIENhbGwtdG8tQWN0aW9uIFNlY3Rpb24gLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbC10by1hY3Rpb24gY2xhc3NpY1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggdGV4dC1jZW50ZXIgdGV4dC1tZC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxsLXRvLWFjdGlvbi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkeSB0byB0dXJuIHlvdXIgZHJlYW0gaG9tZSBpbnRvIHJlYWxpdHk/XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwhLS0gQ29sIGVuZCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCB0ZXh0LWNlbnRlciB0ZXh0LW1kLXJpZ2h0IG10LTMgbXQtbWQtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbC10by1hY3Rpb24tYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPVwiL1wiPkdldCBhIFF1b3RlPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPCEtLSBDb2wgZW5kIC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gUm93IGVuZCAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwhLS0gQ2FsbC10by1BY3Rpb24gZW5kIC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSBDYWxsLXRvLUFjdGlvbiBTZWN0aW9uIGVuZCAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gQ29udGVudCBpbm5lciBlbmQgLS0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIFxuXG48L2Rpdj5cblxuXG48c3R5bGU+XG4gIC8qIEFkZGl0aW9uYWwgc3R5bGluZyBpZiBuZWVkZWQgKi9cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkEyRW1DLEdBQU8sQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FOMUIsb0JBT00sQ0FBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBO0dBRkosb0JBQWlFLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBOztHQUNqRSxvQkFBNkIsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUE7Ozs7Ozs0RUFBWixHQUFPLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsWUFBQSxDQUFBLEVBQUEsRUFBQSxRQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXBEQSxDQUFBLElBQUEsUUFBQSxzQkFBQSxHQUFjLElBQUMsS0FBSyxHQUFB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
