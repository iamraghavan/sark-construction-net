import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, B as validate_each_argument, E as validate_each_keys, v as validate_slots, r as onMount, e as element, t as text, a as space, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, j as attr_dev, m as add_location, n as insert_hydration_dev, o as append_hydration_dev, O as set_data_dev, J as update_keyed_each, p as noop, k as src_url_equal, N as destroy_block } from './client.e0dcca21.js';
import 'jquery';

/* src/routes/house-construction.svelte generated by Svelte v3.59.2 */
const file = "src/routes/house-construction.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	child_ctx[5] = i;
	return child_ctx;
}

// (93:18) {#each imageData as item, index (item.id)}
function create_each_block(key_1, ctx) {
	let div;
	let img;
	let img_src_value;
	let t;

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			div = element("div");
			img = element("img");
			t = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			img = claim_element(div_nodes, "IMG", { src: true, class: true, alt: true });
			t = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(img.src, img_src_value = /*item*/ ctx[3].src)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "d-block w-100 svelte-2qvcca");
			attr_dev(img, "alt", /*item*/ ctx[3].alt);
			add_location(img, file, 94, 8, 2902);
			attr_dev(div, "class", "carousel-item " + (/*index*/ ctx[5] === activeIndex ? 'active' : '') + " svelte-2qvcca");
			add_location(div, file, 93, 6, 2826);
			this.first = div;
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, img);
			append_hydration_dev(div, t);
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(93:18) {#each imageData as item, index (item.id)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div22;
	let div21;
	let div20;
	let div19;
	let div18;
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
	let div6;
	let div5;
	let div4;
	let div3;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t9;
	let div7;
	let t10;
	let div9;
	let div8;
	let h30;
	let t11;
	let t12;
	let p3;
	let t13;
	let t14;
	let div10;
	let t15;
	let div13;
	let div11;
	let h31;
	let t16;
	let t17;
	let div12;
	let h32;
	let t18;
	let t19;
	let div14;
	let t20;
	let div17;
	let div16;
	let div15;
	let each_value = imageData;
	validate_each_argument(each_value);
	const get_key = ctx => /*item*/ ctx[3].id;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			div22 = element("div");
			div21 = element("div");
			div20 = element("div");
			div19 = element("div");
			div18 = element("div");
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
			div6 = element("div");
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t9 = space();
			div7 = element("div");
			t10 = space();
			div9 = element("div");
			div8 = element("div");
			h30 = element("h3");
			t11 = text("More Information");
			t12 = space();
			p3 = element("p");
			t13 = text("Here you can add additional information about Sark Construction.\n                Feel free to include details about your past projects, client\n                testimonials, or any other relevant information.");
			t14 = space();
			div10 = element("div");
			t15 = space();
			div13 = element("div");
			div11 = element("div");
			h31 = element("h3");
			t16 = text("What Sets Us Apart");
			t17 = space();
			div12 = element("div");
			h32 = element("h3");
			t18 = text("Key Considerations");
			t19 = space();
			div14 = element("div");
			t20 = space();
			div17 = element("div");
			div16 = element("div");
			div15 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div22 = claim_element(nodes, "DIV", { class: true });
			var div22_nodes = children(div22);
			div21 = claim_element(div22_nodes, "DIV", { class: true });
			var div21_nodes = children(div21);
			div20 = claim_element(div21_nodes, "DIV", { class: true });
			var div20_nodes = children(div20);
			div19 = claim_element(div20_nodes, "DIV", { class: true });
			var div19_nodes = children(div19);
			div18 = claim_element(div19_nodes, "DIV", { class: true });
			var div18_nodes = children(div18);
			h2 = claim_element(div18_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div18_nodes);
			div1 = claim_element(div18_nodes, "DIV", { class: true });
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
			t7 = claim_space(div18_nodes);
			div2 = claim_element(div18_nodes, "DIV", { class: true });
			children(div2).forEach(detach_dev);
			t8 = claim_space(div18_nodes);
			div6 = claim_element(div18_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);

			div4 = claim_element(div5_nodes, "DIV", {
				id: true,
				class: true,
				"data-bs-ride": true
			});

			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div3_nodes);
			}

			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t9 = claim_space(div18_nodes);
			div7 = claim_element(div18_nodes, "DIV", { class: true });
			children(div7).forEach(detach_dev);
			t10 = claim_space(div18_nodes);
			div9 = claim_element(div18_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			h30 = claim_element(div8_nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t11 = claim_text(h30_nodes, "More Information");
			h30_nodes.forEach(detach_dev);
			t12 = claim_space(div8_nodes);
			p3 = claim_element(div8_nodes, "P", {});
			var p3_nodes = children(p3);
			t13 = claim_text(p3_nodes, "Here you can add additional information about Sark Construction.\n                Feel free to include details about your past projects, client\n                testimonials, or any other relevant information.");
			p3_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			t14 = claim_space(div18_nodes);
			div10 = claim_element(div18_nodes, "DIV", { class: true });
			children(div10).forEach(detach_dev);
			t15 = claim_space(div18_nodes);
			div13 = claim_element(div18_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div11 = claim_element(div13_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			h31 = claim_element(div11_nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t16 = claim_text(h31_nodes, "What Sets Us Apart");
			h31_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			t17 = claim_space(div13_nodes);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			h32 = claim_element(div12_nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			t18 = claim_text(h32_nodes, "Key Considerations");
			h32_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			t19 = claim_space(div18_nodes);
			div14 = claim_element(div18_nodes, "DIV", { class: true });
			children(div14).forEach(detach_dev);
			t20 = claim_space(div18_nodes);
			div17 = claim_element(div18_nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			div16 = claim_element(div17_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			div15 = claim_element(div16_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			div15_nodes.forEach(detach_dev);
			div16_nodes.forEach(detach_dev);
			div17_nodes.forEach(detach_dev);
			div18_nodes.forEach(detach_dev);
			div19_nodes.forEach(detach_dev);
			div20_nodes.forEach(detach_dev);
			div21_nodes.forEach(detach_dev);
			div22_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "column-title mrt-0");
			add_location(h2, file, 63, 10, 1424);
			add_location(p0, file, 67, 14, 1564);
			add_location(p1, file, 68, 14, 1614);
			add_location(p2, file, 76, 14, 2077);
			attr_dev(div0, "class", "col-md-12");
			add_location(div0, file, 66, 12, 1526);
			attr_dev(div1, "class", "row");
			add_location(div1, file, 65, 10, 1496);
			attr_dev(div2, "class", "gap-40");
			add_location(div2, file, 86, 10, 2522);
			attr_dev(div3, "class", "carousel-inner svelte-2qvcca");
			add_location(div3, file, 91, 16, 2730);
			attr_dev(div4, "id", "carouselExampleSlidesOnly");
			attr_dev(div4, "class", "carousel slide svelte-2qvcca");
			attr_dev(div4, "data-bs-ride", "carousel");
			add_location(div4, file, 90, 14, 2630);
			attr_dev(div5, "class", "col-md-12");
			add_location(div5, file, 89, 12, 2592);
			attr_dev(div6, "class", "row");
			add_location(div6, file, 88, 10, 2562);
			attr_dev(div7, "class", "gap-40");
			add_location(div7, file, 104, 10, 3118);
			attr_dev(h30, "class", "column-title-small");
			add_location(h30, file, 109, 14, 3276);
			add_location(p3, file, 110, 14, 3343);
			attr_dev(div8, "class", "col-md-12");
			add_location(div8, file, 108, 12, 3238);
			attr_dev(div9, "class", "row");
			add_location(div9, file, 107, 10, 3208);
			attr_dev(div10, "class", "gap-40");
			add_location(div10, file, 119, 10, 3693);
			attr_dev(h31, "class", "column-title-small");
			add_location(h31, file, 124, 14, 3840);
			attr_dev(div11, "class", "col-md-6");
			add_location(div11, file, 123, 12, 3803);
			attr_dev(h32, "class", "column-title-small");
			add_location(h32, file, 129, 14, 4035);
			attr_dev(div12, "class", "col-md-6 mt-5 mt-md-0");
			add_location(div12, file, 128, 12, 3985);
			attr_dev(div13, "class", "row");
			add_location(div13, file, 122, 10, 3773);
			attr_dev(div14, "class", "gap-40");
			add_location(div14, file, 135, 10, 4245);
			attr_dev(div15, "class", "call-to-action classic");
			add_location(div15, file, 140, 14, 4395);
			attr_dev(div16, "class", "col-md-12");
			add_location(div16, file, 139, 12, 4357);
			attr_dev(div17, "class", "row");
			add_location(div17, file, 138, 10, 4327);
			attr_dev(div18, "class", "content-inner-page");
			add_location(div18, file, 62, 8, 1381);
			attr_dev(div19, "class", "col-xl-12 col-lg-12");
			add_location(div19, file, 61, 6, 1339);
			attr_dev(div20, "class", "row g-5");
			add_location(div20, file, 60, 4, 1311);
			attr_dev(div21, "class", "container");
			add_location(div21, file, 59, 2, 1283);
			attr_dev(div22, "class", "container-xxl py-5");
			add_location(div22, file, 57, 0, 1246);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div22, anchor);
			append_hydration_dev(div22, div21);
			append_hydration_dev(div21, div20);
			append_hydration_dev(div20, div19);
			append_hydration_dev(div19, div18);
			append_hydration_dev(div18, h2);
			append_hydration_dev(h2, t0);
			append_hydration_dev(div18, t1);
			append_hydration_dev(div18, div1);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, p0);
			append_hydration_dev(p0, t2);
			append_hydration_dev(div0, t3);
			append_hydration_dev(div0, p1);
			append_hydration_dev(p1, t4);
			append_hydration_dev(div0, t5);
			append_hydration_dev(div0, p2);
			append_hydration_dev(p2, t6);
			append_hydration_dev(div18, t7);
			append_hydration_dev(div18, div2);
			append_hydration_dev(div18, t8);
			append_hydration_dev(div18, div6);
			append_hydration_dev(div6, div5);
			append_hydration_dev(div5, div4);
			append_hydration_dev(div4, div3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div3, null);
				}
			}

			append_hydration_dev(div18, t9);
			append_hydration_dev(div18, div7);
			append_hydration_dev(div18, t10);
			append_hydration_dev(div18, div9);
			append_hydration_dev(div9, div8);
			append_hydration_dev(div8, h30);
			append_hydration_dev(h30, t11);
			append_hydration_dev(div8, t12);
			append_hydration_dev(div8, p3);
			append_hydration_dev(p3, t13);
			append_hydration_dev(div18, t14);
			append_hydration_dev(div18, div10);
			append_hydration_dev(div18, t15);
			append_hydration_dev(div18, div13);
			append_hydration_dev(div13, div11);
			append_hydration_dev(div11, h31);
			append_hydration_dev(h31, t16);
			append_hydration_dev(div13, t17);
			append_hydration_dev(div13, div12);
			append_hydration_dev(div12, h32);
			append_hydration_dev(h32, t18);
			append_hydration_dev(div18, t19);
			append_hydration_dev(div18, div14);
			append_hydration_dev(div18, t20);
			append_hydration_dev(div18, div17);
			append_hydration_dev(div17, div16);
			append_hydration_dev(div16, div15);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*serviceDetails*/ 1 && t0_value !== (t0_value = /*serviceDetails*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*serviceDetails*/ 1 && t2_value !== (t2_value = /*serviceDetails*/ ctx[0].description + "")) set_data_dev(t2, t2_value);

			if (dirty & /*imageData, activeIndex*/ 0) {
				each_value = imageData;
				validate_each_argument(each_value);
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div3, destroy_block, create_each_block, null, get_each_context);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div22);

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

	let pageSlider;

	onMount(() => {
		pageSlider = document.querySelector('#page-slider');

		if (pageSlider) {
			initializeSlider();
		}
	});

	function initializeSlider() {
		pageSlider.owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			autoplay: true,
			autoplayTimeout: 5000, // Adjust the timeout as needed
			autoplayHoverPause: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91c2UtY29uc3RydWN0aW9uLmNiZDQ2MDBlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2hvdXNlLWNvbnN0cnVjdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cbiAgXG5cbiAgZXhwb3J0IGxldCBzZXJ2aWNlRGV0YWlscyA9IHtcbiAgICB0aXRsZTogXCJIb21lIENvbnN0cnVjdGlvbiAtIFNhcmsgQ29uc3RydWN0aW9uLCBDaGVubmFpXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRyYW5zZm9ybWluZyBEcmVhbXMgaW50byBSZWFsaXR5IHdpdGggUXVhbGl0eSBDb25zdHJ1Y3Rpb24gU2VydmljZXNcIixcbiAgICBmZWF0dXJlczogW1xuICAgICAgXCJDdXN0b21pemVkIGRlc2lnbiBhbmQgcGxhbm5pbmcgdGFpbG9yZWQgdG8geW91ciBwcmVmZXJlbmNlc1wiLFxuICAgICAgXCJFeHBlcmllbmNlZCBjb25zdHJ1Y3Rpb24gdGVhbSB3aXRoIGEgcGFzc2lvbiBmb3IgZXhjZWxsZW5jZVwiLFxuICAgICAgXCJQcmVtaXVtIHF1YWxpdHkgbWF0ZXJpYWxzIGFuZCBjcmFmdHNtYW5zaGlwXCIsXG4gICAgICBcIkNvbW1pdHRlZCB0byBvbi10aW1lIHByb2plY3QgY29tcGxldGlvblwiLFxuICAgICAgXCJCdWRnZXQtZnJpZW5kbHkgb3B0aW9ucyB3aXRob3V0IGNvbXByb21pc2luZyBxdWFsaXR5XCIsXG4gICAgXVxuICB9XG5cbiAgbGV0IHBhZ2VTbGlkZXI7XG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIHBhZ2VTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS1zbGlkZXInKTtcblxuICAgIGlmIChwYWdlU2xpZGVyKSB7XG4gICAgICBpbml0aWFsaXplU2xpZGVyKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplU2xpZGVyKCkge1xuICAgIHBhZ2VTbGlkZXIub3dsQ2Fyb3VzZWwoe1xuICAgICAgaXRlbXM6IDEsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLCAvLyBBZGp1c3QgdGhlIHRpbWVvdXQgYXMgbmVlZGVkXG4gICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gICAgfSk7XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICNjYXJvdXNlbEV4YW1wbGVTbGlkZXNPbmx5IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2Fyb3VzZWwtaW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuXG5cbi8qIE9wdGlvbmFsOiBBZGp1c3Qgc3BhY2luZyBiZXR3ZWVuIGNhcm91c2VsIGl0ZW1zICovXG4uY2Fyb3VzZWwtaXRlbSB7XG4gIG1hcmdpbi1yaWdodDogMDsgLyogWW91IGNhbiBhZGp1c3QgdGhpcyB2YWx1ZSBiYXNlZCBvbiB5b3VyIGRlc2lnbiAqL1xufVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci14eGwgcHktNVwiPlxuIFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBnLTVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMTIgY29sLWxnLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWlubmVyLXBhZ2VcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJjb2x1bW4tdGl0bGUgbXJ0LTBcIj57c2VydmljZURldGFpbHMudGl0bGV9PC9oMj5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICA8cD57c2VydmljZURldGFpbHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBdCBTYXJrIENvbnN0cnVjdGlvbiwgd2UgYmVsaWV2ZSBpbiB0dXJuaW5nIHlvdXIgZHJlYW0gaG9tZSB2aXNpb25cbiAgICAgICAgICAgICAgICBpbnRvIGEgdGFuZ2libGUgcmVhbGl0eS4gT3VyIGRlZGljYXRlZCB0ZWFtIG9mIHByb2Zlc3Npb25hbHMgaXNcbiAgICAgICAgICAgICAgICBjb21taXR0ZWQgdG8gZGVsaXZlcmluZyBjb25zdHJ1Y3Rpb24gc2VydmljZXMgdGhhdCBleGNlZWRcbiAgICAgICAgICAgICAgICBleHBlY3RhdGlvbnMuIFdoZXRoZXIgeW91J3JlIGVudmlzaW9uaW5nIGEgbW9kZXJuIG1hc3RlcnBpZWNlIG9yIGFcbiAgICAgICAgICAgICAgICBjb3p5IHRyYWRpdGlvbmFsIGhvbWUsIHdlIGhhdmUgdGhlIGV4cGVydGlzZSB0byBicmluZyB5b3VyIGlkZWFzXG4gICAgICAgICAgICAgICAgdG8gbGlmZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBXaXRoIGEgZm9jdXMgb24gcXVhbGl0eSBtYXRlcmlhbHMsIHByZWNpc2UgY3JhZnRzbWFuc2hpcCwgYW5kIGFcbiAgICAgICAgICAgICAgICBjbGllbnQtY2VudHJpYyBhcHByb2FjaCwgd2Ugc3RhbmQgb3V0IGFzIGEgcmVsaWFibGUgcGFydG5lciBmb3JcbiAgICAgICAgICAgICAgICB5b3VyIGhvbWUgY29uc3RydWN0aW9uIG5lZWRzLiBPdXIgYXR0ZW50aW9uIHRvIGRldGFpbCwgdHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgICBjb21tdW5pY2F0aW9uLCBhbmQgYWRoZXJlbmNlIHRvIHRpbWVsaW5lcyBtYWtlIHVzIHRoZSBwcmVmZXJyZWRcbiAgICAgICAgICAgICAgICBjaG9pY2UgZm9yIGhvbWVvd25lcnMgaW4gQ2hlbm5haS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtNDBcIj48L2Rpdj5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxFeGFtcGxlU2xpZGVzT25seVwiIGNsYXNzPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgeyNlYWNoIGltYWdlRGF0YSBhcyBpdGVtLCBpbmRleCAoaXRlbS5pZCl9XG4gICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSB7aW5kZXggPT09IGFjdGl2ZUluZGV4ID8gJ2FjdGl2ZScgOiAnJ31cIj5cbiAgICAgICAgPGltZyBzcmM9e2l0ZW0uc3JjfSBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIiBhbHQ9e2l0ZW0uYWx0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgey9lYWNofVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdhcC00MFwiPjwvZGl2PlxuICBcbiAgICAgICAgICA8IS0tIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gU2VjdGlvbiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbHVtbi10aXRsZS1zbWFsbFwiPk1vcmUgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBIZXJlIHlvdSBjYW4gYWRkIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgU2FyayBDb25zdHJ1Y3Rpb24uXG4gICAgICAgICAgICAgICAgRmVlbCBmcmVlIHRvIGluY2x1ZGUgZGV0YWlscyBhYm91dCB5b3VyIHBhc3QgcHJvamVjdHMsIGNsaWVudFxuICAgICAgICAgICAgICAgIHRlc3RpbW9uaWFscywgb3IgYW55IG90aGVyIHJlbGV2YW50IGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gU2VjdGlvbiBlbmQgLS0+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtNDBcIj48L2Rpdj5cbiAgXG4gICAgICAgICAgPCEtLSBLZXkgRmVhdHVyZXMgU2VjdGlvbiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY29sdW1uLXRpdGxlLXNtYWxsXCI+V2hhdCBTZXRzIFVzIEFwYXJ0PC9oMz5cbiAgICAgICAgICAgICAgPCEtLSBFeGlzdGluZyBLZXkgRmVhdHVyZXMgY29udGVudC4uLiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBtdC01IG10LW1kLTBcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY29sdW1uLXRpdGxlLXNtYWxsXCI+S2V5IENvbnNpZGVyYXRpb25zPC9oMz5cbiAgICAgICAgICAgICAgPCEtLSBFeGlzdGluZyBLZXkgQ29uc2lkZXJhdGlvbnMgY29udGVudC4uLiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gS2V5IEZlYXR1cmVzIFNlY3Rpb24gZW5kIC0tPlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLTQwXCI+PC9kaXY+XG4gIFxuICAgICAgICAgIDwhLS0gQ2FsbC10by1BY3Rpb24gU2VjdGlvbiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxsLXRvLWFjdGlvbiBjbGFzc2ljXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBFeGlzdGluZyBDYWxsLXRvLUFjdGlvbiBjb250ZW50Li4uIC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gQ2FsbC10by1BY3Rpb24gU2VjdGlvbiBlbmQgLS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIENvbnRlbnQgaW5uZXIgZW5kIC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcblxuPC9kaXY+XG5cblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RmtCLEdBQUEsSUFBQSxDQUFBLGFBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxFQUFBLGFBQUEsWUFBQSxHQUFJLElBQUMsR0FBRyxDQUFBLEVBQUEsUUFBQSxDQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsYUFBQSxDQUFBLENBQUE7O0FBQTZCLEdBQUEsUUFBQSxDQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxHQUFJLElBQUMsR0FBRyxDQUFBLENBQUE7O0FBRDlCLEdBQUEsUUFBQSxDQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsZ0JBQUEsY0FBQSxHQUFLLENBQUssQ0FBQSxDQUFBLEtB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
