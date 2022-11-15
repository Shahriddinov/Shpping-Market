import { useSelector } from "react-redux";
import { get } from "lodash";

export function useAccess(props) {
    const profile = useSelector(state => state.auth.data);
    const access = props.roles;

    return access.includes(get(profile, "role"));
}
