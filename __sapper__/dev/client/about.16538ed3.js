import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, j as attr_dev, m as add_location, k as src_url_equal, l as set_style, n as insert_hydration_dev, o as append_hydration_dev, O as set_data_dev, p as noop } from './client.73bdf068.js';
import 'jquery';

/* src/routes/about.svelte generated by Svelte v3.59.2 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let div14;
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
	let div13;
	let div12;
	let div11;
	let div8;
	let div7;
	let img;
	let img_src_value;
	let t8;
	let div10;
	let div9;
	let h60;
	let t9;
	let t10;
	let h61;
	let t11;

	const block = {
		c: function create() {
			div14 = element("div");
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
			t4 = text("At Sark Constructions, we are more than builders; we are\n\t\t\t\t  dreamers. We believe in turning your dream home vision into a\n\t\t\t\t  tangible reality. Our dedicated team of professionals is\n\t\t\t\t  committed to delivering construction services that exceed\n\t\t\t\t  expectations. Whether you're envisioning a modern masterpiece or\n\t\t\t\t  a cozy traditional home, we have the expertise to bring your\n\t\t\t\t  ideas to life.");
			t5 = space();
			p2 = element("p");
			t6 = text("With a focus on quality materials, precise craftsmanship, and a\n\t\t\t\t  client-centric approach, we stand out as a reliable partner for\n\t\t\t\t  your home construction needs. Our attention to detail,\n\t\t\t\t  transparent communication, and adherence to timelines make us\n\t\t\t\t  the preferred choice for homeowners in Chennai.");
			t7 = space();
			div13 = element("div");
			div12 = element("div");
			div11 = element("div");
			div8 = element("div");
			div7 = element("div");
			img = element("img");
			t8 = space();
			div10 = element("div");
			div9 = element("div");
			h60 = element("h6");
			t9 = text("At Sark Constructions, we specialize in turning your dream home\n\t\t\t\tvision into a tangible reality. Our residential construction\n\t\t\t\tservices encompass new home construction, remodeling, renovation,\n\t\t\t\tand custom home building. Whether you're embarking on your first\n\t\t\t\thome or upgrading to a larger one, our team is dedicated to\n\t\t\t\tbringing your vision to life.");
			t10 = space();
			h61 = element("h6");
			t11 = text("We understand the significant investment involved in building a\n\t\t\t\tnew home. Our goal is to make the process smooth and\n\t\t\t\tstress-free. The Sark Constructions team is available to answer\n\t\t\t\tyour questions and address concerns throughout the construction\n\t\t\t\tprocess.");
			this.h();
		},
		l: function claim(nodes) {
			div14 = claim_element(nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div6 = claim_element(div14_nodes, "DIV", { class: true });
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
			t4 = claim_text(p1_nodes, "At Sark Constructions, we are more than builders; we are\n\t\t\t\t  dreamers. We believe in turning your dream home vision into a\n\t\t\t\t  tangible reality. Our dedicated team of professionals is\n\t\t\t\t  committed to delivering construction services that exceed\n\t\t\t\t  expectations. Whether you're envisioning a modern masterpiece or\n\t\t\t\t  a cozy traditional home, we have the expertise to bring your\n\t\t\t\t  ideas to life.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "With a focus on quality materials, precise craftsmanship, and a\n\t\t\t\t  client-centric approach, we stand out as a reliable partner for\n\t\t\t\t  your home construction needs. Our attention to detail,\n\t\t\t\t  transparent communication, and adherence to timelines make us\n\t\t\t\t  the preferred choice for homeowners in Chennai.");
			p2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t7 = claim_space(div14_nodes);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div8 = claim_element(div11_nodes, "DIV", { class: true, "data-wow-delay": true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);

			img = claim_element(div7_nodes, "IMG", {
				class: true,
				src: true,
				alt: true,
				style: true
			});

			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			t8 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true, "data-wow-delay": true });
			var div10_nodes = children(div10);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			h60 = claim_element(div9_nodes, "H6", {});
			var h60_nodes = children(h60);
			t9 = claim_text(h60_nodes, "At Sark Constructions, we specialize in turning your dream home\n\t\t\t\tvision into a tangible reality. Our residential construction\n\t\t\t\tservices encompass new home construction, remodeling, renovation,\n\t\t\t\tand custom home building. Whether you're embarking on your first\n\t\t\t\thome or upgrading to a larger one, our team is dedicated to\n\t\t\t\tbringing your vision to life.");
			h60_nodes.forEach(detach_dev);
			t10 = claim_space(div9_nodes);
			h61 = claim_element(div9_nodes, "H6", { class: true });
			var h61_nodes = children(h61);
			t11 = claim_text(h61_nodes, "We understand the significant investment involved in building a\n\t\t\t\tnew home. Our goal is to make the process smooth and\n\t\t\t\tstress-free. The Sark Constructions team is available to answer\n\t\t\t\tyour questions and address concerns throughout the construction\n\t\t\t\tprocess.");
			h61_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "display-6 mb-0");
			add_location(h1, file, 21, 5, 710);
			attr_dev(div0, "class", "border-start border-5 border-primary ps-4 mb-5");
			add_location(div0, file, 20, 3, 644);
			add_location(p0, file, 26, 4, 832);
			add_location(p1, file, 27, 4, 872);
			add_location(p2, file, 36, 4, 1306);
			attr_dev(div1, "class", "col-md-12");
			add_location(div1, file, 25, 5, 804);
			attr_dev(div2, "class", "row");
			add_location(div2, file, 24, 3, 781);
			attr_dev(div3, "class", "content-inner-page");
			add_location(div3, file, 19, 4, 608);
			attr_dev(div4, "class", "col-xl-12 col-lg-12");
			add_location(div4, file, 18, 2, 570);
			attr_dev(div5, "class", "row g-5");
			add_location(div5, file, 17, 3, 546);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 16, 1, 519);
			attr_dev(img, "class", "w-100");
			if (!src_url_equal(img.src, img_src_value = "https://via.placeholder.com/800x600")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			set_style(img, "object-fit", "cover");
			set_style(img, "min-height", "400px");
			add_location(img, file, 57, 6, 2001);
			attr_dev(div7, "class", "position-relative overflow-hidden");
			add_location(div7, file, 55, 4, 1886);
			attr_dev(div8, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div8, "data-wow-delay", "0.1s");
			add_location(div8, file, 54, 3, 1824);
			add_location(h60, file, 63, 5, 2233);
			attr_dev(h61, "class", "mb-0");
			add_location(h61, file, 71, 5, 2624);
			attr_dev(div9, "class", "h-0");
			add_location(div9, file, 62, 3, 2210);
			attr_dev(div10, "class", "col-lg-6 wow fadeInUp");
			attr_dev(div10, "data-wow-delay", "0.5s");
			add_location(div10, file, 61, 4, 2149);
			attr_dev(div11, "class", "row g-5");
			add_location(div11, file, 53, 2, 1799);
			attr_dev(div12, "class", "container");
			add_location(div12, file, 52, 3, 1773);
			attr_dev(div13, "class", "container-xxl py-5");
			add_location(div13, file, 51, 1, 1737);
			attr_dev(div14, "class", "container-xxl py-5");
			add_location(div14, file, 15, 2, 485);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div14, anchor);
			append_hydration_dev(div14, div6);
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
			append_hydration_dev(div14, t7);
			append_hydration_dev(div14, div13);
			append_hydration_dev(div13, div12);
			append_hydration_dev(div12, div11);
			append_hydration_dev(div11, div8);
			append_hydration_dev(div8, div7);
			append_hydration_dev(div7, img);
			append_hydration_dev(div11, t8);
			append_hydration_dev(div11, div10);
			append_hydration_dev(div10, div9);
			append_hydration_dev(div9, h60);
			append_hydration_dev(h60, t9);
			append_hydration_dev(div9, t10);
			append_hydration_dev(div9, h61);
			append_hydration_dev(h61, t11);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*serviceDetails*/ 1 && t0_value !== (t0_value = /*serviceDetails*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*serviceDetails*/ 1 && t2_value !== (t2_value = /*serviceDetails*/ ctx[0].description + "")) set_data_dev(t2, t2_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div14);
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
	validate_slots('About', slots, []);

	let { serviceDetails = {
		title: "About Us - Sark Constructions",
		description: "Building Dreams into Reality with Quality Construction Services",
		features: [
			"Passionate team dedicated to excellence",
			"Premium quality materials and craftsmanship",
			"Transparent communication and adherence to timelines",
			"Customized design and planning tailored to your preferences",
			"Budget-friendly options without compromising quality"
		]
	} } = $$props;

	const writable_props = ['serviceDetails'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<About> was created with unknown prop '${key}'`);
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

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { serviceDetails: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}

	get serviceDetails() {
		throw new Error("<About>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set serviceDetails(value) {
		throw new Error("<About>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { About as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuMTY1MzhlZDMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgc2VydmljZURldGFpbHMgPSB7XG5cdCAgdGl0bGU6IFwiQWJvdXQgVXMgLSBTYXJrIENvbnN0cnVjdGlvbnNcIixcblx0ICBkZXNjcmlwdGlvbjpcblx0XHRcIkJ1aWxkaW5nIERyZWFtcyBpbnRvIFJlYWxpdHkgd2l0aCBRdWFsaXR5IENvbnN0cnVjdGlvbiBTZXJ2aWNlc1wiLFxuXHQgIGZlYXR1cmVzOiBbXG5cdFx0XCJQYXNzaW9uYXRlIHRlYW0gZGVkaWNhdGVkIHRvIGV4Y2VsbGVuY2VcIixcblx0XHRcIlByZW1pdW0gcXVhbGl0eSBtYXRlcmlhbHMgYW5kIGNyYWZ0c21hbnNoaXBcIixcblx0XHRcIlRyYW5zcGFyZW50IGNvbW11bmljYXRpb24gYW5kIGFkaGVyZW5jZSB0byB0aW1lbGluZXNcIixcblx0XHRcIkN1c3RvbWl6ZWQgZGVzaWduIGFuZCBwbGFubmluZyB0YWlsb3JlZCB0byB5b3VyIHByZWZlcmVuY2VzXCIsXG5cdFx0XCJCdWRnZXQtZnJpZW5kbHkgb3B0aW9ucyB3aXRob3V0IGNvbXByb21pc2luZyBxdWFsaXR5XCIsXG5cdCAgXSxcblx0fTtcbiAgPC9zY3JpcHQ+XG4gIFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXh4bCBweS01XCI+XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0ICA8ZGl2IGNsYXNzPVwicm93IGctNVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wteGwtMTIgY29sLWxnLTEyXCI+XG5cdFx0ICA8ZGl2IGNsYXNzPVwiY29udGVudC1pbm5lci1wYWdlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYm9yZGVyLXN0YXJ0IGJvcmRlci01IGJvcmRlci1wcmltYXJ5IHBzLTQgbWItNVwiPlxuXHRcdFx0ICA8aDEgY2xhc3M9XCJkaXNwbGF5LTYgbWItMFwiPntzZXJ2aWNlRGV0YWlscy50aXRsZX08L2gxPlxuXHRcdFx0PC9kaXY+XG4gIFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0ICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG5cdFx0XHRcdDxwPntzZXJ2aWNlRGV0YWlscy5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHQgIEF0IFNhcmsgQ29uc3RydWN0aW9ucywgd2UgYXJlIG1vcmUgdGhhbiBidWlsZGVyczsgd2UgYXJlXG5cdFx0XHRcdCAgZHJlYW1lcnMuIFdlIGJlbGlldmUgaW4gdHVybmluZyB5b3VyIGRyZWFtIGhvbWUgdmlzaW9uIGludG8gYVxuXHRcdFx0XHQgIHRhbmdpYmxlIHJlYWxpdHkuIE91ciBkZWRpY2F0ZWQgdGVhbSBvZiBwcm9mZXNzaW9uYWxzIGlzXG5cdFx0XHRcdCAgY29tbWl0dGVkIHRvIGRlbGl2ZXJpbmcgY29uc3RydWN0aW9uIHNlcnZpY2VzIHRoYXQgZXhjZWVkXG5cdFx0XHRcdCAgZXhwZWN0YXRpb25zLiBXaGV0aGVyIHlvdSdyZSBlbnZpc2lvbmluZyBhIG1vZGVybiBtYXN0ZXJwaWVjZSBvclxuXHRcdFx0XHQgIGEgY296eSB0cmFkaXRpb25hbCBob21lLCB3ZSBoYXZlIHRoZSBleHBlcnRpc2UgdG8gYnJpbmcgeW91clxuXHRcdFx0XHQgIGlkZWFzIHRvIGxpZmUuXG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdCAgV2l0aCBhIGZvY3VzIG9uIHF1YWxpdHkgbWF0ZXJpYWxzLCBwcmVjaXNlIGNyYWZ0c21hbnNoaXAsIGFuZCBhXG5cdFx0XHRcdCAgY2xpZW50LWNlbnRyaWMgYXBwcm9hY2gsIHdlIHN0YW5kIG91dCBhcyBhIHJlbGlhYmxlIHBhcnRuZXIgZm9yXG5cdFx0XHRcdCAgeW91ciBob21lIGNvbnN0cnVjdGlvbiBuZWVkcy4gT3VyIGF0dGVudGlvbiB0byBkZXRhaWwsXG5cdFx0XHRcdCAgdHJhbnNwYXJlbnQgY29tbXVuaWNhdGlvbiwgYW5kIGFkaGVyZW5jZSB0byB0aW1lbGluZXMgbWFrZSB1c1xuXHRcdFx0XHQgIHRoZSBwcmVmZXJyZWQgY2hvaWNlIGZvciBob21lb3duZXJzIGluIENoZW5uYWkuXG5cdFx0XHRcdDwvcD5cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQgIDwvZGl2PlxuXHRcdCAgPCEtLSBDb250ZW50IGlubmVyIGVuZCAtLT5cblx0XHQ8L2Rpdj5cblx0ICA8L2Rpdj5cblx0PC9kaXY+XG4gIFxuXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXh4bCBweS01XCI+XG5cdCAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3cgZy01XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTYgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIwLjFzXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cblx0XHRcdFx0ICA8IS0tIFJlcGxhY2UgdGhlIGltYWdlIFVSTCB3aXRoIHlvdXIgZGVzaXJlZCBpbWFnZSAtLT5cblx0XHRcdFx0ICA8aW1nIGNsYXNzPVwidy0xMDBcIiBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODAweDYwMFwiIGFsdD1cIlwiIHN0eWxlPVwib2JqZWN0LWZpdDogY292ZXI7IG1pbi1oZWlnaHQ6IDQwMHB4O1wiPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHQgIFxuXHRcdCAgPGRpdiBjbGFzcz1cImNvbC1sZy02IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImgtMFwiPlxuXHRcdFx0ICA8aDY+XG5cdFx0XHRcdEF0IFNhcmsgQ29uc3RydWN0aW9ucywgd2Ugc3BlY2lhbGl6ZSBpbiB0dXJuaW5nIHlvdXIgZHJlYW0gaG9tZVxuXHRcdFx0XHR2aXNpb24gaW50byBhIHRhbmdpYmxlIHJlYWxpdHkuIE91ciByZXNpZGVudGlhbCBjb25zdHJ1Y3Rpb25cblx0XHRcdFx0c2VydmljZXMgZW5jb21wYXNzIG5ldyBob21lIGNvbnN0cnVjdGlvbiwgcmVtb2RlbGluZywgcmVub3ZhdGlvbixcblx0XHRcdFx0YW5kIGN1c3RvbSBob21lIGJ1aWxkaW5nLiBXaGV0aGVyIHlvdSdyZSBlbWJhcmtpbmcgb24geW91ciBmaXJzdFxuXHRcdFx0XHRob21lIG9yIHVwZ3JhZGluZyB0byBhIGxhcmdlciBvbmUsIG91ciB0ZWFtIGlzIGRlZGljYXRlZCB0b1xuXHRcdFx0XHRicmluZ2luZyB5b3VyIHZpc2lvbiB0byBsaWZlLlxuXHRcdFx0ICA8L2g2PlxuXHRcdFx0ICA8aDYgY2xhc3M9XCJtYi0wXCI+XG5cdFx0XHRcdFdlIHVuZGVyc3RhbmQgdGhlIHNpZ25pZmljYW50IGludmVzdG1lbnQgaW52b2x2ZWQgaW4gYnVpbGRpbmcgYVxuXHRcdFx0XHRuZXcgaG9tZS4gT3VyIGdvYWwgaXMgdG8gbWFrZSB0aGUgcHJvY2VzcyBzbW9vdGggYW5kXG5cdFx0XHRcdHN0cmVzcy1mcmVlLiBUaGUgU2FyayBDb25zdHJ1Y3Rpb25zIHRlYW0gaXMgYXZhaWxhYmxlIHRvIGFuc3dlclxuXHRcdFx0XHR5b3VyIHF1ZXN0aW9ucyBhbmQgYWRkcmVzcyBjb25jZXJucyB0aHJvdWdob3V0IHRoZSBjb25zdHJ1Y3Rpb25cblx0XHRcdFx0cHJvY2Vzcy5cblx0XHRcdCAgPC9oNj5cblx0XHRcdCAgXG5cdFx0XHQ8L2Rpdj5cblx0XHQgIDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQgIDwvZGl2PlxuXHQ8L2Rpdj5cbiAgXG5cdDwhLS0gVGVzdGltb25pYWwgU2VjdGlvbiAtLT5cblxuXG4gIDwvZGl2PlxuICAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBcUJpQyxDQUFBLElBQUEsUUFBQSxzQkFBQSxHQUFjLElBQUMsS0FBSyxHQUFBLEVBQUEsQ0FBQTs7Ozs7O0FBSzdDLENBQUEsSUFBQSxRQUFBLHNCQUFBLEdBQWMsSUFBQyxXQUFXLEdBQUEsRUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFDM0IsMGJBUUgsQ0FBQSxDQUFBOzs7YUFDRyxrVkFNSCxDQUFBLENBQUE7Ozs7Ozs7Ozs7OzthQXFCSyx3WUFPSixDQUFBLENBQUE7OztjQUNpQixtU0FNakIsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBbERFLDBiQVFILENBQUEsQ0FBQTs7Ozs7NkJBQ0csa1ZBTUgsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBcUJLLHdZQU9KLENBQUEsQ0FBQTs7Ozs7K0JBQ2lCLG1TQU1qQixDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOURILG9CQXlFTSxDQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7R0F4RVAsb0JBaUNNLENBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0dBaENKLG9CQStCTSxDQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQTtHQTlCUCxvQkE2Qk0sQ0FBQSxJQUFBLEVBQUEsSUFBQSxDQUFBLENBQUE7R0E1Qkosb0JBMEJNLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0dBekJQLG9CQUVNLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0dBREosb0JBQXNELENBQUEsSUFBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBOzs7R0FHeEQsb0JBb0JNLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0dBbkJKLG9CQWtCTSxDQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQTtHQWpCUCxvQkFBbUMsQ0FBQSxJQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7OztHQUNuQyxvQkFRSSxDQUFBLElBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTs7O0dBQ0osb0JBTUksQ0FBQSxJQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7OztHQVNQLG9CQWdDTSxDQUFBLEtBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQTtHQS9CSixvQkE4Qk0sQ0FBQSxLQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7R0E3QlAsb0JBNEJNLENBQUEsS0FBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO0dBM0JMLG9CQUtRLENBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0dBSlAsb0JBR00sQ0FBQSxJQUFBLEVBQUEsSUFBQSxDQUFBLENBQUE7R0FESixvQkFBa0gsQ0FBQSxJQUFBLEVBQUEsR0FBQSxDQUFBLENBQUE7O0dBSXBILG9CQW1CTSxDQUFBLEtBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQTtHQWxCUCxvQkFpQk0sQ0FBQSxLQUFBLEVBQUEsSUFBQSxDQUFBLENBQUE7R0FoQkosb0JBT0ssQ0FBQSxJQUFBLEVBQUEsR0FBQSxDQUFBLENBQUE7OztHQUNMLG9CQU1LLENBQUEsSUFBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBOzs7O0FBeER1QixHQUFBLElBQUEsS0FBQSxzQkFBQSxDQUFBLElBQUEsUUFBQSxNQUFBLFFBQUEsc0JBQUEsR0FBYyxJQUFDLEtBQUssR0FBQSxFQUFBLENBQUEsRUFBQSxZQUFBLENBQUEsRUFBQSxFQUFBLFFBQUEsQ0FBQSxDQUFBO0FBSzdDLEdBQUEsSUFBQSxLQUFBLHNCQUFBLENBQUEsSUFBQSxRQUFBLE1BQUEsUUFBQSxzQkFBQSxHQUFjLElBQUMsV0FBVyxHQUFBLEVBQUEsQ0FBQSxFQUFBLFlBQUEsQ0FBQSxFQUFBLEVBQUEsUUFBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXpCdEIsY0FBYyxHQUFBO0FBQ3ZCLEVBQUEsS0FBSyxFQUFFLCtCQUErQjtBQUN0QyxFQUFBLFdBQVcsRUFDWixpRUFBaUU7RUFDaEUsUUFBUSxFQUFBO0dBQ1QseUNBQXlDO0dBQ3pDLDZDQUE2QztHQUM3QyxzREFBc0Q7R0FDdEQsNkRBQTZEO0dBQzdELHNEQUFzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
