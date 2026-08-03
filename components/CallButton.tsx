import { FiPhone } from "react-icons/fi";

export function CallButton() {
  return <a className="floating-button call-button" href="tel:+918229006831" aria-label="Call Bird Service Control"><FiPhone /><span>Call now</span></a>;
}
