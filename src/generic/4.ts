/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageProps {
  title: string;
  content: string;
}

class Component<T extends PageProps> {
  constructor (public props: T) {
  }
}

class Page extends Component<PageProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};