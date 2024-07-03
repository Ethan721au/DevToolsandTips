import { Builder, withChildren } from "@builder.io/react";



Builder.registerComponent(withChildren(InfiniteScroll), {
	name: "InfiniteScroll",
	inputs: [
		{
			name: "speed",
			type: "string",
			defaultValue: "normal",
			enum: ["slow", "normal", "fast"]
		},
		{ name: "itemPadding", type: "number", defaultValue: 10 },
		{ name: "active", type: "boolean", defaultValue: true },
		{ name: "orientation", type: "enum", defaultValue: "horizontal", enum: ["horizontal", "vertical"] },
		{ name: "direction", type: "enum", defaultValue: "normal", enum: ["normal", "reverse"] }
	]
});
