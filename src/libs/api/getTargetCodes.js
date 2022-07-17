export const getTargetCodes = async (lessonID, chID) => {
  let res = await fetch(
    `http://127.0.0.1:3334/v1/cosm/code?lesson=${lessonID}&chapter=${chID}`,
    { method: "GET" }
  );
  const data = await res.json();
  console.log(data);

  return { data };
};
