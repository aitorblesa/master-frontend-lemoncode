export const searchMembers = ({ search }) => {
  if (search === "") return null;

  return fetch(`https://api.github.com/orgs/${search}/members`)
    .then((response) => response.json())
    .then((json) => {
      const members = json.map((member) => ({
        id: member.id,
        login: member.login,
        avatar: member.avatar_url,
      }));

      return members;
    })
    .catch((e) => {
      throw new Error("No existen miembros para esa búsqueda");
    });
};
