import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, p as noop } from './client.6371d940.js';
import 'jquery';

/* src/routes/house-construction.svelte generated by Svelte v3.59.2 */

function create_fragment(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91c2UtY29uc3RydWN0aW9uLjZjYjJhYTFlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2hvdXNlLWNvbnN0cnVjdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBzcmMvcm91dGVzL291ci1zZXJ2aWNlcy9ob21lLWNvbnN0cnVjdGlvbi1zYXJrLWNvbnN0cnVjdGlvbi1jaGVubmFpLnN2ZWx0ZSAtLT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBzZXJ2aWNlRGV0YWlscyA9IHtcbiAgICB0aXRsZTogXCJIb21lIENvbnN0cnVjdGlvbiAtIFNhcmsgQ29uc3RydWN0aW9uLCBDaGVubmFpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhbnNmb3JtaW5nIERyZWFtcyBpbnRvIFJlYWxpdHkgd2l0aCBRdWFsaXR5IENvbnN0cnVjdGlvbiBTZXJ2aWNlc1wiLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICBcIkN1c3RvbWl6ZWQgZGVzaWduIGFuZCBwbGFubmluZyB0YWlsb3JlZCB0byB5b3VyIHByZWZlcmVuY2VzXCIsXG4gICAgICBcIkV4cGVyaWVuY2VkIGNvbnN0cnVjdGlvbiB0ZWFtIHdpdGggYSBwYXNzaW9uIGZvciBleGNlbGxlbmNlXCIsXG4gICAgICBcIlByZW1pdW0gcXVhbGl0eSBtYXRlcmlhbHMgYW5kIGNyYWZ0c21hbnNoaXBcIixcbiAgICAgIFwiQ29tbWl0dGVkIHRvIG9uLXRpbWUgcHJvamVjdCBjb21wbGV0aW9uXCIsXG4gICAgICBcIkJ1ZGdldC1mcmllbmRseSBvcHRpb25zIHdpdGhvdXQgY29tcHJvbWlzaW5nIHF1YWxpdHlcIlxuICAgIF1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cbjxzdHlsZT5cbiAgLyogQWRkaXRpb25hbCBzdHlsaW5nIGlmIG5lZWRlZCAqL1xuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BR2EsY0FBYyxHQUFBO0FBQ3ZCLEVBQUEsS0FBSyxFQUFFLGdEQUFnRDtBQUN2RCxFQUFBLFdBQVcsRUFBRSxxRUFBcUU7RUFDbEYsUUFBUSxFQUFBO0dBQ04sNkRBQTZEO0dBQzdELDZEQUE2RDtHQUM3RCw2Q0FBNkM7R0FDN0MseUNBQXlDO0dBQ3pDLHNEQUFzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
