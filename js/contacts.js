// Somente contatos aprovados pelo responsável pelo projeto.
// WhatsApp: código do país + DDD + número, apenas dígitos. Instagram: nome sem @.
const PORTAL_CONTACTS = Object.freeze({ whatsapp: '5521999999999', instagram: 'moretti_rj', authorized: true });
window.PortalContacts = {
  configure(element, channel, message = 'Olá! Quero conhecer a Portal Geek.') {
    const value = PORTAL_CONTACTS[channel];
    const valid = PORTAL_CONTACTS.authorized && (channel === 'whatsapp'
      ? /^[1-9]\d{9,14}$/.test(value)
      : /^[a-zA-Z0-9._]{1,30}$/.test(value));
    if (!valid) {
      element.removeAttribute('href');
      element.setAttribute('aria-disabled', 'true');
      element.title = 'Aguardando contato autorizado pelo responsável pelo projeto';
      return;
    }
    element.href = channel === 'whatsapp'
      ? `https://wa.me/${value}?text=${encodeURIComponent(message)}`
      : `https://www.instagram.com/${value}/`;
    element.removeAttribute('aria-disabled');
    element.removeAttribute('title');
    element.target = '_blank';
    element.rel = 'noopener noreferrer';
    if (element.dataset.activeLabel) element.textContent = element.dataset.activeLabel;
  },
  refresh() {
    document.querySelectorAll('[data-channel]').forEach(el => this.configure(el, el.dataset.channel, el.dataset.message));
    document.querySelectorAll('[data-product-contact]').forEach(el => this.configure(el, 'whatsapp', 'Olá! Quero saber mais sobre: ' + el.closest('.product-card').querySelector('h3').textContent));
    document.querySelectorAll('[data-contact-status]').forEach(el => {
      el.textContent = PORTAL_CONTACTS.authorized && PORTAL_CONTACTS.whatsapp && PORTAL_CONTACTS.instagram
        ? 'Encontre a Portal Geek nos nossos canais.' : PORTAL_CONTACTS.authorized && PORTAL_CONTACTS.whatsapp
          ? 'WhatsApp disponível. Instagram aguarda o perfil do responsável.'
          : 'Canais externos aguardam contatos autorizados para este projeto.';
    });
  }
};
PortalContacts.refresh();

