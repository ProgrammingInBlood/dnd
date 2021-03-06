import { COMPONENT, ROW, COLUMN } from "./constants";

const initialData = {
  layout: [
    {
      type: ROW,
      id: "row0",
      children: [
        {
          type: COLUMN,
          id: "column0",
          children: [
            {
              type: COMPONENT,
              id: "component0",
            },
            {
              type: COMPONENT,
              id: "component1",
            },
          ],
        },
        {
          type: COLUMN,
          id: "column1",
          children: [
            {
              type: COMPONENT,
              id: "component2",
            },
          ],
        },
      ],
    },
    {
      type: ROW,
      id: "row1",
      children: [
        {
          type: COLUMN,
          id: "column2",
          children: [
            {
              type: COMPONENT,
              id: "component3",
            },
            {
              type: COMPONENT,
              id: "component0",
            },
            {
              type: COMPONENT,
              id: "component2",
            },
          ],
        },
      ],
    },
  ],
  components: {
    component0: {
      id: "component0",
      type: "input",
      content: `<input class="component_input" type="text" placeholder="Input"  /> : <input class="component_input" type="text" placeholder="Input Value"  />`,
    },
    component1: { id: "component1", type: "image", content: "Some image" },
    component2: {
      id: "component2",
      type: "email",
      content: `Email : <input class="component_input" type="text" placeholder="Enter Email"  />`,
    },
    component3: {
      id: "component3",
      type: "name",
      content: `Name : <input class="component_input" type="text" placeholder="Enter Name"  />`,
    },
    component4: {
      id: "component4",
      type: "phone",
      content: `Phone : <input class="component_input" type="text" placeholder="Enter Phone"  />`,
    },
  },
};

export default initialData;
