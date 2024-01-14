export const adminMenu = [
    { //Ql người dùng
        name: 'menu.admin.manage-user', 
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage' 
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux' 
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/user-doctor' 
            },
            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin' 
            },
        ]
    },
    { //QL phòng khám
        name: 'menu.admin.clinic', 
        menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/manage-clinic' 
            },
        ]
    },
    { //QL chuyên khoa
        name: 'menu.admin.specialty', 
        menus: [
            {
                name: 'menu.admin.manage-specialty', link: '/system/manage-specialty' 
            },
        ]
    },
    { //QL cẩm nang
        name: 'menu.admin.handbook', 
        menus: [
            {
                name: 'menu.admin.manage-handbook', link: '/system/manage-handbook' 
            },
        ]
    },
];