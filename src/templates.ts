import { caseOptions, PostType, UserType } from "./constants";

export const userOptions = (users: UserType[]) =>
  users.map(
    (user) => `
        <option value=${user.id}>
            ${user.name}
        </option>
        `
  );

export const postOptions = (posts: PostType[]) =>
  posts.map(
    (post) => `
      <option value=${post.id}>
          ${post.title}
      </option>
      `
  );

export const mainTemplate = `
    <div class="container">
        <div>Choose case</div>
        <nav>
            <button data-opt=${caseOptions.CommentsByAuthor.value}>${caseOptions.CommentsByAuthor.name}</button>
            <button data-opt=${caseOptions.CommentsByPosts.value}>${caseOptions.CommentsByPosts.name}</button>
            <button data-opt=${caseOptions.PostsByAuthor.value}>${caseOptions.PostsByAuthor.name}</button>
        </nav>
        <div class="selectWrapper"></div>
        <div class="contentWrapper"></div>
    </div>
`;

export const headerPostComment = `
  <div class="listHeader">
    <div class="headerText">Post title</div>
    <div class="headerText">Comment</div>
  </div>
`;

export const headerAuthorComment = `
  <div class="listHeader">
    <div class="headerText">Author</div>
    <div class="headerText">Comment</div>
  </div>
`;

export const headerPost = `
  <div class="listHeader">
    <div class="headerText">Post title</div>
  </div>
`;
