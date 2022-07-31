
export const useLogOut = () => {
  // const [response, setResponse] = useState({});


  const option = {
    method: "GET",
    credentials: "include",
  };

  const fetchData = async () => {
    try {
      let res = await fetch("http://127.0.0.1:8080/auth/logout", option);
      console.log(res);

    } catch (error) {
      console.log(error);
    }
  };


  return [fetchData];

};
