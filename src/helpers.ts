import { getComments, getPosts, getUsers } from "./data";
import {
  userOptions,
  postOptions,
  headerPostComment,
  headerAuthorComment,
  headerPost,
} from "./templates";
import { caseOptions, DataType } from "./constants";

export const fetch = async () => {
  let data = {};

  await Promise.all([getComments(), getPosts(), getUsers()]).then((values) => {
    data = {
      comments: values[0].data,
      posts: values[1].data,
      users: values[2].data,
    };
  });

  return data as DataType;
};

export const onNavClick = (option: string, data: DataType) => {
  const { users, posts } = data;
  const selectWrapper = document.querySelector(
    ".selectWrapper"
  ) as HTMLDivElement;

  switch (option) {
    case caseOptions.CommentsByAuthor.value:
      selectWrapper.innerHTML = `
            Select author:
            <select>
              ${userOptions(users)}
            </select>
            ${headerPostComment}
      `;
      break;
    case caseOptions.CommentsByPosts.value:
      selectWrapper.innerHTML = `
            Select post:
            <select>
              ${postOptions(posts)}
            </select>
            ${headerAuthorComment}
      `;
      break;

    case caseOptions.PostsByAuthor.value:
      selectWrapper.innerHTML = `
            Select author:
            <select>
              ${userOptions(users)}
            </select>
            ${headerPost}
      `;
      break;
  }

  addEventListenerForSelect(option, data);
};

export const addEventListenerForButton = (data: DataType) => {
  const buttons = document.querySelector("nav") as HTMLDivElement;
  buttons.addEventListener("click", (e: Event) => {
    const target = e.target as HTMLButtonElement;
    const option = target.getAttribute("data-opt") as string;
    onNavClick(option, data);
    document.querySelector(".contentWrapper")!.innerHTML = "";
  });
};

export const addEventListenerForSelect = (
  option: string,
  { comments, posts, users }: DataType
) => {
  const select = document.querySelector("select") as HTMLSelectElement;
  const contentWrapper = document.querySelector(
    ".contentWrapper"
  ) as HTMLDivElement;

  select.addEventListener("change", () => {
    switch (option) {
      case caseOptions.CommentsByAuthor.value:
        contentWrapper.innerHTML = comments
          .filter((comment) => comment.user_id === +select.value)
          .map(
            (comment) =>
              `
              <div class="item">
                <div class="itemText">
                    ${
                      posts.find((post) => post.id === comment.post_id)
                        ?.title ?? ""
                    }
                </div>
                <div class="itemText">${comment.body}</div>
              </div>
            `
          )
          .join("");
        break;
      case caseOptions.CommentsByPosts.value:
        contentWrapper.innerHTML = comments
          .filter((comment) => comment.post_id === +select.value)
          .map(
            (comment) => `
              <div class="item">
                <div class="itemText">
                  ${users.find((user) => user.id === comment.user_id)?.name}
                </div>
                <div class="itemText">${comment.body}</div>
              </div>
                  `
          )
          .join("");
        break;
      case caseOptions.PostsByAuthor.value:
        contentWrapper.innerHTML = posts
          .filter((post) => post.user_id === +select.value)
          .map(
            (post) => `
            <div class="item">
              <div class="itemText">${post.title}</div>
            </div>
            `
          )
          .join("");
        break;
    }
  });
};
