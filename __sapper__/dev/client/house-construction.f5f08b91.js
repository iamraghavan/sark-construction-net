import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, r as onMount, C as lodash, e as element, t as text, a as space, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, j as attr_dev, m as add_location, k as src_url_equal, l as set_style, n as insert_hydration_dev, o as append_hydration_dev, O as set_data_dev, p as noop } from './client.89b2ac52.js';
import 'jquery';

/* src/routes/house-construction.svelte generated by Svelte v3.59.2 */
const file = "src/routes/house-construction.svelte";

function create_fragment(ctx) {
	let div8;
	let div7;
	let div6;
	let div5;
	let div4;
	let div0;
	let h10;
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
	let div3;
	let t8;
	let div20;
	let div19;
	let div18;
	let div12;
	let div11;
	let img;
	let img_src_value;
	let t9;
	let div10;
	let div9;
	let h11;
	let t10;
	let t11;
	let h2;
	let t12;
	let t13;
	let h5;
	let t14;
	let t15;
	let div17;
	let div16;
	let h60;
	let t16;
	let t17;
	let h61;
	let t18;
	let t19;
	let div15;
	let div14;
	let div13;
	let i;
	let t20;
	let h62;
	let t21;

	const block = {
		c: function create() {
			div8 = element("div");
			div7 = element("div");
			div6 = element("div");
			div5 = element("div");
			div4 = element("div");
			div0 = element("div");
			h10 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			div2 = element("div");
			div1 = element("div");
			p0 = element("p");
			t2 = text(t2_value);
			t3 = space();
			p1 = element("p");
			t4 = text("At Sark Construction, we believe in turning your dream home vision\n                into a tangible reality. Our dedicated team of professionals is\n                committed to delivering construction services that exceed\n                expectations. Whether you're envisioning a modern masterpiece or a\n                cozy traditional home, we have the expertise to bring your ideas\n                to life.");
			t5 = space();
			p2 = element("p");
			t6 = text("With a focus on quality materials, precise craftsmanship, and a\n                client-centric approach, we stand out as a reliable partner for\n                your home construction needs. Our attention to detail, transparent\n                communication, and adherence to timelines make us the preferred\n                choice for homeowners in Chennai.");
			t7 = space();
			div3 = element("div");
			t8 = space();
			div20 = element("div");
			div19 = element("div");
			div18 = element("div");
			div12 = element("div");
			div11 = element("div");
			img = element("img");
			t9 = space();
			div10 = element("div");
			div9 = element("div");
			h11 = element("h1");
			t10 = text("5 +");
			t11 = space();
			h2 = element("h2");
			t12 = text("Years");
			t13 = space();
			h5 = element("h5");
			t14 = text("Experience");
			t15 = space();
			div17 = element("div");
			div16 = element("div");
			h60 = element("h6");
			t16 = text("At Sark Construction, we specialize in turning your dream home vision into a tangible reality. Our residential construction services encompass new home construction, remodeling, renovation, and custom home building. Whether you're embarking on your first home or upgrading to a larger one, our team is dedicated to bringing your vision to life.");
			t17 = space();
			h61 = element("h6");
			t18 = text("We understand the significant investment involved in building a new home. Our goal is to make the process smooth and stress-free. The Sark Construction team is available to answer your questions and address concerns throughout the construction process.");
			t19 = space();
			div15 = element("div");
			div14 = element("div");
			div13 = element("div");
			i = element("i");
			t20 = space();
			h62 = element("h6");
			t21 = text("Ontime at services");
			this.h();
		},
		l: function claim(nodes) {
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h10 = claim_element(div0_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t0 = claim_text(h10_nodes, t0_value);
			h10_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
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
			t4 = claim_text(p1_nodes, "At Sark Construction, we believe in turning your dream home vision\n                into a tangible reality. Our dedicated team of professionals is\n                committed to delivering construction services that exceed\n                expectations. Whether you're envisioning a modern masterpiece or a\n                cozy traditional home, we have the expertise to bring your ideas\n                to life.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "With a focus on quality materials, precise craftsmanship, and a\n                client-centric approach, we stand out as a reliable partner for\n                your home construction needs. Our attention to detail, transparent\n                communication, and adherence to timelines make us the preferred\n                choice for homeowners in Chennai.");
			p2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			children(div3).forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			div20 = claim_element(nodes, "DIV", { class: true });
			var div20_nodes = children(div20);
			div19 = claim_element(div20_nodes, "DIV", { class: true });
			var div19_nodes = children(div19);
			div18 = claim_element(div19_nodes, "DIV", { class: true });
			var div18_nodes = children(div18);
			div12 = claim_element(div18_nodes, "DIV", { class: true, "data-wow-delay": true });
			var div12_nodes = children(div12);
			div11 = claim_element(div12_nodes, "DIV", { class: true, style: true });
			var div11_nodes = children(div11);

			img = claim_element(div11_nodes, "IMG", {
				class: true,
				src: true,
				alt: true,
				style: true
			});

			t9 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true, style: true });
			var div10_nodes = children(div10);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			h11 = claim_element(div9_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t10 = claim_text(h11_nodes, "5 +");
			h11_nodes.forEach(detach_dev);
			t11 = claim_space(div9_nodes);
			h2 = claim_element(div9_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t12 = claim_text(h2_nodes, "Years");
			h2_nodes.forEach(detach_dev);
			t13 = claim_space(div9_nodes);
			h5 = claim_element(div9_nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t14 = claim_text(h5_nodes, "Experience");
			h5_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			t15 = claim_space(div18_nodes);
			div17 = claim_element(div18_nodes, "DIV", { class: true, "data-wow-delay": true });
			var div17_nodes = children(div17);
			div16 = claim_element(div17_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			h60 = claim_element(div16_nodes, "H6", {});
			var h60_nodes = children(h60);
			t16 = claim_text(h60_nodes, "At Sark Construction, we specialize in turning your dream home vision into a tangible reality. Our residential construction services encompass new home construction, remodeling, renovation, and custom home building. Whether you're embarking on your first home or upgrading to a larger one, our team is dedicated to bringing your vision to life.");
			h60_nodes.forEach(detach_dev);
			t17 = claim_space(div16_nodes);
			h61 = claim_element(div16_nodes, "H6", { class: true });
			var h61_nodes = children(h61);
			t18 = claim_text(h61_nodes, "We understand the significant investment involved in building a new home. Our goal is to make the process smooth and stress-free. The Sark Construction team is available to answer your questions and address concerns throughout the construction process.");
			h61_nodes.forEach(detach_dev);
			t19 = claim_space(div16_nodes);
			div15 = claim_element(div16_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			div14 = claim_element(div15_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div13 = claim_element(div14_nodes, "DIV", { class: true, "data-wow-delay": true });
			var div13_nodes = children(div13);
			i = claim_element(div13_nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			t20 = claim_space(div13_nodes);
			h62 = claim_element(div13_nodes, "H6", { class: true });
			var h62_nodes = children(h62);
			t21 = claim_text(h62_nodes, "Ontime at services");
			h62_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			div15_nodes.forEach(detach_dev);
			div16_nodes.forEach(detach_dev);
			div17_nodes.forEach(detach_dev);
			div18_nodes.forEach(detach_dev);
			div19_nodes.forEach(detach_dev);
			div20_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h10, "class", "display-6 mb-0");
			add_location(h10, file, 39, 12, 1030);
			attr_dev(div0, "class", "border-start border-5 border-primary ps-4 mb-5");
			add_location(div0, file, 37, 10, 946);
			add_location(p0, file, 46, 14, 1211);
			add_location(p1, file, 47, 14, 1261);
			add_location(p2, file, 55, 14, 1724);
			attr_dev(div1, "class", "col-md-12");
			add_location(div1, file, 45, 12, 1173);
			attr_dev(div2, "class", "row");
			add_location(div2, file, 44, 10, 1143);
			attr_dev(div3, "class", "gap-40");
			add_location(div3, file, 65, 10, 2169);
			attr_dev(div4, "class", "content-inner-page");
			add_location(div4, file, 34, 8, 896);
			attr_dev(div5, "class", "col-xl-12 col-lg-12");
			add_location(div5, file, 33, 6, 854);
			attr_dev(div6, "class", "row g-5");
			add_location(div6, file, 32, 4, 826);
			attr_dev(div7, "class", "container");
			add_location(div7, file, 31, 2, 798);
			attr_dev(div8, "class", "container-xxl py-5");
			add_location(div8, file, 29, 0, 761);
			attr_dev(img, "class", "position-absolute w-100 h-100");
			if (!src_url_equal(img.src, img_src_value = "img/about.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			set_style(img, "object-fit", "cover");
			add_location(img, file, 99, 12, 3151);
			attr_dev(h11, "class", "text-white");
			add_location(h11, file, 102, 16, 3480);
			attr_dev(h2, "class", "text-white");
			add_location(h2, file, 103, 16, 3528);
			attr_dev(h5, "class", "text-white mb-0");
			add_location(h5, file, 104, 16, 3578);
			attr_dev(div9, "class", "d-flex flex-column justify-content-center text-center bg-primary h-100 p-3");
			add_location(div9, file, 101, 14, 3375);
			attr_dev(div10, "class", "position-absolute top-0 start-0 bg-white pe-3 pb-3");
			set_style(div10, "width", "200px");
			set_style(div10, "height", "200px");
			add_location(div10, file, 100, 12, 3260);
			attr_dev(div11, "class", "position-relative overflow-hidden ps-5 pt-5 h-100");
			set_style(div11, "min-height", "400px");
			add_location(div11, file, 98, 10, 3049);
			attr_dev(div12, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div12, "data-wow-delay", "0.1s");
			add_location(div12, file, 97, 8, 2981);
			add_location(h60, file, 112, 12, 3813);
			attr_dev(h61, "class", "mb-4");
			add_location(h61, file, 117, 12, 4233);
			attr_dev(i, "class", "fa fa-check fa-2x text-primary flex-shrink-0 me-3");
			add_location(i, file, 124, 18, 4737);
			attr_dev(h62, "class", "mb-0");
			add_location(h62, file, 125, 18, 4821);
			attr_dev(div13, "class", "col-sm-4 d-flex wow fadeIn");
			attr_dev(div13, "data-wow-delay", "0.1s");
			add_location(div13, file, 123, 16, 4656);
			attr_dev(div14, "class", "row g-4");
			add_location(div14, file, 122, 14, 4618);
			attr_dev(div15, "class", "border-top mt-4 pt-4");
			add_location(div15, file, 121, 12, 4569);
			attr_dev(div16, "class", "h-100");
			add_location(div16, file, 110, 10, 3770);
			attr_dev(div17, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div17, "data-wow-delay", "0.5s");
			add_location(div17, file, 109, 8, 3702);
			attr_dev(div18, "class", "row g-5");
			add_location(div18, file, 96, 6, 2951);
			attr_dev(div19, "class", "container");
			add_location(div19, file, 95, 4, 2921);
			attr_dev(div20, "class", "container-xxl py-5");
			add_location(div20, file, 94, 2, 2884);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div8, anchor);
			append_hydration_dev(div8, div7);
			append_hydration_dev(div7, div6);
			append_hydration_dev(div6, div5);
			append_hydration_dev(div5, div4);
			append_hydration_dev(div4, div0);
			append_hydration_dev(div0, h10);
			append_hydration_dev(h10, t0);
			append_hydration_dev(div4, t1);
			append_hydration_dev(div4, div2);
			append_hydration_dev(div2, div1);
			append_hydration_dev(div1, p0);
			append_hydration_dev(p0, t2);
			append_hydration_dev(div1, t3);
			append_hydration_dev(div1, p1);
			append_hydration_dev(p1, t4);
			append_hydration_dev(div1, t5);
			append_hydration_dev(div1, p2);
			append_hydration_dev(p2, t6);
			append_hydration_dev(div4, t7);
			append_hydration_dev(div4, div3);
			insert_hydration_dev(target, t8, anchor);
			insert_hydration_dev(target, div20, anchor);
			append_hydration_dev(div20, div19);
			append_hydration_dev(div19, div18);
			append_hydration_dev(div18, div12);
			append_hydration_dev(div12, div11);
			append_hydration_dev(div11, img);
			append_hydration_dev(div11, t9);
			append_hydration_dev(div11, div10);
			append_hydration_dev(div10, div9);
			append_hydration_dev(div9, h11);
			append_hydration_dev(h11, t10);
			append_hydration_dev(div9, t11);
			append_hydration_dev(div9, h2);
			append_hydration_dev(h2, t12);
			append_hydration_dev(div9, t13);
			append_hydration_dev(div9, h5);
			append_hydration_dev(h5, t14);
			append_hydration_dev(div18, t15);
			append_hydration_dev(div18, div17);
			append_hydration_dev(div17, div16);
			append_hydration_dev(div16, h60);
			append_hydration_dev(h60, t16);
			append_hydration_dev(div16, t17);
			append_hydration_dev(div16, h61);
			append_hydration_dev(h61, t18);
			append_hydration_dev(div16, t19);
			append_hydration_dev(div16, div15);
			append_hydration_dev(div15, div14);
			append_hydration_dev(div14, div13);
			append_hydration_dev(div13, i);
			append_hydration_dev(div13, t20);
			append_hydration_dev(div13, h62);
			append_hydration_dev(h62, t21);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*serviceDetails*/ 1 && t0_value !== (t0_value = /*serviceDetails*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*serviceDetails*/ 1 && t2_value !== (t2_value = /*serviceDetails*/ ctx[0].description + "")) set_data_dev(t2, t2_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div8);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(div20);
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

	const writable_props = ['serviceDetails'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<House_construction> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('serviceDetails' in $$props) $$invalidate(0, serviceDetails = $$props.serviceDetails);
	};

	$$self.$capture_state = () => ({ onMount, _: lodash, imageData, serviceDetails });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91c2UtY29uc3RydWN0aW9uLmY1ZjA4YjkxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2hvdXNlLWNvbnN0cnVjdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cbiAgaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgaW1hZ2VEYXRhID0gW1xuICB7IGlkOiAxLCBzcmM6ICdpbWcvY2Fyb3VzZWwtMS5qcGcnLCBhbHQ6ICdJbWFnZSAxJyB9LFxuICB7IGlkOiAyLCBzcmM6ICdpbWcvY2Fyb3VzZWwtMi5qcGcnLCBhbHQ6ICdJbWFnZSAyJyB9LFxuICAvLyBBZGQgbW9yZSBpbWFnZXMgYXMgbmVlZGVkXG5dO1xuXG5cbiAgZXhwb3J0IGxldCBzZXJ2aWNlRGV0YWlscyA9IHtcbiAgICB0aXRsZTogXCJIb21lIENvbnN0cnVjdGlvbiAtIFNhcmsgQ29uc3RydWN0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRyYW5zZm9ybWluZyBEcmVhbXMgaW50byBSZWFsaXR5IHdpdGggUXVhbGl0eSBDb25zdHJ1Y3Rpb24gU2VydmljZXNcIixcbiAgICBmZWF0dXJlczogW1xuICAgICAgXCJDdXN0b21pemVkIGRlc2lnbiBhbmQgcGxhbm5pbmcgdGFpbG9yZWQgdG8geW91ciBwcmVmZXJlbmNlc1wiLFxuICAgICAgXCJFeHBlcmllbmNlZCBjb25zdHJ1Y3Rpb24gdGVhbSB3aXRoIGEgcGFzc2lvbiBmb3IgZXhjZWxsZW5jZVwiLFxuICAgICAgXCJQcmVtaXVtIHF1YWxpdHkgbWF0ZXJpYWxzIGFuZCBjcmFmdHNtYW5zaGlwXCIsXG4gICAgICBcIkNvbW1pdHRlZCB0byBvbi10aW1lIHByb2plY3QgY29tcGxldGlvblwiLFxuICAgICAgXCJCdWRnZXQtZnJpZW5kbHkgb3B0aW9ucyB3aXRob3V0IGNvbXByb21pc2luZyBxdWFsaXR5XCIsXG4gICAgXVxuICB9XG5cbjwvc2NyaXB0PlxuXG5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci14eGwgcHktNVwiPlxuIFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBnLTVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMTIgY29sLWxnLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWlubmVyLXBhZ2VcIj5cbiAgICAgXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyLXN0YXJ0IGJvcmRlci01IGJvcmRlci1wcmltYXJ5IHBzLTQgbWItNVwiPlxuICAgICAgICAgIFxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiZGlzcGxheS02IG1iLTBcIj5cbiAgICAgICAgICAgICAge3NlcnZpY2VEZXRhaWxzLnRpdGxlfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICA8cD57c2VydmljZURldGFpbHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBdCBTYXJrIENvbnN0cnVjdGlvbiwgd2UgYmVsaWV2ZSBpbiB0dXJuaW5nIHlvdXIgZHJlYW0gaG9tZSB2aXNpb25cbiAgICAgICAgICAgICAgICBpbnRvIGEgdGFuZ2libGUgcmVhbGl0eS4gT3VyIGRlZGljYXRlZCB0ZWFtIG9mIHByb2Zlc3Npb25hbHMgaXNcbiAgICAgICAgICAgICAgICBjb21taXR0ZWQgdG8gZGVsaXZlcmluZyBjb25zdHJ1Y3Rpb24gc2VydmljZXMgdGhhdCBleGNlZWRcbiAgICAgICAgICAgICAgICBleHBlY3RhdGlvbnMuIFdoZXRoZXIgeW91J3JlIGVudmlzaW9uaW5nIGEgbW9kZXJuIG1hc3RlcnBpZWNlIG9yIGFcbiAgICAgICAgICAgICAgICBjb3p5IHRyYWRpdGlvbmFsIGhvbWUsIHdlIGhhdmUgdGhlIGV4cGVydGlzZSB0byBicmluZyB5b3VyIGlkZWFzXG4gICAgICAgICAgICAgICAgdG8gbGlmZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBXaXRoIGEgZm9jdXMgb24gcXVhbGl0eSBtYXRlcmlhbHMsIHByZWNpc2UgY3JhZnRzbWFuc2hpcCwgYW5kIGFcbiAgICAgICAgICAgICAgICBjbGllbnQtY2VudHJpYyBhcHByb2FjaCwgd2Ugc3RhbmQgb3V0IGFzIGEgcmVsaWFibGUgcGFydG5lciBmb3JcbiAgICAgICAgICAgICAgICB5b3VyIGhvbWUgY29uc3RydWN0aW9uIG5lZWRzLiBPdXIgYXR0ZW50aW9uIHRvIGRldGFpbCwgdHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgICBjb21tdW5pY2F0aW9uLCBhbmQgYWRoZXJlbmNlIHRvIHRpbWVsaW5lcyBtYWtlIHVzIHRoZSBwcmVmZXJyZWRcbiAgICAgICAgICAgICAgICBjaG9pY2UgZm9yIGhvbWVvd25lcnMgaW4gQ2hlbm5haS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYXAtNDBcIj48L2Rpdj5cbiAgXG4gICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJvdXNlbEV4YW1wbGVTbGlkZXNPbmx5XCIgY2xhc3M9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtYnMtcmlkZT1cImNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICB7I2VhY2ggaW1hZ2VEYXRhIGFzIGl0ZW0sIGluZGV4IChpdGVtLmlkKX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIHtpbmRleCA9PT0gYWN0aXZlSW5kZXggPyAnYWN0aXZlJyA6ICcnfVwiPlxuICAgICAgICA8aW1nIHNyYz17aXRlbS5zcmN9IGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiIGFsdD17aXRlbS5hbHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAtLT5cblxuICAgXG4gICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gQ29udGVudCBpbm5lciBlbmQgLS0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIFxuXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIteHhsIHB5LTVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGctNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTYgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIwLjFzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBwcy01IHB0LTUgaC0xMDBcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDQwMHB4XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdy0xMDAgaC0xMDBcIiBzcmM9XCJpbWcvYWJvdXQuanBnXCIgYWx0PVwiXCIgc3R5bGU9XCJvYmplY3QtZml0OiBjb3ZlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIHN0YXJ0LTAgYmctd2hpdGUgcGUtMyBwYi0zXCIgc3R5bGU9XCJ3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIGJnLXByaW1hcnkgaC0xMDAgcC0zXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC13aGl0ZVwiPjUgKzwvaDE+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC13aGl0ZVwiPlllYXJzPC9oMj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXdoaXRlIG1iLTBcIj5FeHBlcmllbmNlPC9oNT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIjAuNXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC0xMDBcIj5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgIEF0IFNhcmsgQ29uc3RydWN0aW9uLCB3ZSBzcGVjaWFsaXplIGluIHR1cm5pbmcgeW91ciBkcmVhbSBob21lIHZpc2lvbiBpbnRvIGEgdGFuZ2libGUgcmVhbGl0eS4gT3VyIHJlc2lkZW50aWFsIGNvbnN0cnVjdGlvbiBzZXJ2aWNlcyBlbmNvbXBhc3MgbmV3IGhvbWUgY29uc3RydWN0aW9uLCByZW1vZGVsaW5nLCByZW5vdmF0aW9uLCBhbmQgY3VzdG9tIGhvbWUgYnVpbGRpbmcuIFdoZXRoZXIgeW91J3JlIGVtYmFya2luZyBvbiB5b3VyIGZpcnN0IGhvbWUgb3IgdXBncmFkaW5nIHRvIGEgbGFyZ2VyIG9uZSwgb3VyIHRlYW0gaXMgZGVkaWNhdGVkIHRvIGJyaW5naW5nIHlvdXIgdmlzaW9uIHRvIGxpZmUuXG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgPGg2IGNsYXNzPVwibWItNFwiPlxuICAgICAgICAgICAgICBXZSB1bmRlcnN0YW5kIHRoZSBzaWduaWZpY2FudCBpbnZlc3RtZW50IGludm9sdmVkIGluIGJ1aWxkaW5nIGEgbmV3IGhvbWUuIE91ciBnb2FsIGlzIHRvIG1ha2UgdGhlIHByb2Nlc3Mgc21vb3RoIGFuZCBzdHJlc3MtZnJlZS4gVGhlIFNhcmsgQ29uc3RydWN0aW9uIHRlYW0gaXMgYXZhaWxhYmxlIHRvIGFuc3dlciB5b3VyIHF1ZXN0aW9ucyBhbmQgYWRkcmVzcyBjb25jZXJucyB0aHJvdWdob3V0IHRoZSBjb25zdHJ1Y3Rpb24gcHJvY2Vzcy5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlci10b3AgbXQtNCBwdC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00IGQtZmxleCB3b3cgZmFkZUluXCIgZGF0YS13b3ctZGVsYXk9XCIwLjFzXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrIGZhLTJ4IHRleHQtcHJpbWFyeSBmbGV4LXNocmluay0wIG1lLTNcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJtYi0wXCI+T250aW1lIGF0IHNlcnZpY2VzPC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cblxuXG5cblxuIl0sIm5hbWVzIjpb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
