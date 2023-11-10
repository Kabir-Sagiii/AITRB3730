import React from "react";
import { Button } from "@chakra-ui/react";

function MyComp() {
  return (
    <div>
      <Button colorScheme="red" size={"xs"}>
        Chakra UI Button
      </Button>

      <button className="btn btn-primary">Bootstrap btn</button>
    </div>
  );
}

export default MyComp;
