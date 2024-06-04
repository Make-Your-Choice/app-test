import { ReactNode } from "react";
import Link from "next/link";
import styles from "../styles/breadcrumb.module.css";
import stylesTitle from "../styles/title.module.css";

export type CrumbItem = {
    label: ReactNode
    path: string
}
export type BreadcrumbProps = {
    items: CrumbItem[]
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <div className={stylesTitle.title_padding}>
            {items.map((crumb, i) => {
                const isLastItem = i === items.length - 1;
                if (!isLastItem) {
                    return (
                        <>
                            <Link
                                href={crumb.path}
                                key={i}
                                className={styles.breadcrumb_non_current}
                            >
                                {crumb.label}
                            </Link>
                            <span> / </span>
                        </>
                    );
                } else {
                    return crumb.label;
                }
            })}
        </div>
    );
};
export default Breadcrumb;