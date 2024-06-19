import { toPng } from "html-to-image";

export const loadGetUserSnapshotEventListener = () => {
  const sendSnapshot = () => {
    toPng(document.body).then((url) => {
      window.top.postMessage({ type: "USER_SNAPSHOT", snapshot: url }, "http://localhost:3000");
      window.top.postMessage({ type: "USER_SNAPSHOT", snapshot: url }, "https://run.gptengineer.app");
    });
  };

  window.addEventListener("onload", sendSnapshot);
  window.addEventListener("blur", sendSnapshot);
};
