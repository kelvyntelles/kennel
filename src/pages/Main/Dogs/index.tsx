import { useEffect, useState } from "react";
import { Banner } from "../../../components/Banner";
import { RenderItem } from "../../../components/RenderItem";
import { TitleHeader } from "../../../components/TitleHeader";

import ImgDog from '../../../assets/dog.jpg'
import { getDogs } from "../../../services/api";

export default function Dogs() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    ;(async () => {
      const dogRequest = await getDogs()

      setDogs(dogRequest.data)
    })()
  }, [])

  return(
    <>
      <Banner img={ImgDog} />
      <TitleHeader title="Dogs" />
      <RenderItem items={dogs} />
    </>
  )
}
