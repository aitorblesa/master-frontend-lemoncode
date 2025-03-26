export const getMemberDetail = (id: string) =>
  fetch(`https://api.github.com/users/${id}`).then((response) =>
    response.json()
  );
