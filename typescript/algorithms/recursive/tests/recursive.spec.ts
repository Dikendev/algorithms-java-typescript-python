import { flattenStructure } from "../recursive";
import { Structure } from "../structure.interface";

describe("flattenStructure", () => {
	it("should result in a flat structure", () => {
		const child2: Structure[] = [
			{
				id: 2.1,
				description: "child2",
				child: [],
			},
			{
				id: 2.2,
				description: "child2",
				child: [],
			},
		];

		const child4: Structure[] = [
			{
				id: 4.1,
				description: "child4",
				child: [],
			},
			{
				id: 4.2,
				description: "child4",
				child: [],
			},
		];

		const child3: Structure[] = [
			{
				id: 3.1,
				description: "child3",
				child: [],
			},
			{
				id: 3.2,
				description: "child3",
				child: [],
			},
			{
				id: 3.3,
				description: "child3",
				child: [],
			},
			{
				id: 3.4,
				description: "child3",
				child: [],
			},
			{
				id: 4,
				description: "child3",
				child: child4,
			},
		];

		const parentObject: Structure[] = [
			{
				id: 1,
				description: "parent1",
				child: [],
			},
			{
				id: 2,
				description: "parent2",
				child: child2,
			},
			{
				id: 3,
				description: "parent3",
				child: child3,
			},
		];

		const flattenResult = flattenStructure(parentObject);
		const expectResult = [
			{ id: 1, description: "parent1", child: [] },
			{ id: 2, description: "parent2", child: [] },
			{ id: 2.1, description: "child2", child: [] },
			{ id: 2.2, description: "child2", child: [] },
			{ id: 3, description: "parent3", child: [] },
			{ id: 3.1, description: "child3", child: [] },
			{ id: 3.2, description: "child3", child: [] },
			{ id: 3.3, description: "child3", child: [] },
			{ id: 3.4, description: "child3", child: [] },
			{ id: 4, description: "child3", child: [] },
			{ id: 4.1, description: "child4", child: [] },
			{ id: 4.2, description: "child4", child: [] },
		];
		expect(flattenResult).toEqual(expectResult);
	});
});