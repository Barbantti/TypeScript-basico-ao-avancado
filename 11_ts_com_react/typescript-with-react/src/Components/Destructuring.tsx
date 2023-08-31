interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  // enum
  category: Category;
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
}

const Destructuring = ({
  title,
  content,
  commentsQty,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{content}</h2>
      <p>Commentary qty: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>Category: {category}</h4>
    </div>
  );
};

export default Destructuring;
