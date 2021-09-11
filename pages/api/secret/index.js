import { getSession } from "next-auth/client";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content: "welcome to the secret page",
    });
  } else {
    res.send({
      content: "You don't have the permisson",
    });
  }
};
