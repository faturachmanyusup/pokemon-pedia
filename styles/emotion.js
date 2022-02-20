import { breakpoints } from "styles/variable";
import facepaint from "facepaint";

export const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));