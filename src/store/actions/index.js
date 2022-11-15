import requireContext from "require-context.macro";
import { importAll } from "../utils";

const moduleActions = importAll(requireContext("../../modules", true, /actions.js$/), "actions.js");
const actions = importAll(requireContext("", false, /\w+$/), ".js");

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    ...moduleActions,
    ...actions
};