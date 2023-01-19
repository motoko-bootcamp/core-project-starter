import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        navClass?: string | undefined;
        navDivClass?: string | undefined;
        fluid?: boolean | undefined;
        color?: "gray" | "red" | "yellow" | "green" | "indigo" | "default" | "purple" | "pink" | "blue" | "light" | "dark" | "dropdown" | "navbar" | "navbarUl" | "form" | "none" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            hidden: boolean;
            toggle: () => void;
        };
    };
};
export type NavbarProps = typeof __propDef.props;
export type NavbarEvents = typeof __propDef.events;
export type NavbarSlots = typeof __propDef.slots;
export default class Navbar extends SvelteComponentTyped<NavbarProps, NavbarEvents, NavbarSlots> {
}
export {};
