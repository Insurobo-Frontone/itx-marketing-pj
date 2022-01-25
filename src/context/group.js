import { createContext } from "react";
import groupData from "../mapData.json";

const groupContext = createContext({
  group: groupData
});

export default groupContext;

