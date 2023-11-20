import Nav from "@/components/Nav";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";
import { API_URL } from "@/api/constants";

const DOWNLOAD_LINK = 'https://www.googleapis.com/drive/v3/files/1EzFnfwgdhzcX6LjcskzDbr4IFTejhRi_?alt=media&key=AIzaSyAA9ERw-9LZVEohRYtCWka_TQc6oXmvcVU&supportsAllDrives=True';

const getDownloadLink = async () => {
  try {

    const {data:data} = await fetch(API_URL + `/global` ).then((res) => res.json());

    if(!data) {
      return DOWNLOAD_LINK;
    }

    return data.attributes.cvDownload;

  } catch(error) {
    return DOWNLOAD_LINK
  }
}

export default async function Header() {
  const downloadLink = await getDownloadLink();

  return (    
    <header className="border-b border-gray-400 bg-gray-100 dark:bg-primary">
        <a className="skip-link font-medium text-[16px] px-6 py-2 md:py-3 md:px-8 capitalize bg-secondary" href="/#about">Skip To Content</a>

        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <Link href="/" className="flex items-center">
                <span className="self-center text-2xl font-heading font-black whitespace-nowrap dark:text-white">SL</span>
            </Link>

            <nav id="mega-menu" className={`hidden md:items-center md:justify-between w-full md:flex md:w-auto `}>
                <Nav />
            </nav>

            <NavMenu downloadLink={downloadLink} />
        </div>
    </header>
  )
}


