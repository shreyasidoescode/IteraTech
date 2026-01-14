import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25 5L45 25L25 45L5 25L25 5Z"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M25 15L35 25L25 35L15 25L25 15Z"
        fill="hsl(var(--primary))"
      />
    </svg>
  );
}

export function GoogleGLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.8182 10.1818H22V10H12V14H17.8182C17.4545 15.7273 16.2727 17 14.5 17C12.4273 17 10.7273 15.3 10.7273 13.2273C10.7273 11.1545 12.4273 9.45455 14.5 9.45455C15.4545 9.45455 16.3182 9.81818 16.9545 10.4545L19.5909 7.81818C18.1818 6.54545 16.4545 5.81818 14.5 5.81818C10.5909 5.81818 7.5 8.90909 7.5 12.8182C7.5 16.7273 10.5909 19.8182 14.5 19.8182C18.7273 19.8182 22 16.6364 22 12.2727C22 11.5455 21.9091 10.8636 21.8182 10.1818Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function AppleLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 18.25C16.25 18.875 15.875 19.5 15.375 20C14.875 20.5 14.375 21 13.75 21C13.125 21 12.75 20.75 12 20.75C11.25 20.75 10.875 21 10.25 21C9.625 21 9.125 20.5 8.625 20C8.125 19.5 7.75 18.875 7.5 18.25C6.5 16.25 6.125 14.375 7.125 12.25C7.625 11.25 8.625 10.625 9.75 10.625C10.375 10.625 11 11 11.5 11C12 11 12.625 10.625 13.25 10.625C14.375 10.625 15.25 11.25 15.75 12.25C16.125 13 16.375 13.875 16.5 14.75C16.5 14.75 16.5 14.875 16.5 14.875C16.5 14.875 15 14.375 15 16.25C15 18.25 16.5 18.25 16.5 18.25ZM13.25 8.25C13.875 7.5 14.25 6.625 14.25 5.75C14.25 4.125 13.25 3 11.75 3C10.125 3 9.125 4.125 9.125 5.75C9.125 6.625 9.5 7.625 10.125 8.25C10.625 8.75 11.25 9 11.75 9C12.375 9 12.75 8.75 13.25 8.25Z"
        fill="currentColor"
      />
    </svg>
  );
}
