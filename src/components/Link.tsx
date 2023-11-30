import Link from "next/link";
import React from "react";

export default function LinkComponent(props: any) {
    return <Link href={props.href} {...props}>{props.children}</Link>
}
