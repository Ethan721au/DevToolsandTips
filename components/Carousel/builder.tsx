Builder.registerComponent(withChildren(CarouselCMS), {
	name: "Carousel",
	inputs: [
		{
			name: "padding",
			type: "number",
			defaultValue: "20"
		},
		{ name: "width", type: "number", defaultValue: "150" },
		{ name: "accentColor", type: "colour" }
	]
});
