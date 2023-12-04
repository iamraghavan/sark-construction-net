import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, G as head_selector, h as detach_dev, f as claim_space, c as claim_element, b as children, g as claim_text, m as add_location, n as insert_hydration_dev, o as append_hydration_dev, p as noop } from './client.ee435c7c.js';
import 'jquery';

/* src/routes/about.svelte generated by Svelte v3.59.2 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let p;
	let t3;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("About this site");
			t2 = space();
			p = element("p");
			t3 = text("This is the 'about' page. There's not much here.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = head_selector('svelte-1ine71f', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "About this site");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "This is the 'about' page. There's not much here.");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 4, 0, 52);
			add_location(p, file, 6, 0, 78);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t1);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, t3);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
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
	validate_slots('About', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<About> was created with unknown prop '${key}'`);
	});

	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export { About as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuMjNkNDU0YTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkFib3V0PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT5BYm91dCB0aGlzIHNpdGU8L2gxPlxuXG48cD5UaGlzIGlzIHRoZSAnYWJvdXQnIHBhZ2UuIFRoZXJlJ3Mgbm90IG11Y2ggaGVyZS48L3A+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFJSSxpQkFBZSxDQUFBLENBQUE7OzthQUVoQixrREFBZ0QsQ0FBQSxDQUFBOzs7Ozs7Ozs7NkJBRi9DLGlCQUFlLENBQUEsQ0FBQTs7Ozs7NEJBRWhCLGtEQUFnRCxDQUFBLENBQUE7Ozs7Ozs7Ozs7O0dBRm5ELG9CQUF3QixDQUFBLE1BQUEsRUFBQSxFQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7OztHQUV4QixvQkFBdUQsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
