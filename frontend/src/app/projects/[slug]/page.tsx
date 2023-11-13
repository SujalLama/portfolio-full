import SinglePage from "@/components/SinglePage"

const data = {
    banner: {src: "", alt: ""},
    title: "Arko Event",
    desc: "this is an amazing site",
    content: "the content are so great",
    scroll: false,
}

export default function SingleProject() {
  return (
    <SinglePage data={data} />
  )
}
