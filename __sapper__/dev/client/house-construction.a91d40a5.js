import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, B as validate_each_argument, E as validate_each_keys, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, j as attr_dev, m as add_location, n as insert_hydration_dev, o as append_hydration_dev, O as set_data_dev, J as update_keyed_each, p as noop, N as destroy_block } from './client.1d8d1f7c.js';
import 'jquery';

/* src/routes/house-construction.svelte generated by Svelte v3.59.2 */

const file = "src/routes/house-construction.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (60:16) {#each serviceDetails.features as feature (feature)}
function create_each_block(key_1, ctx) {
	let li;
	let t_value = /*feature*/ ctx[1] + "";
	let t;

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			li = element("li");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			t = claim_text(li_nodes, t_value);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li, file, 60, 18, 2671);
			this.first = li;
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, li, anchor);
			append_hydration_dev(li, t);
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*serviceDetails*/ 1 && t_value !== (t_value = /*feature*/ ctx[1] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(60:16) {#each serviceDetails.features as feature (feature)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let section;
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
			section = element("section");
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
			t4 = text("At Sark Construction, we believe in turning your dream home vision into a tangible reality. Our dedicated team of professionals is committed to delivering construction services that exceed expectations. Whether you're envisioning a modern masterpiece or a cozy traditional home, we have the expertise to bring your ideas to life.");
			t5 = space();
			p2 = element("p");
			t6 = text("With a focus on quality materials, precise craftsmanship, and a client-centric approach, we stand out as a reliable partner for your home construction needs. Our attention to detail, transparent communication, and adherence to timelines make us the preferred choice for homeowners in Chennai.");
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
			t13 = text("Choosing Sark Construction means choosing excellence. Here's what sets us apart from the rest:");
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
			section = claim_element(nodes, "SECTION", { id: true, class: true });
			var section_nodes = children(section);
			div23 = claim_element(section_nodes, "DIV", { class: true });
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
			t4 = claim_text(p1_nodes, "At Sark Construction, we believe in turning your dream home vision into a tangible reality. Our dedicated team of professionals is committed to delivering construction services that exceed expectations. Whether you're envisioning a modern masterpiece or a cozy traditional home, we have the expertise to bring your ideas to life.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "With a focus on quality materials, precise craftsmanship, and a client-centric approach, we stand out as a reliable partner for your home construction needs. Our attention to detail, transparent communication, and adherence to timelines make us the preferred choice for homeowners in Chennai.");
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
			var div3_nodes = children(div3);
			div3_nodes.forEach(detach_dev);
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
			t13 = claim_text(p3_nodes, "Choosing Sark Construction means choosing excellence. Here's what sets us apart from the rest:");
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
			var div8_nodes = children(div8);
			div8_nodes.forEach(detach_dev);
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
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "column-title mt-0");
			add_location(h2, file, 22, 10, 805);
			add_location(p0, file, 26, 14, 942);
			add_location(p1, file, 27, 14, 992);
			add_location(p2, file, 30, 14, 1375);
			attr_dev(div0, "class", "col-md-12");
			add_location(div0, file, 25, 12, 904);
			attr_dev(div1, "class", "row");
			add_location(div1, file, 24, 10, 874);
			attr_dev(div2, "class", "gap-40");
			add_location(div2, file, 36, 10, 1773);
			attr_dev(div3, "id", "page-slider");
			attr_dev(div3, "class", "page-slider slick-initialized slick-slider");
			add_location(div3, file, 41, 14, 1919);
			attr_dev(div4, "class", "col-md-12");
			add_location(div4, file, 40, 12, 1881);
			attr_dev(div5, "class", "row");
			add_location(div5, file, 39, 10, 1851);
			attr_dev(div6, "class", "gap-40");
			add_location(div6, file, 48, 10, 2197);
			attr_dev(h30, "class", "column-title-small");
			add_location(h30, file, 53, 14, 2342);
			add_location(p3, file, 55, 14, 2412);
			attr_dev(ul, "class", "list-arrow");
			add_location(ul, file, 58, 14, 2560);
			attr_dev(div7, "class", "col-md-6");
			add_location(div7, file, 52, 12, 2305);
			attr_dev(h31, "class", "column-title-small");
			add_location(h31, file, 66, 14, 2816);
			attr_dev(div8, "class", "accordion accordion-group accordion-classic");
			attr_dev(div8, "id", "construction-accordion");
			add_location(div8, file, 68, 14, 2886);
			attr_dev(div9, "class", "col-md-6 mt-5 mt-md-0");
			add_location(div9, file, 65, 12, 2766);
			attr_dev(div10, "class", "row");
			add_location(div10, file, 51, 10, 2275);
			attr_dev(div11, "class", "gap-40");
			add_location(div11, file, 75, 10, 3167);
			attr_dev(h32, "class", "action-title");
			add_location(h32, file, 84, 22, 3547);
			attr_dev(div12, "class", "call-to-action-text");
			add_location(div12, file, 83, 20, 3491);
			attr_dev(div13, "class", "col-md-8 text-center text-md-left");
			add_location(div13, file, 82, 18, 3423);
			attr_dev(a, "class", "btn btn-primary");
			attr_dev(a, "href", "/");
			add_location(a, file, 89, 22, 3844);
			attr_dev(div14, "class", "call-to-action-btn");
			add_location(div14, file, 88, 20, 3789);
			attr_dev(div15, "class", "col-md-4 text-center text-md-right mt-3 mt-md-0");
			add_location(div15, file, 87, 18, 3707);
			attr_dev(div16, "class", "row align-items-center");
			add_location(div16, file, 81, 16, 3368);
			attr_dev(div17, "class", "call-to-action classic");
			add_location(div17, file, 80, 14, 3315);
			attr_dev(div18, "class", "col-md-12");
			add_location(div18, file, 79, 12, 3277);
			attr_dev(div19, "class", "row");
			add_location(div19, file, 78, 10, 3247);
			attr_dev(div20, "class", "content-inner-page");
			add_location(div20, file, 20, 8, 761);
			attr_dev(div21, "class", "col-xl-8 col-lg-8");
			add_location(div21, file, 19, 6, 721);
			attr_dev(div22, "class", "row");
			add_location(div22, file, 18, 4, 697);
			attr_dev(div23, "class", "container");
			add_location(div23, file, 17, 2, 669);
			attr_dev(section, "id", "main-container");
			attr_dev(section, "class", "main-container");
			add_location(section, file, 16, 0, 614);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, section, anchor);
			append_hydration_dev(section, div23);
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
			if (detaching) detach_dev(section);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91c2UtY29uc3RydWN0aW9uLmE5MWQ0MGE1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2hvdXNlLWNvbnN0cnVjdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBzcmMvcm91dGVzL291ci1zZXJ2aWNlcy9ob21lLWNvbnN0cnVjdGlvbi1zYXJrLWNvbnN0cnVjdGlvbi1jaGVubmFpLnN2ZWx0ZSAtLT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBzZXJ2aWNlRGV0YWlscyA9IHtcbiAgICB0aXRsZTogXCJIb21lIENvbnN0cnVjdGlvbiAtIFNhcmsgQ29uc3RydWN0aW9uLCBDaGVubmFpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhbnNmb3JtaW5nIERyZWFtcyBpbnRvIFJlYWxpdHkgd2l0aCBRdWFsaXR5IENvbnN0cnVjdGlvbiBTZXJ2aWNlc1wiLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICBcIkN1c3RvbWl6ZWQgZGVzaWduIGFuZCBwbGFubmluZyB0YWlsb3JlZCB0byB5b3VyIHByZWZlcmVuY2VzXCIsXG4gICAgICBcIkV4cGVyaWVuY2VkIGNvbnN0cnVjdGlvbiB0ZWFtIHdpdGggYSBwYXNzaW9uIGZvciBleGNlbGxlbmNlXCIsXG4gICAgICBcIlByZW1pdW0gcXVhbGl0eSBtYXRlcmlhbHMgYW5kIGNyYWZ0c21hbnNoaXBcIixcbiAgICAgIFwiQ29tbWl0dGVkIHRvIG9uLXRpbWUgcHJvamVjdCBjb21wbGV0aW9uXCIsXG4gICAgICBcIkJ1ZGdldC1mcmllbmRseSBvcHRpb25zIHdpdGhvdXQgY29tcHJvbWlzaW5nIHF1YWxpdHlcIlxuICAgIF1cbiAgfTtcbjwvc2NyaXB0PlxuXG48c2VjdGlvbiBpZD1cIm1haW4tY29udGFpbmVyXCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC04IGNvbC1sZy04XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWlubmVyLXBhZ2VcIj5cblxuICAgICAgICAgIDxoMiBjbGFzcz1cImNvbHVtbi10aXRsZSBtdC0wXCI+e3NlcnZpY2VEZXRhaWxzLnRpdGxlfTwvaDI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxwPntzZXJ2aWNlRGV0YWlscy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEF0IFNhcmsgQ29uc3RydWN0aW9uLCB3ZSBiZWxpZXZlIGluIHR1cm5pbmcgeW91ciBkcmVhbSBob21lIHZpc2lvbiBpbnRvIGEgdGFuZ2libGUgcmVhbGl0eS4gT3VyIGRlZGljYXRlZCB0ZWFtIG9mIHByb2Zlc3Npb25hbHMgaXMgY29tbWl0dGVkIHRvIGRlbGl2ZXJpbmcgY29uc3RydWN0aW9uIHNlcnZpY2VzIHRoYXQgZXhjZWVkIGV4cGVjdGF0aW9ucy4gV2hldGhlciB5b3UncmUgZW52aXNpb25pbmcgYSBtb2Rlcm4gbWFzdGVycGllY2Ugb3IgYSBjb3p5IHRyYWRpdGlvbmFsIGhvbWUsIHdlIGhhdmUgdGhlIGV4cGVydGlzZSB0byBicmluZyB5b3VyIGlkZWFzIHRvIGxpZmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgV2l0aCBhIGZvY3VzIG9uIHF1YWxpdHkgbWF0ZXJpYWxzLCBwcmVjaXNlIGNyYWZ0c21hbnNoaXAsIGFuZCBhIGNsaWVudC1jZW50cmljIGFwcHJvYWNoLCB3ZSBzdGFuZCBvdXQgYXMgYSByZWxpYWJsZSBwYXJ0bmVyIGZvciB5b3VyIGhvbWUgY29uc3RydWN0aW9uIG5lZWRzLiBPdXIgYXR0ZW50aW9uIHRvIGRldGFpbCwgdHJhbnNwYXJlbnQgY29tbXVuaWNhdGlvbiwgYW5kIGFkaGVyZW5jZSB0byB0aW1lbGluZXMgbWFrZSB1cyB0aGUgcHJlZmVycmVkIGNob2ljZSBmb3IgaG9tZW93bmVycyBpbiBDaGVubmFpLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj48IS0tIDFzdCByb3cgZW5kLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLTQwXCI+PC9kaXY+XG5cbiAgICAgICAgICA8IS0tIEltYWdlIFNsaWRlciBTZWN0aW9uIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2Utc2xpZGVyXCIgY2xhc3M9XCJwYWdlLXNsaWRlciBzbGljay1pbml0aWFsaXplZCBzbGljay1zbGlkZXJcIj5cbiAgICAgICAgICAgICAgICA8IS0tIC4uLiBFeGlzdGluZyBjb2RlIGZvciB0aGUgaW1hZ2Ugc2xpZGVyIC4uLiAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+PCEtLSBQYWdlIHNsaWRlciBlbmQgLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIEltYWdlIFNsaWRlciBTZWN0aW9uIGVuZCAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtNDBcIj48L2Rpdj5cblxuICAgICAgICAgIDwhLS0gS2V5IEZlYXR1cmVzIFNlY3Rpb24gLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbHVtbi10aXRsZS1zbWFsbFwiPldoYXQgU2V0cyBVcyBBcGFydDwvaDM+XG5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQ2hvb3NpbmcgU2FyayBDb25zdHJ1Y3Rpb24gbWVhbnMgY2hvb3NpbmcgZXhjZWxsZW5jZS4gSGVyZSdzIHdoYXQgc2V0cyB1cyBhcGFydCBmcm9tIHRoZSByZXN0OlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICB7I2VhY2ggc2VydmljZURldGFpbHMuZmVhdHVyZXMgYXMgZmVhdHVyZSAoZmVhdHVyZSl9XG4gICAgICAgICAgICAgICAgICA8bGk+e2ZlYXR1cmV9PC9saT5cbiAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IG10LTUgbXQtbWQtMFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjb2x1bW4tdGl0bGUtc21hbGxcIj5LZXkgQ29uc2lkZXJhdGlvbnM8L2gzPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24gYWNjb3JkaW9uLWdyb3VwIGFjY29yZGlvbi1jbGFzc2ljXCIgaWQ9XCJjb25zdHJ1Y3Rpb24tYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgPCEtLSAuLi4gRXhpc3RpbmcgY29kZSBmb3IgYWNjb3JkaW9uIC4uLiAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+PCEtLSBBY2NvcmRpb24gZW5kIC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSBLZXkgRmVhdHVyZXMgU2VjdGlvbiBlbmQgLS0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLTQwXCI+PC9kaXY+XG5cbiAgICAgICAgICA8IS0tIENhbGwtdG8tQWN0aW9uIFNlY3Rpb24gLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbC10by1hY3Rpb24gY2xhc3NpY1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggdGV4dC1jZW50ZXIgdGV4dC1tZC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxsLXRvLWFjdGlvbi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWN0aW9uLXRpdGxlXCI+UmVhZHkgdG8gdHVybiB5b3VyIGRyZWFtIGhvbWUgaW50byByZWFsaXR5PzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSBDb2wgZW5kIC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IHRleHQtY2VudGVyIHRleHQtbWQtcmlnaHQgbXQtMyBtdC1tZC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxsLXRvLWFjdGlvbi1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGhyZWY9XCIvXCI+R2V0IGEgUXVvdGU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSBDb2wgZW5kIC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gUm93IGVuZCAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+PCEtLSBDYWxsLXRvLUFjdGlvbiBlbmQgLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIENhbGwtdG8tQWN0aW9uIFNlY3Rpb24gZW5kIC0tPlxuXG4gICAgICAgIDwvZGl2PjwhLS0gQ29udGVudCBpbm5lciBlbmQgLS0+XG4gICAgICA8L2Rpdj48IS0tIENvbnRlbnQgQ29sIGVuZCAtLT5cblxuICAgICAgPCEtLSAuLi4gRXhpc3RpbmcgY29kZSBmb3IgdGhlIHNpZGViYXIgLi4uIC0tPlxuXG4gICAgPC9kaXY+PCEtLSBNYWluIHJvdyBlbmQgLS0+XG4gIDwvZGl2PjwhLS0gQ29udGFpbmVyIGVuZCAtLT5cbjwvc2VjdGlvbj5cbjxzdHlsZT5cbiAgLyogQWRkaXRpb25hbCBzdHlsaW5nIGlmIG5lZWRlZCAqL1xuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzJCQTREdUIsR0FBTyxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBWixvQkFBa0IsQ0FBQSxNQUFBLEVBQUEsRUFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBOzs7OzswRUFBYixHQUFPLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsWUFBQSxDQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXRDVyxDQUFBLElBQUEsUUFBQSxzQkFBQSxHQUFjLElBQUMsS0FBSyxHQUFBLEVBQUEsQ0FBQTs7Ozs7O0FBSTNDLENBQUEsSUFBQSxRQUFBLHNCQUFBLEdBQWMsSUFBQyxXQUFXLEdBQUEsRUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDckIsQ0FBQSxJQUFBLFVBQUEsc0JBQUEsR0FBYyxJQUFDLFFBQVEsQ0FBQTs7b0NBQWEsR0FBTyxDQUFBLENBQUEsQ0FBQSxDQUFBOzs7Z0NBQWhELE1BQUksRUFBQSxDQUFBLElBQUEsQ0FBQSxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBaENMLDJVQUVILENBQUEsQ0FBQTs7O2FBQ0csc1NBRUgsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7O2NBcUIrQixvQkFBa0IsQ0FBQSxDQUFBOzs7Y0FFOUMsZ0dBRUgsQ0FBQSxDQUFB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
