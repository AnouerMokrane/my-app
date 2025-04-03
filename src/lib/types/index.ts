export type BlogPost = {
  _id?: string | unknown;
  title: string;
  content: string;
  category: string;
  image: string;
  date: number;
  author: {
    id: string;
    name: string;
    email: string;
    author_img: string;
  };
};

export type ISUb = {
  _id: string;
  email: string;
};
