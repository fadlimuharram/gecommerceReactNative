import { productConstants } from "../_constants";

const INITIAL_STATE = {
  data: [
    {
      id: 1,
      name: "Kamboja Jepang Kecil",
      price: "20000",
      desc: "ini deskripsi untuk kamboja",
      uri:
        "https://bibitbunga.com/wp-content/uploads/2016/04/adenium-dalam-pot.jpg",
      category_id: 2,
      category: {
        id: 2,
        name: "Tanaman Hias",
        uri:
          "https://www.wallpaperup.com/uploads/wallpapers/2012/07/14/6033/2d412d59ffa38ed0f6d0fff9462dbcb4-700.jpg"
      }
    },
    {
      id: 2,
      name: "Kamboja Jepang Besar",
      price: "100000",
      desc: "ini deskripsi untuk kamboja besar",
      uri:
        "https://3.bp.blogspot.com/-JKFQyKE5rXo/WSuvU4un9XI/AAAAAAAAAUs/M0hq1HEMQtAMwaz4BK9DUak3Kwck3Al3ACLcB/s1600/Ciri-Ciri%2BTanaman%2BBonsai%2BAdenium.jpg",
      category_id: 2,
      category: {
        id: 2,
        name: "Tanaman Hias",
        uri:
          "https://www.wallpaperup.com/uploads/wallpapers/2012/07/14/6033/2d412d59ffa38ed0f6d0fff9462dbcb4-700.jpg"
      }
    },
    {
      id: 3,
      name: "Rumput Laut",
      price: "30000",
      desc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, perspiciatis sed eaque ipsam libero debitis voluptatem vitae maxime, quis, esse corrupti ad odit laudantium enim doloribus pariatur aliquid ex alias!",
      uri:
        "https://cdns.klimg.com/dream.co.id/resized/640x320/news/2018/01/11/74806/ragam-manfaat-rumput-laut-yang-berserat-1801116.jpg",
      category_id: 1,
      category: {
        id: 1,
        name: "Tumbuhan Akuatik",
        uri: "https://images4.alphacoders.com/247/thumb-1920-247264.jpg"
      }
    },
    {
      id: 4,
      name: "Pohon Jeruk Imlek",
      price: "500000",
      desc: "ini deskripsi untuk jeruk imlek",
      uri:
        "https://media.suara.com/pictures/653x366/2018/01/30/16683-pohon-jeruk-imlek.jpg",
      category_id: 4,
      category: {
        id: 4,
        name: "Pohon Buah",
        uri:
          "http://wallsdesk.com/wp-content/uploads/2018/04/Apple-tree-Wallpaper.jpg"
      }
    },
    {
      id: 5,
      name: "Kamboja Jepang Sedang",
      price: "50000",
      desc: "ini deskripsi untuk kamboja besar",
      uri:
        "https://3.bp.blogspot.com/-JKFQyKE5rXo/WSuvU4un9XI/AAAAAAAAAUs/M0hq1HEMQtAMwaz4BK9DUak3Kwck3Al3ACLcB/s1600/Ciri-Ciri%2BTanaman%2BBonsai%2BAdenium.jpg",
      category_id: 2,
      category: {
        id: 2,
        name: "Tanaman Hias",
        uri:
          "https://www.wallpaperup.com/uploads/wallpapers/2012/07/14/6033/2d412d59ffa38ed0f6d0fff9462dbcb4-700.jpg"
      }
    }
  ],
  tempData: []
};

const { PRODUCTS_GET, PRODUCTS_GET_ID } = productConstants;

/**
 * temporary
 */

const filterByCategoryId = (categoryId, state) => {
  // console.log(categoryId, state);
  return state.data.filter(product => product.category_id === categoryId);
};

const findById = (id, state) => {
  return state.data.filter(product => product.id === id);
};

/**
 * end temporary
 */

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_GET:
      // console.log("tesfilter", filterByCategoryId(action.payload, state));
      // const data = filterByCategoryId(action.payload, state);
      // console.log("redu", data);
      return { ...state, tempData: filterByCategoryId(action.payload, state) };

    case PRODUCTS_GET_ID:
      return { ...state, tempData: findById(action.payload, state) };
    default:
      return state;
  }
};
