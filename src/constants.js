import shortid from "shortid";

export const SIDEBAR_ITEM = "sidebarItem";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";

export const SIDEBAR_ITEMS = [
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "input",
      content: `<input class="component_input" type="text" placeholder="Input"  /> : <input class="component_input" type="text" placeholder="Input Value"  />`,
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "name",
      content: `Name : <input class="component_input" type="text" placeholder="Enter Name"  />`,
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "email",
      content: `Email : <input class="component_input" type="text" placeholder="Enter Email"  />`,
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "phone",
      content: `Phone : <input class="component_input" type="text" placeholder="Enter Phone Number"  />`,
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "image",
      content: "Some image",
    },
  },
];
