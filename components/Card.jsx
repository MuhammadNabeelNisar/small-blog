import Image from "next/image"

export default function Card({ blog }) {
  return (
    <div className="max-w-xl m-auto p-7 border-2">
      <Image
        loader={() => blog.Image}
        src="img.png"
        alt="Picture of the author"
        width={500}
        height={300}
        objectFit="cover"
      />
      <h1 className="block mb-2 text-lg font-medium text-gray-900 mt-3">
        {blog.name}
      </h1>
      <p className="block mb-2 text-sm font-medium text-gray-900">
        {blog.description}
      </p>
    </div>
  )
}
