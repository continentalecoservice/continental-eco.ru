export default {
  cms_manual_init: true,
  backend: {
    branch: 'master',
    name: 'test-repo' //#github #test-repo
  },

  media_folder: 'static/assets',
  public_folder: '/assets',

  collections: [
    {
      name: 'about',
      label: 'О нас',
      folder: 'content/about',
      create: true,
      slug: 'index',
      path: '{{title}}/index',
      editor: {
        preview: true
      },
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Short Description',
          name: 'shortDescription',
          widget: 'text'
        },
        { label: 'Images', name: 'icon', widget: 'image' },
        {
          label: 'ListOfImages', name: 'listOfImages', widget: 'list', fields: [
            { label: 'Image of list', name: 'itemImg', widget: 'image' }
          ]
        },
        {
          label: 'Нам доверяют', name: 'listOfImages', widget: 'list', fields:
            { label: 'Item of list', name: 'item', widget: 'image' }
        }
      ]
    },
    {
      name: 'generalInfo',
      label: 'Загальная информация',
      folder: 'content/generalInfo',
      create: true,
      slug: 'index',
      path: '{{title}}/index',
      editor: {
        preview: true
      },
      fields: [
        { label: 'Поддержка', name: 'support', widget: 'text', default: '+7 (495) 227-56-56' },
        { label: 'Почта', name: 'email', widget: 'text', default: 'ecoservice@gmail.com' },
        { label: 'Адрес', name: 'address', widget: 'text', default: 'Москва, ул. Нижегородская, 29-33' },
        { label: 'Время работи', name: 'workTime', widget: 'text', default: '9:00 - 17:00' },
        { label: 'Главни телефон', name: 'generalPhone', widget: 'text', default: '+7495 755 69 83' },
        {
          label: 'Social Links', name: 'social', widget: 'list', fields: [
            { label: 'Facebook', name: 'facebook', widget: 'string' },
            { label: 'Instagram', name: 'instagram', widget: 'string' },
            { label: 'Whatsapp', name: 'whatsapp', widget: 'string' },
            { label: 'Viber', name: 'viber', widget: 'string' },
            { label: 'Telegram', name: 'telegram', widget: 'string' }
          ]
        }
      ]
    }
  ]
}