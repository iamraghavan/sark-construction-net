(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1701704742549;

	const files = [
		"/service-worker-index.html",
		"/ajax/libs/font-awesome/5.10.0/css/all.min.css",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-brands-400-1.eot",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-brands-400.eot",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-brands-400.svg",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-brands-400.ttf",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-brands-400.woff",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-brands-400.woff2",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-regular-400-1.eot",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-regular-400.eot",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-regular-400.svg",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-regular-400.ttf",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-regular-400.woff",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-regular-400.woff2",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-solid-900-1.eot",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-solid-900.eot",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-solid-900.svg",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-solid-900.ttf",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-solid-900.woff",
		"/ajax/libs/font-awesome/5.10.0/webfonts/fa-solid-900.woff2",
		"/css/bootstrap.min.css",
		"/css/style.css",
		"/img/Sark-black.svg",
		"/img/Sark-white.svg",
		"/img/Sark.png",
		"/img/about.jpg",
		"/img/buget.jpg",
		"/img/carousel-1.jpg",
		"/img/carousel-2.jpg",
		"/img/construction-consulting.jpg",
		"/img/contact-sark-construction.jpg",
		"/img/fact-1.jpg",
		"/img/fact-2.jpg",
		"/img/fact-3.jpg",
		"/img/fact-4.jpg",
		"/img/feature.jpg",
		"/img/govt-approvals.jpg",
		"/img/joint-venture.jpg",
		"/img/service-1.jpg",
		"/img/service-2.jpg",
		"/img/service-3.jpg",
		"/img/service-4.jpg",
		"/img/service-5.jpg",
		"/img/service-6.jpg",
		"/img/structural-design-and-detailing.jpg",
		"/img/team-1.jpg",
		"/img/team-2.jpg",
		"/img/team-3.jpg",
		"/img/testimonial-1.jpg",
		"/img/testimonial-2.jpg",
		"/jquery-3.4.1.min.js",
		"/js/main.js",
		"/lib/animate/animate.min.css",
		"/lib/easing/easing.min.js",
		"/lib/owlcarousel/assets/owl.carousel.min.css",
		"/lib/owlcarousel/assets/owl.video.play.png",
		"/lib/owlcarousel/owl.carousel.min.js",
		"/lib/waypoints/waypoints.min.js",
		"/lib/wow/wow.min.js",
		"/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css",
		"/npm/bootstrap-icons@1.4.1/font/fonts/bootstrap-icons.woff",
		"/npm/bootstrap-icons@1.4.1/font/fonts/bootstrap-icons.woff2",
		"/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
	];

	const shell = [
		"/client/client.314ef861.js",
		"/client/inject_styles.5607aec6.js",
		"/client/index.d72be497.js",
		"/client/construction-consulting-services.8579864c.js",
		"/client/Cta.9266c54d.js",
		"/client/structural-design-and-detailing.03e40618.js",
		"/client/commercial-construction.bb7020bb.js",
		"/client/budgeting-and-costing.240ff56a.js",
		"/client/govt-plan-approvals.4c55711a.js",
		"/client/house-construction.a06a74e3.js",
		"/client/joint-venture.2fd16f2f.js",
		"/client/about.eb9553d1.js",
		"/client/index.fd834bb4.js",
		"/client/_slug_.fe3238c4.js",
		"/client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const staticAssets = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});


	/**
	 * Fetch the asset from the network and store it in the cache. 
	 * Fall back to the cache if the user is offline.
	 */
	async function fetchAndCache(request) {
		const cache = await caches.open(`offline${timestamp}`);

		try {
			const response = await fetch(request);
			cache.put(request, response.clone());
			return response;
		} catch (err) {
			const response = await cache.match(request);
			if (response) return response;

			throw err;
		}
	}

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		const isHttp = url.protocol.startsWith('http');
		const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
		const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
		const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;

		if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
			event.respondWith(
				(async () => {
					// always serve static files and bundler-generated assets from cache.
					// if your application has other URLs with data that will never change,
					// set this variable to true for them and they will only be fetched once.
					const cachedAsset = isStaticAsset && await caches.match(event.request);

					// for pages, you might want to serve a shell `service-worker-index.html` file,
					// which Sapper has generated for you. It's not right for every
					// app, but if it's right for yours then uncomment this section
					/*
					if (!cachedAsset && url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
						return caches.match('/service-worker-index.html');
					}
					*/

					return cachedAsset || fetchAndCache(event.request);
				})()
			);
		}
	});

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTcwMTcwNDc0MjU0OTtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcIi9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sXCIsXG5cdFwiL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMC4wL2Nzcy9hbGwubWluLmNzc1wiLFxuXHRcIi9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTAuMC93ZWJmb250cy9mYS1icmFuZHMtNDAwLTEuZW90XCIsXG5cdFwiL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMC4wL3dlYmZvbnRzL2ZhLWJyYW5kcy00MDAuZW90XCIsXG5cdFwiL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMC4wL3dlYmZvbnRzL2ZhLWJyYW5kcy00MDAuc3ZnXCIsXG5cdFwiL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMC4wL3dlYmZvbnRzL2ZhLWJyYW5kcy00MDAudHRmXCIsXG5cdFwiL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMC4wL3dlYmZvbnRzL2ZhLWJyYW5kcy00MDAud29mZlwiLFxuXHRcIi9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTAuMC93ZWJmb250cy9mYS1icmFuZHMtNDAwLndvZmYyXCIsXG5cdFwiL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMC4wL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLTEuZW90XCIsXG5cdFwiL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMC4wL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLmVvdFwiLFxuXHRcIi9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTAuMC93ZWJmb250cy9mYS1yZWd1bGFyLTQwMC5zdmdcIixcblx0XCIvYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjEwLjAvd2ViZm9udHMvZmEtcmVndWxhci00MDAudHRmXCIsXG5cdFwiL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMC4wL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLndvZmZcIixcblx0XCIvYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjEwLjAvd2ViZm9udHMvZmEtcmVndWxhci00MDAud29mZjJcIixcblx0XCIvYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjEwLjAvd2ViZm9udHMvZmEtc29saWQtOTAwLTEuZW90XCIsXG5cdFwiL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMC4wL3dlYmZvbnRzL2ZhLXNvbGlkLTkwMC5lb3RcIixcblx0XCIvYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjEwLjAvd2ViZm9udHMvZmEtc29saWQtOTAwLnN2Z1wiLFxuXHRcIi9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTAuMC93ZWJmb250cy9mYS1zb2xpZC05MDAudHRmXCIsXG5cdFwiL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMC4wL3dlYmZvbnRzL2ZhLXNvbGlkLTkwMC53b2ZmXCIsXG5cdFwiL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMC4wL3dlYmZvbnRzL2ZhLXNvbGlkLTkwMC53b2ZmMlwiLFxuXHRcIi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIixcblx0XCIvY3NzL3N0eWxlLmNzc1wiLFxuXHRcIi9pbWcvU2Fyay1ibGFjay5zdmdcIixcblx0XCIvaW1nL1Nhcmstd2hpdGUuc3ZnXCIsXG5cdFwiL2ltZy9TYXJrLnBuZ1wiLFxuXHRcIi9pbWcvYWJvdXQuanBnXCIsXG5cdFwiL2ltZy9idWdldC5qcGdcIixcblx0XCIvaW1nL2Nhcm91c2VsLTEuanBnXCIsXG5cdFwiL2ltZy9jYXJvdXNlbC0yLmpwZ1wiLFxuXHRcIi9pbWcvY29uc3RydWN0aW9uLWNvbnN1bHRpbmcuanBnXCIsXG5cdFwiL2ltZy9jb250YWN0LXNhcmstY29uc3RydWN0aW9uLmpwZ1wiLFxuXHRcIi9pbWcvZmFjdC0xLmpwZ1wiLFxuXHRcIi9pbWcvZmFjdC0yLmpwZ1wiLFxuXHRcIi9pbWcvZmFjdC0zLmpwZ1wiLFxuXHRcIi9pbWcvZmFjdC00LmpwZ1wiLFxuXHRcIi9pbWcvZmVhdHVyZS5qcGdcIixcblx0XCIvaW1nL2dvdnQtYXBwcm92YWxzLmpwZ1wiLFxuXHRcIi9pbWcvam9pbnQtdmVudHVyZS5qcGdcIixcblx0XCIvaW1nL3NlcnZpY2UtMS5qcGdcIixcblx0XCIvaW1nL3NlcnZpY2UtMi5qcGdcIixcblx0XCIvaW1nL3NlcnZpY2UtMy5qcGdcIixcblx0XCIvaW1nL3NlcnZpY2UtNC5qcGdcIixcblx0XCIvaW1nL3NlcnZpY2UtNS5qcGdcIixcblx0XCIvaW1nL3NlcnZpY2UtNi5qcGdcIixcblx0XCIvaW1nL3N0cnVjdHVyYWwtZGVzaWduLWFuZC1kZXRhaWxpbmcuanBnXCIsXG5cdFwiL2ltZy90ZWFtLTEuanBnXCIsXG5cdFwiL2ltZy90ZWFtLTIuanBnXCIsXG5cdFwiL2ltZy90ZWFtLTMuanBnXCIsXG5cdFwiL2ltZy90ZXN0aW1vbmlhbC0xLmpwZ1wiLFxuXHRcIi9pbWcvdGVzdGltb25pYWwtMi5qcGdcIixcblx0XCIvanF1ZXJ5LTMuNC4xLm1pbi5qc1wiLFxuXHRcIi9qcy9tYWluLmpzXCIsXG5cdFwiL2xpYi9hbmltYXRlL2FuaW1hdGUubWluLmNzc1wiLFxuXHRcIi9saWIvZWFzaW5nL2Vhc2luZy5taW4uanNcIixcblx0XCIvbGliL293bGNhcm91c2VsL2Fzc2V0cy9vd2wuY2Fyb3VzZWwubWluLmNzc1wiLFxuXHRcIi9saWIvb3dsY2Fyb3VzZWwvYXNzZXRzL293bC52aWRlby5wbGF5LnBuZ1wiLFxuXHRcIi9saWIvb3dsY2Fyb3VzZWwvb3dsLmNhcm91c2VsLm1pbi5qc1wiLFxuXHRcIi9saWIvd2F5cG9pbnRzL3dheXBvaW50cy5taW4uanNcIixcblx0XCIvbGliL3dvdy93b3cubWluLmpzXCIsXG5cdFwiL25wbS9ib290c3RyYXAtaWNvbnNAMS40LjEvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzXCIsXG5cdFwiL25wbS9ib290c3RyYXAtaWNvbnNAMS40LjEvZm9udC9mb250cy9ib290c3RyYXAtaWNvbnMud29mZlwiLFxuXHRcIi9ucG0vYm9vdHN0cmFwLWljb25zQDEuNC4xL2ZvbnQvZm9udHMvYm9vdHN0cmFwLWljb25zLndvZmYyXCIsXG5cdFwiL25wbS9ib290c3RyYXBANS4wLjAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiXG5dO1xuZXhwb3J0IHsgZmlsZXMgYXMgYXNzZXRzIH07IC8vIGxlZ2FjeVxuXG5leHBvcnQgY29uc3Qgc2hlbGwgPSBbXG5cdFwiL2NsaWVudC9jbGllbnQuMzE0ZWY4NjEuanNcIixcblx0XCIvY2xpZW50L2luamVjdF9zdHlsZXMuNTYwN2FlYzYuanNcIixcblx0XCIvY2xpZW50L2luZGV4LmQ3MmJlNDk3LmpzXCIsXG5cdFwiL2NsaWVudC9jb25zdHJ1Y3Rpb24tY29uc3VsdGluZy1zZXJ2aWNlcy44NTc5ODY0Yy5qc1wiLFxuXHRcIi9jbGllbnQvQ3RhLjkyNjZjNTRkLmpzXCIsXG5cdFwiL2NsaWVudC9zdHJ1Y3R1cmFsLWRlc2lnbi1hbmQtZGV0YWlsaW5nLjAzZTQwNjE4LmpzXCIsXG5cdFwiL2NsaWVudC9jb21tZXJjaWFsLWNvbnN0cnVjdGlvbi5iYjcwMjBiYi5qc1wiLFxuXHRcIi9jbGllbnQvYnVkZ2V0aW5nLWFuZC1jb3N0aW5nLjI0MGZmNTZhLmpzXCIsXG5cdFwiL2NsaWVudC9nb3Z0LXBsYW4tYXBwcm92YWxzLjRjNTU3MTFhLmpzXCIsXG5cdFwiL2NsaWVudC9ob3VzZS1jb25zdHJ1Y3Rpb24uYTA2YTc0ZTMuanNcIixcblx0XCIvY2xpZW50L2pvaW50LXZlbnR1cmUuMmZkMTZmMmYuanNcIixcblx0XCIvY2xpZW50L2Fib3V0LmViOTU1M2QxLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC5mZDgzNGJiNC5qc1wiLFxuXHRcIi9jbGllbnQvX3NsdWdfLmZlMzIzOGM0LmpzXCIsXG5cdFwiL2NsaWVudC9zYXBwZXItZGV2LWNsaWVudC4xZTdhNGE1ZS5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2NvbnN0cnVjdGlvbi1jb25zdWx0aW5nLXNlcnZpY2VzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zdHJ1Y3R1cmFsLWRlc2lnbi1hbmQtZGV0YWlsaW5nXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9jb21tZXJjaWFsLWNvbnN0cnVjdGlvblxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYnVkZ2V0aW5nLWFuZC1jb3N0aW5nXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9nb3Z0LXBsYW4tYXBwcm92YWxzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9ob3VzZS1jb25zdHJ1Y3Rpb25cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2pvaW50LXZlbnR1cmVcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Fib3V0XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9ibG9nXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9ibG9nXFwvKFteL10rPylcXC8/JC8gfVxuXTsiLCJpbXBvcnQgeyB0aW1lc3RhbXAsIGZpbGVzLCBzaGVsbCB9IGZyb20gJ0BzYXBwZXIvc2VydmljZS13b3JrZXInO1xuXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xuXG4vLyBgc2hlbGxgIGlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBidW5kbGVyLFxuLy8gYGZpbGVzYCBpcyBhbiBhcnJheSBvZiBldmVyeXRoaW5nIGluIHRoZSBgc3RhdGljYCBkaXJlY3RvcnlcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzKTtcbmNvbnN0IHN0YXRpY0Fzc2V0cyA9IG5ldyBTZXQodG9fY2FjaGUpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXNcblx0XHRcdC5vcGVuKEFTU0VUUylcblx0XHRcdC50aGVuKGNhY2hlID0+IGNhY2hlLmFkZEFsbCh0b19jYWNoZSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHNlbGYuc2tpcFdhaXRpbmcoKTtcblx0XHRcdH0pXG5cdCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGV2ZW50ID0+IHtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlcy5rZXlzKCkudGhlbihhc3luYyBrZXlzID0+IHtcblx0XHRcdC8vIGRlbGV0ZSBvbGQgY2FjaGVzXG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLmNsaWVudHMuY2xhaW0oKTtcblx0XHR9KVxuXHQpO1xufSk7XG5cblxuLyoqXG4gKiBGZXRjaCB0aGUgYXNzZXQgZnJvbSB0aGUgbmV0d29yayBhbmQgc3RvcmUgaXQgaW4gdGhlIGNhY2hlLiBcbiAqIEZhbGwgYmFjayB0byB0aGUgY2FjaGUgaWYgdGhlIHVzZXIgaXMgb2ZmbGluZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbmRDYWNoZShyZXF1ZXN0KSB7XG5cdGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oYG9mZmxpbmUke3RpbWVzdGFtcH1gKVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcblx0XHRjYWNoZS5wdXQocmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhY2hlLm1hdGNoKHJlcXVlc3QpO1xuXHRcdGlmIChyZXNwb25zZSkgcmV0dXJuIHJlc3BvbnNlO1xuXG5cdFx0dGhyb3cgZXJyO1xuXHR9XG59XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBldmVudCA9PiB7XG5cdGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSkgcmV0dXJuO1xuXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG5cdC8vIGRvbid0IHRyeSB0byBoYW5kbGUgZS5nLiBkYXRhOiBVUklzXG5cdGNvbnN0IGlzSHR0cCA9IHVybC5wcm90b2NvbC5zdGFydHNXaXRoKCdodHRwJyk7XG5cdGNvbnN0IGlzRGV2U2VydmVyUmVxdWVzdCA9IHVybC5ob3N0bmFtZSA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJiB1cmwucG9ydCAhPT0gc2VsZi5sb2NhdGlvbi5wb3J0O1xuXHRjb25zdCBpc1N0YXRpY0Fzc2V0ID0gdXJsLmhvc3QgPT09IHNlbGYubG9jYXRpb24uaG9zdCAmJiBzdGF0aWNBc3NldHMuaGFzKHVybC5wYXRobmFtZSk7XG5cdGNvbnN0IHNraXBCZWNhdXNlVW5jYWNoZWQgPSBldmVudC5yZXF1ZXN0LmNhY2hlID09PSAnb25seS1pZi1jYWNoZWQnICYmICFpc1N0YXRpY0Fzc2V0O1xuXG5cdGlmIChpc0h0dHAgJiYgIWlzRGV2U2VydmVyUmVxdWVzdCAmJiAhc2tpcEJlY2F1c2VVbmNhY2hlZCkge1xuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKFxuXHRcdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdFx0Ly8gYWx3YXlzIHNlcnZlIHN0YXRpYyBmaWxlcyBhbmQgYnVuZGxlci1nZW5lcmF0ZWQgYXNzZXRzIGZyb20gY2FjaGUuXG5cdFx0XHRcdC8vIGlmIHlvdXIgYXBwbGljYXRpb24gaGFzIG90aGVyIFVSTHMgd2l0aCBkYXRhIHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UsXG5cdFx0XHRcdC8vIHNldCB0aGlzIHZhcmlhYmxlIHRvIHRydWUgZm9yIHRoZW0gYW5kIHRoZXkgd2lsbCBvbmx5IGJlIGZldGNoZWQgb25jZS5cblx0XHRcdFx0Y29uc3QgY2FjaGVkQXNzZXQgPSBpc1N0YXRpY0Fzc2V0ICYmIGF3YWl0IGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KTtcblxuXHRcdFx0XHQvLyBmb3IgcGFnZXMsIHlvdSBtaWdodCB3YW50IHRvIHNlcnZlIGEgc2hlbGwgYHNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxgIGZpbGUsXG5cdFx0XHRcdC8vIHdoaWNoIFNhcHBlciBoYXMgZ2VuZXJhdGVkIGZvciB5b3UuIEl0J3Mgbm90IHJpZ2h0IGZvciBldmVyeVxuXHRcdFx0XHQvLyBhcHAsIGJ1dCBpZiBpdCdzIHJpZ2h0IGZvciB5b3VycyB0aGVuIHVuY29tbWVudCB0aGlzIHNlY3Rpb25cblx0XHRcdFx0Lypcblx0XHRcdFx0aWYgKCFjYWNoZWRBc3NldCAmJiB1cmwub3JpZ2luID09PSBzZWxmLm9yaWdpbiAmJiByb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gY2FjaGVzLm1hdGNoKCcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCovXG5cblx0XHRcdFx0cmV0dXJuIGNhY2hlZEFzc2V0IHx8IGZldGNoQW5kQ2FjaGUoZXZlbnQucmVxdWVzdCk7XG5cdFx0XHR9KSgpXG5cdFx0KTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0NBQUE7Q0FDTyxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUM7QUFDdkM7Q0FDTyxNQUFNLEtBQUssR0FBRztDQUNyQixDQUFDLDRC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
