import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 70 L40 40 L60 70 L80 40"
        stroke="hsl(var(--primary))"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M30 60 L35 70 L40 60"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M30 50 L35 60 L40 50"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M70 50 L75 60 L80 50"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M70 60 L75 70 L80 60"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
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

export function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
    </svg>
  );
}

export function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Twitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22.46 6C21.71 6.33 20.91 6.56 20.06 6.69C20.94 6.16 21.62 5.38 21.94 4.42C21.1 4.91 20.2 5.26 19.26 5.47C18.47 4.62 17.29 4 16 4C13.64 4 11.72 5.92 11.72 8.29C11.72 8.63 11.76 8.96 11.84 9.27C8.28 9.09 5.11 7.38 2.98 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.31 10.5C3.62 10.48 2.96 10.29 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6.02 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
    </svg>
  );
}
