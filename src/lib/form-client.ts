// Shared sending for the cake order and wholesale forms. Each form carries its
// endpoint (PUBLIC_FORM_ENDPOINT), fallback email and subject as data attributes.
// With no endpoint, it opens the visitor's email app with the answers filled in.
export function wireForm(form: HTMLFormElement, thanks: string, check?: () => string | null) {
  const status = form.querySelector<HTMLElement>(".form-status")!;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const problem = check?.();
    if (problem) {
      status.textContent = problem;
      return;
    }
    const { endpoint, email, subject } = form.dataset;
    const data = new FormData(form);

    if (!endpoint) {
      const lines: string[] = [];
      for (const [key, value] of data.entries()) {
        if (key.startsWith("_") || !String(value).trim()) continue;
        lines.push(`${key}: ${value}`);
      }
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject ?? "")}&body=${encodeURIComponent(lines.join("\n"))}`;
      status.textContent = "Your email app should open with your answers filled in.";
      return;
    }

    const button = form.querySelector<HTMLButtonElement>("button[type=submit]")!;
    button.disabled = true;
    status.textContent = "Sending";
    try {
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.textContent = thanks;
    } catch {
      status.textContent = "";
      status.append("Sorry, that didn't send. Please email us at ");
      const link = Object.assign(document.createElement("a"), { href: `mailto:${email}`, textContent: email });
      status.append(link, ".");
    } finally {
      button.disabled = false;
    }
  });
}
