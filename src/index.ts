import "./style.css";
import { addEventListenerForButton, fetch } from "./helpers";
import { mainTemplate } from "./templates";

export async function initApp(element: string) {
  const data = await fetch();

  document.querySelector<HTMLDivElement>(element)!.innerHTML = mainTemplate;

  addEventListenerForButton(data);
}

initApp("#app");
