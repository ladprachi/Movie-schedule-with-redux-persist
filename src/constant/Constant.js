
export const ROUTE_CONFIG = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  DASHBOARD_CARD_VIEW: "/dashboard/view/:moviesId",
  LOGIN: "/login",
  MOVIE: "/movie",
  MOVIE_VIEW: "/movie/view/:moviesId",
  MOVIE_EDIT: "/movie/edit/:moviesId",
  ADD_MOVIE: "/add-movie",
  CONTACT_US: "/contact-us",
  ABOUT_US: "/about-us",
  POLICY: "/policy",
};

export const AUTH_OBJ = {
  email: "",
  password: "",
};

// export const IMG_OBJ = {
//   url: '',
// };

export const ADD_MOVIE_FORM = {
  id: "",
  imageUrl: "",
  title: "",
  director: "",
  releaseDate: "",
  endDate: "",
  budget: "",
  rating: "",
  language: "",
  movieType: "",
  preview: "",
};

export const AVATAR_ITEMS = [
  {
    label: "MyAccount",
    key: "0",
  },
  {
    label: "Policy",
    key: "1",
    path: ROUTE_CONFIG?.POLICY
  },
  {
    type: "divider",
  },
  {
    label: "LogOut",
    key: "3",
    path: ROUTE_CONFIG?.LOGOUT,
  },
];

export const FORM_ITEM_LAYOUT = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

export const FORM_LANGUAGE = [
  {
    label: "Hindi",
    value: "Hindi",
  },
  {
    label: "English",
    value: "English",
  },
  {
    label: "Gujarati",
    value: "Gujarati",
  },
];

export const FORM_MOVIE_TYPE = [
  {
    label: "Comedy",
    value: "Comedy",
  },
  {
    label: "Drama",
    value: "Drama",
  },
  {
    label: "Romance",
    value: "Romance",
  },
  {
    label: "Horror",
    value: "Horror",
  },
];
