type formDataItem = {
  value: string | null;
  errorMessage: HTMLParagraphElement;
  connect: boolean | null;
  oracle: boolean | null;
};

type formDataObject = {
  [key: string]: formDataItem;
};

type dbItem = {
  title: string;
  paragraph: string;
  img: string;
  button: string;
  buttonClass: string;
};

export { dbItem, formDataItem, formDataObject };
