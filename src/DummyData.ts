import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import BuildIcon from "@mui/icons-material/Build";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ExampleImg from "./assets/img/example.svg";
import ExampleImg2 from "./assets/img/example2.svg";
// import ExampleImg3 from "./assets/img/example3.svg";
import MapImg from "./assets/img/map.png";
import PamImg from "./assets/img/pam.png";
import MisionImg from "./assets/img/mision.jpg";
import VisionImg from "./assets/img/vision.jpg";
import ValuesImg from "./assets/img/values.jpg";

export default {
  header: {
    title: "¡Somos Ductiline!",
    buttonCta: "Conoce nuestros procesos",
    description:
      "Incididunt velit do in dolore eiusmod ea anim ad enim magna minim. eiusmod ea anim ad enim magna minim.",
  },
  footer: {
    columnsData: [
      {
        title: "Menú",
        list: [
          { text: "Officia esse ullamco", link: "#" },
          { text: "Excepteur tempor dolore", link: "#" },
          { text: "Do nisi nulla", link: "#" },
          { text: "Lorem velit nulla", link: "#" },
        ],
      },
      {
        title: "Soluciones",
        list: [
          { text: "Officia esse ullamco", link: "#" },
          { text: "Excepteur tempor dolore", link: "#" },
          { text: "Do nisi nulla", link: "#" },
          { text: "Lorem velit nulla", link: "#" },
        ],
      },
      {
        title: "Contacto",
        list: [
          { text: "Officia esse ullamco", link: "#" },
          { text: "Excepteur tempor dolore", link: "#" },
          { text: "Do nisi nulla", link: "#" },
          { text: "Lorem velit nulla", link: "#" },
        ],
      },
      {
        title: "Siguenos",
        list: [
          {
            link: "#",
            icon: FacebookIcon,
          },
          {
            link: "#",
            icon: TwitterIcon,
          },
          { link: "#", icon: YouTubeIcon },
        ],
      },
    ],
  },
  imgList: [PamImg, PamImg, PamImg, PamImg, PamImg, PamImg, PamImg],
  videoList: [
    {
      title: "Nuestro proceso 1",
      description:
        "Cupidatat in dolore mollit ea qui qui cillum amet eu nulla eiusmod qui enim velit.",
      video: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/atycPTJ6LWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
      title: "Video proceso 2",
      description:
        "Do sunt eiusmod excepteur velit culpa aliqua officia do velit. Occaecat elit in mollit ullamco adipisicing amet. Do sunt eiusmod excepteur velit culpa aliqua officia do velit.",
      video: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/atycPTJ6LWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
      title: "Video proceso 3",
      description:
        "Occaecat elit in mollit ullamco adipisicing amet. Do sunt eiusmod excepteur velit culpa aliqua officia do velit.",
      video: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/atycPTJ6LWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
  ],
  home1: {
    title: "Lorem Ipsum",
    p1: "Cupidatat in dolore mollit ea qui qui cillum amet eu nulla eiusmod qui enim velit. Occaecat elit in mollit ullamco adipisicing amet. Do sunt eiusmod excepteur velit culpa aliqua officia do velit. Duis quis cillum consequat nisi amet aliquip et.",
    p2: "Ad incididunt non nisi esse. Quis tempor ut est cillum voluptate Lorem fugiat velit. Adipisicing ad quis exercitation dolor ea ad non mollit commodo in aliquip incididunt enim. Nulla ex dolor magna labore commodo nulla labore ullamco aliquip Lorem ipsum.",
    imgUrl: ExampleImg,
    bgImg: "",
  },
  home2: {
    title: "In dolore mollit ea qui",
    p2: "Cupidatat in dolore mollit ea qui qui cillum amet eu nulla eiusmod qui enim velit. Occaecat elit in mollit ullamco adipisicing amet. Do sunt eiusmod excepteur velit culpa aliqua officia do velit. Duis quis cillum consequat nisi amet aliquip et.",
    p1: "Ad incididunt non nisi esse. Quis tempor ut est cillum voluptate Lorem fugiat velit. Adipisicing ad quis exercitation dolor ea ad non mollit commodo in aliquip incididunt enim. Nulla ex dolor magna labore commodo nulla labore ullamco aliquip Lorem ipsum.",
    imgUrl: ExampleImg2,
    bgImg: "",
  },
  home3: {
    highlight:
      "Quis tempor ut est cillum voluptate Lorem fugiat velit. Adipisicing ad quis exercitation dolor ea ad non mollit commodo in aliquip incididunt enim. Nulla ex dolor magna labore commodo nulla labore ullamco aliquip Lorem ipsum.",
    bgImg: MapImg,
  },
  home4: {
    title: "Labore ullamco aliquip",
    list: [
      {
        icon: VpnLockIcon,
        text: "Cillum voluptate",
      },
      {
        icon: BuildIcon,
        text: "Adipisicing ad quis",
      },
      {
        icon: CheckCircleIcon,
        text: "Ad incididunt non nisi esse",
      },
      {
        icon: EngineeringIcon,
        text: "In dolore mollit",
      },
    ],
    imgUrl: ValuesImg,
  },
  values: {
    mission: {
      title: "Nuestra misión",
      imgUrl: MisionImg,
      p1: "Anim irure id mollit deserunt et officia occaecat cillum deserunt tempor tempor. Ipsum nulla fugiat occaecat duis irure. Est eiusmod ipsum exercitation consectetur qui ex cupidatat id occaecat officia irure. Nisi ipsum labore anim veniam laboris laborum ea commodo deserunt elit exercitation.",
    },
    vision: {
      title: "Nuestra Visión",
      imgUrl: VisionImg,
      p1: "Laboris laborum aliqua eu sunt velit ea sunt mollit consequat veniam velit non aliquip. Reprehenderit officia ut tempor voluptate mollit laboris veniam ipsum exercitation culpa sunt. Tempor occaecat amet anim labore labore consectetur id ullamco voluptate occaecat adipisicing incididunt ullamco.",
    },
    values: {
      title: "Nuestros Valores",
      imgUrl: ValuesImg,
      p1: " Ipsum nulla fugiat occaecat duis irure. Est eiusmod ipsum exercitation consectetur qui ex cupidatat id occaecat officia irure. ",
      list: [
        {
          text: "Sint dolore sit pariatur excepteur laboris elit.",
          icon: BuildIcon,
        },
        {
          text: "Sint dolore sit pariatur excepteur laboris elit.",
          icon: BuildIcon,
        },
        {
          text: "Sint dolore sit pariatur excepteur laboris elit.",
          icon: BuildIcon,
        },
      ],
    },
  },
};
