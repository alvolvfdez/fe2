((Drupal, once) => {
  Drupal.behaviors.forcontu_umamiHeader = {
    attach(context) {
      once(
        'forcontu_umami-header',
        '[aria-controls="forcontu_umami-header__dropdown"]',
        context,
      ).forEach((button) => {
        button.addEventListener('click', (e) => {
          button.setAttribute(
            'aria-expanded',
            e.currentTarget.getAttribute('aria-expanded') === 'false',
          );
        });
      });
    },
  };
})(Drupal, once);
