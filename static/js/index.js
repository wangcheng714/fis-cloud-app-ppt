Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

	transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

	// Optional libraries used to extend on reveal.js
	dependencies: [
		{ src: '/static/ppt/lib/js/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
	]
});