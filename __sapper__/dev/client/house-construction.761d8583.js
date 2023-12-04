import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, B as validate_each_argument, E as validate_each_keys, v as validate_slots, r as onMount, C as lodash, e as element, t as text, a as space, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, j as attr_dev, m as add_location, k as src_url_equal, n as insert_hydration_dev, o as append_hydration_dev, O as set_data_dev, J as update_keyed_each, p as noop, N as destroy_block } from './client.c748cd60.js';
import 'jquery';

/* src/routes/house-construction.svelte generated by Svelte v3.59.2 */
const file = "src/routes/house-construction.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	child_ctx[7] = i;
	return child_ctx;
}

// (101:18) {#each imageData as item, index (item.id)}
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
			if (!src_url_equal(img.src, img_src_value = /*item*/ ctx[5].src)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "d-block w-100 svelte-2qvcca");
			attr_dev(img, "alt", /*item*/ ctx[5].alt);
			add_location(img, file, 102, 8, 3129);

			attr_dev(div, "class", "carousel-item " + (/*index*/ ctx[7] === /*activeIndex*/ ctx[2]
			? 'active'
			: '') + " svelte-2qvcca");

			add_location(div, file, 101, 6, 3053);
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
		source: "(101:18) {#each imageData as item, index (item.id)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div28;
	let div27;
	let div26;
	let div25;
	let div24;
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
	let div8;
	let t11;
	let div19;
	let div18;
	let div17;
	let div16;
	let div15;
	let div14;
	let div11;
	let div10;
	let div9;
	let img;
	let img_src_value;
	let t12;
	let div13;
	let div12;
	let h3;
	let t13;
	let t14;
	let p3;
	let t15;
	let t16;
	let br0;
	let t17;
	let p4;
	let t18;
	let t19;
	let br1;
	let t20;
	let p5;
	let t21;
	let t22;
	let div20;
	let t23;
	let div23;
	let div22;
	let div21;
	let each_value = /*imageData*/ ctx[1];
	validate_each_argument(each_value);
	const get_key = ctx => /*item*/ ctx[5].id;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			div28 = element("div");
			div27 = element("div");
			div26 = element("div");
			div25 = element("div");
			div24 = element("div");
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
			div8 = element("div");
			t11 = space();
			div19 = element("div");
			div18 = element("div");
			div17 = element("div");
			div16 = element("div");
			div15 = element("div");
			div14 = element("div");
			div11 = element("div");
			div10 = element("div");
			div9 = element("div");
			img = element("img");
			t12 = space();
			div13 = element("div");
			div12 = element("div");
			h3 = element("h3");
			t13 = text("Sark Construction");
			t14 = space();
			p3 = element("p");
			t15 = text("At Sark Construction, we specialize in turning your dream home vision into a tangible reality. Our residential construction services encompass new home construction, remodeling, renovation, and custom home building. Whether you're embarking on your first home or upgrading to a larger one, our team is dedicated to bringing your vision to life.");
			t16 = space();
			br0 = element("br");
			t17 = space();
			p4 = element("p");
			t18 = text("We understand the significant investment involved in building a new home. Our goal is to make the process smooth and stress-free. The Sark Construction team is available to answer your questions and address concerns throughout the construction process.");
			t19 = space();
			br1 = element("br");
			t20 = space();
			p5 = element("p");
			t21 = text("Building strong relationships with our clients is a core value at Sark Construction. From the initial consultation to the final walk-through, we are committed to providing the best service possible. Thank you for considering Sark Construction for your residential construction needs. We look forward to collaborating with you to create your dream home.");
			t22 = space();
			div20 = element("div");
			t23 = space();
			div23 = element("div");
			div22 = element("div");
			div21 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div28 = claim_element(nodes, "DIV", { class: true });
			var div28_nodes = children(div28);
			div27 = claim_element(div28_nodes, "DIV", { class: true });
			var div27_nodes = children(div27);
			div26 = claim_element(div27_nodes, "DIV", { class: true });
			var div26_nodes = children(div26);
			div25 = claim_element(div26_nodes, "DIV", { class: true });
			var div25_nodes = children(div25);
			div24 = claim_element(div25_nodes, "DIV", { class: true });
			var div24_nodes = children(div24);
			h2 = claim_element(div24_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div24_nodes);
			div1 = claim_element(div24_nodes, "DIV", { class: true });
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
			t7 = claim_space(div24_nodes);
			div2 = claim_element(div24_nodes, "DIV", { class: true });
			children(div2).forEach(detach_dev);
			t8 = claim_space(div24_nodes);
			div6 = claim_element(div24_nodes, "DIV", { class: true });
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
			t9 = claim_space(div24_nodes);
			div7 = claim_element(div24_nodes, "DIV", { class: true });
			children(div7).forEach(detach_dev);
			t10 = claim_space(div24_nodes);
			div8 = claim_element(div24_nodes, "DIV", { class: true });
			children(div8).forEach(detach_dev);
			t11 = claim_space(div24_nodes);
			div19 = claim_element(div24_nodes, "DIV", { class: true });
			var div19_nodes = children(div19);
			div18 = claim_element(div19_nodes, "DIV", { class: true });
			var div18_nodes = children(div18);
			div17 = claim_element(div18_nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			div16 = claim_element(div17_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			div15 = claim_element(div16_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			div14 = claim_element(div15_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div11 = claim_element(div14_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			img = claim_element(div9_nodes, "IMG", { src: true, alt: true });
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			t12 = claim_space(div14_nodes);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			h3 = claim_element(div12_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t13 = claim_text(h3_nodes, "Sark Construction");
			h3_nodes.forEach(detach_dev);
			t14 = claim_space(div12_nodes);
			p3 = claim_element(div12_nodes, "P", {});
			var p3_nodes = children(p3);
			t15 = claim_text(p3_nodes, "At Sark Construction, we specialize in turning your dream home vision into a tangible reality. Our residential construction services encompass new home construction, remodeling, renovation, and custom home building. Whether you're embarking on your first home or upgrading to a larger one, our team is dedicated to bringing your vision to life.");
			p3_nodes.forEach(detach_dev);
			t16 = claim_space(div12_nodes);
			br0 = claim_element(div12_nodes, "BR", {});
			t17 = claim_space(div12_nodes);
			p4 = claim_element(div12_nodes, "P", {});
			var p4_nodes = children(p4);
			t18 = claim_text(p4_nodes, "We understand the significant investment involved in building a new home. Our goal is to make the process smooth and stress-free. The Sark Construction team is available to answer your questions and address concerns throughout the construction process.");
			p4_nodes.forEach(detach_dev);
			t19 = claim_space(div12_nodes);
			br1 = claim_element(div12_nodes, "BR", {});
			t20 = claim_space(div12_nodes);
			p5 = claim_element(div12_nodes, "P", {});
			var p5_nodes = children(p5);
			t21 = claim_text(p5_nodes, "Building strong relationships with our clients is a core value at Sark Construction. From the initial consultation to the final walk-through, we are committed to providing the best service possible. Thank you for considering Sark Construction for your residential construction needs. We look forward to collaborating with you to create your dream home.");
			p5_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			div15_nodes.forEach(detach_dev);
			div16_nodes.forEach(detach_dev);
			div17_nodes.forEach(detach_dev);
			div18_nodes.forEach(detach_dev);
			div19_nodes.forEach(detach_dev);
			t22 = claim_space(div24_nodes);
			div20 = claim_element(div24_nodes, "DIV", { class: true });
			children(div20).forEach(detach_dev);
			t23 = claim_space(div24_nodes);
			div23 = claim_element(div24_nodes, "DIV", { class: true });
			var div23_nodes = children(div23);
			div22 = claim_element(div23_nodes, "DIV", { class: true });
			var div22_nodes = children(div22);
			div21 = claim_element(div22_nodes, "DIV", { class: true });
			var div21_nodes = children(div21);
			div21_nodes.forEach(detach_dev);
			div22_nodes.forEach(detach_dev);
			div23_nodes.forEach(detach_dev);
			div24_nodes.forEach(detach_dev);
			div25_nodes.forEach(detach_dev);
			div26_nodes.forEach(detach_dev);
			div27_nodes.forEach(detach_dev);
			div28_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "column-title mrt-0");
			add_location(h2, file, 71, 10, 1651);
			add_location(p0, file, 75, 14, 1791);
			add_location(p1, file, 76, 14, 1841);
			add_location(p2, file, 84, 14, 2304);
			attr_dev(div0, "class", "col-md-12");
			add_location(div0, file, 74, 12, 1753);
			attr_dev(div1, "class", "row");
			add_location(div1, file, 73, 10, 1723);
			attr_dev(div2, "class", "gap-40");
			add_location(div2, file, 94, 10, 2749);
			attr_dev(div3, "class", "carousel-inner svelte-2qvcca");
			add_location(div3, file, 99, 16, 2957);
			attr_dev(div4, "id", "carouselExampleSlidesOnly");
			attr_dev(div4, "class", "carousel slide svelte-2qvcca");
			attr_dev(div4, "data-bs-ride", "carousel");
			add_location(div4, file, 98, 14, 2857);
			attr_dev(div5, "class", "col-md-12");
			add_location(div5, file, 97, 12, 2819);
			attr_dev(div6, "class", "row");
			add_location(div6, file, 96, 10, 2789);
			attr_dev(div7, "class", "gap-40");
			add_location(div7, file, 112, 10, 3345);
			attr_dev(div8, "class", "gap-40");
			add_location(div8, file, 118, 10, 3503);
			if (!src_url_equal(img.src, img_src_value = "../images/s-1.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			add_location(img, file, 130, 42, 4040);
			attr_dev(div9, "class", "mt-media");
			add_location(div9, file, 129, 38, 3975);
			attr_dev(div10, "class", "service-about-left");
			add_location(div10, file, 128, 34, 3904);
			attr_dev(div11, "class", "col-lg-5 col-md-12");
			add_location(div11, file, 127, 30, 3837);
			attr_dev(h3, "class", "m-t0");
			add_location(h3, file, 136, 38, 4375);
			add_location(p3, file, 137, 38, 4453);
			add_location(br0, file, 140, 38, 4925);
			add_location(p4, file, 141, 38, 4968);
			add_location(br1, file, 144, 38, 5348);
			add_location(p5, file, 145, 38, 5391);
			attr_dev(div12, "class", "service-about-right m-b30");
			add_location(div12, file, 135, 34, 4297);
			attr_dev(div13, "class", "col-lg-7 col-md-12");
			add_location(div13, file, 134, 30, 4230);
			attr_dev(div14, "class", "row g-5");
			add_location(div14, file, 126, 26, 3785);
			attr_dev(div15, "class", "g-5");
			add_location(div15, file, 125, 22, 3741);
			attr_dev(div16, "class", "section-content");
			add_location(div16, file, 124, 18, 3689);
			attr_dev(div17, "class", "container");
			add_location(div17, file, 123, 14, 3647);
			attr_dev(div18, "class", "mt-10");
			add_location(div18, file, 122, 12, 3613);
			attr_dev(div19, "class", "row");
			add_location(div19, file, 121, 10, 3583);
			attr_dev(div20, "class", "gap-40");
			add_location(div20, file, 160, 10, 6160);
			attr_dev(div21, "class", "call-to-action classic");
			add_location(div21, file, 165, 14, 6310);
			attr_dev(div22, "class", "col-md-12");
			add_location(div22, file, 164, 12, 6272);
			attr_dev(div23, "class", "row");
			add_location(div23, file, 163, 10, 6242);
			attr_dev(div24, "class", "content-inner-page");
			add_location(div24, file, 70, 8, 1608);
			attr_dev(div25, "class", "col-xl-12 col-lg-12");
			add_location(div25, file, 69, 6, 1566);
			attr_dev(div26, "class", "row g-5");
			add_location(div26, file, 68, 4, 1538);
			attr_dev(div27, "class", "container");
			add_location(div27, file, 67, 2, 1510);
			attr_dev(div28, "class", "container-xxl py-5");
			add_location(div28, file, 65, 0, 1473);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div28, anchor);
			append_hydration_dev(div28, div27);
			append_hydration_dev(div27, div26);
			append_hydration_dev(div26, div25);
			append_hydration_dev(div25, div24);
			append_hydration_dev(div24, h2);
			append_hydration_dev(h2, t0);
			append_hydration_dev(div24, t1);
			append_hydration_dev(div24, div1);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, p0);
			append_hydration_dev(p0, t2);
			append_hydration_dev(div0, t3);
			append_hydration_dev(div0, p1);
			append_hydration_dev(p1, t4);
			append_hydration_dev(div0, t5);
			append_hydration_dev(div0, p2);
			append_hydration_dev(p2, t6);
			append_hydration_dev(div24, t7);
			append_hydration_dev(div24, div2);
			append_hydration_dev(div24, t8);
			append_hydration_dev(div24, div6);
			append_hydration_dev(div6, div5);
			append_hydration_dev(div5, div4);
			append_hydration_dev(div4, div3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div3, null);
				}
			}

			append_hydration_dev(div24, t9);
			append_hydration_dev(div24, div7);
			append_hydration_dev(div24, t10);
			append_hydration_dev(div24, div8);
			append_hydration_dev(div24, t11);
			append_hydration_dev(div24, div19);
			append_hydration_dev(div19, div18);
			append_hydration_dev(div18, div17);
			append_hydration_dev(div17, div16);
			append_hydration_dev(div16, div15);
			append_hydration_dev(div15, div14);
			append_hydration_dev(div14, div11);
			append_hydration_dev(div11, div10);
			append_hydration_dev(div10, div9);
			append_hydration_dev(div9, img);
			append_hydration_dev(div14, t12);
			append_hydration_dev(div14, div13);
			append_hydration_dev(div13, div12);
			append_hydration_dev(div12, h3);
			append_hydration_dev(h3, t13);
			append_hydration_dev(div12, t14);
			append_hydration_dev(div12, p3);
			append_hydration_dev(p3, t15);
			append_hydration_dev(div12, t16);
			append_hydration_dev(div12, br0);
			append_hydration_dev(div12, t17);
			append_hydration_dev(div12, p4);
			append_hydration_dev(p4, t18);
			append_hydration_dev(div12, t19);
			append_hydration_dev(div12, br1);
			append_hydration_dev(div12, t20);
			append_hydration_dev(div12, p5);
			append_hydration_dev(p5, t21);
			append_hydration_dev(div24, t22);
			append_hydration_dev(div24, div20);
			append_hydration_dev(div24, t23);
			append_hydration_dev(div24, div23);
			append_hydration_dev(div23, div22);
			append_hydration_dev(div22, div21);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*serviceDetails*/ 1 && t0_value !== (t0_value = /*serviceDetails*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*serviceDetails*/ 1 && t2_value !== (t2_value = /*serviceDetails*/ ctx[0].description + "")) set_data_dev(t2, t2_value);

			if (dirty & /*imageData, activeIndex*/ 6) {
				each_value = /*imageData*/ ctx[1];
				validate_each_argument(each_value);
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div3, destroy_block, create_each_block, null, get_each_context);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div28);

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

	const imageData = [
		{
			id: 1,
			src: 'img/carousel-1.jpg',
			alt: 'Image 1'
		},
		{
			id: 2,
			src: 'img/carousel-2.jpg',
			alt: 'Image 2'
		}
	]; // Add more images as needed

	let activeIndex = 0; // Initial active index

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
		_: lodash,
		imageData,
		activeIndex,
		serviceDetails,
		pageSlider,
		initializeSlider
	});

	$$self.$inject_state = $$props => {
		if ('activeIndex' in $$props) $$invalidate(2, activeIndex = $$props.activeIndex);
		if ('serviceDetails' in $$props) $$invalidate(0, serviceDetails = $$props.serviceDetails);
		if ('pageSlider' in $$props) pageSlider = $$props.pageSlider;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [serviceDetails, imageData, activeIndex];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91c2UtY29uc3RydWN0aW9uLjc2MWQ4NTgzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2hvdXNlLWNvbnN0cnVjdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cbiAgaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgaW1hZ2VEYXRhID0gW1xuICB7IGlkOiAxLCBzcmM6ICdpbWcvY2Fyb3VzZWwtMS5qcGcnLCBhbHQ6ICdJbWFnZSAxJyB9LFxuICB7IGlkOiAyLCBzcmM6ICdpbWcvY2Fyb3VzZWwtMi5qcGcnLCBhbHQ6ICdJbWFnZSAyJyB9LFxuICAvLyBBZGQgbW9yZSBpbWFnZXMgYXMgbmVlZGVkXG5dO1xuXG5sZXQgYWN0aXZlSW5kZXggPSAwOyAvLyBJbml0aWFsIGFjdGl2ZSBpbmRleFxuXG4gIGV4cG9ydCBsZXQgc2VydmljZURldGFpbHMgPSB7XG4gICAgdGl0bGU6IFwiSG9tZSBDb25zdHJ1Y3Rpb24gLSBTYXJrIENvbnN0cnVjdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUcmFuc2Zvcm1pbmcgRHJlYW1zIGludG8gUmVhbGl0eSB3aXRoIFF1YWxpdHkgQ29uc3RydWN0aW9uIFNlcnZpY2VzXCIsXG4gICAgZmVhdHVyZXM6IFtcbiAgICAgIFwiQ3VzdG9taXplZCBkZXNpZ24gYW5kIHBsYW5uaW5nIHRhaWxvcmVkIHRvIHlvdXIgcHJlZmVyZW5jZXNcIixcbiAgICAgIFwiRXhwZXJpZW5jZWQgY29uc3RydWN0aW9uIHRlYW0gd2l0aCBhIHBhc3Npb24gZm9yIGV4Y2VsbGVuY2VcIixcbiAgICAgIFwiUHJlbWl1bSBxdWFsaXR5IG1hdGVyaWFscyBhbmQgY3JhZnRzbWFuc2hpcFwiLFxuICAgICAgXCJDb21taXR0ZWQgdG8gb24tdGltZSBwcm9qZWN0IGNvbXBsZXRpb25cIixcbiAgICAgIFwiQnVkZ2V0LWZyaWVuZGx5IG9wdGlvbnMgd2l0aG91dCBjb21wcm9taXNpbmcgcXVhbGl0eVwiLFxuICAgIF1cbiAgfVxuXG4gIGxldCBwYWdlU2xpZGVyO1xuICBvbk1vdW50KCgpID0+IHtcbiAgICBwYWdlU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2Utc2xpZGVyJyk7XG5cbiAgICBpZiAocGFnZVNsaWRlcikge1xuICAgICAgaW5pdGlhbGl6ZVNsaWRlcigpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZVNsaWRlcigpIHtcbiAgICBwYWdlU2xpZGVyLm93bENhcm91c2VsKHtcbiAgICAgIGl0ZW1zOiAxLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCwgLy8gQWRqdXN0IHRoZSB0aW1lb3V0IGFzIG5lZWRlZFxuICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgIH0pO1xuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAjY2Fyb3VzZWxFeGFtcGxlU2xpZGVzT25seSB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNhcm91c2VsLWlubmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cblxuXG4vKiBPcHRpb25hbDogQWRqdXN0IHNwYWNpbmcgYmV0d2VlbiBjYXJvdXNlbCBpdGVtcyAqL1xuLmNhcm91c2VsLWl0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDA7IC8qIFlvdSBjYW4gYWRqdXN0IHRoaXMgdmFsdWUgYmFzZWQgb24geW91ciBkZXNpZ24gKi9cbn1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXIteHhsIHB5LTVcIj5cbiBcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZy01XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1pbm5lci1wYWdlXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwiY29sdW1uLXRpdGxlIG1ydC0wXCI+e3NlcnZpY2VEZXRhaWxzLnRpdGxlfTwvaDI+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPHA+e3NlcnZpY2VEZXRhaWxzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQXQgU2FyayBDb25zdHJ1Y3Rpb24sIHdlIGJlbGlldmUgaW4gdHVybmluZyB5b3VyIGRyZWFtIGhvbWUgdmlzaW9uXG4gICAgICAgICAgICAgICAgaW50byBhIHRhbmdpYmxlIHJlYWxpdHkuIE91ciBkZWRpY2F0ZWQgdGVhbSBvZiBwcm9mZXNzaW9uYWxzIGlzXG4gICAgICAgICAgICAgICAgY29tbWl0dGVkIHRvIGRlbGl2ZXJpbmcgY29uc3RydWN0aW9uIHNlcnZpY2VzIHRoYXQgZXhjZWVkXG4gICAgICAgICAgICAgICAgZXhwZWN0YXRpb25zLiBXaGV0aGVyIHlvdSdyZSBlbnZpc2lvbmluZyBhIG1vZGVybiBtYXN0ZXJwaWVjZSBvciBhXG4gICAgICAgICAgICAgICAgY296eSB0cmFkaXRpb25hbCBob21lLCB3ZSBoYXZlIHRoZSBleHBlcnRpc2UgdG8gYnJpbmcgeW91ciBpZGVhc1xuICAgICAgICAgICAgICAgIHRvIGxpZmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgV2l0aCBhIGZvY3VzIG9uIHF1YWxpdHkgbWF0ZXJpYWxzLCBwcmVjaXNlIGNyYWZ0c21hbnNoaXAsIGFuZCBhXG4gICAgICAgICAgICAgICAgY2xpZW50LWNlbnRyaWMgYXBwcm9hY2gsIHdlIHN0YW5kIG91dCBhcyBhIHJlbGlhYmxlIHBhcnRuZXIgZm9yXG4gICAgICAgICAgICAgICAgeW91ciBob21lIGNvbnN0cnVjdGlvbiBuZWVkcy4gT3VyIGF0dGVudGlvbiB0byBkZXRhaWwsIHRyYW5zcGFyZW50XG4gICAgICAgICAgICAgICAgY29tbXVuaWNhdGlvbiwgYW5kIGFkaGVyZW5jZSB0byB0aW1lbGluZXMgbWFrZSB1cyB0aGUgcHJlZmVycmVkXG4gICAgICAgICAgICAgICAgY2hvaWNlIGZvciBob21lb3duZXJzIGluIENoZW5uYWkuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLTQwXCI+PC9kaXY+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcm91c2VsRXhhbXBsZVNsaWRlc09ubHlcIiBjbGFzcz1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsjZWFjaCBpbWFnZURhdGEgYXMgaXRlbSwgaW5kZXggKGl0ZW0uaWQpfVxuICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0ge2luZGV4ID09PSBhY3RpdmVJbmRleCA/ICdhY3RpdmUnIDogJyd9XCI+XG4gICAgICAgIDxpbWcgc3JjPXtpdGVtLnNyY30gY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIgYWx0PXtpdGVtLmFsdH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIHsvZWFjaH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtNDBcIj48L2Rpdj5cbiAgXG4gICAgICAgICAgPCEtLSBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIFNlY3Rpb24gLS0+XG4gICAgICAgICAgXG4gICAgICAgICAgPCEtLSBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIFNlY3Rpb24gZW5kIC0tPlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FwLTQwXCI+PC9kaXY+XG4gIFxuICAgICAgICAgIDwhLS0gS2V5IEZlYXR1cmVzIFNlY3Rpb24gLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZy01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTUgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcnZpY2UtYWJvdXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtbWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL3MtMS5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNyBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VydmljZS1hYm91dC1yaWdodCBtLWIzMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtLXQwXCI+U2FyayBDb25zdHJ1Y3Rpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0IFNhcmsgQ29uc3RydWN0aW9uLCB3ZSBzcGVjaWFsaXplIGluIHR1cm5pbmcgeW91ciBkcmVhbSBob21lIHZpc2lvbiBpbnRvIGEgdGFuZ2libGUgcmVhbGl0eS4gT3VyIHJlc2lkZW50aWFsIGNvbnN0cnVjdGlvbiBzZXJ2aWNlcyBlbmNvbXBhc3MgbmV3IGhvbWUgY29uc3RydWN0aW9uLCByZW1vZGVsaW5nLCByZW5vdmF0aW9uLCBhbmQgY3VzdG9tIGhvbWUgYnVpbGRpbmcuIFdoZXRoZXIgeW91J3JlIGVtYmFya2luZyBvbiB5b3VyIGZpcnN0IGhvbWUgb3IgdXBncmFkaW5nIHRvIGEgbGFyZ2VyIG9uZSwgb3VyIHRlYW0gaXMgZGVkaWNhdGVkIHRvIGJyaW5naW5nIHlvdXIgdmlzaW9uIHRvIGxpZmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIHVuZGVyc3RhbmQgdGhlIHNpZ25pZmljYW50IGludmVzdG1lbnQgaW52b2x2ZWQgaW4gYnVpbGRpbmcgYSBuZXcgaG9tZS4gT3VyIGdvYWwgaXMgdG8gbWFrZSB0aGUgcHJvY2VzcyBzbW9vdGggYW5kIHN0cmVzcy1mcmVlLiBUaGUgU2FyayBDb25zdHJ1Y3Rpb24gdGVhbSBpcyBhdmFpbGFibGUgdG8gYW5zd2VyIHlvdXIgcXVlc3Rpb25zIGFuZCBhZGRyZXNzIGNvbmNlcm5zIHRocm91Z2hvdXQgdGhlIGNvbnN0cnVjdGlvbiBwcm9jZXNzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdWlsZGluZyBzdHJvbmcgcmVsYXRpb25zaGlwcyB3aXRoIG91ciBjbGllbnRzIGlzIGEgY29yZSB2YWx1ZSBhdCBTYXJrIENvbnN0cnVjdGlvbi4gRnJvbSB0aGUgaW5pdGlhbCBjb25zdWx0YXRpb24gdG8gdGhlIGZpbmFsIHdhbGstdGhyb3VnaCwgd2UgYXJlIGNvbW1pdHRlZCB0byBwcm92aWRpbmcgdGhlIGJlc3Qgc2VydmljZSBwb3NzaWJsZS4gVGhhbmsgeW91IGZvciBjb25zaWRlcmluZyBTYXJrIENvbnN0cnVjdGlvbiBmb3IgeW91ciByZXNpZGVudGlhbCBjb25zdHJ1Y3Rpb24gbmVlZHMuIFdlIGxvb2sgZm9yd2FyZCB0byBjb2xsYWJvcmF0aW5nIHdpdGggeW91IHRvIGNyZWF0ZSB5b3VyIGRyZWFtIGhvbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSBLZXkgRmVhdHVyZXMgU2VjdGlvbiBlbmQgLS0+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtNDBcIj48L2Rpdj5cbiAgXG4gICAgICAgICAgPCEtLSBDYWxsLXRvLUFjdGlvbiBTZWN0aW9uIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGwtdG8tYWN0aW9uIGNsYXNzaWNcIj5cbiAgICAgICAgICAgICAgICA8IS0tIEV4aXN0aW5nIENhbGwtdG8tQWN0aW9uIGNvbnRlbnQuLi4gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSBDYWxsLXRvLUFjdGlvbiBTZWN0aW9uIGVuZCAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gQ29udGVudCBpbm5lciBlbmQgLS0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIFxuXG48L2Rpdj5cblxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNHa0IsR0FBQSxJQUFBLENBQUEsYUFBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLEVBQUEsYUFBQSxZQUFBLEdBQUksSUFBQyxHQUFHLENBQUEsRUFBQSxRQUFBLENBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxhQUFBLENBQUEsQ0FBQTs7QUFBNkIsR0FBQSxRQUFBLENBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxTQUFBLEdBQUksSUFBQyxHQUFHLENBQUEsQ0FBQTs7O0FBRDlCLEdBQUEsUUFBQSxDQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsZ0JBQUEsY0FBQSxHQUFLLHdCQUFLLEdBQVcsQ0FBQSxDQUFBLENBQUE7S0FBRyxRQUFRO0tBQUcsRUFBRSxDQUFBLEdBQUEsZ0JBQUEsQ0FBQSxDQUFBOzs7Ozs7R0FBaEUsb0JBRU0sQ0FBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBO0dBREosb0JBQTJELENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQS9CekIsQ0FBQSxJQUFBLFFBQUEsc0JBQUEsR0FBYyxJQUFDLEtBQUssR0FBQSxFQUFBLENBQUE7Ozs7OztBQUk1QyxDQUFBLElBQUEsUUFBQSxzQkFBQSxHQUFjLElBQUMsV0FBVyxHQUFBLEVBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQXlCbkIsR0FBUyxDQUFBLENBQUEsQ0FBQSxDQUFBOztBQUFpQixDQUFBLE1BQUEsT0FBQSxHQUFBLEdBQUEsYUFBQSxHQUFJLElBQUMsRUFBRSxDQUFBOzs7Z0NBQXRDLE1BQUksRUFBQSxDQUFBLElBQUEsQ0FBQSxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBeEJQLGdhQU9ILENBQUEsQ0FBQTs7O2FBQ0csMFdBTUgsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQThDeUMsbUJBQWlCLENBQUEsQ0FBQTs7O2NBQy9CLDBWQUVILENBQUEsQ0FBQTs7Ozs7Y0FFRyw4UEFFSCxDQUFBLENBQUE7Ozs7O2NBRUcsa1dBRUgsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBdkVyQixnYUFPSCxDQUFBLENBQUE7Ozs7OzZCQUNHLDBXQU1ILENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkE4Q3lDLG1CQUFpQixDQUFBLENBQUE7Ozs7OzhCQUMvQiwwVkFFSCxDQUFBLENBQUE7Ozs7Ozs7OEJBRUcsOFBBRUgsQ0FBQSxDQUFBOzs7Ozs7OzhCQUVHLGtXQUVILENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbEZ0QyxvQkFpSE0sQ0FBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBO0dBL0dKLG9CQTRHTSxDQUFBLEtBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQTtHQTNHSixvQkEwR00sQ0FBQSxLQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7R0F6R0osb0JBd0dNLENBQUEsS0FBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO0dBdkdKLG9CQXFHTSxDQUFBLEtBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQTtHQXBHSixvQkFBMEQsQ0FBQSxLQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7OztHQUUxRCxvQkFtQk0sQ0FBQSxLQUFBLEVBQUEsSUFBQSxDQUFBLENBQUE7R0FsQkosb0JBaUJNLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0dBaEJKLG9CQUFtQyxDQUFBLElBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTs7O0dBQ25DLG9CQU9JLENBQUEsSUFBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBOzs7R0FDSixvQkFNSSxDQUFBLElBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTs7O0dBSVIsb0JBQTBCLENBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBOztHQUUxQixvQkFjTSxDQUFBLEtBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQTtHQWJKLG9CQVlNLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0dBWEosb0JBVU0sQ0FBQSxJQUFBLEVBQUEsSUFBQSxDQUFBLENBQUE7R0FUSixvQkFRTSxDQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7O0dBS1osb0JBQTBCLENBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBOztHQU0xQixvQkFBMEIsQ0FBQSxLQUFBLEVBQUEsSUFBQSxDQUFBLENBQUE7O0dBRzFCLG9CQW9DTSxDQUFBLEtBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQTtHQW5DSixvQkFpQ0ksQ0FBQSxLQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7R0FoQ0Ysb0JBK0JNLENBQUEsS0FBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO0dBOUJGLG9CQTZCTSxDQUFBLEtBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQTtHQTVCRixvQkEyQk0sQ0FBQSxLQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7R0ExQkYsb0JBeUJNLENBQUEsS0FBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO0dBeEJGLG9CQU1NLENBQUEsS0FBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO0dBTEYsb0JBSU0sQ0FBQSxLQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7R0FIRixvQkFFTSxDQUFBLEtBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQTtHQURGLG9CQUFvQyxDQUFBLElBQUEsRUFBQSxHQUFBLENBQUEsQ0FBQTs7R0FJaEQsb0JBZ0JNLENBQUEsS0FBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO0dBZkYsb0JBY00sQ0FBQSxLQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7R0FiRixvQkFBdUMsQ0FBQSxLQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7OztHQUN2QyxvQkFFSSxDQUFBLEtBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTs7O0dBQ0osb0JBQUksQ0FBQSxLQUFBLEVBQUEsR0FBQSxDQUFBLENBQUE7O0dBQ0osb0JBRUksQ0FBQSxLQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7OztHQUNKLG9CQUFJLENBQUEsS0FBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBOztHQUNKLG9CQUVJLENBQUEsS0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBOzs7R0FhaEMsb0JBQTBCLENBQUEsS0FBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBOztHQUcxQixvQkFNTSxDQUFBLEtBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQTtHQUxKLG9CQUlNLENBQUEsS0FBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO0dBSEosb0JBRU0sQ0FBQSxLQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7OztBQWhHc0IsR0FBQSxJQUFBLEtBQUEsc0JBQUEsQ0FBQSxJQUFBLFFBQUEsTUFBQSxRQUFBLHNCQUFBLEdBQWMsSUFBQyxLQUFLLEdBQUEsRUFBQSxDQUFBLEVBQUEsWUFBQSxDQUFBLEVBQUEsRUFBQSxRQUFBLENBQUEsQ0FBQTtBQUk1QyxHQUFBLElBQUEsS0FBQSxzQkFBQSxDQUFBLElBQUEsUUFBQSxNQUFBLFFBQUEsc0JBQUEsR0FBYyxJQUFDLFdBQVcsR0FBQSxFQUFBLENBQUEsRUFBQSxZQUFBLENBQUEsRUFBQSxFQUFBLFFBQUEsQ0FBQSxDQUFBOzs7K0JBeUJuQixHQUFTLENBQUEsQ0FBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BL0Y1QixTQUFTLEdBQUE7O0FBQ1gsR0FBQSxFQUFFLEVBQUUsQ0FBQztBQUFFLEdBQUEsR0FBRyxFQUFFLG9CQUFvQjtBQUFFLEdBQUEsR0FBRyxFQUFFLFNBQVM7OztBQUNoRCxHQUFBLEVBQUUsRUFBRSxDQUFDO0FBQUUsR0FBQSxHQUFHLEVBQUUsb0JBQW9CO0FBQUUsR0FBQSxHQUFHLEVBQUUsU0FBUzs7OztBQUloRCxDQUFBLElBQUEsV0FBVyxHQUFHLENBQUMsQ0FBQTs7T0FFTixjQUFjLEdBQUE7QUFDdkIsRUFBQSxLQUFLLEVBQUUsdUNBQXVDO0FBQzlDLEVBQUEsV0FBVyxFQUNULHFFQUFxRTtFQUN2RSxRQUFRLEVBQUE7R0FDTiw2REFBNkQ7R0FDN0QsNkRBQTZEO0dBQzdELDZDQUE2QztHQUM3Qyx5Q0FBeUM7R0FDekMsc0RBQXNEOzs7O0tBSXRELFVBQVUsQ0FBQTs7Q0FDZCxPQUFPLENBQUEsTUFBQTtBQUNMLEVBQUEsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFBLENBQUE7O01BRTlDLFVBQVUsRUFBQTtHQUNaLGdCQUFnQixFQUFBLENBQUE7Ozs7VUFJWCxnQkFBZ0IsR0FBQTtBQUN2QixFQUFBLFVBQVUsQ0FBQyxXQUFXLENBQUE7QUFDcEIsR0FBQSxLQUFLLEVBQUUsQ0FBQztBQUNSLEdBQUEsSUFBSSxFQUFFLElBQUk7QUFDVixHQUFBLElBQUksRUFBRSxJQUFJO0FBQ1YsR0FBQSxRQUFRLEVBQUUsSUFBSTtBQUNkLEdBQUEsZUFBZSxFQUFFLElBQUk7QUFDckIsR0FBQSxrQkFBa0IsRUFBRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9