export const menuItems = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Ground Vehicles",
        url: "/GroundVehicles",
        submenu: [
            {
                title: "1:35",
                url:"/135GroundVehicles",
            },
            {
                title: "1:42",
                url: "/142GroundVehicles",
            }
        ],
    },
    {
        title: "Aircraft",
        url: "/Aircraft",
        submenu: [
            {
                title: "1:32",
                url:"/132Aircraft",
            },
            {
                title: "1:48",
                url:"/148Aircraft",
            }
        ],
    },
    {
        title: "Gundams",
        url: "/Gundams",
        submenu: [
            {
                title: "MG",
                url: "/MGGundams",
            },
            {
                title: "RG",
                url: "/RGGundams",
            }
        ],
    },
    {
        title: "Other Models",
        url: "/OtherModels",
    }
]