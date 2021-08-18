/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />


declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}