// Big Kid Club: tilføjer tilkøbsvarer fra kurven ("Tilføj til din ordre").
// I kurveskuffen gentegnes skuffen med Dawns egen renderContents.
// På kurvsiden genindlæses siden, så totaler og fri-fragt-bjælke opdateres.
if (!customElements.get('bkc-upsell')) {
  customElements.define(
    'bkc-upsell',
    class BkcUpsell extends HTMLElement {
      connectedCallback() {
        this.addEventListener('click', (event) => {
          const button = event.target.closest('[data-bkc-add]');
          if (button) this.add(button);
        });
      }

      async add(button) {
        const drawer = this.closest('cart-drawer');
        const body = { items: [{ id: Number(button.dataset.variantId), quantity: 1 }] };
        if (drawer) {
          body.sections = drawer.getSectionsToRender().map((section) => section.id);
          body.sections_url = window.location.pathname;
        }

        button.disabled = true;
        button.setAttribute('aria-busy', 'true');

        try {
          const response = await fetch(`${routes.cart_add_url}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/javascript' },
            body: JSON.stringify(body),
          });
          const data = await response.json();
          if (!response.ok || data.status) throw new Error(data.description || data.message);

          if (drawer) {
            drawer.renderContents(data);
          } else {
            window.location.reload();
          }
        } catch (error) {
          button.disabled = false;
          button.removeAttribute('aria-busy');
          const message = this.querySelector('[data-bkc-error]');
          if (message) {
            message.textContent = error.message || 'Varen kunne ikke tilføjes. Prøv igen.';
            message.hidden = false;
          }
        }
      }
    }
  );
}
