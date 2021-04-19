<template>
  <BaseContacts>
    <template #address>
      <address>
        Санкт-Петербург,<br />
        ул. Большая Конюшенная, 19
      </address>
    </template>
    <template #regime>Пн-Сб, с 9-00 до 20-00</template>
    <template #phone>
      <address>
        <a class="link" href="tel:+74959834719">+ 7 (495) 983-47-19</a>
      </address>
    </template>
    <template #email>
      <address>
        <a class="link" href="mailto:info@cleverbaby.ru">info@cleverbaby.ru</a>
      </address>
    </template>
    <template #map>
      <TheMap />
    </template>
  </BaseContacts>
</template>
<script>
export default {}
</script>
