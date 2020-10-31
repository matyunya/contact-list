export { default as input } from "~ellx-hub/lib/components/Input";
export { default as button } from "~ellx-hub/lib/components/Button";
export { default as download } from "~ellx-hub/lib/components/Download";
export { default as upload } from "~ellx-hub/lib/components/Upload";
export { default as pretty } from "~ellx-hub/lib/components/Pretty";
import { writable } from "svelte/store";
import Store from "~ellx-hub/lib/utils/store";

const list = writable([]);

export const contactList = (uploadedData = '[]') => {
  list.set(JSON.parse(uploadedData));

  return {
    ...list,
    __EllxMeta__: {
      component: Store
    }
  };
}

export const append = item => list.update(items => [...items, item]);
