import { FaTable } from "react-icons/fa";

export const sideBarMenus = [
  {
    id: 1,
    menuName: "First",
    menuNameBn: "First",
    icon: FaTable,
    routeUrl: "",
    isNewTap: 0,
    childs: [
      {
        id: 11,
        menuName: "Calender",
        menuNameBn: "Calender",
        icon: FaTable,
        routeUrl: "/receive",
        isNewTap: 0,
        childs: [],
      },
      
    ],
  },
 
];
