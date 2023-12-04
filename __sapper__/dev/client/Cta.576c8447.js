import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, g as claim_text, h as detach_dev, f as claim_space, j as attr_dev, m as add_location, n as insert_hydration_dev, o as append_hydration_dev, p as noop } from './client.00a6890a.js';

/* src/components/Cta.svelte generated by Svelte v3.59.2 */

const file = "src/components/Cta.svelte";

function create_fragment(ctx) {
	let section;
	let div6;
	let div5;
	let div1;
	let div0;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div4;
	let div3;
	let div2;
	let a0;
	let i0;
	let t4;
	let t5;
	let a1;
	let i1;
	let t6;

	const block = {
		c: function create() {
			section = element("section");
			div6 = element("div");
			div5 = element("div");
			div1 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text("Ready to turn your dream home into reality?");
			t1 = space();
			p = element("p");
			t2 = text("Sark Construction is here for you, with a team dedicated to delivering construction services that exceed expectations. Whether you're envisioning a modern masterpiece or a cozy traditional home, we have the expertise to bring your ideas to life.");
			t3 = space();
			div4 = element("div");
			div3 = element("div");
			div2 = element("div");
			a0 = element("a");
			i0 = element("i");
			t4 = text(" Contact us");
			t5 = space();
			a1 = element("a");
			i1 = element("i");
			t6 = text(" Chat with us");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div6 = claim_element(section_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div1 = claim_element(div5_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Ready to turn your dream home into reality?");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Sark Construction is here for you, with a team dedicated to delivering construction services that exceed expectations. Whether you're envisioning a modern masterpiece or a cozy traditional home, we have the expertise to bring your ideas to life.");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a0 = claim_element(div2_nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);
			i0 = claim_element(a0_nodes, "I", { class: true });
			children(i0).forEach(detach_dev);
			t4 = claim_text(a0_nodes, " Contact us");
			a0_nodes.forEach(detach_dev);
			t5 = claim_space(div2_nodes);
			a1 = claim_element(div2_nodes, "A", { class: true, href: true });
			var a1_nodes = children(a1);
			i1 = claim_element(a1_nodes, "I", { class: true });
			children(i1).forEach(detach_dev);
			t6 = claim_text(a1_nodes, " Chat with us");
			a1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "action-title svelte-o7f2d4");
			add_location(h2, file, 39, 16, 1157);
			attr_dev(p, "class", "text-lg svelte-o7f2d4");
			add_location(p, file, 42, 16, 1283);
			attr_dev(div0, "class", "call-action-text svelte-o7f2d4");
			add_location(div0, file, 38, 14, 1110);
			attr_dev(div1, "class", "col-xl-7 col-lg-8");
			add_location(div1, file, 37, 12, 1064);
			attr_dev(i0, "class", "fas fa-phone-alt");
			add_location(i0, file, 51, 20, 1847);
			attr_dev(a0, "class", "btn btn-primary py-3 px-5 svelte-o7f2d4");
			attr_dev(a0, "href", "/");
			add_location(a0, file, 50, 18, 1780);
			attr_dev(i1, "class", "fab fa-whatsapp");
			add_location(i1, file, 55, 20, 2018);
			attr_dev(a1, "class", "btn btn-success py-3 px-5 svelte-o7f2d4");
			attr_dev(a1, "href", "/");
			add_location(a1, file, 54, 18, 1951);
			attr_dev(div2, "class", "call-action-btn text-lg-end svelte-o7f2d4");
			add_location(div2, file, 49, 16, 1720);
			attr_dev(div3, "class", "row");
			add_location(div3, file, 48, 14, 1686);
			attr_dev(div4, "class", "col-xl-5 col-lg-4");
			add_location(div4, file, 47, 12, 1640);
			attr_dev(div5, "class", "row align-items-center call-action-content");
			add_location(div5, file, 36, 9, 995);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 35, 6, 962);
			attr_dev(section, "class", "call-action-area call-action-one svelte-o7f2d4");
			add_location(section, file, 34, 4, 905);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, section, anchor);
			append_hydration_dev(section, div6);
			append_hydration_dev(div6, div5);
			append_hydration_dev(div5, div1);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, h2);
			append_hydration_dev(h2, t0);
			append_hydration_dev(div0, t1);
			append_hydration_dev(div0, p);
			append_hydration_dev(p, t2);
			append_hydration_dev(div5, t3);
			append_hydration_dev(div5, div4);
			append_hydration_dev(div4, div3);
			append_hydration_dev(div3, div2);
			append_hydration_dev(div2, a0);
			append_hydration_dev(a0, i0);
			append_hydration_dev(a0, t4);
			append_hydration_dev(div2, t5);
			append_hydration_dev(div2, a1);
			append_hydration_dev(a1, i1);
			append_hydration_dev(a1, t6);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Cta', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Cta> was created with unknown prop '${key}'`);
	});

	return [];
}

class Cta extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cta",
			options,
			id: create_fragment.name
		});
	}
}

