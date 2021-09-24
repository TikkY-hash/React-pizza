import {bindActionCreators} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {allActions} from "../../store/reducers";

const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions,dispatch)
}

export default useAction