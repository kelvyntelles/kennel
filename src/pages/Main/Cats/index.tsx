import { useEffect, useState } from "react";
import { Banner } from "../../../components/Banner";
import { RenderItem } from "../../../components/RenderItem";
import { TitleHeader } from "../../../components/TitleHeader";

import ImgCat from '../../../assets/cat.webp'
import { getCats } from "../../../services/api";

export default function Cats() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    ;(async () => {
      const catRequest = await getCats()

      setCats(catRequest.data)
    })()
  }, [])

  return(
    <>
      <Banner img={ImgCat} />
      <TitleHeader title="Cats" />
      <RenderItem items={cats} />
    </>
  )
}