export { Cta as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3RhLjU3NmM4NDQ3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DdGEuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZT5cbiAgICAvKiA9PT09PSBCdXR0b25zIENzcyA9PT09PSAqL1xuICAgIFxuICAgIFxuICAgIC8qPT09PT0gY2FsbCBhY3Rpb24gb25lID09PT09Ki9cbiAgICAuY2FsbC1hY3Rpb24tb25lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LTIpO1xuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgfVxuICAgIC5jYWxsLWFjdGlvbi1vbmUgLmNhbGwtYWN0aW9uLWNvbnRlbnQgLmNhbGwtYWN0aW9uLXRleHQge1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG4gICAgLmNhbGwtYWN0aW9uLW9uZSAuY2FsbC1hY3Rpb24tY29udGVudCAuY2FsbC1hY3Rpb24tdGV4dCAuYWN0aW9uLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIH1cbiAgICAuY2FsbC1hY3Rpb24tb25lIC5jYWxsLWFjdGlvbi1jb250ZW50IC5jYWxsLWFjdGlvbi10ZXh0IC50ZXh0LWxnIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLTMpO1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG4gICAgLmNhbGwtYWN0aW9uLW9uZSAuY2FsbC1hY3Rpb24tY29udGVudCAuY2FsbC1hY3Rpb24tYnRuIHtcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5idG46aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogSW5jcmVhc2UgdGhlIHNpemUgb24gaG92ZXIgKi9cbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7IC8qIEFkZCBhIHNtb290aCB0cmFuc2l0aW9uICovXG4gICAgfVxuICAgIFxuICAgICAgPC9zdHlsZT5cbiAgICBcbiAgICA8IS0tPT09PT09IENBTEwgVE8gQUNUSU9OIE9ORSBQQVJUIFNUQVJUID09PT09PS0tPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FsbC1hY3Rpb24tYXJlYSBjYWxsLWFjdGlvbi1vbmVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGNhbGwtYWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNyBjb2wtbGctOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbC1hY3Rpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImFjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgUmVhZHkgdG8gdHVybiB5b3VyIGRyZWFtIGhvbWUgaW50byByZWFsaXR5P1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgICBTYXJrIENvbnN0cnVjdGlvbiBpcyBoZXJlIGZvciB5b3UsIHdpdGggYSB0ZWFtIGRlZGljYXRlZCB0byBkZWxpdmVyaW5nIGNvbnN0cnVjdGlvbiBzZXJ2aWNlcyB0aGF0IGV4Y2VlZCBleHBlY3RhdGlvbnMuIFdoZXRoZXIgeW91J3JlIGVudmlzaW9uaW5nIGEgbW9kZXJuIG1hc3RlcnBpZWNlIG9yIGEgY296eSB0cmFkaXRpb25hbCBob21lLCB3ZSBoYXZlIHRoZSBleHBlcnRpc2UgdG8gYnJpbmcgeW91ciBpZGVhcyB0byBsaWZlLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNSBjb2wtbGctNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGwtYWN0aW9uLWJ0biB0ZXh0LWxnLWVuZFwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgcHktMyBweC01XCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGhvbmUtYWx0XCI+PC9pPiBDb250YWN0IHVzXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHB5LTMgcHgtNVwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFiIGZhLXdoYXRzYXBwXCI+PC9pPiBDaGF0IHdpdGggdXNcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwhLS0gcm93IC0tPlxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIGNvbnRhaW5lciAtLT5cbiAgICA8L3NlY3Rpb24+XG4gICAgPCEtLT09PT09PSBDQUxMIFRPIEFDVElPTiBPTkUgUEFSVCBFTkRTID09PT09PS0tPlxuICAgIFxuICAgIFxuICAgICJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBdUN5Qyw2Q0FFekIsQ0FBQSxDQUFBOzs7YUFDbUIsdVBBRW5CLENBQUEsQ0FBQTs7Ozs7OzthQU9vQyxhQUNsQyxDQUFBLENBQUE7Ozs7YUFHaUMsZUFDakMsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OzZCQWpCdUIsNkNBRXpCLENBQUEsQ0FBQTs7Ozs7NEJBQ21CLHVQQUVuQixDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs2QkFPb0MsYUFDbEMsQ0FBQSxDQUFBOzs7Ozs7OzZCQUdpQyxlQUNqQyxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F0QmQsb0JBa0NVLENBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTtHQWpDUixvQkErQk0sQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLENBQUE7R0E5Qkgsb0JBNEJNLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0dBM0JILG9CQVNNLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0dBUkosb0JBT00sQ0FBQSxJQUFBLEVBQUEsSUFBQSxDQUFBLENBQUE7R0FOSixvQkFFSyxDQUFBLElBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTs7O0dBQ0wsb0JBRUksQ0FBQSxJQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUE7OztHQUdSLG9CQWdCTSxDQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQTtHQWZKLG9CQVdNLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0dBVkosb0JBUUksQ0FBQSxJQUFBLEVBQUEsSUFBQSxDQUFBLENBQUE7R0FQRixvQkFFSSxDQUFBLElBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTtHQURGLG9CQUFnQyxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTs7O0dBR2xDLG9CQUVJLENBQUEsSUFBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO0dBREYsb0JBQStCLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
