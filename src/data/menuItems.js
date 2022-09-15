export const menuItems = [
    {
      title: 'Home',
      url: '/Home',
    },
    {
      title: 'About Us',
      url: '/services',
    },
    {
      title: 'Individuals',
      url: '/',
      submenu: [
        {
            title: 'Farmers',
            url: '/Farmers',
        },
        {
            title: 'Offtakers',
            url: '/Offtakers',
        },
        {
            title: 'Agro Dealers',
            url: '/Dealers'
        },
        {
            title:'Admin',
            url: '/Admin'
        },
      ],
    },
    {
        title: 'Contact',
        url: '/Contact',
      },
  ];