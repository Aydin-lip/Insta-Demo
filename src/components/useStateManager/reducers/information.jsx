import { Loggin, Account, MePosts } from "../actions/typeActions";

const initialState = {
  Account: {
    username: "",
    password: "",
    email: "",
    name: "",
    have: false,
    avatar: "/imgs/profile/myProfile.jpg",
    bio: `👨🏻‍💻 Welcome to the world of Programmers! \n
    📊 Sponsored Post/Story: DM \n
    ⚠️ The coolest gadgets for programmer!`,
    rul: "Programer",
    phone: "",
    gender: "Custom",
    website: "",
  },
  Loggin: false,
  Posts: [
    {
      id: 87,
      postsUrl: [
        "https://i.pinimg.com/564x/df/f9/2f/dff92ff8d71cb2d1f12ed96302ac4b4c.jpg",
        "https://i.pinimg.com/564x/a6/df/8b/a6df8b84c6ff5d43d8d548dab67eccb4.jpg",
        "https://i.pinimg.com/564x/2a/0c/37/2a0c37fec7b245d87fc48ae54140167e.jpg",
        "https://i.pinimg.com/564x/f7/47/eb/f747ebbe5de23447af0f4d31e378c504.jpg",
        "https://i.pinimg.com/564x/eb/37/cc/eb37cc1dc58a8835070fd766b77ded4f.jpg",
      ],
      infor: {
        likes: 78,
        bio: "یه وقتا چراغا رو خاموش کن که واقعیات تو تاریکی برق بزنن..78",
        like: false,
        saved: false,
      },
    },
    {
      id: 96,
      postsUrl: [
        "https://i.pinimg.com/564x/45/51/28/455128563f61e6baa3b1fa49f12b093a.jpg",
        "https://i.pinimg.com/564x/a7/cc/a3/a7cca3cacb7457227f28ff7c1f477583.jpg",
        "https://i.pinimg.com/564x/99/07/d5/9907d5183fb766986d71683dc83d132a.jpg",
      ],
      infor: {
        likes: 69,
        bio: `Verified
        YAYA OUT NOW ‼️ LINK IN BIO ⚡️ REPOST
        REPOST
        REPOST YAYA ON YOUR PAGE 💛❤️🧡💚💙💜🖤🤍 I WANT EVERYONE TO REPOST YAYA ON YOUR INSTAGRAM MI GENTE LATINA LOS AMO SOY LATINO Y SIN USTEDES NO SOY NADA LOS AMOOOOOO 💫💫💫💫💫💫💫`,
      },
      like: false,
      saved: false,
    },
  ],
};

const Information = (state = initialState, { type, payload }) => {
  switch (type) {
    case Account:
      return { ...state, Account: payload };
    case Loggin:
      return { ...state, Loggin: payload };

    case MePosts:
      return { ...state, Posts: payload };

    default:
      return state;
  }
};

export default Information;
