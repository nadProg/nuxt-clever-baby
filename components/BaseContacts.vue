<template>
  <section id="contacts" class="contacts">
    <div class="container">
      <div class="contacts__wrapper">
        <h2 class="ally-hidden">Блок с контактами</h2>
        <p class="contacts__title title">Мы ждем вас</p>
        <dl class="contacts__list text">
          <div class="contacts__item contacts__item--address">
            <dt class="contacts__key">Приходите к нам:</dt>
            <dd class="contacts__value">
              <slot name="address" />
            </dd>
          </div>
          <div class="contacts__item contacts__item--regime">
            <dt class="contacts__key">Режим работы:</dt>
            <dd class="contacts__value">
              <slot name="regime" />
            </dd>
          </div>
          <div class="contacts__item contacts__item--phone">
            <dt class="contacts__key">Позвоните нам:</dt>
            <dd class="contacts__value">
              <slot name="phone" />
            </dd>
          </div>
          <div class="contacts__item contacts__item--email">
            <dt class="contacts__key">Напишите нам:</dt>
            <dd class="contacts__value">
              <slot name="email" />
            </dd>
          </div>
          <div class="contacts__item contacts__item--socials">
            <dt class="contacts__key">Мы в соцсетях:</dt>
            <dd class="contacts__value">
              <ul class="contacts__socials socials">
                <li
                  v-for="social in socials"
                  :key="social.link"
                  class="socials__item"
                >
                  <a
                    class="socials__link link"
                    :href="social.link"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      class="socials_icon"
                      :width="social.icon.width"
                      :height="social.icon.height"
                    >
                      <use :href="social.icon.link" />
                    </svg>
                    <span class="ally-hidden">{{ social.label }}</span>
                  </a>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <slot name="map" />
  </section>
</template>
<script>
export default {
  data: () => ({
    sectionTitle: 'Блок с контактами',
    title: 'Мы ждем вас',
    address: 'Санкт-Петербург,\n ул. Большая Конюшенная, 19',
    contactList: [
      {
        term: '',
        definition: '',
      },
    ],
    socials: [
      {
        label: 'Facebook',
        link: 'https://www.facebook.com/',
        icon: { link: '#icon-fb', width: '6', height: '12' },
      },
      {
        label: 'Вконтакте',
        link: 'https://vk.com/',
        icon: { link: '#icon-vk', width: '14', height: '8' },
      },
      {
        label: 'Instagram',
        link: 'https://www.instagram.com/',
        icon: { link: '#icon-inst', width: '12', height: '12' },
      },
    ],
  }),
}
</script>
