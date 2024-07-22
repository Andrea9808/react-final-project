import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = ` GameMaster - ${title}`;
    }, [title]);
}

export default useTitle;