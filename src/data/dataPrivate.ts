import { IPage } from "../types/interface";
import g_001 from "../assets/img/cover/g_001.jpg";

export const dataPrivate: IPage[] = [
  {
    _id: "home3",
    content: "Example content. Welcome to my ninja notion clone!",
    name: "Welcome to my ninja notion clone!",
    icon: "😀",
    comment: "Example you comment",
    favorite: false,
    property: {
      font: "default",
      small_text: false,
      full_width: false,
    },
    dataTrash: "",
    dataAdd: "2023-01-01",
    dataMod: "2023-01-01",
    cover: {
      url: g_001,
      position: 100,
    },
    children_page: [
      {
        _id: "home2",
        content: "Example content. Welcome to my ninja notion clone!",
        name: "Welcome to my ninja notion clone!",
        icon: "😀",
        comment: "Example you comment",
        favorite: false,
        property: {
          font: "default",
          small_text: false,
          full_width: false,
        },
        dataTrash: "",
        dataAdd: "2023-01-01",
        dataMod: "2023-01-01",
        cover: {
          url: g_001,
          position: 100,
        },
        children_page: [
          {
            _id: "home",
            content: "Example content. Welcome to my ninja notion clone!",
            name: "Welcome to my ninja notion clone!",
            icon: "😀",
            comment: "Example you comment",
            favorite: false,
            property: {
              font: "default",
              small_text: false,
              full_width: false,
            },
            dataTrash: "",
            dataAdd: "2023-01-01",
            dataMod: "2023-01-01",
            cover: {
              url: g_001,
              position: 100,
            },
            children_page: [],
          },
        ],
      },
    ],
  },
];
