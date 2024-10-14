import { NavLink } from "react-router-dom";

interface Props {
  href: string
  className?: string
  classActive?: string
  children?: any
}

export function A(props: Props) {
  // console.log(`${props.class} ${props.classActive ?? ""}`)
  return <NavLink
    to={props.href}
    className={({ isActive }) =>
      isActive ? props.classActive : props.className
    }
  >{props.children}</NavLink>
}