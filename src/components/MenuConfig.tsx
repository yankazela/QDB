import React from 'react';
import * as CgIcons from 'react-icons/cg';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

interface IMenuItem {
    getTitle(): string,
    getPath(): string,
    getIcon(): JSX.Element,
    getCName(): string
}

export class MenuItem implements IMenuItem {
    
    private title: string
    private path: string
    private icon: JSX.Element
    private cName: string

    constructor(title: string, path: string, icon: JSX.Element, cName: string) {
        this.title = title
        this.path = path
        this.icon = icon
        this.cName = cName
    }

    getTitle(): string {
        return this.title
    }

    getPath(): string {
        return this.path
    }

    getIcon(): JSX.Element {
        return this.icon
    }

    getCName(): string {
        return this.cName
    }
}


export const MenuConfig = [
    new MenuItem('Dashboard', '/', <AiIcons.AiFillHome />, 'nav-text'),
    new MenuItem('Reports', '/reports', <IoIcons.IoIosPaper />, 'nav-text'),
    new MenuItem('Profile', '/profile', <CgIcons.CgProfile />, 'nav-text'),
];
