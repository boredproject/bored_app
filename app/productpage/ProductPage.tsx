import React from "react";
import IdeaButton from "../selection/component/ButtonSelection/IdeaButtonSingle/IdeaButton";

const ProductPage = () => {
    return (
        <div className="flex justify-between">
            <div className="flex justify-center items-center px-5">
                <div>
                <IdeaButton type="svg1" textspin="spinnersvg1"/>
                </div>
                <div className={"border-2 border-[#5E2BFF] p-2 rounded-lg"}>
                    <table className={"border-[#5E2BFF]  border-separate border-spacing-2 rounded-lg"}>
                        <tbody className={"border-spacing-2 rounded-lg"}>
                        <tr>
                            <td className={"border-2 border-[#5E2BFF] rounded p-2"}>3fdjsfbdsk zehozelgh svgdshigj dlsgdsoi j3fdjsfbdsk zehozelgh svgdshigj dlsgdsoi jf3fdjsfbdsk zehozelgh svgdshigj dlsgdsoi jf3fdjsfbdsk zehozelgh svgdshigj dlsgdsoi jf3fdjsfbdsk zehozelgh svgdshigj dlsgdsoi jff</td>
                        </tr>
                        <tr>
                            <td className={"border-2 border-[#5E2BFF] rounded p-2"}>3</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
