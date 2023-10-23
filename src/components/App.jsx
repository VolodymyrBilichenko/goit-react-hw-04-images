import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle.styled";
import { Loading } from "./Loading/Loading";
import { SearchBar } from "./SearchBar/SearchBar";

export const App = () => {
  // const [loading, setLoading] = useState(false);

  return (
    <>
      <GlobalStyle />

      {/* {loading && <Loading />} */}

      <SearchBar />

    </>
  );
};
